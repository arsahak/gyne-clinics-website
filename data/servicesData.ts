import {
  Droplets,
  AlertCircle,
  Flame,
  Bug,
  ArrowDownCircle,
  Circle,
  Square,
  Maximize2,
  Activity,
  Search,
  Waves,
  Scissors,
  LucideIcon,
} from "lucide-react";

export interface ServiceData {
  slug: string;
  title: string;
  shortTitle: string;
  category: "incontinence" | "prolapse" | "diagnostics";
  categoryLabel: string;
  icon: LucideIcon;
  description: string;
  shortDescription: string;
  image: string;
  symptoms: string[];
  causes: string[];
  treatments: {
    name: string;
    description: string;
  }[];
  benefits: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export const servicesData: ServiceData[] = [
  // Incontinence (Bladder Leakage)
  {
    slug: "stress-incontinence",
    title: "Stress Incontinence",
    shortTitle: "Stress Incontinence",
    category: "incontinence",
    categoryLabel: "Incontinence (Bladder Leakage)",
    icon: Droplets,
    description:
      "Stress incontinence is the involuntary leakage of urine during physical activities that increase abdominal pressure, such as coughing, sneezing, laughing, or exercising. It occurs when the muscles and tissues that support the bladder and control urine release become weakened.",
    shortDescription:
      "Involuntary urine leakage when coughing, sneezing, laughing, or exercising due to weakened pelvic floor muscles.",
    image: "/assets/services/stress-incontinence.jpg",
    symptoms: [
      "Urine leakage when coughing or sneezing",
      "Leakage during physical exercise",
      "Loss of urine when laughing",
      "Leakage when lifting heavy objects",
      "Involuntary leakage during sudden movements",
    ],
    causes: [
      "Pregnancy and childbirth",
      "Menopause and hormonal changes",
      "Obesity and excess weight",
      "Chronic coughing",
      "Previous pelvic surgery",
      "Aging and muscle weakening",
    ],
    treatments: [
      {
        name: "Pelvic Floor Exercises",
        description:
          "Targeted exercises to strengthen the muscles that support the bladder and control urine flow.",
      },
      {
        name: "Bladder Training",
        description:
          "Scheduled voiding and techniques to increase the time between bathroom visits.",
      },
      {
        name: "Pessary Devices",
        description:
          "Medical devices inserted into the vagina to support the bladder and reduce leakage.",
      },
      {
        name: "Minimally Invasive Surgery",
        description:
          "Advanced surgical options including sling procedures to provide additional support.",
      },
    ],
    benefits: [
      "Regain confidence in daily activities",
      "Return to exercise without worry",
      "Improved quality of life",
      "Non-surgical options available",
      "Quick recovery with minimally invasive treatments",
    ],
    faqs: [
      {
        question: "Is stress incontinence common?",
        answer:
          "Yes, stress incontinence affects millions of women worldwide. It's particularly common after childbirth and during menopause, but it's highly treatable.",
      },
      {
        question: "Can stress incontinence be cured without surgery?",
        answer:
          "Many women see significant improvement with pelvic floor exercises, lifestyle changes, and non-surgical treatments. Surgery is typically only recommended when other treatments haven't provided sufficient relief.",
      },
      {
        question: "How long does treatment take to work?",
        answer:
          "Pelvic floor exercises typically show results within 3-6 months of consistent practice. Other treatments may provide faster relief depending on the severity of your condition.",
      },
    ],
  },
  {
    slug: "urge-incontinence",
    title: "Urge Incontinence (Overactive Bladder)",
    shortTitle: "Urge Incontinence",
    category: "incontinence",
    categoryLabel: "Incontinence (Bladder Leakage)",
    icon: AlertCircle,
    description:
      "Urge incontinence, also known as overactive bladder (OAB), is characterized by a sudden, intense urge to urinate followed by involuntary urine loss. This condition occurs when the bladder muscle contracts unexpectedly, often without warning.",
    shortDescription:
      "Sudden, intense urge to urinate followed by involuntary leakage, often called overactive bladder.",
    image: "/assets/services/urge-incontinence.jpg",
    symptoms: [
      "Sudden, strong urge to urinate",
      "Frequent urination (more than 8 times daily)",
      "Waking up multiple times at night to urinate",
      "Inability to reach the toilet in time",
      "Urinary urgency affecting daily activities",
    ],
    causes: [
      "Neurological conditions",
      "Bladder irritation or infection",
      "Hormonal changes during menopause",
      "Caffeine and alcohol consumption",
      "Certain medications",
      "Diabetes and related conditions",
    ],
    treatments: [
      {
        name: "Behavioral Therapies",
        description:
          "Bladder training and scheduled voiding to help regain control over urination patterns.",
      },
      {
        name: "Medication",
        description:
          "Anticholinergic or beta-3 agonist medications to calm overactive bladder muscles.",
      },
      {
        name: "Botox Injections",
        description:
          "Bladder Botox injections to relax the bladder muscle and reduce urgency episodes.",
      },
      {
        name: "Nerve Stimulation",
        description:
          "Sacral neuromodulation or PTNS to regulate nerve signals controlling the bladder.",
      },
    ],
    benefits: [
      "Reduced urgency and frequency",
      "Better sleep without nighttime interruptions",
      "Increased confidence in social situations",
      "Multiple treatment options available",
      "Significant improvement in quality of life",
    ],
    faqs: [
      {
        question: "What triggers overactive bladder?",
        answer:
          "Common triggers include caffeine, alcohol, spicy foods, artificial sweeteners, and cold weather. Stress and anxiety can also worsen symptoms.",
      },
      {
        question: "Is overactive bladder the same as stress incontinence?",
        answer:
          "No, they're different conditions. Stress incontinence involves leakage during physical activity, while urge incontinence involves a sudden, strong urge to urinate. Some women experience both (mixed incontinence).",
      },
      {
        question: "Can lifestyle changes help?",
        answer:
          "Yes, reducing caffeine and alcohol, maintaining a healthy weight, and practicing bladder training can significantly improve symptoms for many women.",
      },
    ],
  },
  {
    slug: "painful-bladder",
    title: "Painful Bladder Syndrome",
    shortTitle: "Painful Bladder",
    category: "incontinence",
    categoryLabel: "Incontinence (Bladder Leakage)",
    icon: Flame,
    description:
      "Painful Bladder Syndrome, also known as Interstitial Cystitis (IC), is a chronic condition causing bladder pressure, bladder pain, and sometimes pelvic pain. The severity ranges from mild discomfort to severe pain that significantly impacts quality of life.",
    shortDescription:
      "Chronic bladder pressure and pain, also known as Interstitial Cystitis, affecting daily comfort and wellbeing.",
    image: "/assets/services/painful-bladder.jpg",
    symptoms: [
      "Chronic pelvic pain",
      "Persistent urge to urinate",
      "Frequent urination in small amounts",
      "Pain during bladder filling",
      "Pain during or after intercourse",
      "Symptoms that worsen during menstruation",
    ],
    causes: [
      "Defects in the bladder lining",
      "Autoimmune reactions",
      "Allergic responses",
      "Hereditary factors",
      "Previous bladder infections",
      "Nervous system dysfunction",
    ],
    treatments: [
      {
        name: "Dietary Modifications",
        description:
          "Identifying and eliminating trigger foods that irritate the bladder lining.",
      },
      {
        name: "Oral Medications",
        description:
          "Pentosan polysulfate sodium and other medications to help repair and protect the bladder lining.",
      },
      {
        name: "Bladder Instillations",
        description:
          "Direct medication delivery into the bladder to reduce inflammation and pain.",
      },
      {
        name: "Physical Therapy",
        description:
          "Specialized pelvic floor therapy to release muscle tension and reduce pain.",
      },
    ],
    benefits: [
      "Reduced chronic pain",
      "Improved bladder comfort",
      "Better understanding of personal triggers",
      "Comprehensive treatment approach",
      "Ongoing support and management",
    ],
    faqs: [
      {
        question: "Is Painful Bladder Syndrome curable?",
        answer:
          "While there's no definitive cure, many patients achieve significant symptom relief through a combination of treatments. The goal is to find the right treatment plan that works for you.",
      },
      {
        question: "What foods should I avoid?",
        answer:
          "Common triggers include citrus fruits, tomatoes, coffee, alcohol, spicy foods, and artificial sweeteners. Keeping a food diary can help identify your personal triggers.",
      },
      {
        question: "How is it different from a UTI?",
        answer:
          "Unlike UTIs, Painful Bladder Syndrome shows no bacterial infection on urine tests. The symptoms may feel similar but require different treatment approaches.",
      },
    ],
  },
  {
    slug: "utis",
    title: "Recurrent UTIs",
    shortTitle: "Recurrent UTIs",
    category: "incontinence",
    categoryLabel: "Incontinence (Bladder Leakage)",
    icon: Bug,
    description:
      "Recurrent Urinary Tract Infections (UTIs) are defined as having two or more infections in six months or three or more in a year. This frustrating condition requires comprehensive investigation and a tailored prevention strategy.",
    shortDescription:
      "Frequent urinary tract infections requiring specialized investigation and prevention strategies.",
    image: "/assets/services/utis.jpg",
    symptoms: [
      "Burning sensation during urination",
      "Frequent urge to urinate",
      "Cloudy or strong-smelling urine",
      "Pelvic pain or discomfort",
      "Blood in urine",
      "Feeling of incomplete bladder emptying",
    ],
    causes: [
      "Anatomical factors",
      "Sexual activity",
      "Menopause and estrogen decline",
      "Incomplete bladder emptying",
      "Catheter use",
      "Weakened immune system",
    ],
    treatments: [
      {
        name: "Antibiotic Prophylaxis",
        description:
          "Low-dose preventive antibiotics taken regularly or after triggers like intercourse.",
      },
      {
        name: "Vaginal Estrogen",
        description:
          "Topical estrogen therapy to restore healthy vaginal flora and prevent infections.",
      },
      {
        name: "D-Mannose Supplements",
        description:
          "Natural sugar supplement that may prevent bacteria from adhering to the bladder wall.",
      },
      {
        name: "Comprehensive Investigation",
        description:
          "Thorough testing including cystoscopy and imaging to identify underlying causes.",
      },
    ],
    benefits: [
      "Break the cycle of recurrent infections",
      "Identify and address root causes",
      "Reduce antibiotic dependency",
      "Improve overall bladder health",
      "Personalized prevention strategies",
    ],
    faqs: [
      {
        question: "Why do I keep getting UTIs?",
        answer:
          "Recurrent UTIs can be caused by various factors including anatomy, hormonal changes, sexual activity, or incomplete bladder emptying. A thorough evaluation helps identify your specific risk factors.",
      },
      {
        question: "Are antibiotics the only option?",
        answer:
          "No, there are several non-antibiotic prevention strategies including vaginal estrogen, D-Mannose supplements, probiotics, and lifestyle modifications that can help reduce infection frequency.",
      },
      {
        question: "When should I see a specialist?",
        answer:
          "If you're experiencing two or more UTIs in six months or three in a year, it's time to see a specialist for comprehensive evaluation and a tailored prevention plan.",
      },
    ],
  },

  // Prolapse Problems
  {
    slug: "uterine-prolapse",
    title: "Uterine Prolapse",
    shortTitle: "Uterine Prolapse",
    category: "prolapse",
    categoryLabel: "Prolapse Problems",
    icon: ArrowDownCircle,
    description:
      "Uterine prolapse occurs when the pelvic floor muscles and ligaments stretch and weaken, providing inadequate support for the uterus. This causes the uterus to slip down into or protrude out of the vagina, creating discomfort and affecting quality of life.",
    shortDescription:
      "When weakened pelvic floor muscles allow the uterus to descend into or protrude from the vagina.",
    image: "/assets/services/uterine-prolapse.jpg",
    symptoms: [
      "Sensation of heaviness in the pelvis",
      "Tissue protruding from the vagina",
      "Difficulty with urination",
      "Problems with bowel movements",
      "Lower back pain",
      "Discomfort during intercourse",
    ],
    causes: [
      "Pregnancy and vaginal delivery",
      "Menopause and decreased estrogen",
      "Chronic constipation and straining",
      "Heavy lifting over time",
      "Chronic coughing",
      "Previous pelvic surgery",
    ],
    treatments: [
      {
        name: "Pelvic Floor Exercises",
        description:
          "Strengthening exercises to improve muscle support and potentially reverse mild prolapse.",
      },
      {
        name: "Pessary Fitting",
        description:
          "Custom-fitted support devices inserted into the vagina to hold the uterus in place.",
      },
      {
        name: "Vaginal Repair Surgery",
        description:
          "Surgical procedure to repair and strengthen the supporting tissues.",
      },
      {
        name: "Hysterectomy",
        description:
          "Removal of the uterus may be recommended for severe cases or when other treatments fail.",
      },
    ],
    benefits: [
      "Relief from uncomfortable symptoms",
      "Restored pelvic organ position",
      "Improved bladder and bowel function",
      "Multiple treatment options",
      "Personalized care approach",
    ],
    faqs: [
      {
        question: "Can uterine prolapse heal on its own?",
        answer:
          "Mild prolapse may improve with pelvic floor exercises, but moderate to severe prolapse typically requires intervention such as a pessary or surgery.",
      },
      {
        question: "Will I need a hysterectomy?",
        answer:
          "Not necessarily. Many women find relief with conservative treatments like pessaries. Surgery is typically considered when other options haven't provided adequate relief.",
      },
      {
        question: "Can I still have sex with uterine prolapse?",
        answer:
          "Yes, though some women experience discomfort. Treatment can significantly improve comfort during intimacy. Discuss your concerns with your specialist.",
      },
    ],
  },
  {
    slug: "cystocele",
    title: "Cystocele (Bladder Prolapse)",
    shortTitle: "Cystocele",
    category: "prolapse",
    categoryLabel: "Prolapse Problems",
    icon: Circle,
    description:
      "A cystocele, commonly called a prolapsed bladder, occurs when the supportive tissue between a woman's bladder and vaginal wall weakens and stretches, allowing the bladder to bulge into the vagina. This condition can cause urinary problems and discomfort.",
    shortDescription:
      "Bladder prolapse where the bladder drops and bulges into the vaginal wall due to weakened support.",
    image: "/assets/services/cystocele.jpg",
    symptoms: [
      "Feeling of fullness or pressure in the pelvis",
      "Bulge of tissue visible at vaginal opening",
      "Difficulty emptying the bladder completely",
      "Frequent urinary tract infections",
      "Stress incontinence",
      "Discomfort that worsens with standing or lifting",
    ],
    causes: [
      "Vaginal childbirth",
      "Chronic straining from constipation",
      "Heavy lifting",
      "Menopause",
      "Previous hysterectomy",
      "Genetic factors affecting connective tissue",
    ],
    treatments: [
      {
        name: "Pelvic Floor Physiotherapy",
        description:
          "Specialized exercises and techniques to strengthen the pelvic floor muscles.",
      },
      {
        name: "Vaginal Pessary",
        description:
          "A removable device placed in the vagina to support the bladder and vaginal walls.",
      },
      {
        name: "Anterior Colporrhaphy",
        description:
          "Surgical repair of the front vaginal wall to restore bladder support.",
      },
      {
        name: "Lifestyle Modifications",
        description:
          "Weight management, treating chronic cough, and avoiding heavy lifting.",
      },
    ],
    benefits: [
      "Improved bladder function",
      "Relief from pelvic pressure",
      "Better urinary control",
      "Non-surgical options available",
      "Enhanced quality of life",
    ],
    faqs: [
      {
        question: "How common is cystocele?",
        answer:
          "Bladder prolapse is very common, especially in women who have had vaginal deliveries. About 50% of women who have given birth experience some degree of pelvic organ prolapse.",
      },
      {
        question: "Can a pessary be worn long-term?",
        answer:
          "Yes, many women use pessaries successfully for years. Regular check-ups are needed to ensure proper fit and prevent complications.",
      },
      {
        question: "Will the prolapse get worse without treatment?",
        answer:
          "Prolapse may worsen over time, especially with continued straining or heavy lifting. Early treatment can prevent progression and provide better outcomes.",
      },
    ],
  },
  {
    slug: "rectocele",
    title: "Rectocele (Posterior Prolapse)",
    shortTitle: "Rectocele",
    category: "prolapse",
    categoryLabel: "Prolapse Problems",
    icon: Square,
    description:
      "A rectocele occurs when the tissue wall separating the rectum from the vagina weakens, allowing the rectum to bulge into the back wall of the vagina. This can cause difficulties with bowel movements and pelvic discomfort.",
    shortDescription:
      "Posterior prolapse where the rectum bulges into the back wall of the vagina, affecting bowel function.",
    image: "/assets/services/rectocele.jpg",
    symptoms: [
      "Difficulty having bowel movements",
      "Feeling of incomplete bowel emptying",
      "Need to press on vagina to complete bowel movement",
      "Sensation of bulge in vagina",
      "Rectal pressure or fullness",
      "Discomfort during intercourse",
    ],
    causes: [
      "Vaginal childbirth, especially multiple deliveries",
      "Chronic constipation",
      "Chronic coughing",
      "Repeated heavy lifting",
      "Obesity",
      "Aging and weakening tissues",
    ],
    treatments: [
      {
        name: "Dietary and Bowel Management",
        description:
          "High-fiber diet and proper toileting techniques to reduce straining and symptoms.",
      },
      {
        name: "Pelvic Floor Rehabilitation",
        description:
          "Physical therapy to strengthen pelvic muscles and improve bowel function.",
      },
      {
        name: "Pessary Support",
        description:
          "Vaginal device to provide support and reduce symptoms without surgery.",
      },
      {
        name: "Posterior Colporrhaphy",
        description:
          "Surgical repair to strengthen the tissue between the vagina and rectum.",
      },
    ],
    benefits: [
      "Improved bowel function",
      "Relief from pelvic pressure",
      "Better quality of life",
      "Conservative options available first",
      "Long-lasting surgical results",
    ],
    faqs: [
      {
        question: "Is rectocele serious?",
        answer:
          "While not life-threatening, rectocele can significantly impact quality of life. Many women find relief with conservative treatments, while others may benefit from surgery.",
      },
      {
        question: "Can diet changes help?",
        answer:
          "Yes, a high-fiber diet with adequate fluids can soften stool and reduce straining, which may improve symptoms and prevent worsening.",
      },
      {
        question: "What's the recovery time after surgery?",
        answer:
          "Most women return to normal activities within 4-6 weeks after rectocele repair. Full healing may take up to 3 months.",
      },
    ],
  },
  {
    slug: "vaginal-laxity",
    title: "Vaginal Laxity",
    shortTitle: "Vaginal Laxity",
    category: "prolapse",
    categoryLabel: "Prolapse Problems",
    icon: Maximize2,
    description:
      "Vaginal laxity refers to the looseness or relaxation of the vaginal canal, often occurring after childbirth or with aging. This condition can affect intimate sensation for both partners and may impact self-confidence and sexual satisfaction.",
    shortDescription:
      "Vaginal looseness after childbirth or aging that can affect sensation and intimate relationships.",
    image: "/assets/services/vaginal-laxity.jpg",
    symptoms: [
      "Reduced sensation during intercourse",
      "Decreased sexual satisfaction",
      "Feeling of vaginal looseness",
      "Difficulty achieving orgasm",
      "Tampons falling out easily",
      "Air entering the vagina during exercise",
    ],
    causes: [
      "Vaginal childbirth",
      "Multiple pregnancies",
      "Aging and collagen loss",
      "Menopause and hormonal changes",
      "Genetic factors",
      "Chronic straining",
    ],
    treatments: [
      {
        name: "Pelvic Floor Exercises",
        description:
          "Kegel exercises and pelvic floor training to strengthen vaginal muscles.",
      },
      {
        name: "Laser Vaginal Rejuvenation",
        description:
          "Non-surgical laser treatment to stimulate collagen and tighten vaginal tissue.",
      },
      {
        name: "Radiofrequency Treatment",
        description:
          "Non-invasive treatment using heat energy to promote tissue tightening.",
      },
      {
        name: "Vaginoplasty",
        description:
          "Surgical procedure to tighten and reconstruct vaginal muscles and tissues.",
      },
    ],
    benefits: [
      "Improved intimate sensation",
      "Enhanced sexual satisfaction",
      "Increased confidence",
      "Non-surgical options available",
      "Quick recovery treatments",
    ],
    faqs: [
      {
        question: "Is vaginal laxity normal after childbirth?",
        answer:
          "Some degree of vaginal looseness after childbirth is common and normal. The vagina has remarkable ability to recover, but some women may experience persistent laxity.",
      },
      {
        question: "Do non-surgical treatments really work?",
        answer:
          "Many women report improved sensation and tightness with non-surgical treatments like laser and radiofrequency therapy. Results vary, and multiple sessions may be needed.",
      },
      {
        question: "How long do results last?",
        answer:
          "Surgical results are typically long-lasting. Non-surgical treatments may need periodic maintenance, usually annually, to maintain results.",
      },
    ],
  },

  // Advanced Diagnostics
  {
    slug: "urodynamics",
    title: "Urodynamics Testing",
    shortTitle: "Urodynamics",
    category: "diagnostics",
    categoryLabel: "Advanced Diagnostics",
    icon: Activity,
    description:
      "Urodynamic testing is a comprehensive assessment of how well your bladder, sphincters, and urethra are storing and releasing urine. These tests help diagnose the cause of urinary symptoms and guide treatment decisions.",
    shortDescription:
      "Comprehensive bladder function testing to diagnose urinary problems and guide treatment decisions.",
    image: "/assets/services/urodynamics.jpg",
    symptoms: [
      "Unexplained urinary incontinence",
      "Difficulty emptying the bladder",
      "Frequent urination",
      "Urinary urgency",
      "Recurrent urinary tract infections",
      "Planning for prolapse or incontinence surgery",
    ],
    causes: [
      "Bladder muscle dysfunction",
      "Urethral obstruction",
      "Nerve problems affecting the bladder",
      "Weakened pelvic floor muscles",
      "Previous pelvic surgery",
      "Neurological conditions",
    ],
    treatments: [
      {
        name: "Uroflowmetry",
        description:
          "Measures the speed and volume of urination to assess bladder emptying.",
      },
      {
        name: "Cystometry",
        description:
          "Measures bladder pressure during filling and emptying to assess function.",
      },
      {
        name: "Pressure Flow Study",
        description:
          "Combined pressure and flow measurements to identify bladder outlet obstruction.",
      },
      {
        name: "Video Urodynamics",
        description:
          "Advanced imaging combined with pressure measurements for detailed assessment.",
      },
    ],
    benefits: [
      "Accurate diagnosis of bladder problems",
      "Tailored treatment recommendations",
      "Better surgical planning",
      "Identification of hidden problems",
      "Objective measurement of symptoms",
    ],
    faqs: [
      {
        question: "Is urodynamic testing painful?",
        answer:
          "Most women find the test uncomfortable but not painful. A thin catheter is placed in the bladder, which may cause mild discomfort. The test typically takes 30-45 minutes.",
      },
      {
        question: "How do I prepare for the test?",
        answer:
          "You'll be asked to arrive with a comfortably full bladder. Avoid caffeine on the day of the test. Continue your regular medications unless advised otherwise.",
      },
      {
        question: "When are urodynamics recommended?",
        answer:
          "Urodynamics may be recommended when initial treatments haven't worked, before surgery for incontinence or prolapse, or when symptoms are complex or unusual.",
      },
    ],
  },
  {
    slug: "cystoscopy",
    title: "Cystoscopy",
    shortTitle: "Cystoscopy",
    category: "diagnostics",
    categoryLabel: "Advanced Diagnostics",
    icon: Search,
    description:
      "Cystoscopy is a procedure that allows direct visualization of the inside of the bladder and urethra using a thin, flexible camera called a cystoscope. This helps diagnose and sometimes treat various bladder conditions.",
    shortDescription:
      "Camera examination of the bladder and urethra to diagnose and treat bladder conditions.",
    image: "/assets/services/cystoscopy.jpg",
    symptoms: [
      "Blood in urine",
      "Recurrent urinary tract infections",
      "Painful urination",
      "Unexplained urinary symptoms",
      "Bladder pain or pressure",
      "Suspected bladder abnormalities",
    ],
    causes: [
      "Suspected bladder tumors or growths",
      "Bladder stones",
      "Interstitial cystitis evaluation",
      "Urethral stricture",
      "Investigation of bleeding",
      "Follow-up after bladder treatment",
    ],
    treatments: [
      {
        name: "Flexible Cystoscopy",
        description:
          "Outpatient procedure using a flexible scope with local anesthetic.",
      },
      {
        name: "Rigid Cystoscopy",
        description:
          "Procedure under sedation allowing for therapeutic interventions if needed.",
      },
      {
        name: "Biopsy Collection",
        description:
          "Tissue samples can be taken during cystoscopy for laboratory analysis.",
      },
      {
        name: "Treatment Procedures",
        description:
          "Small polyps or stones can be removed during the same procedure.",
      },
    ],
    benefits: [
      "Direct visualization of bladder",
      "Accurate diagnosis",
      "Same-day outpatient procedure",
      "Minimal recovery time",
      "Immediate treatment possible",
    ],
    faqs: [
      {
        question: "How long does a cystoscopy take?",
        answer:
          "A flexible cystoscopy typically takes just 5-10 minutes. Rigid cystoscopy may take longer, especially if treatment is performed.",
      },
      {
        question: "Is cystoscopy painful?",
        answer:
          "Local anesthetic gel is used to minimize discomfort. Most women describe the sensation as unusual pressure rather than pain.",
      },
      {
        question: "What can I expect after the procedure?",
        answer:
          "You may experience mild burning with urination for a day or two and see a small amount of blood in your urine. Most women return to normal activities immediately.",
      },
    ],
  },
  {
    slug: "ultrasound",
    title: "Pelvic Floor Ultrasound",
    shortTitle: "Pelvic Ultrasound",
    category: "diagnostics",
    categoryLabel: "Advanced Diagnostics",
    icon: Waves,
    description:
      "Pelvic floor ultrasound is a non-invasive imaging technique that uses sound waves to visualize the pelvic organs, muscles, and supporting structures. This helps assess prolapse, bladder function, and pelvic floor muscle activity.",
    shortDescription:
      "Non-invasive imaging using sound waves to assess pelvic organs, muscles, and supporting structures.",
    image: "/assets/services/ultrasound.jpg",
    symptoms: [
      "Pelvic organ prolapse symptoms",
      "Urinary incontinence",
      "Difficulty with bladder emptying",
      "Pelvic pain",
      "Assessment before pelvic surgery",
      "Evaluation of previous surgical repairs",
    ],
    causes: [
      "Prolapse assessment",
      "Bladder and urethral evaluation",
      "Pelvic floor muscle assessment",
      "Post-surgical follow-up",
      "Mesh complication investigation",
      "Fistula detection",
    ],
    treatments: [
      {
        name: "Transabdominal Ultrasound",
        description:
          "Imaging through the abdomen to assess bladder filling and emptying.",
      },
      {
        name: "Transvaginal Ultrasound",
        description:
          "Detailed imaging of pelvic structures using a vaginal probe.",
      },
      {
        name: "Transperineal Ultrasound",
        description:
          "Specialized imaging of the pelvic floor during rest and movement.",
      },
      {
        name: "3D/4D Ultrasound",
        description:
          "Advanced imaging providing three-dimensional views of pelvic structures.",
      },
    ],
    benefits: [
      "No radiation exposure",
      "Non-invasive and comfortable",
      "Real-time imaging during movement",
      "Detailed pelvic floor assessment",
      "Helps plan treatment approach",
    ],
    faqs: [
      {
        question: "How should I prepare for pelvic ultrasound?",
        answer:
          "For transabdominal ultrasound, you may be asked to have a full bladder. No special preparation is usually needed for transvaginal or transperineal scans.",
      },
      {
        question: "Is pelvic ultrasound uncomfortable?",
        answer:
          "Pelvic ultrasound is generally comfortable. Transvaginal scanning involves inserting a slim probe, which may cause mild pressure but shouldn't be painful.",
      },
      {
        question: "What can pelvic ultrasound detect?",
        answer:
          "It can assess prolapse severity, bladder function, pelvic floor muscle activity, and identify complications from previous surgery including mesh position.",
      },
    ],
  },
  {
    slug: "biopsy",
    title: "Biopsy Services",
    shortTitle: "Biopsy",
    category: "diagnostics",
    categoryLabel: "Advanced Diagnostics",
    icon: Scissors,
    description:
      "Biopsy services involve taking small tissue samples from the bladder, vagina, or vulva for laboratory analysis. This helps diagnose various conditions including infections, inflammation, and abnormal cell changes.",
    shortDescription:
      "Tissue sampling for laboratory analysis to diagnose infections, inflammation, and abnormal changes.",
    image: "/assets/services/biopsy.jpg",
    symptoms: [
      "Unexplained vaginal or vulvar lesions",
      "Abnormal cells on screening tests",
      "Chronic vulvar pain or itching",
      "Suspicious bladder findings",
      "Persistent unexplained symptoms",
      "Follow-up of previous abnormalities",
    ],
    causes: [
      "Investigation of abnormal tissue",
      "Diagnosis of vulvar skin conditions",
      "Bladder tumor assessment",
      "Interstitial cystitis confirmation",
      "Cancer screening and diagnosis",
      "Monitoring of pre-cancerous changes",
    ],
    treatments: [
      {
        name: "Vulvar Biopsy",
        description:
          "Small tissue sample from the vulva under local anesthetic to diagnose skin conditions.",
      },
      {
        name: "Vaginal Biopsy",
        description:
          "Tissue sampling from the vaginal wall to investigate abnormalities.",
      },
      {
        name: "Bladder Biopsy",
        description:
          "Tissue collection during cystoscopy to diagnose bladder conditions.",
      },
      {
        name: "Endometrial Biopsy",
        description:
          "Sampling of the uterine lining to investigate abnormal bleeding.",
      },
    ],
    benefits: [
      "Accurate diagnosis",
      "Quick outpatient procedure",
      "Minimal discomfort",
      "Essential for treatment planning",
      "Early detection of abnormalities",
    ],
    faqs: [
      {
        question: "Is a biopsy painful?",
        answer:
          "Local anesthetic is used to numb the area. You may feel pressure or mild discomfort, but the procedure is generally well-tolerated.",
      },
      {
        question: "How long do results take?",
        answer:
          "Biopsy results typically take 1-2 weeks. Your doctor will contact you to discuss the findings and any next steps.",
      },
      {
        question: "What happens after a biopsy?",
        answer:
          "The biopsy site may be slightly sore for a few days. You may have minor bleeding or discharge. Most women return to normal activities immediately.",
      },
    ],
  },
];

export const getServiceBySlug = (slug: string): ServiceData | undefined => {
  return servicesData.find((service) => service.slug === slug);
};

export const getServicesByCategory = (
  category: "incontinence" | "prolapse" | "diagnostics"
): ServiceData[] => {
  return servicesData.filter((service) => service.category === category);
};
