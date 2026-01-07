# Quick Image Update Reference

## 🚀 Fast Implementation Guide

Once you have the doctor photos ready, follow these quick steps:

---

## 1️⃣ Upload Images (Required)

Upload these 3 images to your public folder:

```
📁 public/assets/
  📁 doctor/
    📄 joe-daniels-portrait.jpg     (1200×1600px, <800KB)
    📄 joe-daniels-surgical.jpg     (900×1200px, <600KB)
  📁 hero/
    📄 about-hero.jpg               (1920×1080px, <1MB)
```

---

## 2️⃣ Code Updates (3 Files)

### File 1: SurgeonSafety.tsx
**Path:** `component/aesthetic-gynaecology/surgical/SurgeonSafety.tsx`

**Add import at top (around line 5):**
```tsx
import Image from "next/image";
```

**Replace lines 29-41 with:**
```tsx
<div className="aspect-[3/4] rounded-2xl relative overflow-hidden border-4 border-white shadow-2xl">
  <Image
    src="/assets/doctor/joe-daniels-surgical.jpg"
    alt="Mr. Joe Daniels - Consultant Gynaecologist"
    fill
    className="object-cover"
    priority
  />
</div>
```

---

### File 2: About Page (Portrait)
**Path:** `app/about/page.tsx`

**Already has Image import, just replace the placeholder div (lines 215-241) with:**
```tsx
<div className="aspect-[3/4] rounded-3xl relative overflow-hidden border-4 border-white shadow-2xl">
  <Image
    src="/assets/doctor/joe-daniels-portrait.jpg"
    alt="Mr. Joe Daniels - Consultant Gynaecologist MBBS, FRCOG"
    fill
    className="object-cover"
    priority
  />
</div>
```

---

### File 3: About Page (Hero)
**Path:** `app/about/page.tsx`

**Replace line 203:**

**From:**
```tsx
images={["/assets/home/banner1.svg"]} // TODO: Replace with actual photo
```

**To:**
```tsx
images={["/assets/hero/about-hero.jpg"]}
```

---

## 3️⃣ Test Checklist

After making changes:

- [ ] Run `npm run dev` and check http://localhost:3000
- [ ] Visit `/aesthetic-gynaecology/surgical` - Check surgeon photo
- [ ] Visit `/about` - Check both hero banner and portrait
- [ ] Test on mobile (responsive design)
- [ ] Verify images load quickly
- [ ] Check browser console for errors

---

## 🎯 Exact Line Numbers

| File | Lines to Replace | What to Replace |
|------|------------------|-----------------|
| SurgeonSafety.tsx | 29-41 | Placeholder div → Image component |
| about/page.tsx | 203 | SVG path → JPG path in CommonHero |
| about/page.tsx | 215-241 | Placeholder div → Image component |

---

## 💡 Pro Tips

1. **Use Same Photo**
   - You can use the same photo for both `joe-daniels-portrait.jpg` and `joe-daniels-surgical.jpg`
   - Just ensure it's properly sized

2. **Compress Images**
   - Use tools like TinyPNG or ImageOptim
   - Target: <800KB for best performance

3. **Test First**
   - Upload one image first and test
   - Then upload the rest once you're happy

---

## 🆘 Troubleshooting

### Image Not Showing?
- Check file path is correct (case-sensitive)
- Ensure image is in `public/assets/` folder
- Clear browser cache (Ctrl+Shift+R)
- Restart dev server

### Image Too Large?
- Compress using online tools
- Resize to recommended dimensions
- Convert to JPEG if using PNG

### Looks Blurry?
- Use higher resolution source image
- Ensure aspect ratio matches (3:4 or 16:9)
- Check image quality before upload

---

## ✅ Done!

Once complete, you'll have:
- ✅ Professional doctor photo on surgical page
- ✅ Professional portrait on about page
- ✅ Hero banner on about page
- ✅ Consistent branding across site

---

**Need the full guide?** See `DOCTOR_IMAGES_GUIDE.md`
**Need all missing images?** See `MISSING_PHOTOS_GUIDE.md`
