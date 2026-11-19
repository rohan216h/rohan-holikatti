# 📈 Global Economic Dashboard

## Setup

```bash
pip install -r requirements.txt
streamlit run app.py
```

## Folder Structure
```
dashboard/
├── app.py
├── requirements.txt
├── README.md
└── data/                  ← put all CSV files here
    ├── us_equity.csv
    ├── us_yield_10y.csv
    ├── us_inflation.csv
    ├── us_policy_rate.csv
    ├── us_unemployment.csv
    ├── us_gdp.csv
    ├── aus_equity.csv
    ├── aus_yield_10y.csv
    ├── aus_inflation.csv
    │
    │   ── MISSING — download from FRED below ──
    ├── aus_policy_rate.csv
    ├── aus_unemployment.csv
    ├── aus_gdp.csv
    ├── jpn_equity.csv        ← from Investing.com (^N225, Monthly)
    ├── jpn_yield_10y.csv
    ├── jpn_inflation.csv
    ├── jpn_policy_rate.csv
    ├── jpn_unemployment.csv
    ├── jpn_gdp.csv
    ├── nz_equity.csv         ← from Investing.com (NZX 50, Monthly)
    ├── nz_yield_10y.csv
    ├── nz_inflation.csv
    ├── nz_policy_rate.csv
    ├── nz_unemployment.csv
    └── nz_gdp.csv
```

## Missing Data — Download from FRED

Go to: https://fred.stlouisfed.org/series/SERIES_ID
(replace SERIES_ID with each one below, click Download → CSV)

All files need to be renamed to `{country}_{indicator}.csv`
with columns: `date, value`

| File to create           | FRED Series ID        | Description                        |
|--------------------------|-----------------------|------------------------------------|
| aus_policy_rate.csv      | RBAAMONSPBMCRT        | Australia Cash Rate Target         |
| aus_unemployment.csv     | LRHUTTTTAUM156S       | Australia Unemployment Rate        |
| aus_gdp.csv              | AUSGDPRQDSMEI         | Australia Real GDP (Quarterly)     |
| jpn_yield_10y.csv        | IRLTLT01JPM156N       | Japan 10Y Bond Yield (Monthly)     |
| jpn_inflation.csv        | JPNCPIALLMINMEI       | Japan CPI (Monthly)                |
| jpn_policy_rate.csv      | IRSTCB01JPM156N       | Japan Policy Rate (Monthly)        |
| jpn_unemployment.csv     | LRHUTTTTJPM156S       | Japan Unemployment Rate (Monthly)  |
| jpn_gdp.csv              | JPNRGDPEXP            | Japan Real GDP (Quarterly)         |
| nz_yield_10y.csv         | IRLTLT01NZM156N       | New Zealand 10Y Bond Yield         |
| nz_inflation.csv         | NZLCPIALLQINMEI       | New Zealand CPI (Quarterly)        |
| nz_policy_rate.csv       | IRSTCB01NZM156N       | New Zealand Policy Rate            |
| nz_unemployment.csv      | LRHUTTTTEZM156S       | New Zealand Unemployment Rate      |
| nz_gdp.csv               | NZLRGDPEXP            | New Zealand Real GDP (Quarterly)   |

### Equity Indices (from Investing.com — Monthly, full date range)
| File to create  | Ticker         | URL                                                              |
|-----------------|----------------|------------------------------------------------------------------|
| jpn_equity.csv  | Nikkei 225     | https://www.investing.com/indices/japan-ni225-historical-data   |
| nz_equity.csv   | NZX 50         | https://www.investing.com/indices/nzx-50-historical-data        |

### FRED Download Steps
1. Go to https://fred.stlouisfed.org/series/SERIES_ID
2. Click **Download** (top right of chart)
3. Select **CSV (data)**
4. Rename file to match the table above
5. Open CSV — rename columns to `date` and `value`
6. Place in the `data/` folder

## Data Format
All CSV files must have exactly 2 columns:
```
date,value
1986-01-01,100.5
1986-04-01,102.3
...
```
