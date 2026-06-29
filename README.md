# Alex Carter — Developer Portfolio

A modern, animated single-page portfolio built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

## ✨ Features

- **Hero** with a typewriter animation, floating code window, gradient blobs, and a scrolling tech marquee
- **Skills** grid with hover glow, animated proficiency bars, and brand-colored icons
- **Experience** timeline with 3 (dummy) companies and alternating cards
- **Contact** section with a working demo form + social links
- Sticky navbar with active-section highlighting and smooth scrolling
- Fully responsive, dark-themed, with `prefers-reduced-motion` support
- Subtle, non-intrusive animations throughout

## 🛠️ Tech Stack

| Layer    | Tools                                             |
| -------- | ------------------------------------------------- |
| Framework| Next.js 14 (App Router), React 18, TypeScript     |
| Styling  | Tailwind CSS                                      |
| Motion   | Framer Motion                                     |
| Icons    | react-icons                                       |

## 🚀 Getting Started

```bash
# install dependencies
npm install

# start the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Production build

```bash
npm run build
npm run start
```

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx        # Root layout, fonts, metadata
│   ├── page.tsx          # Composes all sections
│   ├── globals.css       # Theme, Tailwind layers, utilities
│   └── data.ts           # Skills, experience, nav content (edit me!)
└── components/
    ├── Background.tsx    # Animated gradient blobs + grid
    ├── Navbar.tsx        # Sticky nav, active link, mobile menu
    ├── Hero.tsx          # Typewriter + code window + marquee
    ├── useTypewriter.ts  # Typewriter hook
    ├── Skills.tsx        # Skill cards + progress bars
    ├── Experience.tsx    # Timeline of roles
    ├── Contact.tsx       # Form + contact info
    └── Footer.tsx
```

## ✏️ Customizing

All content lives in **`src/app/data.ts`** — skills, experience entries, and nav
links. Swap the dummy company info, proficiency levels, and contact details with
your own.

---

Built as a starter template — make it yours. 🎨
