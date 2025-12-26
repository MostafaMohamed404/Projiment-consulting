# Projiment-consulting

## Image optimization & responsive images

This project includes helper scripts and CSS utilities to make images responsive, reduce layout shift, and generate optimized WebP variants.

- `scripts/fix-image-dimensions.js`: Scans all HTML files, reads each referenced local image's natural dimensions, and injects `width` and `height` attributes and adds the `responsive-img` class. Run:

```bash
npm install
npm run fix-dimensions
```

- `scripts/optimize-images.js`: (optional) Uses `sharp` to generate resized WebP images. Install `sharp` first if you want to use it:

```bash
npm install --save-dev sharp
npm run optimize-images
```

Also see `Css/styles.css` — added utility classes: `.responsive-img`, `.img-decorative`, `.img-contain` to keep images inside their containers and prevent overflow.

Notes:
- The fix script uses `image-size` and `cheerio` to safely update HTML files. Review changes in Git before committing.
- The optimizer creates `*-<width>.webp` variants; update your markup to use `<picture>`/`srcset` for best results.