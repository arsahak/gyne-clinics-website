import { Calendar, Heart, Baby, Shield, Activity, Sparkles } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface BlogArticle {
  id: number;
  slug: string;
  category: string;
  categoryColor: string;
  icon: LucideIcon;
  date: string;
  title: string;
  excerpt: string;
  image: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  readTime: string;
  content: {
    introduction: string;
    sections: {
      heading: string;
      content: string;
      bulletPoints?: string[];
    }[];
    conclusion: string;
  };
  relatedTopics: string[];
  tags: string[];
}

export const blogArticles: BlogArticle[] = [
  {
    id: 1,
    slug: "contraception-methods",
    category: "Family Planning",
    categoryColor: "from-blue-500 to-cyan-500",
    icon: Baby,
    date: "Oct 24, 2025",
    title: "Understanding Modern Contraception Methods",
    excerpt:
      "Prevention and avoidance of unwanted pregnancy while maintaining a healthy lifestyle. Explore the latest options available.",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800",
    author: {
      name: "Dr. Sarah Mitchell",
      role: "Consultant Gynaecologist",
      avatar: "/assets/team/doctor-1.jpg",
    },
    readTime: "8 min read",
    content: {
      introduction:
        "Choosing the right contraception is one of the most important decisions you can make for your reproductive health. With numerous options available today, understanding the benefits, effectiveness, and potential side effects of each method can help you make an informed choice that fits your lifestyle and health needs.",
      sections: [
        {
          heading: "Long-Acting Reversible Contraception (LARC)",
          content:
            "LARC methods are the most effective forms of contraception available, with failure rates of less than 1%. These methods don't require daily attention and can last for several years.",
          bulletPoints: [
            "Intrauterine Device (IUD) - Copper or Hormonal: Lasts 3-10 years depending on type, over 99% effective",
            "Contraceptive Implant (Nexplanon): Small rod inserted under skin of upper arm, lasts 3 years, 99.9% effective",
            "Contraceptive Injection (Depo-Provera): Given every 12 weeks, 94-99% effective with perfect use",
          ],
        },
        {
          heading: "Short-Acting Hormonal Methods",
          content:
            "These methods require regular daily or weekly use but offer the advantage of being quickly reversible if you decide to conceive.",
          bulletPoints: [
            "Combined Oral Contraceptive Pill: Contains estrogen and progesterone, 91-99% effective, taken daily",
            "Progesterone-Only Pill (Mini-Pill): Suitable for breastfeeding and those who can't take estrogen, must be taken same time daily",
            "Contraceptive Patch: Changed weekly, releases hormones through skin, 91-99% effective",
            "Vaginal Ring (NuvaRing): Inserted monthly, releases hormones locally, 91-99% effective",
          ],
        },
        {
          heading: "Barrier Methods",
          content:
            "Barrier methods prevent sperm from reaching the egg and offer protection against sexually transmitted infections (STIs).",
          bulletPoints: [
            "Male Condoms: 82-98% effective, protect against STIs, no hormones",
            "Female Condoms: 79-95% effective, can be inserted hours before sex",
            "Diaphragm with Spermicide: 88-94% effective, requires fitting by healthcare provider",
          ],
        },
        {
          heading: "Emergency Contraception",
          content:
            "Emergency contraception is available if regular contraception fails or wasn't used. It's most effective when taken as soon as possible after unprotected sex.",
          bulletPoints: [
            "Emergency Contraceptive Pill (Morning After Pill): Levonorgestrel effective up to 72 hours, ulipristal acetate up to 120 hours",
            "Copper IUD: Can be inserted up to 5 days after unprotected sex, most effective emergency contraception (99%)",
          ],
        },
        {
          heading: "Choosing the Right Method",
          content:
            "The best contraceptive method depends on several factors including your age, medical history, lifestyle, and future fertility plans. Consider these questions when making your decision:",
          bulletPoints: [
            "Do you want children in the future? If so, when?",
            "How effective does your contraception need to be?",
            "Can you remember to take a pill daily?",
            "Do you have any medical conditions that might affect your choice?",
            "Do you need protection against STIs?",
            "How do you feel about hormonal contraception?",
          ],
        },
      ],
      conclusion:
        "Every woman's contraceptive needs are unique. At GyneClinics, we offer comprehensive contraception counseling to help you find the method that best suits your individual circumstances. Our specialists will discuss all options with you, taking into account your medical history, lifestyle, and preferences. Book a consultation today to discuss your contraceptive options in a confidential, supportive environment.",
    },
    relatedTopics: [
      "Contraception Or Fertility",
      "Family Planning Services",
      "Sexual Health Screening",
    ],
    tags: [
      "Contraception",
      "Family Planning",
      "LARC",
      "Birth Control",
      "Women's Health",
    ],
  },
  {
    id: 2,
    slug: "urinary-incontinence",
    category: "Urology",
    categoryColor: "from-purple-500 to-pink-500",
    icon: Activity,
    date: "Oct 18, 2025",
    title: "Managing Female Urinary Incontinence",
    excerpt:
      "Incontinence is an involuntary leaking of urine. It is very common, but many women suffer in silence. Here is how we help.",
    image:
      "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?auto=format&fit=crop&q=80&w=800",
    author: {
      name: "Dr. Emma Thompson",
      role: "Urogynaecology Specialist",
      avatar: "/assets/team/doctor-2.jpg",
    },
    readTime: "10 min read",
    content: {
      introduction:
        "Urinary incontinence affects millions of women worldwide, yet many suffer in silence due to embarrassment. It's important to understand that incontinence is a medical condition, not a normal part of aging, and effective treatments are available. Whether you experience occasional leaks or more severe symptoms, help is available.",
      sections: [
        {
          heading: "Types of Urinary Incontinence",
          content:
            "Understanding the type of incontinence you have is the first step toward effective treatment.",
          bulletPoints: [
            "Stress Incontinence: Leakage during activities that increase abdominal pressure like coughing, sneezing, laughing, or exercise",
            "Urge Incontinence (Overactive Bladder): Sudden, intense urge to urinate followed by involuntary leakage",
            "Mixed Incontinence: Combination of stress and urge incontinence",
            "Overflow Incontinence: Frequent or constant dribbling due to incomplete bladder emptying",
          ],
        },
        {
          heading: "Common Causes and Risk Factors",
          content:
            "Several factors can contribute to the development of urinary incontinence:",
          bulletPoints: [
            "Pregnancy and Childbirth: Vaginal delivery can weaken pelvic floor muscles and damage nerves",
            "Menopause: Decreased estrogen affects bladder and urethral tissue health",
            "Age: Natural weakening of bladder muscles and reduced capacity",
            "Obesity: Extra weight increases pressure on bladder and pelvic floor",
            "Chronic Coughing: From smoking or respiratory conditions",
            "High-Impact Exercise: Without proper pelvic floor conditioning",
            "Previous Pelvic Surgery: Hysterectomy or other pelvic procedures",
          ],
        },
        {
          heading: "Conservative Treatment Options",
          content:
            "Many cases of incontinence can be improved or resolved with non-surgical treatments:",
          bulletPoints: [
            "Pelvic Floor Exercises (Kegels): Strengthen muscles supporting bladder, effective for stress incontinence",
            "Bladder Training: Gradually increasing intervals between bathroom visits",
            "Lifestyle Modifications: Weight loss, reducing caffeine and alcohol, managing fluid intake",
            "Electrical Stimulation: Uses mild electrical currents to strengthen pelvic floor muscles",
            "Pessary Devices: Support devices inserted into vagina to reduce pressure on bladder",
          ],
        },
        {
          heading: "Medical Treatments",
          content:
            "When conservative measures aren't sufficient, medical treatments can provide significant relief:",
          bulletPoints: [
            "Medications: Anticholinergics for overactive bladder, topical estrogen for postmenopausal women",
            "Botox Injections: For overactive bladder, relaxes bladder muscle to increase capacity",
            "Bulking Agents: Injected around urethra to improve closure",
            "Nerve Stimulation: Sacral nerve stimulation or percutaneous tibial nerve stimulation",
          ],
        },
        {
          heading: "Surgical Options",
          content:
            "For severe cases or when other treatments haven't worked, surgical procedures offer long-term solutions:",
          bulletPoints: [
            "Tension-Free Vaginal Tape (TVT): Minimally invasive procedure creating a supportive sling",
            "Colposuspension: Lifts and supports bladder neck",
            "Artificial Urinary Sphincter: For severe stress incontinence",
            "Bladder Augmentation: Increases bladder capacity for severe overactive bladder",
          ],
        },
        {
          heading: "When to Seek Help",
          content:
            "Don't wait to discuss urinary incontinence with a specialist. Seek help if:",
          bulletPoints: [
            "Incontinence affects your daily activities or quality of life",
            "You avoid social situations due to fear of leakage",
            "You experience sudden onset of incontinence",
            "Leakage is accompanied by pain, blood in urine, or difficulty emptying bladder",
            "Conservative measures haven't provided adequate relief",
          ],
        },
      ],
      conclusion:
        "Urinary incontinence is a treatable condition, and you don't have to live with it. At GyneClinics, our urogynaecology specialists offer comprehensive assessment and personalized treatment plans. From conservative pelvic floor therapy to advanced surgical options, we'll work with you to find the most appropriate solution. Don't let embarrassment prevent you from seeking help – book a confidential consultation today.",
    },
    relatedTopics: [
      "Pelvic Floor Therapy",
      "Urogynaecology Services",
      "Women's Health Screening",
    ],
    tags: [
      "Urinary Incontinence",
      "Urogynaecology",
      "Pelvic Floor",
      "Women's Health",
      "Bladder Control",
    ],
  },
  {
    id: 3,
    slug: "regular-screening",
    category: "Wellness",
    categoryColor: "from-green-500 to-emerald-500",
    icon: Shield,
    date: "Oct 10, 2025",
    title: "The Importance of Regular Screening",
    excerpt:
      "Why your annual well-woman exam is the most important appointment of the year for preventative health.",
    image:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800",
    author: {
      name: "Dr. Rachel Chen",
      role: "Preventative Health Specialist",
      avatar: "/assets/team/doctor-3.jpg",
    },
    readTime: "7 min read",
    content: {
      introduction:
        "Prevention is always better than cure. Regular gynaecological screening is one of the most important things you can do for your health. These routine checks can detect problems early when they're most treatable, potentially saving your life. Yet many women skip these vital appointments due to busy schedules, anxiety, or simply not understanding their importance.",
      sections: [
        {
          heading: "Cervical Screening (Smear Test)",
          content:
            "Cervical screening is one of the best ways to protect against cervical cancer. It checks for HPV (human papillomavirus) and abnormal cells.",
          bulletPoints: [
            "Recommended every 3 years for women aged 25-49",
            "Every 5 years for women aged 50-64",
            "Detects precancerous changes before cancer develops",
            "Cervical cancer is highly preventable with regular screening",
            "Takes only 5 minutes and could save your life",
          ],
        },
        {
          heading: "Breast Examination and Mammography",
          content:
            "Breast cancer is the most common cancer in UK women. Early detection dramatically improves survival rates.",
          bulletPoints: [
            "Monthly self-examination at home",
            "Clinical breast exam during annual well-woman check",
            "Mammography screening every 1-2 years from age 40-50",
            "Annual mammograms recommended from age 50",
            "Earlier screening if family history of breast cancer",
          ],
        },
        {
          heading: "Sexual Health Screening",
          content:
            "Many sexually transmitted infections (STIs) have no symptoms but can cause serious health problems if untreated.",
          bulletPoints: [
            "Annual screening recommended if sexually active",
            "More frequent testing if multiple partners or new partner",
            "Tests for chlamydia, gonorrhea, HIV, syphilis, hepatitis",
            "Early treatment prevents complications like infertility",
            "All testing is confidential and judgment-free",
          ],
        },
        {
          heading: "Pelvic Examination",
          content:
            "A pelvic exam allows your doctor to check your reproductive organs for any abnormalities.",
          bulletPoints: [
            "Checks uterus, ovaries, cervix, and vaginal health",
            "Detects fibroids, cysts, or other growths",
            "Assesses pelvic floor strength",
            "Identifies prolapse or other structural issues",
            "Recommended annually or as advised by your doctor",
          ],
        },
        {
          heading: "Additional Screenings and Tests",
          content:
            "Depending on your age, health history, and risk factors, your well-woman exam may include:",
          bulletPoints: [
            "Blood Pressure Check: Cardiovascular health monitoring",
            "BMI Assessment: Weight management guidance",
            "Cholesterol Testing: Heart disease risk evaluation",
            "Diabetes Screening: Blood sugar level checks",
            "Thyroid Function: Hormone level assessment",
            "Bone Density Scan: Osteoporosis screening for postmenopausal women",
          ],
        },
        {
          heading: "Overcoming Barriers to Screening",
          content:
            "We understand that many women find these examinations stressful. Here's how we make it easier:",
          bulletPoints: [
            "Female practitioners available if preferred",
            "Private, comfortable examination rooms",
            "Clear explanation of each step before proceeding",
            "Chaperones available on request",
            "Flexible appointment times including evenings and weekends",
            "Same-day results for many tests",
          ],
        },
      ],
      conclusion:
        "Your annual well-woman examination is an investment in your long-term health and wellbeing. These routine screenings can detect problems early, provide peace of mind, and keep you healthy for years to come. At GyneClinics, we make these important checks as comfortable and convenient as possible. Don't put off this vital appointment – schedule your well-woman exam today.",
    },
    relatedTopics: [
      "Screening & Prevention",
      "Cervical Screening",
      "Sexual Health Testing",
    ],
    tags: [
      "Preventative Health",
      "Screening",
      "Cervical Cancer",
      "Well-Woman Exam",
      "Early Detection",
    ],
  },
  {
    id: 4,
    slug: "perimenopause",
    category: "Hormonal Health",
    categoryColor: "from-rose-500 to-pink-500",
    icon: Heart,
    date: "Sep 28, 2025",
    title: "Navigating Perimenopause Symptoms",
    excerpt:
      "Understanding the changes in your body and how HRT can improve your quality of life during transition.",
    image:
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=800",
    author: {
      name: "Dr. Jennifer Williams",
      role: "Menopause Specialist",
      avatar: "/assets/team/doctor-4.jpg",
    },
    readTime: "12 min read",
    content: {
      introduction:
        "Perimenopause – the transition to menopause – can be a challenging time for many women. Understanding what's happening in your body and knowing that effective treatments are available can make this natural transition much more manageable. You don't have to suffer in silence; help is available to improve your quality of life during this important life stage.",
      sections: [
        {
          heading: "What is Perimenopause?",
          content:
            "Perimenopause is the transitional period before menopause when your ovaries gradually produce less estrogen. This typically begins in your 40s but can start earlier.",
          bulletPoints: [
            "Usually lasts 4-10 years before menopause",
            "Hormone levels fluctuate irregularly",
            "Can still become pregnant during this time",
            "Menopause is confirmed after 12 months without a period",
            "Average age of menopause in UK is 51",
          ],
        },
        {
          heading: "Common Symptoms of Perimenopause",
          content:
            "Women experience perimenopause differently. Some have minimal symptoms while others find them significantly impact daily life:",
          bulletPoints: [
            "Irregular Periods: Cycles become unpredictable – shorter, longer, heavier, or lighter",
            "Hot Flashes and Night Sweats: Sudden feelings of intense heat, particularly upper body",
            "Sleep Disturbances: Difficulty falling or staying asleep",
            "Mood Changes: Irritability, anxiety, depression, mood swings",
            "Vaginal Dryness: Reduced lubrication causing discomfort during sex",
            "Reduced Libido: Decreased interest in sexual activity",
            "Cognitive Changes: Brain fog, difficulty concentrating, memory lapses",
            "Physical Changes: Weight gain, joint pain, headaches",
          ],
        },
        {
          heading: "Hormone Replacement Therapy (HRT)",
          content:
            "HRT is the most effective treatment for menopausal symptoms, replacing hormones your body no longer produces.",
          bulletPoints: [
            "Types: Estrogen-only (for women without a uterus) or combined estrogen and progesterone",
            "Forms: Tablets, patches, gels, vaginal creams, or pessaries",
            "Benefits: Relieves hot flashes, night sweats, mood changes, and vaginal dryness",
            "Bone Protection: Reduces osteoporosis risk",
            "Heart Health: May reduce cardiovascular disease risk when started early",
            "Individualized: Dosage and type tailored to your needs",
          ],
        },
        {
          heading: "Understanding HRT Safety",
          content:
            "Many women worry about HRT safety due to past media coverage. Current evidence shows:",
          bulletPoints: [
            "Benefits outweigh risks for most women under 60",
            "Small increased breast cancer risk with combined HRT (less than daily alcohol consumption)",
            "Transdermal (patch/gel) HRT has no increased blood clot risk",
            "Regular monitoring ensures safe, effective treatment",
            "Can be used long-term if needed and appropriate",
            "Alternatives available for those with contraindications",
          ],
        },
        {
          heading: "Non-Hormonal Treatment Options",
          content:
            "For women who can't or prefer not to use HRT, effective alternatives exist:",
          bulletPoints: [
            "Cognitive Behavioral Therapy (CBT): Proven effective for hot flashes and mood symptoms",
            "Antidepressants: Low-dose SSRIs can reduce hot flashes",
            "Vaginal Moisturizers and Lubricants: For vaginal dryness",
            "Lifestyle Modifications: Exercise, stress management, healthy diet",
            "Complementary Therapies: Acupuncture, yoga, mindfulness",
          ],
        },
        {
          heading: "Lifestyle Strategies for Managing Symptoms",
          content:
            "Alongside medical treatments, lifestyle changes can significantly improve symptoms:",
          bulletPoints: [
            "Regular Exercise: 30 minutes daily reduces symptoms and improves mood",
            "Healthy Diet: Mediterranean-style diet rich in fruits, vegetables, whole grains",
            "Weight Management: Maintaining healthy weight reduces symptoms",
            "Stress Reduction: Meditation, yoga, deep breathing exercises",
            "Sleep Hygiene: Cool bedroom, regular sleep schedule, avoid caffeine late",
            "Avoid Triggers: Spicy foods, alcohol, caffeine can worsen hot flashes",
            "Stay Hydrated: Drink plenty of water throughout the day",
          ],
        },
        {
          heading: "When to Seek Help",
          content:
            "Don't wait until symptoms become unbearable. Consult a specialist if:",
          bulletPoints: [
            "Symptoms significantly impact your quality of life",
            "You're struggling with mood changes or anxiety",
            "Sleep disturbances are affecting your daily function",
            "You're considering HRT and want expert guidance",
            "Your current treatment isn't providing adequate relief",
            "You have questions about menopause and your health",
          ],
        },
      ],
      conclusion:
        "Perimenopause is a natural life transition, but that doesn't mean you have to suffer through it. At GyneClinics, our menopause specialists provide evidence-based, personalized care to help you navigate this stage with confidence. Whether you choose HRT, alternative treatments, or a combination approach, we'll support you every step of the way. Book a consultation today to discuss how we can help you thrive during perimenopause and beyond.",
    },
    relatedTopics: [
      "Menopause Management",
      "Hormone Replacement Therapy",
      "Women's Wellness",
    ],
    tags: [
      "Perimenopause",
      "Menopause",
      "HRT",
      "Hormonal Health",
      "Women's Health",
    ],
  },
];

// Helper function to get article by slug
export const getArticleBySlug = (slug: string): BlogArticle | undefined => {
  return blogArticles.find((article) => article.slug === slug);
};

// Get all article slugs for static generation
export const getAllArticleSlugs = (): string[] => {
  return blogArticles.map((article) => article.slug);
};

// Get articles by category
export const getArticlesByCategory = (category: string): BlogArticle[] => {
  return blogArticles.filter((article) => article.category === category);
};

// Get related articles
export const getRelatedArticles = (
  currentSlug: string,
  limit: number = 3
): BlogArticle[] => {
  const currentArticle = getArticleBySlug(currentSlug);
  if (!currentArticle) return [];

  return blogArticles
    .filter(
      (article) =>
        article.slug !== currentSlug &&
        (article.category === currentArticle.category ||
          article.tags.some((tag) => currentArticle.tags.includes(tag)))
    )
    .slice(0, limit);
};
