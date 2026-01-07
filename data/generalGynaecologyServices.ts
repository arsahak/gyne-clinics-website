import {
  CalendarHeart,
  HeartPulse,
  Microscope,
  Baby,
  type LucideIcon,
} from "lucide-react";

export interface GeneralGynaecologyService {
  slug: string;
  title: string;
  shortDesc: string;
  icon: LucideIcon;
  color: string;
  heroImage: string;
  overview: string;
  symptoms: string[];
  diagnosticApproach: {
    title: string;
    items: string[];
  };
  treatmentOptions: {
    title: string;
    description: string;
    options: {
      name: string;
      description: string;
    }[];
  };
  whyChooseUs: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export const generalGynaecologyServices: GeneralGynaecologyService[] = [
  {
    slug: "menstrual-health",
    title: "Menstrual Health",
    shortDesc:
      "Expert management of menstrual disorders including heavy bleeding, irregular cycles, and severe PMS/PMDD.",
    icon: CalendarHeart,
    color: "from-rose-500 to-pink-500",
    heroImage: "/assets/services/menstrual-health.jpg",
    overview:
      "Menstrual health is a crucial aspect of women's well-being. Our expert team provides comprehensive assessment and management of all menstrual-related conditions, from heavy bleeding (menorrhagia) to irregular periods and severe premenstrual disorders. We understand how debilitating menstrual problems can be and offer evidence-based treatments tailored to your individual needs and lifestyle.",
    symptoms: [
      "Heavy menstrual bleeding (soaking through pads/tampons hourly)",
      "Periods lasting longer than 7 days",
      "Irregular or unpredictable cycles",
      "Severe period pain (dysmenorrhea)",
      "Severe PMS or PMDD affecting daily life",
      "Bleeding between periods",
      "Absence of periods (amenorrhea)",
      "Mood changes related to menstrual cycle",
    ],
    diagnosticApproach: {
      title: "Our Diagnostic Approach",
      items: [
        "Detailed menstrual history and symptom assessment",
        "Pelvic examination and cervical screening if needed",
        "Transvaginal ultrasound scan to assess uterus and ovaries",
        "Blood tests (hormone levels, full blood count, thyroid function)",
        "Endometrial biopsy if indicated",
        "Specialist imaging (MRI) for complex cases",
      ],
    },
    treatmentOptions: {
      title: "Treatment Options",
      description:
        "We offer a comprehensive range of treatments from lifestyle modifications to surgical interventions:",
      options: [
        {
          name: "Medical Management",
          description:
            "Hormonal treatments (combined pill, progesterone), tranexamic acid, NSAIDs, Mirena IUS coil",
        },
        {
          name: "Lifestyle Interventions",
          description:
            "Dietary modifications, exercise programs, stress management, and nutritional supplementation",
        },
        {
          name: "Minimally Invasive Procedures",
          description:
            "Endometrial ablation, uterine artery embolization, fibroid removal",
        },
        {
          name: "Surgical Options",
          description:
            "Hysteroscopic procedures, laparoscopic surgery, hysterectomy (when appropriate)",
        },
        {
          name: "Psychological Support",
          description:
            "Cognitive behavioral therapy (CBT) for PMS/PMDD, counseling support",
        },
      ],
    },
    whyChooseUs: [
      "Specialist consultants with decades of combined experience in menstrual disorders",
      "Access to cutting-edge diagnostic technology including 3D ultrasound",
      "Same-day appointments and rapid access to investigations",
      "Holistic approach addressing physical and emotional well-being",
      "Multidisciplinary team including gynecologists, psychologists, and specialist nurses",
      "Evidence-based treatments tailored to your individual needs",
    ],
    faqs: [
      {
        question: "What is considered heavy menstrual bleeding?",
        answer:
          "Heavy menstrual bleeding is typically defined as losing more than 80ml of blood per cycle, or practically, soaking through a pad or tampon every hour for several hours, passing large clots, or bleeding for more than 7 days. If your periods are affecting your quality of life, we can help.",
      },
      {
        question: "Can heavy periods be cured without surgery?",
        answer:
          "Yes, many women find relief through medical management such as hormonal treatments, the Mirena coil, or medications like tranexamic acid. Surgery is only considered when medical treatments haven't worked or aren't suitable.",
      },
      {
        question: "How long does treatment take to work?",
        answer:
          "This varies depending on the treatment. Hormonal medications typically take 2-3 cycles to show full effect, while the Mirena coil can take up to 6 months. We'll monitor your progress and adjust treatment as needed.",
      },
      {
        question: "Will I need time off work for treatment?",
        answer:
          "Most medical treatments don't require time off. Minimally invasive procedures may need 1-2 days recovery, while major surgery might require 2-6 weeks depending on the procedure. We'll discuss this during your consultation.",
      },
    ],
  },
  {
    slug: "pelvic-pain-fibroids",
    title: "Pelvic Pain & Fibroids",
    shortDesc:
      "Advanced diagnostic imaging and minimally invasive treatment for chronic pelvic pain and fibroids.",
    icon: HeartPulse,
    color: "from-violet-500 to-purple-500",
    heroImage: "/assets/services/pelvic-pain.jpg",
    overview:
      "Chronic pelvic pain and fibroids can significantly impact your quality of life. Our team of specialists uses state-of-the-art diagnostic technology to identify the root cause of your pain and develop personalized treatment plans. We offer both conservative and surgical management options, with a focus on minimally invasive techniques that reduce recovery time and preserve fertility when desired.",
    symptoms: [
      "Chronic or intermittent pelvic pain lasting more than 6 months",
      "Heavy or prolonged menstrual bleeding",
      "Pressure or fullness in the lower abdomen",
      "Frequent urination or difficulty emptying bladder",
      "Pain during intercourse (dyspareunia)",
      "Lower back pain or leg pain",
      "Constipation or painful bowel movements",
      "Enlarged abdomen or visible mass",
    ],
    diagnosticApproach: {
      title: "Comprehensive Investigation",
      items: [
        "Detailed clinical history and pain mapping",
        "Physical examination including bimanual pelvic exam",
        "Transvaginal and transabdominal ultrasound",
        "3D/4D ultrasound for detailed fibroid assessment",
        "MRI scanning for complex cases or surgical planning",
        "Diagnostic laparoscopy if endometriosis suspected",
        "Blood tests including CA125 if indicated",
      ],
    },
    treatmentOptions: {
      title: "Treatment Pathways",
      description:
        "We provide individualized treatment plans based on your symptoms, fibroid characteristics, and fertility wishes:",
      options: [
        {
          name: "Medication Therapy",
          description:
            "GnRH analogues, ulipristal acetate, hormonal contraceptives, pain management medications",
        },
        {
          name: "Uterine Artery Embolization (UAE)",
          description:
            "Non-surgical procedure that blocks blood supply to fibroids, causing them to shrink",
        },
        {
          name: "Myomectomy",
          description:
            "Surgical removal of fibroids while preserving the uterus - ideal for women wanting to maintain fertility",
        },
        {
          name: "Endometrial Ablation",
          description:
            "Minimally invasive procedure to reduce heavy bleeding for those who've completed their family",
        },
        {
          name: "Hysterectomy",
          description:
            "Definitive treatment via laparoscopic or vaginal approach with faster recovery than traditional surgery",
        },
        {
          name: "Pain Management",
          description:
            "Multidisciplinary approach including physiotherapy, acupuncture, and psychological support",
        },
      ],
    },
    whyChooseUs: [
      "Subspecialist expertise in advanced laparoscopic and hysteroscopic surgery",
      "Access to latest imaging technology for accurate diagnosis",
      "Fertility-sparing surgery options with expert reproductive medicine colleagues",
      "Multidisciplinary pain management team",
      "Clinical trials access for novel treatments",
      "Same-day diagnosis in our one-stop clinic",
    ],
    faqs: [
      {
        question: "What causes fibroids?",
        answer:
          "The exact cause of fibroids is unknown, but they're influenced by hormones (particularly estrogen and progesterone) and genetics. They're very common, affecting up to 70% of women by age 50, and are more prevalent in women of African-Caribbean descent.",
      },
      {
        question: "Do all fibroids need treatment?",
        answer:
          "No, many fibroids are small and cause no symptoms. Treatment is only necessary when fibroids cause problems such as heavy bleeding, pain, pressure symptoms, or fertility issues. We'll help you decide if and when treatment is needed.",
      },
      {
        question: "Can fibroids come back after treatment?",
        answer:
          "After myomectomy (fibroid removal), new fibroids can develop in about 15-30% of women over 5 years. Uterine artery embolization and medical treatments can also see recurrence. Hysterectomy is the only definitive cure as it removes the uterus entirely.",
      },
      {
        question: "Will fibroids affect my ability to get pregnant?",
        answer:
          "Most fibroids don't affect fertility, but those that distort the uterine cavity (submucosal fibroids) can interfere with implantation or increase miscarriage risk. We can assess this with specialized scans and discuss fertility-preserving treatment options if needed.",
      },
    ],
  },
  {
    slug: "screening-prevention",
    title: "Screening & Prevention",
    shortDesc:
      "Comprehensive cervical screening, HPV vaccination, and sexual health testing.",
    icon: Microscope,
    color: "from-blue-500 to-cyan-500",
    heroImage: "/assets/services/screening.jpg",
    overview:
      "Prevention is better than cure. Our comprehensive screening and prevention services help detect potential issues early when they're most treatable. We provide cervical screening (smear tests), HPV vaccination, sexual health screening, and well-woman health checks in a private, comfortable environment. Our team ensures you're fully informed and comfortable throughout every procedure.",
    symptoms: [
      "You're due for routine cervical screening (every 3-5 years)",
      "Abnormal bleeding or discharge",
      "Previous abnormal smear result requiring follow-up",
      "Family history of gynecological cancers",
      "Sexual health concerns or symptoms",
      "Desire for HPV vaccination",
      "General health check and wellness assessment",
      "Breast health concerns",
    ],
    diagnosticApproach: {
      title: "Our Preventative Services",
      items: [
        "Cervical screening (smear test) with liquid-based cytology",
        "HPV testing and vaccination (Gardasil 9)",
        "Colposcopy for abnormal smear results",
        "Sexual health screening (STI testing)",
        "Breast examination and mammography referral",
        "Well-woman health assessments",
        "Genetic counseling for high-risk individuals",
        "Lifestyle and dietary advice",
      ],
    },
    treatmentOptions: {
      title: "Screening & Prevention Programs",
      description:
        "We offer comprehensive screening packages and preventative care:",
      options: [
        {
          name: "Cervical Screening",
          description:
            "Regular smear tests to detect pre-cancerous changes, with immediate HPV testing and fast-track colposcopy if needed",
        },
        {
          name: "HPV Vaccination",
          description:
            "Gardasil 9 vaccine protecting against 9 strains of HPV that cause 90% of cervical cancers and genital warts",
        },
        {
          name: "Sexual Health Screening",
          description:
            "Comprehensive STI testing including chlamydia, gonorrhea, HIV, syphilis, hepatitis B and C in a discreet setting",
        },
        {
          name: "Colposcopy Services",
          description:
            "Expert examination of the cervix with treatment (LLETZ/cone biopsy) performed in same visit if appropriate",
        },
        {
          name: "Well-Woman Checks",
          description:
            "Comprehensive health assessment including blood pressure, BMI, breast exam, pelvic exam, and blood tests",
        },
        {
          name: "Breast Health",
          description:
            "Clinical breast examination, mammography coordination, and genetic risk assessment for breast cancer",
        },
      ],
    },
    whyChooseUs: [
      "Private, comfortable environment for sensitive examinations",
      "Same-day results available for many tests",
      "Expert colposcopy with 'see and treat' option",
      "Fast-track referral pathways for abnormal results",
      "Comprehensive sexual health services with complete confidentiality",
      "Evening and weekend appointments available",
    ],
    faqs: [
      {
        question: "How often should I have a cervical screening?",
        answer:
          "NHS guidelines recommend screening every 3 years for women aged 25-49, and every 5 years for those aged 50-64. However, you may need more frequent screening if you've had previous abnormal results or are at higher risk.",
      },
      {
        question: "Is cervical screening painful?",
        answer:
          "Most women find cervical screening uncomfortable rather than painful. Our experienced nurses use gentle techniques and can offer smaller speculums if needed. Taking slow deep breaths and relaxing your muscles can help. Tell us if you're anxious - we can take extra time.",
      },
      {
        question: "Can I have the HPV vaccine if I'm over 26?",
        answer:
          "Yes! While the NHS program targets younger people, the vaccine is effective and safe at any age. If you're sexually active, the vaccine may still provide protection against HPV types you haven't been exposed to.",
      },
      {
        question: "What happens if my smear test is abnormal?",
        answer:
          "Most abnormal smears show minor changes that will resolve on their own. If treatment is needed, we'll arrange colposcopy where we examine your cervix with magnification. Many changes can be treated in the same visit with local anesthetic. We'll support you throughout the process.",
      },
    ],
  },
  {
    slug: "contraception-fertility",
    title: "Contraception & Fertility",
    shortDesc:
      "Bespoke contraceptive counseling and fertility assessment with diagnostic ultrasound.",
    icon: Baby,
    color: "from-teal-500 to-emerald-500",
    heroImage: "/assets/services/fertility.jpg",
    overview:
      "Whether you're looking to prevent pregnancy or trying to conceive, we provide expert guidance and support. Our contraception service offers all methods from pills to long-acting reversible contraception (LARC), including coil fitting by experienced specialists. For those trying to conceive, we offer comprehensive fertility assessments, diagnostic testing, and treatment coordination with leading fertility centers.",
    symptoms: [
      "Seeking reliable contraception advice",
      "Difficulty getting pregnant after 12 months of trying",
      "Irregular or absent periods affecting fertility",
      "Previous miscarriages (2 or more)",
      "Known conditions affecting fertility (PCOS, endometriosis)",
      "Male factor fertility concerns",
      "Advanced maternal age (over 35)",
      "Desire for fertility preservation",
    ],
    diagnosticApproach: {
      title: "Fertility Investigation Package",
      items: [
        "Detailed fertility history for both partners",
        "Ovarian reserve testing (AMH, FSH, antral follicle count)",
        "Transvaginal ultrasound to assess uterus and ovaries",
        "HyCoSy (tubal patency testing) or HSG if indicated",
        "Hormone profile (LH, FSH, thyroid, prolactin)",
        "Semen analysis coordination",
        "Genetic screening if indicated",
        "Ovulation tracking and monitoring",
      ],
    },
    treatmentOptions: {
      title: "Services We Provide",
      description:
        "Comprehensive contraception and fertility support tailored to your needs:",
      options: [
        {
          name: "Contraception Counseling",
          description:
            "Expert advice on all methods including pills, patches, rings, implants, injections, and both copper and hormonal coils",
        },
        {
          name: "LARC Fitting",
          description:
            "Specialist fitting of Mirena, Kyleena, and copper coils, plus contraceptive implant insertion and removal",
        },
        {
          name: "Fertility Assessment",
          description:
            "Comprehensive evaluation of both partners to identify any barriers to conception",
        },
        {
          name: "Ovulation Induction",
          description:
            "Medication to stimulate ovulation for women with irregular cycles or PCOS",
        },
        {
          name: "Fertility Surgery",
          description:
            "Treatment of conditions affecting fertility such as fibroids, polyps, endometriosis, and adhesions",
        },
        {
          name: "IVF Coordination",
          description:
            "Referral and coordination with leading fertility centers, pre-IVF optimization, and surgical support",
        },
      ],
    },
    whyChooseUs: [
      "Subspecialist-led contraception and fertility clinics",
      "All contraception methods available including same-day coil fitting",
      "Comprehensive fertility testing in one-stop clinic",
      "Links with leading UK fertility centers",
      "Fertility preservation counseling and coordination",
      "Personalized treatment plans based on your goals and values",
    ],
    faqs: [
      {
        question: "Which contraception method is best for me?",
        answer:
          "The 'best' method depends on your individual circumstances, health history, lifestyle, and preferences. We'll discuss all options, their effectiveness, side effects, and benefits to help you make an informed choice. LARC methods (coils and implants) are most effective with over 99% success rates.",
      },
      {
        question: "Does the coil insertion hurt?",
        answer:
          "Most women experience period-like cramping during insertion. We use local anesthetic and can offer pain relief before and after. The procedure takes less than 5 minutes. Many women find the temporary discomfort worthwhile for years of highly effective contraception.",
      },
      {
        question: "When should we seek fertility help?",
        answer:
          "Generally after 12 months of regular unprotected intercourse if you're under 35, or after 6 months if you're over 35. However, seek earlier help if you have irregular periods, known conditions like PCOS or endometriosis, or previous pelvic surgery.",
      },
      {
        question: "What fertility tests will I need?",
        answer:
          "Basic tests include hormone blood tests, an ultrasound scan to check your ovaries and uterus, and a test to check your fallopian tubes are open. Your partner will need a semen analysis. We'll arrange all these tests and review results together, usually within 2-3 weeks.",
      },
    ],
  },
];

// Helper function to get service by slug
export const getServiceBySlug = (
  slug: string
): GeneralGynaecologyService | undefined => {
  return generalGynaecologyServices.find((service) => service.slug === slug);
};

// Get all service slugs for static generation
export const getAllServiceSlugs = (): string[] => {
  return generalGynaecologyServices.map((service) => service.slug);
};
