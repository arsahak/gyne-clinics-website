import { Pill, Leaf, HeartPulse, type LucideIcon } from "lucide-react";

export interface MenopauseService {
  slug: string;
  title: string;
  shortDesc: string;
  icon: LucideIcon;
  color: string;
  iconGradient: string;
  heroImage: string;
  overview: string;
  whoItsFor: string[];
  symptoms: string[];
  treatmentApproach: {
    title: string;
    items: {
      name: string;
      description: string;
    }[];
  };
  benefits: string[];
  whyChooseUs: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export const menopauseServices: MenopauseService[] = [
  {
    slug: "hrt-bio-identicals",
    title: "HRT & Bio-Identicals",
    shortDesc: "Gold-standard treatment to replace falling hormone levels.",
    icon: Pill,
    color: "from-blue-500 to-cyan-500",
    iconGradient: "from-blue-500/20 to-blue-600/20 text-blue-600",
    heroImage: "/assets/services/hrt-treatment.jpg",
    overview:
      "Hormone Replacement Therapy (HRT) is the most effective treatment for menopausal symptoms. We specialize in body-identical hormones that match the molecular structure of your body's natural hormones, providing symptom relief while protecting your long-term health. Our approach is personalized, using the latest evidence-based protocols to optimize your treatment for maximum benefit with minimal risk.",
    whoItsFor: [
      "Women experiencing moderate to severe menopausal symptoms",
      "Those with premature menopause (before age 45)",
      "Women seeking protection against osteoporosis and cardiovascular disease",
      "Anyone wanting to improve quality of life during menopause",
      "Women who have tried non-hormonal approaches without success",
    ],
    symptoms: [
      "Hot flashes and night sweats disrupting sleep",
      "Vaginal dryness and painful intercourse",
      "Mood swings, anxiety, or depression",
      "Brain fog and memory problems",
      "Joint and muscle aches",
      "Reduced libido and sexual function",
      "Fatigue and low energy",
      "Sleep disturbances",
    ],
    treatmentApproach: {
      title: "Our HRT Options",
      items: [
        {
          name: "Transdermal Estrogen (Gels & Patches)",
          description:
            "Applied to skin, bypassing the liver for lower blood clot risk. Available in various strengths to match your needs. Can be adjusted easily for optimal symptom control.",
        },
        {
          name: "Micronized Progesterone",
          description:
            "Body-identical progesterone to protect the uterus lining. Taken orally, often at bedtime as it can improve sleep. No increased breast cancer risk compared to synthetic progestins.",
        },
        {
          name: "Testosterone Replacement",
          description:
            "For women experiencing low libido, fatigue, or reduced muscle strength. Available as gel or cream. Carefully monitored to maintain physiological levels.",
        },
        {
          name: "Vaginal Estrogen",
          description:
            "Local treatment for vaginal dryness, painful sex, and urinary symptoms. Available as pessaries, cream, or vaginal ring. Safe for long-term use with minimal systemic absorption.",
        },
        {
          name: "Combined HRT Preparations",
          description:
            "All-in-one patches or tablets combining estrogen and progesterone. Convenient option with proven efficacy and safety profile.",
        },
        {
          name: "Tibolone",
          description:
            "Synthetic hormone with estrogenic, progestogenic, and androgenic effects. Single daily tablet suitable for women more than one year post-menopause.",
        },
      ],
    },
    benefits: [
      "Dramatic reduction in hot flashes and night sweats (typically 80-90%)",
      "Improved sleep quality and daytime energy",
      "Relief from vaginal dryness and painful intercourse",
      "Better mood, reduced anxiety and depression",
      "Improved cognitive function and mental clarity",
      "Increased libido and sexual satisfaction",
      "Protection against osteoporosis and bone fractures",
      "Potential cardiovascular protection when started early",
      "Healthier skin, hair, and joints",
      "Improved quality of life overall",
    ],
    whyChooseUs: [
      "British Menopause Society (BMS) accredited menopause specialists",
      "Body-identical hormones as standard",
      "Personalized dosing based on symptoms and blood tests",
      "Regular monitoring and adjustment as needed",
      "Comprehensive cardiovascular and breast health screening",
      "Same-day prescriptions available",
      "Ongoing support and 24/7 advice line",
      "Evidence-based approach following latest NICE guidelines",
    ],
    faqs: [
      {
        question: "Is HRT safe?",
        answer:
          "For most women under 60 or within 10 years of menopause, the benefits of HRT significantly outweigh the risks. The increased breast cancer risk with combined HRT is small (less than daily alcohol consumption) and reduces when treatment stops. Transdermal estrogen has no increased blood clot risk. We assess your individual risk factors and monitor you regularly to ensure safe, effective treatment.",
      },
      {
        question: "How long can I stay on HRT?",
        answer:
          "There's no arbitrary time limit for HRT. As long as benefits outweigh risks for you individually, you can continue treatment. We recommend annual reviews to reassess your needs. Many women stay on HRT well into their 60s and beyond, particularly for vaginal symptoms which can be treated safely long-term.",
      },
      {
        question: "What's the difference between body-identical and synthetic HRT?",
        answer:
          "Body-identical hormones (estradiol and micronized progesterone) have the same molecular structure as hormones your body naturally produces. Synthetic hormones are chemically different. Body-identical progesterone appears to have a better safety profile than older synthetic progestins, particularly regarding breast health. We use body-identical hormones as standard.",
      },
      {
        question: "How quickly will I feel better?",
        answer:
          "Most women notice improvement in hot flashes and night sweats within 2-4 weeks, though full benefit may take 2-3 months. Mood and energy improvements often take 6-8 weeks. Vaginal symptoms may take 3 months to fully resolve. We'll adjust your dose if needed to optimize your response.",
      },
      {
        question: "Can I take HRT if I've had breast cancer?",
        answer:
          "This requires specialist discussion. For most breast cancers, HRT is not recommended due to potential recurrence risk. However, for women with severe symptoms significantly affecting quality of life, we can discuss alternative options including vaginal estrogen (safe for local symptoms) and non-hormonal treatments. Each case is assessed individually.",
      },
    ],
  },
  {
    slug: "non-hormonal-support",
    title: "Non-Hormonal Support",
    shortDesc:
      "Effective alternatives for those who cannot or choose not to take HRT.",
    icon: Leaf,
    color: "from-green-500 to-emerald-500",
    iconGradient: "from-green-500/20 to-green-600/20 text-green-600",
    heroImage: "/assets/services/holistic-menopause.jpg",
    overview:
      "Not everyone can or wants to take HRT, but that doesn't mean you have to suffer through menopause. We offer evidence-based non-hormonal treatments including prescription medications, cognitive behavioral therapy, lifestyle interventions, and carefully selected supplements. Our holistic approach addresses both symptoms and overall wellbeing, providing effective relief without hormones.",
    whoItsFor: [
      "Women with contraindications to HRT (certain breast cancers, blood clots, liver disease)",
      "Those who prefer natural or non-hormonal approaches",
      "Women experiencing side effects from HRT",
      "Anyone wanting to optimize lifestyle alongside or instead of HRT",
      "Women with specific symptoms like mood changes or sleep issues",
    ],
    symptoms: [
      "Hot flashes and night sweats",
      "Mood swings, anxiety, or low mood",
      "Sleep disturbances and insomnia",
      "Brain fog and concentration difficulties",
      "Fatigue and low energy",
      "Joint pain and muscle aches",
      "Weight gain and metabolism changes",
      "General menopausal malaise",
    ],
    treatmentApproach: {
      title: "Non-Hormonal Treatment Options",
      items: [
        {
          name: "Prescription Non-Hormonal Medications",
          description:
            "SSRIs/SNRIs (like citalopram, venlafaxine) reduce hot flashes by 50-60% and improve mood. Gabapentin or pregabalin for hot flashes and sleep. Clonidine for hot flashes. All evidence-based with proven efficacy.",
        },
        {
          name: "Cognitive Behavioral Therapy (CBT)",
          description:
            "Specially adapted CBT for menopause proven to reduce hot flash distress by 40% and improve mood, sleep, and quality of life. We can refer to trained CBT therapists or provide self-help resources.",
        },
        {
          name: "Lifestyle Prescriptions",
          description:
            "Personalized exercise plans (resistance and aerobic training), dietary optimization (Mediterranean diet, reducing triggers), weight management, stress reduction techniques, and sleep hygiene protocols.",
        },
        {
          name: "Evidence-Based Supplements",
          description:
            "Vitamin D and calcium for bone health. Omega-3 fatty acids for mood and cardiovascular health. Magnesium for sleep and anxiety. Only recommending supplements with solid evidence, not fads.",
        },
        {
          name: "Herbal Remedies",
          description:
            "Black cohosh, red clover, and sage may help some women with mild symptoms. We'll discuss evidence, interactions, and safety. While effects are modest, some women find them helpful.",
        },
        {
          name: "Complementary Therapies",
          description:
            "Acupuncture, yoga, mindfulness, and relaxation techniques. While evidence varies, many women find these helpful for stress, mood, and overall wellbeing alongside other treatments.",
        },
      ],
    },
    benefits: [
      "Reduced hot flashes and night sweats (30-60% improvement)",
      "Improved mood and reduced anxiety",
      "Better sleep quality",
      "Enhanced coping strategies for symptoms",
      "Improved overall health and fitness",
      "Better weight management",
      "Reduced cardiovascular risk through lifestyle changes",
      "Stronger bones through exercise and supplements",
      "No hormonal side effects or risks",
      "Empowerment through lifestyle modification",
    ],
    whyChooseUs: [
      "Evidence-based approach - only proven treatments recommended",
      "Multidisciplinary team including nutritionists and therapists",
      "Personalized lifestyle plans tailored to your circumstances",
      "Access to specialist menopause CBT",
      "Prescription non-hormonal medications available",
      "Regular monitoring and adjustment of treatment plan",
      "Combination approach for maximum benefit",
      "Support for transitioning from HRT if desired",
    ],
    faqs: [
      {
        question: "How effective are non-hormonal treatments compared to HRT?",
        answer:
          "HRT remains the most effective treatment for hot flashes (80-90% reduction), but good non-hormonal approaches can achieve 30-60% reduction in symptoms. Prescription medications (SSRIs, gabapentin) are more effective than lifestyle changes or supplements alone. Many women find a combination approach very helpful. For some symptoms like mood and sleep, non-hormonal treatments can be equally effective.",
      },
      {
        question: "Can supplements really help with menopause?",
        answer:
          "Some supplements have modest evidence for benefit. Black cohosh may help hot flashes in some women. Vitamin D and calcium are essential for bone health. Omega-3s support mood and heart health. However, effects are generally smaller than prescription treatments. We focus on evidence-based supplements, not expensive unproven products. Always check with us before taking supplements as they can interact with medications.",
      },
      {
        question: "Will lifestyle changes really make a difference?",
        answer:
          "Absolutely. Regular exercise (especially resistance training) reduces hot flashes, improves mood and sleep, maintains bone density, and helps weight management. Mediterranean diet reduces cardiovascular risk and may ease symptoms. Avoiding triggers (spicy food, alcohol, caffeine, stress) helps many women. Good sleep hygiene improves rest quality. Lifestyle changes benefit overall health beyond just menopause symptoms.",
      },
      {
        question: "What if non-hormonal treatments don't work?",
        answer:
          "If you've tried comprehensive non-hormonal approaches without adequate relief, we'll review whether HRT might be suitable. Sometimes contraindications are absolute (recent breast cancer, active blood clot) but often we can reassess risk vs benefit. For women who absolutely cannot take HRT, we can optimize non-hormonal treatments and provide ongoing support for symptom management.",
      },
      {
        question: "Can I combine non-hormonal treatments with HRT?",
        answer:
          "Yes, many women benefit from a combination approach. You might use HRT for hot flashes and vaginal symptoms while adding CBT for mood, exercise for bone health, and lifestyle modifications for overall wellbeing. This integrated approach often provides the best outcomes. We'll help you develop a personalized plan combining the most effective strategies for your situation.",
      },
    ],
  },
  {
    slug: "long-term-health",
    title: "Long-Term Health",
    shortDesc:
      "Protecting your future self from silent post-menopausal risks.",
    icon: HeartPulse,
    color: "from-red-500 to-pink-500",
    iconGradient: "from-red-500/20 to-red-600/20 text-red-600",
    heroImage: "/assets/services/preventative-health.jpg",
    overview:
      "Menopause isn't just about managing symptoms - it's a critical window for preventing future health problems. Falling estrogen levels increase your risk of osteoporosis, cardiovascular disease, and other conditions. Our preventative health program includes comprehensive screening, risk assessment, and proactive interventions to keep you healthy for decades to come. Prevention is always better than cure.",
    whoItsFor: [
      "All menopausal and post-menopausal women",
      "Women with family history of osteoporosis or heart disease",
      "Those concerned about long-term health risks",
      "Women wanting comprehensive health screening",
      "Anyone seeking preventative rather than reactive healthcare",
    ],
    symptoms: [
      "Concerns about bone health and fracture risk",
      "Family history of osteoporosis or cardiovascular disease",
      "Weight gain and difficulty losing weight",
      "Reduced muscle mass and strength",
      "Concerns about sexual function changes",
      "Anxiety about future health",
      "Desire for comprehensive health check",
      "Urinary incontinence or prolapse symptoms",
    ],
    treatmentApproach: {
      title: "Comprehensive Health Protection",
      items: [
        {
          name: "Bone Density Screening (DEXA Scan)",
          description:
            "Gold-standard measurement of bone density to detect osteoporosis early. Recommended for all women at menopause, earlier if risk factors present. Results guide treatment decisions and monitor effectiveness.",
        },
        {
          name: "Cardiovascular Risk Assessment",
          description:
            "Comprehensive evaluation including blood pressure, cholesterol, diabetes screening, BMI, and family history. Calculation of 10-year cardiovascular risk. Personalized advice on risk reduction through lifestyle and medication if needed.",
        },
        {
          name: "Osteoporosis Prevention & Treatment",
          description:
            "HRT for bone protection (most effective when started early). Vitamin D and calcium optimization. Weight-bearing exercise programs. Bisphosphonates or other bone medications if needed. Fall prevention strategies.",
        },
        {
          name: "Sexual Health & Function",
          description:
            "Treatment for vaginal atrophy, painful sex, and reduced libido. Vaginal estrogen, moisturizers, and lubricants. Pelvic floor physiotherapy. Testosterone for low desire. Relationship counseling if helpful.",
        },
        {
          name: "Weight & Metabolic Health",
          description:
            "Personalized weight management programs. Nutritional counseling for menopausal metabolism. Exercise prescription for muscle maintenance. Blood sugar and cholesterol management. Insulin resistance screening and treatment.",
        },
        {
          name: "Pelvic Floor & Bladder Health",
          description:
            "Assessment for urinary incontinence, prolapse, and pelvic floor weakness. Supervised pelvic floor exercises. Pessaries if appropriate. Referral for surgery if needed. Bladder retraining programs.",
        },
      ],
    },
    benefits: [
      "Early detection and prevention of osteoporosis",
      "Reduced fracture risk in later life",
      "Lower cardiovascular disease risk",
      "Maintained sexual function and intimacy",
      "Better bladder control and pelvic floor strength",
      "Healthy weight maintenance",
      "Improved metabolic health",
      "Peace of mind from comprehensive screening",
      "Personalized prevention plan",
      "Maintained independence and quality of life in later years",
    ],
    whyChooseUs: [
      "Comprehensive menopause MOT including all key screenings",
      "Access to DEXA scanning and advanced cardiovascular assessment",
      "Multidisciplinary team including cardiology and bone health specialists",
      "Personalized 10-year health plan",
      "Evidence-based preventative interventions",
      "Regular monitoring and follow-up",
      "Holistic approach to healthy aging",
      "Links with specialist services if complex issues identified",
    ],
    faqs: [
      {
        question: "Why is bone health such a concern after menopause?",
        answer:
          "Estrogen protects bone density. After menopause, bone loss accelerates - you can lose up to 20% of bone density in the 5-7 years following menopause. This increases fracture risk. Hip fractures are particularly serious, with 20% mortality within a year and 50% losing independence. Early screening and treatment can prevent this. HRT is highly effective for bone protection when started early.",
      },
      {
        question: "How does menopause affect heart health?",
        answer:
          "Before menopause, women have lower cardiovascular disease risk than men due to estrogen's protective effects. After menopause, risk increases significantly. By age 70, women's risk equals men's. Risk factors include high cholesterol, high blood pressure, diabetes, weight gain, and inflammation. Starting HRT early (within 10 years of menopause) may provide cardiovascular protection. Lifestyle modifications are crucial.",
      },
      {
        question: "Is it too late to worry about long-term health if I'm already post-menopausal?",
        answer:
          "It's never too late! While earlier intervention is ideal, starting prevention strategies at any age provides benefit. We can assess your current bone density and cardiovascular risk, then develop an appropriate prevention plan. Many treatments remain effective even after menopause. The key is not delaying further - the best time to start is now.",
      },
      {
        question: "Do I need all these tests if I feel fine?",
        answer:
          "Many serious conditions develop silently - you can't feel weak bones or high cholesterol. By the time symptoms appear (a fracture, heart attack), significant damage has occurred. Screening detects problems early when they're easiest to treat. Think of it as an investment in your future health. Most menopausal women have at least one risk factor worth addressing.",
      },
      {
        question: "How often should I have health screening?",
        answer:
          "We recommend comprehensive screening at menopause as a baseline, then regular monitoring based on your risk profile. Bone density typically every 2-5 years depending on results. Cardiovascular screening annually (blood pressure, weight) with blood tests every 2-3 years if normal. We'll create a personalized screening schedule for you.",
      },
    ],
  },
];

// Helper functions
export const getServiceBySlug = (slug: string): MenopauseService | undefined => {
  return menopauseServices.find((service) => service.slug === slug);
};

export const getAllServiceSlugs = (): string[] => {
  return menopauseServices.map((service) => service.slug);
};
