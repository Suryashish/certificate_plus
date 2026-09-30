# Contributing

Thank you for helping! 🎉 This project is made for **learning open source**, so beginners are very welcome and no contribution is too small.

Every contribution follows the same idea:

> **Make a change → add your changelog file → open a pull request.**

Pick whichever way below feels easier.

---

## Option A: On the GitHub website (no install needed)

Best for small changes: fixing a typo, improving docs, adding a template to `server/src/data/templates.json`.

1. Open the file you want to change on GitHub and click the ✏️ **pencil icon**.
2. Make your edit and click **Commit changes → Propose changes**. GitHub automatically makes a copy (fork) and a branch for you.
3. Add your changelog file: in your fork, go to the `changelog/` folder, click **Add file → Create new file**, name it `your-username-short-title.md`, and fill in the [template](changelog/_template.md).
4. Click **Create pull request**. Done! 🎉

---

## Option B: On your computer

Best for code changes.

```bash
# 1. Fork the repo on GitHub (button at the top right), then:
git clone https://github.com/<your-username>/<repo-name>.git
cd <repo-name>

# 2. Make a branch for your change
git checkout -b my-change

# 3. Install and run the app (http://localhost:5173)
npm run setup
npm run dev
```

4. Make your change and check that it works in the browser.
5. Add your changelog file in `changelog/` (see [how](changelog/README.md)).
6. Save and send it:

```bash
git add .
git commit -m "Describe your change"
git push origin my-change
```

7. Go to your fork on GitHub and click **Compare & pull request**.

---

## Tips

- **Want to work on an issue?** Comment *"I'm working on this"* so others know.
- **Have an idea or found a bug?** Open an [issue](../../issues) first.
- **Keep it small.** One change per pull request is easiest to review.
- **Asked to change something in review?** That's normal. Push another commit to the same branch and the PR updates by itself.
- Please be kind. See the [Code of Conduct](CODE_OF_CONDUCT.md).
