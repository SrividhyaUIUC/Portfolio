# Srividhya Sridhar — Academic Website

Personal academic site built with [Next.js](https://nextjs.org/) and [Tailwind CSS](https://tailwindcss.com/). Content is driven by JSON and BibTeX so you can update the site without editing React code.

## Getting started

1. Install [Node.js](https://nodejs.org/) (LTS).
2. In this folder, run `npm install`.
3. Run `npm run dev` and open [http://localhost:3000](http://localhost:3000).

## Editing content

### Profile — `data/profile.json`

Name, title, affiliation, department, bio, email, social links (`scholar`, `linkedin`, `github` — leave empty to hide buttons), and `avatar` (path under `public/`, e.g. `/profile.jpg` or `/profile.svg`).

### Publications — `data/publications/mypubs.bib`

Add or edit BibTeX entries. The site reads `title`, `author`, `year`, `journal`, `booktitle`, `howpublished`, `note`, `doi`, and `url`. Venue text prefers `journal`, then `booktitle`, then `howpublished` / `note`.

### Projects — `data/projects.json`

List of objects with `title`, `description`, `tags` (string array), and optional `link`.

### Profile photo

Replace `public/profile.svg` with your own image (e.g. `profile.jpg`) and set `"avatar": "/profile.jpg"` in `data/profile.json`.

## Static export & GitHub Pages

The project uses `output: "export"` in `next.config.js`. For a **project site** (`username.github.io/repo-name/`), uncomment `basePath` and `assetPrefix` in `next.config.js` and set `repo` to your repository name. Build with `npm run build`; deploy the `out/` directory.

## License

Site content © Srividhya Sridhar. Code may be reused under the terms of your choice for personal academic sites.
