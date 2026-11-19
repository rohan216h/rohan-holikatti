import streamlit as st
import pandas as pd
import numpy as np
import plotly.graph_objects as go
import os

st.set_page_config(page_title="Global Economic Dashboard", layout="wide", page_icon="📈")

# ─────────────────────────────────────────────────────────────────────────────
# CONSTANTS
# ─────────────────────────────────────────────────────────────────────────────
DATA_DIR = os.path.join(os.path.dirname(__file__), "data")

COUNTRIES = {
    "🇺🇸 United States": "us",
    "🇦🇺 Australia":     "aus",
    "🇯🇵 Japan":         "jpn",
    "🇳🇿 New Zealand":   "nz",
}

INDICATORS = {
    "Equity Index":      "equity",
    "10Y Bond Yield":    "yield_10y",
    "Inflation (CPI)":   "inflation",
    "Policy Rate":       "policy_rate",
    "Unemployment Rate": "unemployment",
    "GDP":               "gdp",
}

# Per-country GDP labels (local currency units)
GDP_LABELS = {
    "us":  "GDP (USD Billions)",
    "aus": "GDP (AUD Billions)",
    "jpn": "GDP (JPY Billions)",
    "nz":  "GDP (NZD Billions)",
}

INDICATOR_META = {
    "equity":       {"label": "Index Level", "unit": "",  "freq": "Monthly"},
    "yield_10y":    {"label": "Yield (%)",   "unit": "%", "freq": "Weekly"},
    "inflation":    {"label": "CPI Index",   "unit": "",  "freq": "Monthly/Quarterly"},
    "policy_rate":  {"label": "Rate (%)",    "unit": "%", "freq": "Monthly"},
    "unemployment": {"label": "Rate (%)",    "unit": "%", "freq": "Monthly/Quarterly"},
    "gdp":          {"label": "GDP",         "unit": "",  "freq": "Quarterly"},
}

COUNTRY_COLORS = {"us": "#1f77b4", "aus": "#ff7f0e", "jpn": "#e63946", "nz": "#2ca02c"}
COUNTRY_LABELS = {
    "us":  "🇺🇸 United States",
    "aus": "🇦🇺 Australia",
    "jpn": "🇯🇵 Japan",
    "nz":  "🇳🇿 New Zealand",
}

DATA_NOTES = {
    ("jpn","inflation"): "⚠️ Japan CPI data available to Jun 2021 only.",
    ("jpn","gdp"):       "⚠️ Japan GDP starts from Q1 1994.",
    ("nz","equity"):     "⚠️ NZX 50 data available from Jan 2001 only.",
    ("nz","gdp"):        "⚠️ NZ GDP data available to Q3 2023 only.",
    ("nz","policy_rate"):"⚠️ NZ policy rate data available to Jan 2024 only.",
    ("aus","equity"):    "⚠️ ASX 200 data available from Jun 1992 only.",
    ("aus","policy_rate"):"⚠️ AUS cash rate data available from Aug 1990 only.",
    ("jpn","yield_10y"): "⚠️ Japan 10Y yield data available from Jan 1989 only.",
}

# ─────────────────────────────────────────────────────────────────────────────
# DATA LOADING
# ─────────────────────────────────────────────────────────────────────────────
@st.cache_data
def load_series(country: str, indicator: str):
    path = os.path.join(DATA_DIR, f"{country}_{indicator}.csv")
    if not os.path.exists(path):
        return None
    df = pd.read_csv(path, parse_dates=["date"])
    df["value"] = pd.to_numeric(df["value"], errors="coerce")
    return df.dropna().sort_values("date").reset_index(drop=True)

# ─────────────────────────────────────────────────────────────────────────────
# HELPERS
# ─────────────────────────────────────────────────────────────────────────────
def filter_df(df, start, end):
    return df[(df["date"] >= start) & (df["date"] <= end)].copy()

def smart_ticks(start_dt, end_dt):
    span = (end_dt.year - start_dt.year) * 12 + (end_dt.month - start_dt.month)
    if span <= 24:    return "M1",  "%b '%y"
    elif span <= 60:  return "M3",  "%b '%y"
    elif span <= 120: return "M6",  "%b '%y"
    else:             return "M12", "%Y"

def date_range_selector(key, min_dt, max_dt):
    MONTHS = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
    default_start = max(min_dt, pd.Timestamp("1986-01-01"))
    c1, c2, c3, c4 = st.columns([1.2, 1.5, 1.2, 1.5])
    with c1: sm = st.selectbox("Start Month", MONTHS, index=default_start.month-1, key=f"{key}_sm")
    with c2: sy = st.selectbox("Start Year",  list(range(min_dt.year, max_dt.year+1)),
                                index=default_start.year - min_dt.year, key=f"{key}_sy")
    with c3: em = st.selectbox("End Month",   MONTHS, index=max_dt.month-1, key=f"{key}_em")
    with c4: ey = st.selectbox("End Year",    list(range(min_dt.year, max_dt.year+1)),
                                index=max_dt.year - min_dt.year, key=f"{key}_ey")
    s = pd.Timestamp(year=sy, month=MONTHS.index(sm)+1, day=1)
    e = pd.Timestamp(year=ey, month=MONTHS.index(em)+1, day=28)
    return s, e

def show_stats(df, unit):
    c1,c2,c3,c4 = st.columns(4)
    suf = "%" if unit == "%" else ""
    fmt = lambda v: f"{v:,.2f}{suf}"
    c1.metric("Latest",  fmt(df["value"].iloc[-1]))
    c2.metric("Average", fmt(df["value"].mean()))
    c3.metric("Peak",    fmt(df["value"].max()))
    c4.metric("Trough",  fmt(df["value"].min()))

# ─────────────────────────────────────────────────────────────────────────────
# CHART BUILDERS
# ─────────────────────────────────────────────────────────────────────────────
def base_layout(title, x_title, y_title, dtick, tick_fmt, height=460):
    return dict(
        title=dict(text=title, font=dict(size=16, color="#1a1a2e"), x=0.5, xanchor="center"),
        xaxis=dict(title=x_title, showgrid=True, gridcolor="#eef0f2",
                   tickformat=tick_fmt, dtick=dtick, tickangle=-35,
                   linecolor="#ccc", zeroline=False),
        yaxis=dict(title=y_title, showgrid=True, gridcolor="#eef0f2",
                   linecolor="#ccc", zeroline=False),
        plot_bgcolor="#fafbfc", paper_bgcolor="white",
        hovermode="x unified", height=height,
        margin=dict(l=65, r=25, t=60, b=75),
        font=dict(family="Inter, sans-serif", size=12),
    )

def single_chart(df, title, y_label, color, freq, start_dt, end_dt):
    dtick, tick_fmt = smart_ticks(start_dt, end_dt)
    fig = go.Figure()
    fig.add_trace(go.Scatter(
        x=df["date"], y=df["value"], mode="lines",
        line=dict(color=color, width=2.2),
        fill="tozeroy", fillcolor=f"rgba({int(color[1:3],16)},{int(color[3:5],16)},{int(color[5:7],16)},0.08)",
        name=title,
        hovertemplate="%{x|%b %Y}  <b>%{y:,.2f}</b><extra></extra>",
    ))
    layout = base_layout(title, "Date", y_label, dtick, tick_fmt)
    layout["annotations"] = [dict(text=f"Frequency: {freq}", xref="paper", yref="paper",
                                   x=0.99, y=1.06, showarrow=False,
                                   font=dict(size=10, color="#888"), xanchor="right")]
    fig.update_layout(**layout)
    return fig

def comparison_chart(series_dict, indicator_label, y_label, start_dt, end_dt, is_gdp=False):
    dtick, tick_fmt = smart_ticks(start_dt, end_dt)
    fig = go.Figure()
    any_data = False

    for country, df in series_dict.items():
        if df is None or df.empty:
            continue
        any_data = True
        plot_df = df.copy()

        if is_gdp:
            # Normalize to index 100 at first available point
            base = plot_df["value"].iloc[0]
            plot_df["value"] = plot_df["value"] / base * 100

        fig.add_trace(go.Scatter(
            x=plot_df["date"], y=plot_df["value"],
            mode="lines", line=dict(color=COUNTRY_COLORS[country], width=2.2),
            name=COUNTRY_LABELS[country],
            hovertemplate=f"{COUNTRY_LABELS[country]}<br>%{{x|%b %Y}}  <b>%{{y:,.2f}}</b><extra></extra>",
        ))

    if not any_data:
        fig.add_annotation(text="No data available for this indicator",
                           x=0.5, y=0.5, xref="paper", yref="paper",
                           showarrow=False, font=dict(size=15, color="#888"))

    y_title = "Index (base=100 at start)" if is_gdp else y_label
    layout = base_layout(f"Comparison — {indicator_label}", "Date", y_title, dtick, tick_fmt, height=520)
    layout["legend"] = dict(orientation="h", yanchor="bottom", y=1.03,
                             xanchor="right", x=1, font=dict(size=12))
    fig.update_layout(**layout)
    return fig

# ─────────────────────────────────────────────────────────────────────────────
# STYLING
# ─────────────────────────────────────────────────────────────────────────────
st.markdown("""
<style>
    [data-testid="stSidebar"] { background: #1a1a2e; }
    [data-testid="stSidebar"] * { color: #e0e0e0 !important; }
    [data-testid="stSidebar"] .stMarkdown a { color: #88b4e7 !important; }
    .metric-label { font-size: 12px; }
    div[data-testid="stTabs"] button { font-size: 15px; font-weight: 600; }
</style>
""", unsafe_allow_html=True)

# ─────────────────────────────────────────────────────────────────────────────
# SIDEBAR
# ─────────────────────────────────────────────────────────────────────────────
with st.sidebar:
    st.markdown("## 📈 Global Economic\nDashboard")
    st.markdown("---")
    st.markdown("""
**Countries**
- 🇺🇸 United States
- 🇦🇺 Australia
- 🇯🇵 Japan
- 🇳🇿 New Zealand

**Indicators**
- Equity Index
- 10Y Bond Yield *(weekly)*
- Inflation (CPI)
- Policy Rate
- Unemployment Rate
- GDP *(quarterly)*

---
**Data Notes**
- JPN CPI: up to Jun 2021
- NZX 50: from Jan 2001
- NZ GDP: up to Q3 2023
- GDP comparison: indexed to 100

---
*Sources: FRED · BLS · BEA · ABS*
*Investing.com · RBA · RBNZ*
    """)

# ─────────────────────────────────────────────────────────────────────────────
# TABS
# ─────────────────────────────────────────────────────────────────────────────
tab1, tab2 = st.tabs(["📊  Single Country", "🌏  Country Comparison"])

# ══════════════════════════════════════════════════════
# TAB 1 — SINGLE COUNTRY
# ══════════════════════════════════════════════════════
with tab1:
    col_a, col_b = st.columns(2)
    with col_a:
        country_label = st.selectbox("Country", list(COUNTRIES.keys()), key="t1_c")
    with col_b:
        indicator_label = st.selectbox("Indicator", list(INDICATORS.keys()), key="t1_i")

    country_key   = COUNTRIES[country_label]
    indicator_key = INDICATORS[indicator_label]

    # Data note
    note = DATA_NOTES.get((country_key, indicator_key))
    if note:
        st.info(note)

    df = load_series(country_key, indicator_key)

    if df is None or df.empty:
        st.warning(f"⏳ Data not available for **{country_label} — {indicator_label}**.")
    else:
        st.markdown("#### 📅 Date Range")
        start_dt, end_dt = date_range_selector("t1", df["date"].min(), df["date"].max())
        filtered = filter_df(df, start_dt, end_dt)

        if filtered.empty:
            st.error("No data in selected range — please adjust the dates.")
        else:
            # GDP y-label per country
            if indicator_key == "gdp":
                y_label = GDP_LABELS[country_key]
            else:
                y_label = INDICATOR_META[indicator_key]["label"]

            freq  = INDICATOR_META[indicator_key]["freq"]
            color = COUNTRY_COLORS[country_key]
            title = f"{country_label.split(' ',1)[1].strip()} — {indicator_label}"

            fig = single_chart(filtered, title, y_label, color, freq, start_dt, end_dt)
            st.plotly_chart(fig, use_container_width=True)

            st.markdown("#### 📊 Summary Statistics")
            show_stats(filtered, INDICATOR_META[indicator_key]["unit"])

            with st.expander("📋 View Raw Data"):
                disp = filtered.copy()
                disp["date"] = disp["date"].dt.strftime("%b %Y")
                disp.columns = ["Date", indicator_label]
                st.dataframe(disp, use_container_width=True, height=280)

# ══════════════════════════════════════════════════════
# TAB 2 — COMPARISON
# ══════════════════════════════════════════════════════
with tab2:
    cmp_label = st.selectbox("Indicator", list(INDICATORS.keys()), key="t2_i")
    cmp_key   = INDICATORS[cmp_label]
    is_gdp    = cmp_key == "gdp"

    if is_gdp:
        st.info("💡 GDP shown as **Index (base = 100 at first available date)** for each country, "
                "so different currencies are comparable on the same chart.")

    all_series = {c: load_series(c, cmp_key) for c in COUNTRIES.values()}
    available  = [d for d in all_series.values() if d is not None and not d.empty]

    if not available:
        st.warning("No data available for this indicator.")
    else:
        global_min = min(d["date"].min() for d in available)
        global_max = max(d["date"].max() for d in available)

        st.markdown("#### 📅 Date Range")
        cmp_start, cmp_end = date_range_selector("t2", global_min, global_max)

        filtered_series = {}
        for ck, d in all_series.items():
            if d is not None and not d.empty:
                fd = filter_df(d, cmp_start, cmp_end)
                filtered_series[ck] = fd if not fd.empty else None
            else:
                filtered_series[ck] = None

        y_label = INDICATOR_META[cmp_key]["label"]
        fig = comparison_chart(filtered_series, cmp_label, y_label, cmp_start, cmp_end, is_gdp)
        st.plotly_chart(fig, use_container_width=True)

        # Per-country stats
        st.markdown("#### 📊 Summary Statistics by Country")
        stat_cols = st.columns(4)
        for i, (ck, lbl) in enumerate(COUNTRY_LABELS.items()):
            with stat_cols[i]:
                st.markdown(f"**{lbl}**")
                fd = filtered_series.get(ck)
                if fd is not None and not fd.empty:
                    unit = INDICATOR_META[cmp_key]["unit"]
                    suf  = "%" if unit == "%" else ""
                    st.metric("Latest",  f"{fd['value'].iloc[-1]:,.2f}{suf}")
                    st.metric("Average", f"{fd['value'].mean():,.2f}{suf}")
                    st.metric("Peak",    f"{fd['value'].max():,.2f}{suf}")
                    st.metric("Trough",  f"{fd['value'].min():,.2f}{suf}")
                else:
                    st.info("No data")
