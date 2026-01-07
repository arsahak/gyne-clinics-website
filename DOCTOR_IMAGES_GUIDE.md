# Doctor Images Integration Guide

## Overview
This guide explains how to add real professional photos of Mr. Joe Daniels (the surgeon) to the website.

---

## 📸 Required Doctor Images

### Image 1: Professional Portrait (Primary)
**Location:** About Page & Surgeon Safety Section

**Specifications:**
- **Dimensions:** 1200px × 1600px (3:4 aspect ratio)
- **Format:** JPEG or PNG
- **File Size:** < 800KB (compressed)
- **Background:** Professional medical setting or neutral background
- **Attire:** Medical coat or professional business attire
- **Expression:** Friendly, approachable, confident

**Recommended Path:**
```
public/assets/doctor/joe-daniels-portrait.jpg
```

**What to Include:**
- Head and shoulders or upper body shot
- Good lighting (professional photography)
- High resolution for retina displays
- Authentic, professional appearance

---

### Image 2: About Page Hero Banner
**Location:** About Page Hero Section

**Specifications:**
- **Dimensions:** 1920px × 1080px (16:9 aspect ratio)
- **Format:** JPEG
- **File Size:** < 1MB
- **Setting:** Clinic environment, consultation room, or professional backdrop

**Recommended Path:**
```
public/assets/hero/about-hero.jpg
```

**What to Include:**
- Can be a wider shot showing the clinic environment
- Professional and welcoming atmosphere
- May include medical equipment or consultation setting

---

### Image 3: Surgeon Safety Section Photo
**Location:** Surgical Aesthetic Page - Surgeon Safety Component

**Specifications:**
- **Dimensions:** 900px × 1200px (3:4 aspect ratio)
- **Format:** JPEG
- **File Size:** < 600KB
- **Style:** Professional medical portrait

**Recommended Path:**
```
public/assets/doctor/joe-daniels-surgical.jpg
```

**What to Include:**
- Same as Image 1 (can use the same photo)
- Alternatively, a photo in surgical scrubs or consultation setting

---

## 📁 Recommended Folder Structure

```
public/
└── assets/
    ├── doctor/
    │   ├── joe-daniels-portrait.jpg        (Main professional portrait)
    │   ├── joe-daniels-surgical.jpg        (Alternative surgical setting)
    │   └── joe-daniels-consultation.jpg    (Optional: consultation photo)
    └── hero/
        └── about-hero.jpg                   (About page hero banner)
```

---

## 🔧 Implementation Steps

### Step 1: Prepare Images
1. **Get Professional Photos**
   - Hire a professional medical photographer OR
   - Use existing high-quality professional photos
   - Ensure proper lighting and composition

2. **Edit & Optimize**
   - Crop to recommended aspect ratios
   - Adjust brightness/contrast if needed
   - Compress images to meet file size requirements
   - Test on both desktop and mobile

3. **Name Files Consistently**
   ```
   joe-daniels-portrait.jpg
   joe-daniels-surgical.jpg
   about-hero.jpg
   ```

---

### Step 2: Upload Images

Upload images to the following locations:

```bash
public/assets/doctor/joe-daniels-portrait.jpg
public/assets/doctor/joe-daniels-surgical.jpg
public/assets/hero/about-hero.jpg
```

---

### Step 3: Update Code References

#### A. SurgeonSafety Component
**File:** `component/aesthetic-gynaecology/surgical/SurgeonSafety.tsx`

**Current (Lines 29-41):**
```tsx
<div className="aspect-[3/4] bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl relative overflow-hidden border-4 border-white shadow-2xl">
  {/* Place Doctor Image Here */}
  <div className="absolute inset-0 flex items-center justify-center">
    <div className="text-center p-6">
      <div className="w-24 h-24 bg-primary/30 rounded-full flex items-center justify-center mx-auto mb-4">
        <UserCheck className="text-primary" size={48} />
      </div>
      <p className="text-primary font-bold text-sm uppercase tracking-wider">
        Dr. Photo
      </p>
    </div>
  </div>
</div>
```

**Update to:**
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

**Don't forget to add import:**
```tsx
import Image from "next/image";
```

---

#### B. About Page - Main Portrait
**File:** `app/about/page.tsx`

**Current (Lines 215-241):**
```tsx
<div className="aspect-[3/4] bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl relative overflow-hidden border-4 border-white shadow-2xl">
  {/* TODO: Replace with actual surgeon photo */}
  <div className="absolute inset-0 flex items-center justify-center">
    <div className="text-center p-8">
      <div className="w-32 h-32 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
        <UserCheck className="text-primary" size={64} />
      </div>
      <p className="text-primary font-bold text-lg uppercase tracking-wider">
        Professional Photo
      </p>
      <p className="text-gray-500 text-sm mt-2">
        Mr. Joe Daniels
      </p>
    </div>
  </div>
</div>
```

**Update to:**
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

#### C. About Page - Hero Section
**File:** `app/about/page.tsx`

**Current (Line 203):**
```tsx
<CommonHero
  title="Meet Mr. Joe Daniels"
  subtitle="Consultant Gynaecologist | MBBS, FRCOG"
  images={["/assets/home/banner1.svg"]} // TODO: Replace with actual photo
  breadcrumbs={[{ label: "About", href: "/about" }]}
/>
```

**Update to:**
```tsx
<CommonHero
  title="Meet Mr. Joe Daniels"
  subtitle="Consultant Gynaecologist | MBBS, FRCOG"
  images={["/assets/hero/about-hero.jpg"]}
  breadcrumbs={[{ label: "About", href: "/about" }]}
/>
```

---

## 📋 Quick Checklist

### Before Upload:
- [ ] Professional photos obtained (photographer or existing)
- [ ] Images cropped to correct aspect ratios
- [ ] Images optimized and compressed
- [ ] File sizes within limits (<800KB)
- [ ] File names follow naming convention

### After Upload:
- [ ] Images uploaded to `/public/assets/doctor/`
- [ ] Hero image uploaded to `/public/assets/hero/`
- [ ] Code updated in SurgeonSafety component
- [ ] Code updated in About page (portrait section)
- [ ] Code updated in About page (hero section)
- [ ] Images tested on desktop and mobile
- [ ] Images load quickly (check file sizes)

---

## 🎨 Photography Tips

### For Professional Medical Portrait:

1. **Lighting**
   - Soft, diffused lighting (avoid harsh shadows)
   - Natural light or professional studio lighting
   - Even lighting on face

2. **Background**
   - Neutral (white, light gray, or soft blue)
   - Or medical office setting (bookshelf, certificates)
   - Avoid busy or distracting backgrounds

3. **Composition**
   - Subject positioned slightly off-center
   - Eye level or slightly above
   - Leave some headroom in frame

4. **Expression**
   - Warm, approachable smile
   - Confident but friendly
   - Direct eye contact with camera

5. **Attire**
   - White medical coat with name badge
   - Professional business attire underneath
   - Stethoscope (optional but professional)

---

## 🚨 Legal & Compliance

### Photo Rights:
- [ ] Ensure you have full rights to use the photos
- [ ] If using a photographer, get copyright release
- [ ] Model release signed (if applicable)

### Privacy:
- [ ] No patient information visible in background
- [ ] No identifiable medical records
- [ ] Clinic branding approved for use

### Professional Standards:
- [ ] Photos represent professional medical practice
- [ ] Appropriate for medical website
- [ ] Compliant with GMC guidelines

---

## 📞 Support

If you need help with:
- Professional medical photography
- Image optimization and compression
- Code implementation

Please contact your web development team or refer to the main `MISSING_PHOTOS_GUIDE.md` for comprehensive image replacement instructions.

---

## Example Implementation

After following this guide, the doctor sections will display:

✅ **Surgeon Safety Section:**
- Professional portrait of Mr. Joe Daniels
- Credentials and experience highlighted
- "Meet the Surgeon" button linking to About page

✅ **About Page:**
- Hero banner with professional photo
- Main portrait with 20+ years experience badge
- Complete biography and credentials
- Career timeline and achievements

---

**Last Updated:** 2026-01-07
**Version:** 1.0
