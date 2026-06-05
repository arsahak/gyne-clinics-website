export interface SearchItem {
  title: string;
  description: string;
  href: string;
  category: string;
  keywords: string[];
}

export const SEARCH_INDEX: SearchItem[] = [
  // ── General Gynaecology ──
  {
    title: "General Gynaecology",
    description: "Comprehensive gynaecological care, screenings and consultations",
    href: "/general-gynaecology",
    category: "Service",
    keywords: ["gynaecology", "general", "consultation", "women", "health"],
  },
  {
    title: "Menstrual Problems",
    description: "Heavy periods, irregular bleeding, painful periods, PMDD",
    href: "/general-gynaecology/menstrual-problems",
    category: "General Gynaecology",
    keywords: ["period", "menstrual", "bleeding", "heavy", "irregular", "painful", "pmdd", "pms"],
  },
  {
    title: "Fibroids",
    description: "Diagnosis and treatment of uterine fibroids",
    href: "/general-gynaecology/fibroids",
    category: "General Gynaecology",
    keywords: ["fibroid", "uterine", "womb", "heavy bleeding", "pelvic pain"],
  },
  {
    title: "Endometriosis",
    description: "Expert diagnosis and management of endometriosis",
    href: "/general-gynaecology/endometriosis",
    category: "General Gynaecology",
    keywords: ["endometriosis", "pelvic pain", "painful periods", "fertility", "laparoscopy"],
  },
  {
    title: "PCOS — Polycystic Ovary Syndrome",
    description: "Diagnosis and holistic management of PCOS",
    href: "/general-gynaecology/pcos",
    category: "General Gynaecology",
    keywords: ["pcos", "polycystic", "ovary", "hormones", "fertility", "irregular periods"],
  },
  {
    title: "Contraception Or Fertility Concerns",
    description: "Contraception advice, coil fitting, fertility concerns",
    href: "/general-gynaecology/contraception-fertility",
    category: "General Gynaecology",
    keywords: ["contraception", "fertility", "coil", "iud", "pill", "implant", "family planning"],
  },
  {
    title: "Cervical Screening & HPV",
    description: "Smear tests, HPV testing, colposcopy and vaccination",
    href: "/general-gynaecology/cervical-screening",
    category: "General Gynaecology",
    keywords: ["cervical", "smear", "hpv", "colposcopy", "screening", "vaccination", "gardasil"],
  },
  {
    title: "Ovarian Cysts",
    description: "Assessment and management of ovarian cysts",
    href: "/general-gynaecology/ovarian-cysts",
    category: "General Gynaecology",
    keywords: ["ovarian", "cyst", "ovary", "ultrasound", "pelvic pain"],
  },
  {
    title: "Gynaecological Procedures",
    description: "Hysteroscopy, laparoscopy and other procedures",
    href: "/general-gynaecology/gynaecological-procedures",
    category: "General Gynaecology",
    keywords: ["hysteroscopy", "laparoscopy", "procedure", "surgery", "minimally invasive"],
  },
  // ── Urogynaecology ──
  {
    title: "Urogynaecology",
    description: "Bladder and pelvic floor specialist care",
    href: "/urogynaecology",
    category: "Service",
    keywords: ["urogynaecology", "bladder", "pelvic floor", "incontinence", "prolapse"],
  },
  {
    title: "Bladder Health Check",
    description: "Comprehensive bladder assessment and urodynamic testing",
    href: "/urogynaecology/bladder-health",
    category: "Urogynaecology",
    keywords: ["bladder", "urinary", "incontinence", "overactive", "leaking", "urgency"],
  },
  {
    title: "Stress Urinary Incontinence",
    description: "Bulkamid, Sling, Colposuspension treatments",
    href: "/urogynaecology/stress-incontinence",
    category: "Urogynaecology",
    keywords: ["stress", "incontinence", "leaking", "cough", "sneeze", "exercise", "bulkamid", "sling"],
  },
  {
    title: "Pelvic Organ Prolapse",
    description: "Expert treatment for prolapse including surgery and pessaries",
    href: "/urogynaecology/prolapse",
    category: "Urogynaecology",
    keywords: ["prolapse", "pelvic", "bladder", "womb", "rectum", "pessary", "repair"],
  },
  // ── Aesthetic Gynaecology ──
  {
    title: "Aesthetic Gynaecology",
    description: "Surgical and non-surgical intimate aesthetic procedures",
    href: "/aesthetic-gynaecology",
    category: "Service",
    keywords: ["aesthetic", "cosmetic", "intimate", "rejuvenation", "labiaplasty"],
  },
  {
    title: "Labiaplasty",
    description: "Surgical reshaping and reduction of the labia minora",
    href: "/aesthetic-gynaecology/surgical/labiaplasty",
    category: "Aesthetic Gynaecology",
    keywords: ["labiaplasty", "labia", "labial", "reduction", "reshaping", "surgical"],
  },
  {
    title: "Vaginoplasty",
    description: "Vaginal tightening and rejuvenation surgery",
    href: "/aesthetic-gynaecology/surgical/vaginoplasty",
    category: "Aesthetic Gynaecology",
    keywords: ["vaginoplasty", "vaginal", "tightening", "rejuvenation", "childbirth"],
  },
  {
    title: "Laser Vaginal Rejuvenation",
    description: "Non-surgical CO2 laser treatment for vaginal health",
    href: "/aesthetic-gynaecology/non-surgical/laser",
    category: "Aesthetic Gynaecology",
    keywords: ["laser", "co2", "rejuvenation", "non-surgical", "atrophy", "dryness"],
  },
  {
    title: "O-Shot (PRP Treatment)",
    description: "Platelet-rich plasma treatment for sexual wellness",
    href: "/aesthetic-gynaecology/non-surgical/o-shot",
    category: "Aesthetic Gynaecology",
    keywords: ["o-shot", "prp", "platelet", "plasma", "sexual", "wellness", "orgasm"],
  },
  {
    title: "Aesthetic Assessment",
    description: "Personalised consultation for aesthetic gynaecology goals",
    href: "/aesthetic-gynaecology",
    category: "Aesthetic Gynaecology",
    keywords: ["assessment", "consultation", "aesthetic", "cosmetic"],
  },
  // ── Menopause ──
  {
    title: "Menopause",
    description: "Expert menopause management and HRT",
    href: "/menopause",
    category: "Service",
    keywords: ["menopause", "perimenopause", "hrt", "hot flushes", "hormone", "symptoms"],
  },
  {
    title: "HRT — Hormone Replacement Therapy",
    description: "Personalised HRT including patches, gels, tablets and implants",
    href: "/menopause/hrt",
    category: "Menopause",
    keywords: ["hrt", "hormone", "replacement", "oestrogen", "progesterone", "testosterone", "patch", "gel"],
  },
  {
    title: "Menopause Symptom Tracker",
    description: "Track and assess your menopause symptoms",
    href: "/menopause",
    category: "Menopause",
    keywords: ["tracker", "symptoms", "hot flush", "night sweats", "mood", "anxiety", "sleep"],
  },
  {
    title: "Non-Hormonal Menopause Treatment",
    description: "Effective alternatives for women who cannot take HRT",
    href: "/menopause/non-hormonal",
    category: "Menopause",
    keywords: ["non-hormonal", "menopause", "alternative", "natural", "cbt", "lifestyle"],
  },
  // ── Pages ──
  {
    title: "Book a Consultation",
    description: "Book an appointment with our specialist",
    href: "/contact",
    category: "Page",
    keywords: ["book", "appointment", "consultation", "contact", "schedule"],
  },
  {
    title: "Contact Us",
    description: "London, Leeds and Manchester clinic locations",
    href: "/contact",
    category: "Page",
    keywords: ["contact", "london", "leeds", "manchester", "harley street", "phone", "email"],
  },
  {
    title: "Before & After Gallery",
    description: "Clinical results from aesthetic procedures",
    href: "/gallery",
    category: "Page",
    keywords: ["gallery", "before", "after", "results", "photos"],
  },
  {
    title: "About GyneClinics",
    description: "About our specialist team and approach to care",
    href: "/about",
    category: "Page",
    keywords: ["about", "team", "specialist", "consultant", "gmc", "registered"],
  },
  {
    title: "Rapid Access Appointments",
    description: "Quick access private appointments at our clinics",
    href: "/contact",
    category: "Page",
    keywords: ["rapid", "access", "quick", "appointment", "private", "urgent"],
  },
  {
    title: "Wellness Essentials Store",
    description: "Medical-grade health and wellness products",
    href: "https://whpstore.org/en-gb",
    category: "Store",
    keywords: ["store", "shop", "vitamins", "probiotics", "supplements", "wellness"],
  },
];

export function searchContent(query: string): SearchItem[] {
  if (!query.trim()) return [];
  const q = query.toLowerCase().trim();
  return SEARCH_INDEX.filter(
    (item) =>
      item.title.toLowerCase().includes(q) ||
      item.description.toLowerCase().includes(q) ||
      item.category.toLowerCase().includes(q) ||
      item.keywords.some((k) => k.toLowerCase().includes(q))
  ).slice(0, 8);
}
