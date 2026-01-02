# 📦 ReactJS Production Setup

## A **production‑ready starter template** for building scalable React + TypeScript web applications using **Vite**, with professional tooling including **Linting, Prettier, Husky, CommitLint, and CI/CD workflows**.

## 🚀 Features

- ⚡ **React (v18+) + TypeScript** for robust and type‑safe frontend development
- 🚀 **Vite** for ultra‑fast development server and optimized production builds
- 📏 **ESLint + Prettier** for consistent code quality and formatting
- 🪝 **Husky + lint‑staged** for pre‑commit checks and automated code formatting
- 📌 **commitlint** with conventional commit rules for clean commit history
- 📦 **.env example** for managing environment variables securely
- 🐱‍🏍 **RHF + ZOD** Enabled Best Form handling
- 🌎 **Tanstack query** For efficiently calling Server
- 📦 **Zustand** for managing server side state
- 🐳 **Dockerfile** for containerized production deployment
- 📈 Optional **GitHub Actions workflows** for CI/CD automation

This setup is designed to scale across real‑world applications and development workflows.

---

## 📁 Folder Structure

```
├── .github/                 # GitHub Actions workflows
├── .husky/                  # Pre‑commit hooks
├── public/                  # Static assets
├── src/                     # Application source
│   ├── shared/              # All the stuff which can be used by whole application
│   ├── features/            # feature based devision of concerns
│   ├── router.tsx
│   ├── index.css
│   ├── App.tsx
│   └── main.tsx
├── .env.example             # Example environment variables
├── .eslintrc.js             # ESLint config
├── .prettierrc              # Prettier config
├── tsconfig.json            # TypeScript config
├── vite.config.ts           # Vite config
├── Dockerfile               # Optional Docker config
└── package.json
```

---

## 🛠 Installation

1. **Clone the repo**

   ```bash
   git clone https://github.com/ZaryabKhan001/ReactJS-Production-Setup.git
   cd ReactJS-Production-Setup
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   pnpm install
   # or
   yarn
   ```

3. **Create environment variables**

   ```bash
   cp .env.example .env
   ```

   Then edit `.env` with your own values.

---

## ⚡ Development

Start the development server:

```bash
npm run dev
```

Hot‑Reloading is enabled via Vite — you’ll see updates instantly in the browser. ([vitejs][2])

---

## 🧪 Production Build

To generate an optimized production bundle:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

This generates static assets (HTML, CSS, JS) ready for deployment to any static host.

---

## 🧹 Code Quality Tools

### 🧑‍💻 ESLint

Lint your codebase:

```bash
npm run lint:eslint
```

### 🧼 Prettier

Auto‑format code:

```bash
npm run format:fix
```

---

## 🐶 Commit Hooks & Git Hooks

This setup uses **Husky** for Git hooks:

- Pre‑commit: runs `lint` and `format`
- Commit message validation: uses `commitlint` for conventional commits

These tools enforce quality and maintain history consistency.

---

## 📦 Docker (Optional)

This repo includes a Dockerfile so you can containerize the app:

```bash
docker build -t react‑app .
docker run -p 5173:4173 react‑app
```

You can extend this to include multi‑stage builds and NGINX for production. ([GeeksforGeeks][3])

---

## 📦 CI/CD (Optional)

Add GitHub Actions workflows inside `.github/workflows` to automate:

- Lint + Test runs on pull requests
- Build jobs on `main` branch
- Deployment to hosting platforms (Netlify, Vercel, GH‑Pages, etc.)

---

## 📚 Best Practices Included

✅ **Type‑safe React + Vite setup**
✅ **Linting + Formatting rules enforced before commit**
✅ **Conventional commits for a clean history**
✅ **Production build flags & optimizations**
✅ **Scalable project structure**

---

## 📄 License

Distributed under the MIT License.

---
