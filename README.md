# Caitlin Hermanus — Personal portfolio

A responsive, accessible static portfolio for WordPress and web development applications. Plain HTML, CSS and a small JavaScript enhancement. No installation, build step, API keys or server required.

## Preview

Open `index.html` in a browser, or run `python3 -m http.server 8000` from this folder and visit http://localhost:8000.

## Publish with GitHub Pages

1. Create an empty GitHub repository named `portfolio` (do not initialise it with a README).
2. Extract this download and open a terminal in the `caitlin-portfolio` folder.
3. Run:

```bash
git init
git add .
git commit -m "Add personal portfolio"
git branch -M main
git remote add origin https://github.com/caitz1310/portfolio.git
git push -u origin main
```

If your repository has another name, use its actual URL. If the folder already has a Git remote, inspect `git remote -v` before changing it.

4. In GitHub, open the repository's **Settings → Pages**.
5. Under **Build and deployment**, select **Deploy from a branch**, then **main** and **/(root)**. Save.
6. Wait for GitHub to report the deployment is complete. The portfolio URL for the repository above will be https://caitz1310.github.io/portfolio/ . Use the deployed website link in the job application, rather than the repository link.

Alternatively, upload all files through GitHub's web interface, preserving the `assets` folder, then enable Pages as above.

## Files

- `index.html`: content, project links, contact links and native expandable project details.
- `styles.css`: responsive design, including mobile and reduced-motion support.
- `script.js`: current footer year. The main website works without JavaScript.
- `assets/Caitlin_Hermanus_CV.pdf`: the supplied CV(4) PDF, renamed for download.
- `assets/favicon.svg`: original portfolio monogram.
- `.nojekyll`: keeps Pages publication straightforward for static assets.

## Before sharing

- Check the CV's dates and contact information. Replace the PDF at the same path if needed.
- The portfolio names individual contributions and identifies collaboration where applicable. Real screenshots and matching video walkthroughs are supplied for all six websites.
- WordPress and Elementor are included based on your confirmed experience. Elementor Pro is not claimed.
- No confidential CRM source, private references or referee phone numbers are shown in the page. The downloadable CV is the original supplied document and includes its original reference contact details; remove these from the PDF if you do not want them publicly available.
- Update availability as circumstances change.
- Google Fonts is optional; local fallbacks are provided if unavailable. There are no trackers, cookies or contact-form services.

## Editing

Edit text in `index.html` and appearance in `styles.css`. All internal paths are relative, so the website works at both a repository Pages path and a root domain. Publish changes by committing and pushing to `main`.

## Website previews

Desktop: hover over a website screenshot to play its muted walkthrough. Moving away pauses the video. Click Play preview to keep playback active; click Pause preview to stop. On touchscreens and for keyboard users, use the same accessible play/pause button. Reduced-motion preferences disable hover autoplay. Videos load on demand, loop silently and pause when off screen or when the browser tab is hidden. Only one preview plays at a time. The six videos were compressed to browser-compatible H.264 MP4 with fast-start metadata and no audio. Screenshots are WebP files.

The project list includes every project from the supplied CV, with the client WordPress websites presented in their own section.

## Added website projects

- Reclaimers: Home, About Us and Donations pages for a DayZ game server website. A collaborator built the login and registration page.
- Hyaloid: two-page reseller website. Home, About Us and How to Use share one page with scroll navigation; the Shop is a separate page.
- Both projects include the supplied screenshots and matching hover video previews.

## Project context updates

- Coast IT: the company website has since changed. The portfolio preview shows the version Caitlin helped build; its link points to https://staging.coastit.co.za/.
- Bettaweb: a personal business website built with a team; Caitlin contributed to the homepage, navigation and footer.
- Vanguard Technology: a reseller website built with a team and later scrapped. The portfolio retains its screenshot and walkthrough as examples of Caitlin’s contribution.
