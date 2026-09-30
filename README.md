# 🎓 Certificate Builder

An **open-source certificate builder**. Design a certificate (or upload one you already made), import a spreadsheet of names, and get a personalised certificate for everyone on the list.

> **This repo is made for learning open source.** Only a basic version exists so far, and the rest is waiting for you. Pick something from the [Roadmap](#-roadmap) and make your first pull request!

**Quick links:** 🟢 [Good first issues](https://github.com/Suryashish/certificate_plus/issues?q=is%3Aopen+label%3A%22good+first+issue%22) · 📖 [Contributing guide](CONTRIBUTING.md) · 🤝 [Code of Conduct](CODE_OF_CONDUCT.md) · 📝 [Changelog](changelog/)

---

## 💡 The idea

You ran a workshop for 300 people. Typing 300 names by hand is slow and full of mistakes. With Certificate Builder you will:

1. **Pick a template** or **upload your own certificate design**.
2. **Place fields** like `name`, `date`, and `course` on it.
3. **Import an Excel/CSV sheet.** Each row becomes one certificate.
4. **Download them all** as PDFs.

## ✅ What works right now (v0.1)

- A basic landing page (`/`), ready to be redesigned
- A builder page (`/builder`) where you can pick a template, upload your own background, and edit fields with a live preview
- CSV import: flip through each person's certificate
- Print / Save as PDF (one at a time)
- 🚧 Bulk generation on the server is only a placeholder

---

## 🚀 Run it locally

You need [Node.js](https://nodejs.org/) v20.12 or newer and [Git](https://git-scm.com/).

```bash
git clone https://github.com/Suryashish/certificate_plus.git
cd certificate_plus

npm run setup   # first time only: installs everything
npm run dev     # starts the app
```

> Planning to contribute? **Fork** the repo first and clone *your fork* instead. See [CONTRIBUTING.md](CONTRIBUTING.md).

Open **http://localhost:5173** and go to **Builder**. To try the import, click **Download a sample CSV** and upload it.

---

## 🤝 How to contribute

👉 **Read the full step-by-step guide: [CONTRIBUTING.md](CONTRIBUTING.md)**

The short version:

1. **Pick an issue.** Start with a [good first issue](https://github.com/Suryashish/certificate_plus/issues?q=is%3Aopen+label%3A%22good+first+issue%22) and comment *"I'm working on this"*.
2. **Make your change.**
3. **Add your changelog file.** Copy [`changelog/_template.md`](changelog/_template.md) to `changelog/your-username-short-title.md` and write your name and what you did.
4. **Open a pull request** and write `Closes #<issue number>` in it.

💡 Small changes can be done **entirely on the GitHub website**, no install needed. CONTRIBUTING.md shows how.

🤖 An automatic check runs on every pull request. If it turns red ❌, you probably forgot your changelog file. Add it, push again, and it turns green ✅.

Please be kind to each other and follow our [Code of Conduct](CODE_OF_CONDUCT.md).

---

## 🗺️ Roadmap

Many beginner items already have [ready-made issues](https://github.com/Suryashish/certificate_plus/issues?q=is%3Aopen+label%3A%22good+first+issue%22). For anything else, [open an issue](https://github.com/Suryashish/certificate_plus/issues/new/choose) first so others know you're on it.

### 🟢 Beginner friendly
- [ ] Redesign the landing page
- [ ] Add dark mode
- [ ] Add a new certificate template in `server/src/data/templates.json`
- [ ] Let users pick a font for each field
- [ ] Add a favicon
- [ ] Improve the builder on mobile

### 🟡 Intermediate
- [ ] Import **Excel (.xlsx)** files, not just CSV
- [ ] Let users choose which spreadsheet column goes to which field
- [ ] **Drag fields** to position them on the certificate
- [ ] Add, remove, and rename fields from the UI
- [ ] Download the preview as a PNG image

### 🔴 Advanced
- [ ] Generate all certificates as PDFs on the server (`/api/certificates/generate`)
- [ ] Download all certificates as a ZIP
- [ ] Save templates in a database
- [ ] Email each certificate to its recipient
- [ ] Add a QR code so certificates can be verified
- [ ] Add tests and GitHub Actions

Have another idea? [Open an issue](https://github.com/Suryashish/certificate_plus/issues/new/choose)!

---

## 📁 Where things are

```
client/                      React app (what you see in the browser)
  src/pages/                 LandingPage.jsx, BuilderPage.jsx
  src/components/            Small UI pieces (preview, field editor, CSV import…)
  src/index.css              All the styles
server/                      Express API
  src/data/templates.json    The certificate templates
  src/routes/                API endpoints
changelog/                   One file per contribution (add yours here!)
.github/                     Issue & PR templates, and the automatic changelog check
CONTRIBUTING.md              How to contribute, step by step
CODE_OF_CONDUCT.md           How we treat each other
LICENSE                      MIT license
package.json                 `npm run setup` and `npm run dev` live here
```

**Tech:** React + Vite (JavaScript only), Express, and plain CSS.

<details>
<summary><b>API endpoints</b></summary>

| Method | Endpoint | What it does |
| --- | --- | --- |
| `GET` | `/api/health` | Check the server is running |
| `GET` | `/api/templates` | List all templates |
| `GET` | `/api/templates/:id` | Get one template |
| `POST` | `/api/certificates/generate` | 🚧 Placeholder, not built yet |

</details>

<details>
<summary><b>How a template works</b></summary>

Each template in `templates.json` has a list of **fields**. `x` and `y` are percentages, so `x: 50, y: 50` is the center of the certificate.

```json
{ "key": "name", "label": "Recipient Name", "defaultValue": "Jane Doe", "x": 50, "y": 50, "fontSize": 40, "color": "#1f1a12" }
```

When you import a CSV, a column called `name` fills the field whose key is `name`.

</details>

---

## 📄 License

[MIT](LICENSE). You're free to use, copy, and change it.
