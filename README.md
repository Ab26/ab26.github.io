# Academic Portfolio Website

This is a modern academic portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

## Deployment to GitHub Pages

1. Create or use your existing repository named `ab26.github.io`
2. Push this project to the repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/ab26/ab26.github.io.git
   git push -u origin main
   ```

3. In your repository settings on GitHub:
   - Go to "Pages"
   - Set "Source" to "GitHub Actions"
   - Your site will be available at https://ab26.github.io

## Updating Content

- Edit `src/app/page.tsx` to update your profile information
- Add publications in the Publications section
- Place any additional images in the `public/images` folder
- Update social links in the footer section

## Features

- 📱 Responsive design with mobile navigation
- 🌓 Automatic dark mode support
- ✨ Smooth animations with Framer Motion
- 📊 Sections for research interests and publications
- 🎓 Academic timeline
- 🔍 SEO optimized
