# Rohan Holikatti — Personal Portfolio Website

An institutional-grade, clean, and minimal personal portfolio website for **Rohan Holikatti** (Quantitative Research & Full-Stack Developer, B.Tech Chemical Engineering @ IIT Hyderabad).

Built with **Next.js 14 (App Router)**, **TypeScript**, and **Tailwind CSS**.

---

## ⚡ Quick Start

### 1. Run Locally
```bash
# Install dependencies
npm install

# Start the local development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 2. Production Build
```bash
npm run build
npm run start
```

---

## 🚀 Deploying to Vercel

This repository is pre-configured for **zero-config deployment on Vercel**:

1. Push this project to your GitHub repository (e.g. `https://github.com/rohan216h/portfolio`).
2. Log in to [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Import your `portfolio` repository.
4. Leave all settings at default (**Framework Preset: Next.js**, **Build Command: `next build`**, **Output Directory: `.next`**).
5. Click **Deploy**.

---

## 📁 Architecture & Content Organization

All portfolio content is decoupled and stored in a single TypeScript configuration file:
- **`src/data/portfolioData.ts`**: Update your bio, skills, education, experience, project cards, and links in one single place.
- **`public/Rohan_Holikatti_CV.pdf`**: Downloadable CV asset.
- **`public/images/`**: High-resolution research plots and empirical charts for project galleries.

---

## 🛠️ Tech Stack
- **Framework**: Next.js 14 (App Router, Static Pre-Rendering)
- **Language**: TypeScript 5.6
- **Styling**: Tailwind CSS
- **Icons**: Lucide React

