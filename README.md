# Personal Academic Website

This is a personal academic website built with [Next.js](https://nextjs.org/) and [Tailwind CSS](https://tailwindcss.com/). It is designed to be easy to manage and looks professional.

## 🚀 Getting Started

### 1. Install Node.js
You need Node.js installed to run this site.
- Download it here: [https://nodejs.org/](https://nodejs.org/) (Choose the LTS version).
- After installing, restart your terminal/PowerShell.

### 2. Install Dependencies
Open your terminal (PowerShell) in this folder (`my-website`) and run:
```bash
npm install
```

### 3. Run Locally
To preview the site on your computer:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 How to Edit Content

You do NOT need to touch the code to update your profile or papers. All content is in the `data/` folder.

### Edit Profile (`data/profile.json`)
Update your name, bio, affiliation, and social links here.

### Add Publications (`data/publications.json`)
Add a new entry to the list:
```json
{
  "title": "New Paper Title",
  "authors": "Your Name, Co-author",
  "venue": "Journal Name",
  "year": "2024",
  "link": "https://link-to-paper.com"
}
```

### Add Projects (`data/projects.json`)
Add new projects with descriptions and tags.

### Add Profile Photo
1. Rename your photo to `profile.jpg`.
2. Place it in the `public/` folder (overwrite the existing one if any, or just place it there).
3. If you want to use a different name, update `data/profile.json` ("avatar": "/new-name.jpg").

## 🌍 Deployment (GitHub Pages)

To host this for free on GitHub:

1. Create a repository on GitHub (e.g., `ayush-pandey-website`).
2. Push this code to GitHub.
3. Go to Repository Settings -> Pages.
4. Set Source to `GitHub Actions`.
5. GitHub will automatically build and deploy your site.

(Note: You might need to set up a basic workflow file for Next.js if the default one isn't detected, but usually it works out of the box or Next.js provides one).
