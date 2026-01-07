# Caffettino Website (GitHub Pages)

This folder contains a **static website** for the Caffettino project.

## What to edit

- App Store link: `website/index.html` → replace `https://apps.apple.com/app/idYOUR_APP_ID`
- Google Play link: `website/index.html` → replace `https://play.google.com/store/apps/details?id=your.package.name`
- Support email: `website/index.html` → replace `support@caffettino.app`

## Privacy policy

- Privacy policy page: `website/privacy.html`
- Update the contact email and the data-collection bullets to match your production setup.

## Deploy free on GitHub Pages

This folder is set up as its own git repository (see `website/.git/`). It includes a GitHub Actions workflow that deploys the contents of this folder to GitHub Pages.

1. Create a new GitHub repository (e.g. `caffettino-website`).
2. In your terminal (from the `website/` folder):
	- `git add .`
	- `git commit -m "Initial website"`
	- `git remote add origin https://github.com/<org-or-user>/<repo>.git`
	- `git push -u origin main`
3. In GitHub: **Settings → Pages**.
4. Under **Build and deployment**, select **GitHub Actions**.
5. Your site will be available at `https://<org-or-user>.github.io/<repo>/`.

If you’re using a custom domain later, add a `website/CNAME` file.
