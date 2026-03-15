import {
  Activity,
  Baby,
  Bug,
  CalendarHeart,
  Flame,
  Heart,
  HeartPulse,
  Microscope,
  Scissors,
  Shield,
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
      "Rapid Access and quick access to investigations",
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
          name: "Radiofrequency Ablation (RFA)",
          description:
            "Minimally invasive procedure using heat energy to destroy fibroid tissue while preserving healthy uterine tissue",
        },
        {
          name: "HIFU (High-Intensity Focused Ultrasound)",
          description:
            "Non-invasive treatment using focused ultrasound waves to heat and destroy fibroid tissue without incisions",
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
      "Quick diagnosis in our one-stop clinic",
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
      "Quick results available for many tests",
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
    title: "Contraception Or Fertility",
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
      "All contraception methods available including quick coil fitting",
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
  {
    slug: "sexual-health-difficulties",
    title: "Sexual Health & Difficulties",
    shortDesc:
      "Compassionate support for sexual concerns including pain, low libido, and relationship issues affecting intimate wellbeing.",
    icon: Heart,
    color: "from-pink-500 to-rose-500",
    heroImage: "/assets/services/sexual-health.jpg",
    overview:
      "Sexual difficulties are common but often go undiscussed. Our sensitive and confidential service addresses a wide range of intimate concerns including painful intercourse (dyspareunia), low libido, vaginal dryness, and relationship issues. We provide comprehensive assessment, treatment, and counseling in a safe, non-judgmental environment. Our holistic approach combines medical treatment with psychological support to help you regain confidence and enjoyment in your intimate life.",
    symptoms: [
      "Pain during or after intercourse (dyspareunia)",
      "Vaginal dryness or discomfort",
      "Low sexual desire or libido",
      "Difficulty achieving orgasm",
      "Vaginismus (involuntary vaginal muscle spasm)",
      "Bleeding after intercourse",
      "Anxiety or fear around intimacy",
      "Relationship difficulties affecting sex life",
    ],
    diagnosticApproach: {
      title: "Comprehensive Assessment",
      items: [
        "Detailed sexual and relationship history in private setting",
        "Physical examination to identify anatomical causes",
        "Hormone level testing (estrogen, testosterone, thyroid)",
        "Assessment for infections or skin conditions",
        "Psychological screening for anxiety, depression, or trauma",
        "Relationship dynamics evaluation",
        "Medication review (many drugs affect sexual function)",
      ],
    },
    treatmentOptions: {
      title: "Treatment Approaches",
      description:
        "We offer individualized treatment plans addressing both physical and psychological factors:",
      options: [
        {
          name: "Hormone Therapy",
          description:
            "Vaginal estrogen for dryness, testosterone therapy for low libido, treatment of thyroid imbalances",
        },
        {
          name: "Pelvic Floor Therapy",
          description:
            "Specialized physiotherapy for vaginismus, pelvic pain, and muscle tension affecting intimacy",
        },
        {
          name: "Psychosexual Counseling",
          description:
            "Individual or couples therapy addressing psychological barriers, trauma, anxiety, and relationship issues",
        },
        {
          name: "Medical Treatment",
          description:
            "Treatment of infections, endometriosis, or other conditions causing pain; medication adjustments",
        },
        {
          name: "Laser Therapy",
          description:
            "Vaginal laser treatment to improve lubrication, elasticity, and comfort during intercourse",
        },
        {
          name: "Surgical Options",
          description:
            "When appropriate, surgery for endometriosis, fibroids, or anatomical issues causing pain",
        },
      ],
    },
    whyChooseUs: [
      "Confidential, sensitive environment for discussing intimate concerns",
      "Experienced specialists in sexual medicine and psychosexual therapy",
      "Holistic approach addressing physical and emotional factors",
      "Individual and couples counseling available",
      "Multidisciplinary team including gynecologists, therapists, and physiotherapists",
      "Evidence-based treatments tailored to your needs",
    ],
    faqs: [
      {
        question: "Is it normal to experience pain during sex?",
        answer:
          "While common, pain during sex is not normal and should always be investigated. Many treatable causes exist including infections, hormonal changes, endometriosis, or pelvic floor dysfunction. Don't suffer in silence - we can help.",
      },
      {
        question: "Can low libido be treated?",
        answer:
          "Yes, low libido often has treatable causes including hormonal imbalances, medications, stress, relationship issues, or underlying health conditions. We'll identify the cause and develop a personalized treatment plan.",
      },
      {
        question: "Will I need to bring my partner?",
        answer:
          "Your first consultation is typically individual, but partner involvement can be very beneficial for relationship-related issues. We offer couples counseling when appropriate and with your consent.",
      },
      {
        question: "How confidential is this service?",
        answer:
          "Completely confidential. Your discussions and treatment remain private. We understand the sensitive nature of sexual health concerns and provide a safe, non-judgmental space.",
      },
    ],
  },
  {
    slug: "vulva-vaginal-conditions",
    title: "Vulva & Vaginal Conditions",
    shortDesc:
      "Expert diagnosis and treatment of vulvar pain, skin conditions, infections, and discomfort affecting intimate areas.",
    icon: Flame,
    color: "from-orange-500 to-red-500",
    heroImage: "/assets/services/vulva-conditions.jpg",
    overview:
      "Vulvar and vaginal conditions can cause significant discomfort and distress but are often undertreated due to embarrassment. Our specialist service provides expert diagnosis and treatment for a wide range of conditions including vulvodynia (chronic vulvar pain), lichen sclerosus, lichen planus, vaginal infections, and other dermatological conditions. We offer comprehensive care in a sensitive, understanding environment with access to the latest treatments including laser therapy and specialized medications.",
    symptoms: [
      "Chronic vulvar pain or burning (vulvodynia)",
      "Itching, soreness, or irritation",
      "White patches or skin changes on vulva",
      "Painful intercourse due to vulvar sensitivity",
      "Abnormal vaginal discharge",
      "Recurrent thrush or bacterial vaginosis",
      "Skin splitting or tearing",
      "Vulvar swelling or lumps",
    ],
    diagnosticApproach: {
      title: "Specialist Investigation",
      items: [
        "Detailed history of symptoms and triggers",
        "Careful examination of vulva and vagina",
        "Vulvoscopy (magnified examination) when needed",
        "Skin biopsy for dermatological conditions",
        "Swabs for infections (bacterial, fungal, viral)",
        "pH testing and microscopy",
        "Allergy testing if contact dermatitis suspected",
        "Assessment for underlying conditions (diabetes, autoimmune diseases)",
      ],
    },
    treatmentOptions: {
      title: "Treatment Options",
      description:
        "Tailored treatment plans based on accurate diagnosis of your specific condition:",
      options: [
        {
          name: "Topical Medications",
          description:
            "Steroid creams for inflammatory conditions, antifungal or antibacterial treatments, hormone creams for atrophy",
        },
        {
          name: "Systemic Medications",
          description:
            "Oral medications for infections, nerve pain medications for vulvodynia, immunosuppressants for severe cases",
        },
        {
          name: "Laser Therapy",
          description:
            "Fractional CO2 laser treatment for lichen sclerosus, vaginal atrophy, and chronic pain conditions",
        },
        {
          name: "Pelvic Floor Therapy",
          description:
            "Specialized physiotherapy for pelvic floor dysfunction contributing to vulvar pain",
        },
        {
          name: "Lifestyle Modifications",
          description:
            "Advice on hygiene, clothing, irritant avoidance, and vulvar care to reduce symptoms",
        },
        {
          name: "Surgical Treatment",
          description:
            "Removal of cysts, abscesses, or concerning lesions; vestibulectomy for severe vulvodynia",
        },
      ],
    },
    whyChooseUs: [
      "Specialist expertise in vulvar dermatology and pain conditions",
      "Access to vulvoscopy and advanced diagnostic techniques",
      "Latest treatments including laser therapy",
      "Sensitive, understanding approach to intimate concerns",
      "Multidisciplinary team including dermatologists and pain specialists",
      "Long-term management and follow-up care",
    ],
    faqs: [
      {
        question: "What is vulvodynia?",
        answer:
          "Vulvodynia is chronic vulvar pain lasting more than 3 months without an obvious cause like infection. It can be constant or triggered by touch. While challenging to treat, many women find significant relief with the right combination of therapies.",
      },
      {
        question: "Is lichen sclerosus serious?",
        answer:
          "Lichen sclerosus is a chronic skin condition affecting the vulva. While not life-threatening, it requires ongoing treatment to prevent scarring and reduce cancer risk (though this is rare). With proper treatment, symptoms can be well-controlled.",
      },
      {
        question: "Why do I keep getting thrush?",
        answer:
          "Recurrent thrush can be caused by antibiotics, diabetes, hormonal changes, or immune system issues. Sometimes it's actually not thrush but another condition. We'll investigate the cause and provide effective long-term management.",
      },
      {
        question: "Can vulvar conditions affect my sex life?",
        answer:
          "Yes, many vulvar conditions cause pain during intimacy. However, with proper diagnosis and treatment, most women see significant improvement in comfort and can resume normal sexual activity.",
      },
    ],
  },
  {
    slug: "post-pregnancy-problems",
    title: "Post-Pregnancy Problems",
    shortDesc:
      "Specialized care for postnatal concerns including pelvic floor issues, incontinence, and recovery complications.",
    icon: Baby,
    color: "from-blue-500 to-cyan-500",
    heroImage: "/assets/services/post-pregnancy.jpg",
    overview:
      "Pregnancy and childbirth can have lasting effects on your body, particularly the pelvic floor. Many women experience problems after delivery but don't seek help, thinking it's 'normal' or will improve on its own. Our postnatal service addresses urinary incontinence, prolapse, perineal pain, cesarean section complications, and other issues affecting your recovery and quality of life. We provide expert assessment and treatment to help you regain confidence and comfort in your body.",
    symptoms: [
      "Urinary leakage when coughing, sneezing, or exercising",
      "Feeling of heaviness or bulge in vagina (prolapse)",
      "Painful intercourse after childbirth",
      "Persistent perineal pain or discomfort",
      "Cesarean section scar problems",
      "Fecal incontinence or difficulty controlling bowels",
      "Separation of abdominal muscles (diastasis recti)",
      "Persistent heavy bleeding after delivery",
    ],
    diagnosticApproach: {
      title: "Postnatal Assessment",
      items: [
        "Detailed birth history and delivery complications",
        "Pelvic floor examination and strength assessment",
        "Prolapse evaluation using standardized grading",
        "Perineal scar assessment (tears or episiotomy)",
        "Cesarean scar examination",
        "Urodynamic testing if significant incontinence",
        "Ultrasound assessment of pelvic organs",
        "Abdominal examination for muscle separation",
      ],
    },
    treatmentOptions: {
      title: "Recovery Solutions",
      description:
        "Comprehensive treatment options to restore your health and confidence after childbirth:",
      options: [
        {
          name: "Pelvic Floor Physiotherapy",
          description:
            "Specialized exercises and techniques to strengthen pelvic floor muscles and improve bladder control",
        },
        {
          name: "Pessary Fitting",
          description:
            "Vaginal support devices for prolapse, allowing time for natural healing while maintaining quality of life",
        },
        {
          name: "Perineal Repair",
          description:
            "Surgical correction of poorly healed tears or episiotomy causing pain or dysfunction",
        },
        {
          name: "Prolapse Surgery",
          description:
            "Minimally invasive procedures to repair pelvic organ prolapse when conservative measures insufficient",
        },
        {
          name: "Incontinence Treatment",
          description:
            "Range of options from bladder training to surgical procedures for persistent stress incontinence",
        },
        {
          name: "Scar Revision",
          description:
            "Treatment for problematic cesarean scars including massage, laser therapy, or surgical revision",
        },
      ],
    },
    whyChooseUs: [
      "Specialist urogynaecologists experienced in postnatal problems",
      "Comprehensive pelvic floor assessment and rehabilitation",
      "Non-judgmental environment understanding postnatal challenges",
      "Conservative treatments prioritized before considering surgery",
      "Multidisciplinary team including physiotherapists and midwives",
      "Support for both immediate and long-term postnatal issues",
    ],
    faqs: [
      {
        question: "How soon after delivery should I seek help?",
        answer:
          "While some recovery is normal in the first 6-12 weeks, don't wait if you're concerned. Seek help immediately for severe pain, heavy bleeding, or signs of infection. For pelvic floor issues, earlier intervention often leads to better outcomes.",
      },
      {
        question: "Will my prolapse get better on its own?",
        answer:
          "Mild prolapse may improve with pelvic floor exercises, especially in the first year postpartum. However, moderate to severe prolapse typically requires intervention. Early assessment helps prevent worsening.",
      },
      {
        question: "Can I have surgery while breastfeeding?",
        answer:
          "Most gynecological surgeries are safe while breastfeeding, though we typically recommend waiting until breastfeeding is established. We'll discuss timing based on your individual circumstances and urgency of treatment.",
      },
      {
        question: "Is it too late to get help years after childbirth?",
        answer:
          "It's never too late! Many women seek help years or even decades after childbirth. Effective treatments are available regardless of when your symptoms started.",
      },
    ],
  },
  {
    slug: "gynaecological-masses",
    title: "Gynaecological Masses & Swellings",
    shortDesc:
      "Expert investigation and management of pelvic masses, ovarian cysts, and abdominal swellings.",
    icon: Activity,
    color: "from-purple-500 to-indigo-500",
    heroImage: "/assets/services/masses.jpg",
    overview:
      "Discovery of a pelvic mass or swelling can be worrying. Our expert team provides rapid assessment, accurate diagnosis, and appropriate management of all types of gynecological masses including ovarian cysts, fibroids, and other pelvic swellings. Using advanced imaging and minimally invasive techniques, we ensure you receive the right treatment promptly. Most masses are benign, but we have expertise in managing complex cases and rapid referral pathways for suspected malignancies.",
    symptoms: [
      "Palpable mass or swelling in abdomen or pelvis",
      "Abdominal bloating or distension",
      "Pelvic pressure or heaviness",
      "Changes in bowel or bladder habits",
      "Abdominal or pelvic pain",
      "Unexplained weight gain or abdominal enlargement",
      "Difficulty eating or early satiety",
      "Abnormal vaginal bleeding",
    ],
    diagnosticApproach: {
      title: "Comprehensive Investigation",
      items: [
        "Detailed clinical examination including bimanual pelvic exam",
        "Transvaginal and transabdominal ultrasound scan",
        "3D/4D ultrasound for detailed assessment",
        "MRI scanning for complex masses or surgical planning",
        "Blood tests including tumor markers (CA125, CEA, AFP, HCG)",
        "CT scanning if malignancy suspected",
        "Diagnostic laparoscopy when imaging inconclusive",
        "Multidisciplinary team review for complex cases",
      ],
    },
    treatmentOptions: {
      title: "Management Options",
      description:
        "Treatment tailored to the type, size, and characteristics of the mass:",
      options: [
        {
          name: "Watchful Waiting",
          description:
            "Monitoring simple cysts with serial ultrasounds as many resolve spontaneously, especially in premenopausal women",
        },
        {
          name: "Medical Management",
          description:
            "Hormonal treatment for functional cysts, GnRH analogues for fibroids, or other medications based on diagnosis",
        },
        {
          name: "Laparoscopic Surgery",
          description:
            "Minimally invasive keyhole surgery to remove cysts or masses while preserving healthy ovarian tissue",
        },
        {
          name: "Hysteroscopic Procedures",
          description:
            "Camera-guided removal of intrauterine masses such as polyps or submucosal fibroids",
        },
        {
          name: "Open Surgery",
          description:
            "Laparotomy for large masses, suspected malignancy, or when minimally invasive approach not suitable",
        },
        {
          name: "Cancer Treatment",
          description:
            "Rapid referral to gynecological oncology team for confirmed or suspected malignancies",
        },
      ],
    },
    whyChooseUs: [
      "Expert subspecialists in benign and malignant gynecology",
      "Access to advanced imaging including 3D ultrasound and MRI",
      "Minimally invasive surgical expertise",
      "Rapid assessment and treatment pathways",
      "Multidisciplinary team meetings for complex cases",
      "Direct links to oncology services for suspected cancers",
    ],
    faqs: [
      {
        question: "Are ovarian cysts dangerous?",
        answer:
          "Most ovarian cysts are benign and harmless. Simple cysts often resolve on their own. However, complex cysts, large cysts, or those in postmenopausal women require careful evaluation to rule out malignancy.",
      },
      {
        question: "How do you know if a mass is cancerous?",
        answer:
          "We use a combination of ultrasound characteristics, blood tumor markers, and sometimes MRI or CT scans. Features suggesting cancer include solid components, irregular borders, and rapid growth. Definitive diagnosis requires surgical removal and pathology examination.",
      },
      {
        question: "Will I lose my ovary?",
        answer:
          "We always aim to preserve healthy ovarian tissue, especially in women of reproductive age. Cystectomy (removing just the cyst) is often possible. Oophorectomy (removing the whole ovary) is reserved for large, complex, or suspicious masses.",
      },
      {
        question: "How long is recovery after surgery?",
        answer:
          "Laparoscopic surgery typically allows return to normal activities within 1-2 weeks. Open surgery requires 4-6 weeks recovery. We'll discuss expected recovery time based on your specific procedure.",
      },
    ],
  },
  {
    slug: "gynaecological-cancer",
    title: "Gynaecological Cancer Screening & Management",
    shortDesc:
      "Early detection saves lives. Expert screening, diagnosis, and rapid referral for suspected gynaecological cancers.",
    icon: Shield,
    color: "from-red-500 to-pink-500",
    heroImage: "/assets/services/cancer-screening.jpg",
    overview:
      "Gynaecological cancers include cervical, ovarian, uterine (endometrial), vulvar, and vaginal cancers. Early detection dramatically improves outcomes. We provide comprehensive screening programs, investigate suspicious symptoms, and ensure rapid referral to specialist oncology teams when cancer is suspected. Our goal is prevention through screening and early detection when treatment is most effective. We support you throughout the diagnostic process and coordinate your care with leading cancer centers.",
    symptoms: [
      "Abnormal vaginal bleeding (between periods, after menopause, after sex)",
      "Persistent pelvic or abdominal pain",
      "Bloating that doesn't go away",
      "Changes in bowel or bladder habits",
      "Unexplained weight loss",
      "Persistent back pain",
      "Unusual vaginal discharge",
      "Vulvar itching, burning, or visible changes",
    ],
    diagnosticApproach: {
      title: "Screening & Investigation",
      items: [
        "Cervical screening (smear test) and HPV testing",
        "Transvaginal ultrasound for ovarian and uterine assessment",
        "CA125 blood test for ovarian cancer markers",
        "Endometrial biopsy for abnormal bleeding",
        "Colposcopy for abnormal smear results",
        "Hysteroscopy to examine uterine cavity",
        "MRI or CT scanning for staging if cancer suspected",
        "Two-week wait urgent referral pathway to oncology",
      ],
    },
    treatmentOptions: {
      title: "Our Cancer Services",
      description:
        "We focus on prevention, early detection, and rapid specialist referral:",
      options: [
        {
          name: "Cervical Cancer Screening",
          description:
            "Regular smear tests and HPV testing to detect pre-cancerous changes. Treatment of abnormalities with LLETZ/cone biopsy to prevent cancer developing",
        },
        {
          name: "Ovarian Cancer Screening",
          description:
            "CA125 testing and ultrasound assessment for women with symptoms or family history. Genetic counseling for BRCA carriers",
        },
        {
          name: "Endometrial Cancer Investigation",
          description:
            "Rapid investigation of postmenopausal bleeding or abnormal pre-menopausal bleeding with ultrasound and biopsy",
        },
        {
          name: "Vulvar & Vaginal Assessment",
          description:
            "Examination and biopsy of suspicious vulvar or vaginal lesions with fast-track referral if cancer suspected",
        },
        {
          name: "Risk Assessment",
          description:
            "Family history evaluation, genetic counseling, and screening for women at high risk of gynaecological cancers",
        },
        {
          name: "Rapid Oncology Referral",
          description:
            "Two-week wait referrals to specialist gynecological oncology teams for suspected cancers, coordinated care throughout treatment",
        },
      ],
    },
    whyChooseUs: [
      "Expert in early cancer detection and screening",
      "Direct access to specialist oncology teams",
      "Two-week wait urgent referral pathways",
      "Advanced imaging and diagnostic capabilities",
      "Genetic counseling for high-risk individuals",
      "Supportive, compassionate care throughout diagnostic journey",
    ],
    faqs: [
      {
        question: "What are the warning signs of gynaecological cancer?",
        answer:
          "The most important warning sign is abnormal vaginal bleeding - between periods, after sex, or after menopause. Other signs include persistent pelvic pain, bloating that doesn't go away, and unexplained weight loss. Any unusual or persistent symptoms should be checked.",
      },
      {
        question: "How effective is cervical screening?",
        answer:
          "Cervical screening has reduced cervical cancer deaths by 70% in the UK. It detects abnormal cells before they become cancerous, allowing treatment to prevent cancer developing. Regular screening is one of the most effective cancer prevention tools available.",
      },
      {
        question: "Am I at high risk for ovarian cancer?",
        answer:
          "Risk factors include family history (especially BRCA gene mutations), endometriosis, never having children, and increasing age. If you have strong family history, we can arrange genetic counseling and tailored screening.",
      },
      {
        question: "What happens if cancer is suspected?",
        answer:
          "We ensure rapid two-week wait referrals to specialist gynecological oncology teams. We coordinate all your tests and provide support throughout. Early referral to specialists dramatically improves outcomes.",
      },
    ],
  },
  {
    slug: "gynaecological-procedures",
    title: "Gynaecological Operations & Procedures",
    shortDesc:
      "Modern minimally invasive surgical techniques for a wide range of gynaecological conditions.",
    icon: Scissors,
    color: "from-blue-500 to-indigo-500",
    heroImage: "/assets/services/procedures.jpg",
    overview:
      "We offer a comprehensive range of gynaecological procedures from minor outpatient treatments to major surgery. Our expertise in minimally invasive surgery means smaller incisions, less pain, and faster recovery for most procedures. We perform diagnostic procedures (hysteroscopy, laparoscopy), treat benign conditions (fibroids, endometriosis, prolapse), and provide cosmetic gynaecology services. Every procedure is performed by experienced consultants using the latest techniques and equipment.",
    symptoms: [
      "You've been diagnosed with a condition requiring surgery",
      "Medical management hasn't resolved your symptoms",
      "Investigation needed to diagnose your symptoms",
      "Seeking surgical treatment options",
      "Wanting minimally invasive alternatives",
      "Requiring cosmetic gynaecological procedures",
    ],
    diagnosticApproach: {
      title: "Diagnostic Procedures",
      items: [
        "Hysteroscopy - camera examination of uterine cavity",
        "Diagnostic laparoscopy - keyhole examination of pelvis",
        "Colposcopy - detailed cervical examination",
        "Endometrial biopsy - tissue sampling",
        "Cystoscopy - bladder examination",
        "Urodynamics - bladder function testing",
        "Pelvic ultrasound - imaging assessment",
      ],
    },
    treatmentOptions: {
      title: "Surgical Procedures We Offer",
      description:
        "Comprehensive range of procedures performed by expert surgeons:",
      options: [
        {
          name: "Hysteroscopic Surgery",
          description:
            "Removal of polyps, fibroids, adhesions, or septum through the vagina without external incisions. Endometrial ablation for heavy periods",
        },
        {
          name: "Laparoscopic (Keyhole) Surgery",
          description:
            "Treatment of endometriosis, ovarian cysts, fibroids, adhesions. Laparoscopic hysterectomy with faster recovery than traditional surgery",
        },
        {
          name: "Hysterectomy",
          description:
            "Removal of uterus via laparoscopic, vaginal, or (rarely) abdominal approach. Subtotal or total hysterectomy depending on indication",
        },
        {
          name: "Myomectomy",
          description:
            "Surgical removal of fibroids while preserving the uterus for women wanting to maintain fertility",
        },
        {
          name: "Prolapse Surgery",
          description:
            "Vaginal or laparoscopic repair of pelvic organ prolapse including sacrocolpopexy and traditional repairs",
        },
        {
          name: "Incontinence Surgery",
          description:
            "Bulkamid injection, Biological Mid-Urethral Sling or Colposuspension for stress urinary incontinence",
        },
        {
          name: "Sterilization",
          description:
            "Laparoscopic tubal occlusion or removal for permanent contraception",
        },
      ],
    },
    whyChooseUs: [
      "Consultant-performed surgery every time",
      "Expertise in minimally invasive techniques",
      "Day surgery for many procedures",
      "Fast recovery protocols",
      "State-of-the-art facilities and equipment",
      "Comprehensive pre-operative counseling and post-operative care",
    ],
    faqs: [
      {
        question: "What's the benefit of laparoscopic surgery?",
        answer:
          "Laparoscopic (keyhole) surgery involves small incisions rather than one large cut. Benefits include less pain, smaller scars, shorter hospital stay (often day surgery), faster return to normal activities, and lower risk of complications like infection or hernias.",
      },
      {
        question: "How long is recovery after hysterectomy?",
        answer:
          "Recovery depends on the approach. Vaginal or laparoscopic hysterectomy typically allows return to normal activities within 2-4 weeks. Abdominal hysterectomy requires 6-8 weeks. Most women feel significantly better within days of surgery.",
      },
      {
        question: "Will I need to stay in hospital?",
        answer:
          "Many procedures are day surgery - you go home the same day. Others require overnight stay. Major surgery like hysterectomy typically requires 1-2 nights. We'll discuss this during your consultation.",
      },
      {
        question: "What are the risks of surgery?",
        answer:
          "All surgery carries risks including bleeding, infection, and damage to nearby organs. However, complication rates for gynaecological surgery are low. We'll discuss specific risks for your procedure and how we minimize them.",
      },
    ],
  },
  {
    slug: "infections-treatment",
    title: "Gynaecological Infections",
    shortDesc:
      "Expert diagnosis and treatment of vaginal, pelvic, and sexually transmitted infections.",
    icon: Bug,
    color: "from-green-500 to-teal-500",
    heroImage: "/assets/services/infections.jpg",
    overview:
      "Gynaecological infections are common and usually treatable, but can cause significant discomfort and complications if left untreated. We provide comprehensive diagnosis and treatment of all types of infections including bacterial vaginosis, thrush, sexually transmitted infections, and pelvic inflammatory disease. Our confidential service ensures accurate diagnosis with immediate testing, appropriate treatment, and partner notification when required. We also investigate recurrent infections to identify and address underlying causes.",
    symptoms: [
      "Abnormal vaginal discharge (change in color, smell, or amount)",
      "Vaginal itching, burning, or irritation",
      "Pain or burning during urination",
      "Pain during intercourse",
      "Pelvic or lower abdominal pain",
      "Abnormal bleeding or spotting",
      "Vulvar redness, swelling, or sores",
      "Unusual vaginal odor",
    ],
    diagnosticApproach: {
      title: "Comprehensive Testing",
      items: [
        "Vaginal swabs for bacterial, fungal, and viral cultures",
        "STI screening panel (chlamydia, gonorrhea, HIV, syphilis)",
        "Microscopy for immediate assessment",
        "pH testing and whiff test",
        "Blood tests for systemic infections",
        "Pelvic ultrasound if pelvic inflammatory disease suspected",
        "Urinalysis to rule out urinary tract infection",
      ],
    },
    treatmentOptions: {
      title: "Treatment Options",
      description:
        "Targeted treatment based on accurate diagnosis of your specific infection:",
      options: [
        {
          name: "Bacterial Vaginosis",
          description:
            "Antibiotic treatment with metronidazole or clindamycin (oral or vaginal). Investigation and management of recurrent BV",
        },
        {
          name: "Thrush (Candida)",
          description:
            "Antifungal treatment with fluconazole or topical creams. Long-term suppressive therapy for recurrent thrush",
        },
        {
          name: "Sexually Transmitted Infections",
          description:
            "Appropriate antibiotics or antivirals for chlamydia, gonorrhea, herpes, trichomonas. Partner notification and treatment",
        },
        {
          name: "Pelvic Inflammatory Disease",
          description:
            "Combination antibiotic therapy, pain management, and follow-up to prevent complications like infertility",
        },
        {
          name: "Recurrent Infection Management",
          description:
            "Investigation of underlying causes, immune system assessment, lifestyle advice, and preventative strategies",
        },
        {
          name: "Partner Treatment",
          description:
            "Confidential partner notification and treatment to prevent reinfection",
        },
      ],
    },
    whyChooseUs: [
      "Confidential, non-judgmental service",
      "Immediate testing and quick diagnosis for many infections",
      "Expert in managing recurrent and complex infections",
      "Comprehensive STI screening",
      "Private, discrete environment",
      "Partner notification support",
    ],
    faqs: [
      {
        question: "What's the difference between BV and thrush?",
        answer:
          "Bacterial vaginosis causes thin, fishy-smelling discharge and is caused by bacterial imbalance. Thrush causes thick, white discharge with intense itching and is caused by yeast. Both are common but require different treatments. Accurate diagnosis is essential.",
      },
      {
        question: "Why do I keep getting thrush?",
        answer:
          "Recurrent thrush can be caused by antibiotics, diabetes, hormonal changes, tight clothing, or immune system issues. Sometimes it's not actually thrush but another condition. We'll investigate the cause and provide effective long-term management.",
      },
      {
        question: "How do I know if I have an STI?",
        answer:
          "Many STIs have no symptoms initially, which is why regular screening is important if you're sexually active. Symptoms can include discharge, pain, sores, or bleeding. Confidential testing provides peace of mind and early treatment prevents complications.",
      },
      {
        question: "Will you tell my partner?",
        answer:
          "We maintain complete confidentiality. For STIs, we'll discuss partner notification options including anonymous notification services. Treating partners is essential to prevent reinfection and protect sexual health.",
      },
    ],
  },
  {
    slug: "sti-screening",
    title: "Sexually Transmitted Infections (STIs)",
    shortDesc:
      "Confidential STI screening, diagnosis, and treatment in a private, judgment-free environment.",
    icon: Shield,
    color: "from-purple-500 to-pink-500",
    heroImage: "/assets/services/sti.jpg",
    overview:
      "Sexually transmitted infections are common and often have no symptoms, but can cause serious health problems if untreated including infertility, chronic pain, and increased HIV transmission. Our confidential STI service provides comprehensive screening, accurate diagnosis, appropriate treatment, and partner notification support. We test for all common STIs including chlamydia, gonorrhea, HIV, syphilis, herpes, and hepatitis. Regular screening is recommended for all sexually active individuals, especially with new or multiple partners. Early detection and treatment protect your health and prevent transmission.",
    symptoms: [
      "Unusual vaginal discharge",
      "Pain or burning during urination",
      "Genital sores, ulcers, or blisters",
      "Pelvic pain or discomfort",
      "Pain during sex",
      "Abnormal bleeding between periods or after sex",
      "Genital itching or irritation",
      "Many STIs have NO symptoms - screening is essential",
    ],
    diagnosticApproach: {
      title: "Comprehensive STI Screening",
      items: [
        "Chlamydia and gonorrhea testing (urine or swab)",
        "HIV antibody and antigen testing",
        "Syphilis blood test",
        "Hepatitis B and C screening",
        "Herpes simplex virus testing",
        "Trichomonas testing",
        "HPV testing and cervical screening",
        "Full sexual health history and risk assessment",
      ],
    },
    treatmentOptions: {
      title: "STI Treatment & Management",
      description:
        "Effective treatment for all sexually transmitted infections:",
      options: [
        {
          name: "Bacterial STIs",
          description:
            "Single-dose or short-course antibiotics for chlamydia, gonorrhea, syphilis. Test of cure to ensure successful treatment",
        },
        {
          name: "Viral STIs",
          description:
            "Antiviral therapy for herpes (treatment and suppression). PrEP and PEP for HIV prevention. Hepatitis B vaccination",
        },
        {
          name: "Parasitic Infections",
          description:
            "Antiparasitic treatment for trichomonas and other parasitic STIs",
        },
        {
          name: "Partner Notification",
          description:
            "Confidential contact tracing and partner treatment to prevent reinfection and transmission",
        },
        {
          name: "Prevention Counseling",
          description:
            "Advice on safer sex practices, condom use, PrEP for HIV prevention, and HPV vaccination",
        },
        {
          name: "Follow-up Testing",
          description:
            "Repeat testing to confirm cure and screen for reinfection. Regular screening schedules for at-risk individuals",
        },
      ],
    },
    whyChooseUs: [
      "Completely confidential service",
      "Non-judgmental, professional care",
      "Rapid testing with quick results for many infections",
      "Treatment provided same-visit when possible",
      "Anonymous partner notification services",
      "Evening and weekend appointments available",
    ],
    faqs: [
      {
        question: "How often should I get tested?",
        answer:
          "Annual screening is recommended if sexually active. More frequent testing (every 3-6 months) is advised with multiple partners or new partner. Always test after unprotected sex or if a partner has an STI.",
      },
      {
        question: "Can STIs be cured?",
        answer:
          "Bacterial STIs (chlamydia, gonorrhea, syphilis) can be cured with antibiotics. Viral STIs (herpes, HIV, HPV) can be managed but not cured. Early treatment is crucial to prevent complications.",
      },
      {
        question: "Will it be confidential?",
        answer:
          "Absolutely. Your STI testing and treatment are completely confidential. We won't contact your GP without your permission. We offer anonymous testing options if preferred.",
      },
      {
        question: "What if I test positive?",
        answer:
          "We'll provide immediate treatment and support. Most STIs are easily treatable. We'll discuss partner notification, prevention, and follow-up testing. A positive test is manageable and nothing to be ashamed of.",
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
