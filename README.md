# Marco Rossi Photography — Site README

## File structure

```
portfolio/
├── index.html        ← page structure (edit for bio text, series titles)
├── style.css         ← all visual styling
├── main.js           ← navigation, lightbox, image protection
├── data.js           ← YOUR CONTENT — edit this to add/remove photos
├── README.md         ← this file
└── images/
    ├── cover-projects.jpg
    ├── cover-portfolio.jpg
    ├── about.jpg
    ├── projects/
    │   ├── specular/
    │   │   ├── cover.jpg
    │   │   ├── 01.jpg  02.jpg  ...
    │   ├── parallel/
    │   │   ├── cover.jpg
    │   │   └── 01.jpg  02.jpg  ...
    │   └── geometry/
    │       ├── cover.jpg
    │       └── 01.jpg  02.jpg  ...
    └── portfolio/
        └── 01.jpg  02.jpg  ...
```

## Getting started locally

Open `index.html` directly in a browser. Because images load from
relative paths, everything works without a local server.

If you later add JavaScript modules or fetch() calls, you will need
a simple local server:
```
npx serve .          # Node.js
python -m http.server # Python 3
```

---

## Adding content

### Add a new project series

1. Create a folder: `images/projects/your-slug/`
2. Add `cover.jpg` and your numbered photos (`01.jpg`, `02.jpg`, …)
3. Open `data.js` and add an entry to the `series` array:
   ```js
   {
     slug:  'your-slug',
     title: 'Your Title',
     desc:  'One sentence description.',
     year:  2025,
     photos: [
       { src: 'images/projects/your-slug/01.jpg', caption: 'Your Title — 01' },
       // ...
     ],
   },
   ```
4. Open `index.html` and duplicate a `.project-row` block, updating
   `data-series` to match the new index and the image `src` + `alt`.

### Add portfolio photos

Add entries to the `portfolio` array in `data.js` and place the files
in `images/portfolio/`.

### Recommended image specs

| Use               | Size (px)    | Format | Quality |
|-------------------|-------------|--------|---------|
| Home panel covers | 1200 × 1600 | JPG    | 82      |
| Project covers    | 900 × 600   | JPG    | 80      |
| Grid thumbnails   | 900 × 675   | JPG    | 78      |
| About portrait    | 800 × 1100  | JPG    | 82      |

Smaller files = faster site. You don't need 4K images for a web gallery.

---

## Image hosting options

### Option A — Local files (current setup)
Images live in the `images/` folder alongside the HTML.
- ✅ Simple, works offline, no accounts needed
- ✅ Fine for GitHub Pages (see below)
- ⚠️ Repository size grows with images; GitHub recommends keeping
  repos under 1 GB. Fine for hundreds of photos.

### Option B — GitHub Pages + Git LFS
For large image collections, use Git Large File Storage so images
don't bloat the repo history.
```
git lfs install
git lfs track "*.jpg" "*.png"
git add .gitattributes
```

### Option C — Cloudinary (recommended for scale)
Cloudinary serves images via CDN, resizes them on the fly, and
gives you a generous free tier (25 GB storage / 25 GB bandwidth).

1. Sign up at cloudinary.com
2. Upload your images
3. In `data.js`, replace local paths with Cloudinary URLs:
   ```js
   src: 'https://res.cloudinary.com/YOUR_CLOUD/image/upload/w_900,q_80/specular_01.jpg'
   ```
   The `w_900,q_80` part resizes and compresses automatically.
4. For lightbox, use a higher-res URL:
   ```js
   lb: 'https://res.cloudinary.com/YOUR_CLOUD/image/upload/w_1600,q_85/specular_01.jpg'
   ```

### Option D — Bunny.net or Backblaze B2 + Cloudflare
A cheaper CDN option if your site grows. Backblaze B2 storage is
free up to 10 GB; Cloudflare serves it at no bandwidth cost.

---

## Deploying to GitHub Pages

1. Create a new repository on GitHub (public or private*)
2. Push all files:
   ```
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```
3. Go to Settings → Pages → Source: Deploy from branch → main → / (root)
4. Your site will be live at:
   `https://YOUR_USERNAME.github.io/YOUR_REPO/`

*Private repos require GitHub Pro for Pages, or use Netlify/Vercel
 (both have generous free tiers and work with private repos).

### Netlify (alternative, easier custom domain)
1. Drag your project folder onto netlify.com/drop
2. Get a live URL instantly, no account required
3. For a custom domain: add it in Netlify's domain settings

---

## Copyright & protecting your work

### What the code does
The site includes several technical deterrents:
- Right-click context menu disabled (prevents "Save image as")
- Drag-and-drop on images disabled
- Common keyboard shortcuts (Ctrl+S, Ctrl+P) disabled
- `pointer-events: none` on images (prevents most click interactions)
- `<meta name="robots" content="noindex, noimageindex">` asks search
  engines and image crawlers not to index your photos

### What these measures do NOT prevent
- Screenshots (nothing can stop this)
- Browser developer tools / network tab downloads
- A determined person saving images from source

These measures stop casual copying. They are not a technical lock.

### The real protection: copyright law

Your photos are automatically protected by copyright the moment you
take them. You do not need to register anywhere in Italy or the EU
(Berne Convention). However, taking these extra steps strengthens
your position if you ever need to enforce your rights:

1. **Embed your name in EXIF data** before publishing.
   Use ExifTool (free, command-line):
   ```
   exiftool -Artist="Marco Rossi" -Copyright="© 2025 Marco Rossi. All rights reserved." *.jpg
   ```
   Or use Lightroom/Capture One export settings to embed this automatically.

2. **Add a visible copyright notice** to the site footer (optional but clear):
   ```
   © 2025 Marco Rossi. All photographs on this site are protected
   by copyright. Reproduction without written permission is prohibited.
   ```

3. **Register with SIAE** (Società Italiana degli Autori ed Editori).
   As an Italian photographer, SIAE membership gives you collective
   rights management and easier enforcement. Not mandatory but useful.

4. **Use Google Images reverse search** occasionally to check if your
   photos are appearing on other sites without permission.
   Tools: TinEye (tineye.com) or Google Lens.

5. **Watermarking** is the most visible deterrent. It reduces the
   display quality but makes unauthorised use immediately identifiable.
   A subtle, semi-transparent watermark in a corner is less intrusive
   than a full-image overlay. This is a personal choice.

6. **If you find a violation**: contact the site owner directly first
   with a takedown request. If unresponsive, file a DMCA notice (for
   US-hosted sites) or contact a lawyer specialising in intellectual
   property. For EU-hosted sites, the DSA (Digital Services Act) also
   provides a framework.

### Recommended EXIF workflow
Export from Lightroom with these fields filled:
- Creator / Artist: Marco Rossi
- Copyright: © 2025 Marco Rossi
- Rights: All rights reserved
- Website: https://your-domain.com

This metadata travels with the file even if someone downloads it,
making authorship traceable.
