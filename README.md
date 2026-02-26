# 🌀 ScrollMotionHero — Scroll-Driven Hero Section Animation

> A cinematic, scroll-driven hero section built with React + GSAP + Tailwind CSS.

[![Live Demo](https://img.shields.io/badge/🚀_Live_Demo-krantii4790.github.io-orange?style=for-the-badge)](https://krantii4790.github.io/scroll-motion-hero/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)](https://react.dev/)
[![GSAP](https://img.shields.io/badge/GSAP-3.14-88CE02?style=for-the-badge)](https://gsap.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38BDF8?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-7-646CFF?style=for-the-badge&logo=vite)](https://vitejs.dev/)

---

## 📸 Preview

<img width="1906" height="984" alt="Screenshot (6190)" src="https://github.com/user-attachments/assets/002846a5-06f9-4c16-830f-5dcc4e6b6ae7" />

> Live at: [https://krantii4790.github.io/scroll-motion-hero/](https://krantii4790.github.io/scroll-motion-hero/)

---

## ✨ Features

- **Scroll-Driven Animation** — Hero elements respond to scroll position in real time using GSAP ScrollTrigger with scrub interpolation
- **Premium Load Animations** — Staggered headline reveal, stat counters, and image entrance on page load
- **Smooth Motion** — All animations use `transform` properties (translate, scale, rotate) for 60fps performance
- **Cinematic Dark Aesthetic** — Deep black background, orange ambient glow, grain texture overlay
- **Bebas Neue Typography** — Bold, letter-spaced display font for the headline
- **Fully Responsive** — `clamp()`-based sizing adapts from mobile to ultrawide
- **GitHub Pages Ready** — Configured with `vite.config.js` base path and `gh-pages` deploy script

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| **React 19** | Component-based UI |
| **GSAP + ScrollTrigger** | Scroll-driven & entrance animations |
| **Tailwind CSS 3** | Utility-first styling |
| **Vite 7** | Lightning-fast build tool |
| **gh-pages** | GitHub Pages deployment |

---

## 🚀 Getting Started

### Prerequisites

- Node.js v18+ 
- npm v9+

### Installation

```bash
# Clone the repository
git clone https://github.com/krantii4790/scroll-motion-hero.git

# Navigate into the project
cd scroll-motion-hero

# Install dependencies
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173/scroll-motion-hero/](http://localhost:5173/scroll-motion-hero/) in your browser.

### Production Build

```bash
npm run build
```

### Deploy to GitHub Pages

```bash
npm run deploy
```

This runs `vite build` and pushes the `dist/` folder to the `gh-pages` branch automatically.

---

## 📁 Project Structure

```
scroll-motion-hero/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   └── dog.png              # Hero image
│   ├── components/
│   │   └── Hero.jsx             # Main hero section with GSAP animations
│   ├── App.jsx
│   ├── App.css                  # Global styles + grain overlay
│   ├── index.css                # Tailwind directives
│   └── main.jsx
├── index.html
├── tailwind.config.js
├── vite.config.js               # Base path set for GitHub Pages
├── postcss.config.js
└── package.json
```

---

## 🎬 Animation Details

### On Load (Timeline)

| Element | Animation |
|---|---|
| Headline words | Stagger up from y:100, fade in (`expo.out`) |
| Stat items | Stagger up from y:40, fade in |
| Hero image | Scale from 0.75 + y:80, back-ease bounce |
| Sub-lines | Fade + slight upward drift |

### On Scroll (ScrollTrigger — scrub-based)

| Element | Scroll Behavior |
|---|---|
| Hero image | Moves up 160px, scales to 1.1×, rotates 5° |
| Headline | Drifts up 100px, fades to 15% opacity |
| Stats bar | Moves up 50px, fades out completely |

All scroll animations use `scrub: 1–1.5` for natural, physics-like interpolation tied directly to scroll position.

---

## 📦 Scripts

```bash
npm run dev        # Start dev server
npm run build      # Production build
npm run preview    # Preview production build locally
npm run deploy     # Build + deploy to GitHub Pages
```

---

## 🎯 Assignment Reference

This project was built as part of the **Scroll-Driven Hero Section Animation** assignment.

**Reference site:** [https://paraschaturvedi.github.io/car-scroll-animation](https://paraschaturvedi.github.io/car-scroll-animation)

**Requirements covered:**
- ✅ Hero section occupying full viewport (above the fold)
- ✅ Letter-spaced headline: `WELCOME ITZFIZZ`
- ✅ Impact metrics / statistics with descriptions
- ✅ Smooth staggered load animations (fade + movement)
- ✅ Scroll-based animation tied to scroll progress (not time-based)
- ✅ Easing/interpolation for natural, fluid motion
- ✅ Performance: transform-only animations, no layout reflows
- ✅ Tech stack: React, GSAP, Tailwind CSS, Vite

---


## 👤 Author

**Krantikumar Patil (Full Stack Developer)**  
GitHub: [@krantii4790](https://github.com/krantii4790)
