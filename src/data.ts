export type QA = {
  id: number;
  question: string;
  english: string;
  arabic: string;
  icon?: string;
};

export type ListQ = {
  id: number;
  question: string;
  items: { english: string; arabic: string }[];
};

export type Category = {
  id: string;
  title: string;
  defIds: number[];
  listIds: number[];
  mcqIds: number[];
};

export const categories: Category[] = [
  { id: 'concepts', title: 'Health & Illness Concepts', defIds: [1, 2, 3, 4, 5], listIds: [30, 31, 32, 33], mcqIds: [1, 2, 21, 22, 23, 46] },
  { id: 'interventions', title: 'Nursing Interventions', defIds: [], listIds: [34, 35, 36, 37, 38, 39], mcqIds: [47, 48] },
  { id: 'temperature', title: 'Body Temperature', defIds: [6, 7, 25, 26], listIds: [40, 41, 42, 43, 44, 45], mcqIds: [3, 4, 24, 25, 26, 27, 29, 34, 38, 41, 42] },
  { id: 'respiration', title: 'Respiration', defIds: [8, 9, 10, 11, 12, 13, 14, 27], listIds: [46], mcqIds: [5, 6, 7, 8, 9, 19, 30, 36, 37] },
  { id: 'pulse', title: 'Pulse', defIds: [15, 16, 17, 18, 28], listIds: [47, 48], mcqIds: [10, 11, 12, 18, 28, 31, 35, 39, 40, 43, 44, 49, 50] },
  { id: 'bp', title: 'Blood Pressure', defIds: [19, 20, 21, 22, 23, 24, 29], listIds: [49, 50], mcqIds: [13, 14, 15, 16, 17, 20, 32, 33] },
  { id: 'general', title: 'General Overview', defIds: [], listIds: [], mcqIds: [45] }
];

export type MCQ = {
  id: number;
  question: string;
  options: {
    A: string;
    B: string;
    C: string;
    D: string;
  };
  answer: 'A' | 'B' | 'C' | 'D';
};

export const mcqs: MCQ[] = [
  { id: 1, question: "Health means:", options: { A: "Presence of disease", B: "Complete physical, mental, and social well-being", C: "Physical wellness only", D: "Absence of pain" }, answer: "B" },
  { id: 2, question: "Acute illness is characterized by:", options: { A: "Slow progression", B: "Long duration", C: "Rapid onset and short duration", D: "Permanent disability" }, answer: "C" },
  { id: 3, question: "Hyperthermia means:", options: { A: "Low blood pressure", B: "High body temperature", C: "Slow pulse", D: "Low temperature" }, answer: "B" },
  { id: 4, question: "Hypothermia occurs when body temperature is:", options: { A: "> 38°C", B: "37°C", C: "< 35°C", D: "40°C" }, answer: "C" },
  { id: 5, question: "Respiration is:", options: { A: "Blood circulation", B: "Oxygen exchange process", C: "Digestion", D: "Heart contraction" }, answer: "B" },
  { id: 6, question: "Tachypnea means:", options: { A: "Slow breathing", B: "No breathing", C: "Rapid breathing", D: "Painful breathing" }, answer: "C" },
  { id: 7, question: "Bradypnea means:", options: { A: "Fast pulse", B: "Slow breathing", C: "Deep breathing", D: "Irregular breathing" }, answer: "B" },
  { id: 8, question: "Dyspnea means:", options: { A: "Easy breathing", B: "Difficult breathing", C: "Slow pulse", D: "Fever" }, answer: "B" },
  { id: 9, question: "Orthopnea is difficulty breathing in:", options: { A: "Standing position", B: "Upright position", C: "Lying flat", D: "Walking" }, answer: "C" },
  { id: 10, question: "Bradycardia means heart rate:", options: { A: ">100 bpm", B: "<60 bpm", C: "80 bpm", D: "120 bpm" }, answer: "B" },
  { id: 11, question: "Tachycardia means:", options: { A: "Slow pulse", B: "Irregular pulse", C: "Fast heart rate", D: "Weak pulse" }, answer: "C" },
  { id: 12, question: "Arrhythmia means:", options: { A: "Fast breathing", B: "Irregular heartbeat", C: "Low BP", D: "High temperature" }, answer: "B" },
  { id: 13, question: "Blood pressure is:", options: { A: "Heart sounds", B: "Pressure against artery walls", C: "Lung expansion", D: "Pulse deficit" }, answer: "B" },
  { id: 14, question: "Systolic BP occurs during:", options: { A: "Heart relaxation", B: "Ventricular contraction", C: "Sleep", D: "Respiration" }, answer: "B" },
  { id: 15, question: "Diastolic BP occurs during:", options: { A: "Ventricular relaxation", B: "Ventricular contraction", C: "Exercise", D: "Fever" }, answer: "A" },
  { id: 16, question: "Hypertension is:", options: { A: "Low BP", B: "High BP", C: "Slow pulse", D: "Fever" }, answer: "B" },
  { id: 17, question: "Hypotension means:", options: { A: "Increased BP", B: "Low BP", C: "High pulse", D: "High respiration" }, answer: "B" },
  { id: 18, question: "Normal adult pulse rate is:", options: { A: "20–40 bpm", B: "40–60 bpm", C: "60–100 bpm", D: "120–140 bpm" }, answer: "C" },
  { id: 19, question: "Normal respiration rate is:", options: { A: "4–8 breaths/min", B: "12–20 breaths/min", C: "25–30 breaths/min", D: "30–40 breaths/min" }, answer: "B" },
  { id: 20, question: "Normal BP range is:", options: { A: "140/90", B: "150/100", C: "120/80", D: "90/40" }, answer: "C" },
  { id: 21, question: "Which is NOT a nursing role?", options: { A: "Teacher", B: "Communicator", C: "Engineer", D: "Care provider" }, answer: "C" },
  { id: 22, question: "Which is a health care provider?", options: { A: "Pharmacist", B: "Pilot", C: "Driver", D: "Farmer" }, answer: "A" },
  { id: 23, question: "Maslow’s first level is:", options: { A: "Esteem", B: "Safety", C: "Physiological needs", D: "Self-actualization" }, answer: "C" },
  { id: 24, question: "Which is a sign of fever?", options: { A: "Cold skin", B: "Bradycardia", C: "Sweating", D: "Hypotension" }, answer: "C" },
  { id: 25, question: "Hyperthermia intervention includes:", options: { A: "Warm blankets", B: "Ice cream", C: "Antipyretics", D: "Exercise" }, answer: "C" },
  { id: 26, question: "A sign of hypothermia is:", options: { A: "Sweating", B: "Tachycardia", C: "Shivering", D: "Hyperventilation" }, answer: "C" },
  { id: 27, question: "Hypothermia treatment includes:", options: { A: "Cold bath", B: "Warm drinks", C: "Exercise", D: "Ice packs" }, answer: "B" },
  { id: 28, question: "Common site for pulse assessment:", options: { A: "Femoral", B: "Rectal", C: "Tympanic", D: "Axillary" }, answer: "A" },
  { id: 29, question: "Which affects body temperature?", options: { A: "Exercise", B: "Hair color", C: "Height", D: "Eye color" }, answer: "A" },
  { id: 30, question: "Which affects respiration?", options: { A: "Smoking", B: "Weight only", C: "Hair length", D: "Shoe size" }, answer: "A" },
  { id: 31, question: "Which affects pulse rate?", options: { A: "Fever", B: "Nail color", C: "Height", D: "Voice" }, answer: "A" },
  { id: 32, question: "Which affects blood pressure?", options: { A: "Obesity", B: "Hair style", C: "Language", D: "Eye shape" }, answer: "A" },
  { id: 33, question: "BP should NOT be measured in:", options: { A: "Healthy arm", B: "Arm with IV line", C: "Left arm", D: "Right arm" }, answer: "B" },
  { id: 34, question: "Tympanic temperature is measured in:", options: { A: "Mouth", B: "Ear", C: "Axilla", D: "Rectum" }, answer: "B" },
  { id: 35, question: "Pulse is commonly measured at:", options: { A: "Radial artery", B: "Lung", C: "Abdomen", D: "Skull" }, answer: "A" },
  { id: 36, question: "Hyperventilation causes:", options: { A: "Increased CO₂", B: "Decreased CO₂", C: "Low temperature", D: "Bradycardia" }, answer: "B" },
  { id: 37, question: "Hypoventilation causes:", options: { A: "Low CO₂", B: "Increased CO₂", C: "Fever", D: "Fast pulse" }, answer: "B" },
  { id: 38, question: "Which is a temperature site?", options: { A: "Oral", B: "Femoral", C: "Carotid", D: "Apical" }, answer: "A" },
  { id: 39, question: "The “Lub” sound is:", options: { A: "S1", B: "S2", C: "Murmur", D: "Crackles" }, answer: "A" },
  { id: 40, question: "The “Dub” sound is:", options: { A: "S1", B: "S2", C: "Wheezing", D: "Pulse deficit" }, answer: "B" },
  { id: 41, question: "Which patient is at risk for hyperthermia?", options: { A: "Elderly", B: "Teenager", C: "Athlete only", D: "Teacher" }, answer: "A" },
  { id: 42, question: "Which patient is at risk for hypothermia?", options: { A: "Surgical patient", B: "Healthy adult", C: "Athlete", D: "Teacher" }, answer: "A" },
  { id: 43, question: "Pulse site at wrist:", options: { A: "Femoral", B: "Carotid", C: "Radial", D: "Apical" }, answer: "C" },
  { id: 44, question: "Pulse site at neck:", options: { A: "Radial", B: "Carotid", C: "Brachial", D: "Femoral" }, answer: "B" },
  { id: 45, question: "Exercise can affect:", options: { A: "Pulse", B: "Respiration", C: "Temperature", D: "All of the above" }, answer: "D" },
  { id: 46, question: "Which is part of wellness dimensions?", options: { A: "Spiritual", B: "Mechanical", C: "Political", D: "Industrial" }, answer: "A" },
  { id: 47, question: "Quiet environment helps in:", options: { A: "Exercise", B: "Sleep and rest", C: "Fever", D: "Nutrition" }, answer: "B" },
  { id: 48, question: "ROM exercises help:", options: { A: "Nutrition", B: "Exercise", C: "Fever", D: "Respiration only" }, answer: "B" },
  { id: 49, question: "Tachycardia means pulse above:", options: { A: "50 bpm", B: "60 bpm", C: "100 bpm", D: "80 bpm" }, answer: "C" },
  { id: 50, question: "Bradycardia means pulse below:", options: { A: "120 bpm", B: "100 bpm", C: "80 bpm", D: "60 bpm" }, answer: "D" },
];

export const definitions: QA[] = [
  { id: 1, question: "What is Health?", english: "Complete physical, mental, and social well-being.", arabic: "رفاهية جسدية ونفسية واجتماعية كاملة." },
  { id: 2, question: "What is Illness?", english: "A personal state of diminished physical or emotional functioning.", arabic: "حالة يشعر فيها الفرد بتراجع وظائفه الجسدية أو العاطفية." },
  { id: 3, question: "What is Disease?", english: "A biological alteration in body functions that shortens life span.", arabic: "خلل حيوي في وظائف الجسم يقلل العمر الطبيعي." },
  { id: 4, question: "What is Acute Illness?", english: "Severe symptoms with rapid onset and short duration.", arabic: "أعراض شديدة تظهر بسرعة وتستمر لفترة قصيرة." },
  { id: 5, question: "What is Chronic Illness?", english: "Long-term illness lasting 6 months or more.", arabic: "مرض طويل الأمد يستمر 6 أشهر أو أكثر." },
  { id: 6, question: "What is Hyperthermia?", english: "Body temperature above normal range.", arabic: "ارتفاع حرارة الجسم فوق الطبيعي.", icon: "🌡️ > 38°C" },
  { id: 7, question: "What is Hypothermia?", english: "Core body temperature below normal.", arabic: "انخفاض حرارة الجسم الأساسية عن الطبيعي.", icon: "🌡️ < 35°C" },
  { id: 8, question: "What is Respiration?", english: "Exchange of oxygen and carbon dioxide.", arabic: "عملية تبادل الأكسجين وثاني أكسيد الكربون." },
  { id: 9, question: "What is Tachypnea?", english: "Abnormally rapid breathing.", arabic: "تسارع التنفس بشكل غير طبيعي.", icon: "💨 > 20 breaths/min" },
  { id: 10, question: "What is Bradypnea?", english: "Abnormally slow breathing.", arabic: "بطء التنفس بشكل غير طبيعي.", icon: "💨 < 12 breaths/min" },
  { id: 11, question: "What is Dyspnea?", english: "Difficult or painful breathing.", arabic: "صعوبة أو ألم أثناء التنفس." },
  { id: 12, question: "What is Hyperventilation?", english: "Deep rapid breathing lowering blood CO₂.", arabic: "تنفس سريع وعميق يقلل ثاني أكسيد الكربون." },
  { id: 13, question: "What is Hypoventilation?", english: "Slow shallow breathing raising blood CO₂.", arabic: "تنفس بطيء وسطحي يرفع ثاني أكسيد الكربون." },
  { id: 14, question: "What is Orthopnea?", english: "Difficulty breathing except upright position.", arabic: "صعوبة التنفس إلا في وضع الجلوس أو الوقوف." },
  { id: 15, question: "What is a Pulse?", english: "Arterial expansion with each heart contraction.", arabic: "تمدد الشريان مع كل انقباض للقلب." },
  { id: 16, question: "What is Bradycardia?", english: "Abnormally slow heart rate.", arabic: "بطء ضربات القلب.", icon: "💓 < 60 bpm" },
  { id: 17, question: "What is Tachycardia?", english: "Abnormally rapid heart rate.", arabic: "تسارع ضربات القلب.", icon: "💓 > 100 bpm" },
  { id: 18, question: "What is Arrhythmia?", english: "Irregular heartbeat rhythm.", arabic: "عدم انتظام ضربات القلب." },
  { id: 19, question: "What is Blood Pressure?", english: "Pressure of blood against artery walls.", arabic: "ضغط الدم على جدران الشرايين." },
  { id: 20, question: "What is Systolic BP?", english: "Maximum pressure during heart contraction.", arabic: "أعلى ضغط أثناء انقباض القلب." },
  { id: 21, question: "What is Diastolic BP?", english: "Minimum pressure during heart relaxation.", arabic: "أقل ضغط أثناء راحة القلب." },
  { id: 22, question: "What is Hypertension?", english: "Persistently high blood pressure.", arabic: "ارتفاع مستمر في ضغط الدم.", icon: "⬆️ ≥ 130/80 mmHg" },
  { id: 23, question: "What is Hypotension?", english: "Abnormally low blood pressure.", arabic: "انخفاض ضغط الدم بشكل غير طبيعي.", icon: "⬇️ Systolic < 90 mmHg" },
  { id: 24, question: "What is Orthostatic Hypotension?", english: "Sudden BP drop on standing.", arabic: "هبوط مفاجئ في الضغط عند الوقوف." },
  { id: 25, question: "What is Fever (Pyrexia)?", english: "Abnormal increase in body temperature.", arabic: "ارتفاع غير طبيعي في حرارة الجسم.", icon: "🌡️ > 38°C" },
  { id: 26, question: "What is Normal Body Temperature?", english: "Average body temperature around 37°C.", arabic: "متوسط حرارة الجسم الطبيعية حوالي 37°م." },
  { id: 27, question: "What is Normal Respiration Rate?", english: "12–20 breaths per minute.", arabic: "من 12 إلى 20 نفس بالدقيقة." },
  { id: 28, question: "What is Normal Pulse Rate?", english: "60–100 beats per minute.", arabic: "من 60 إلى 100 نبضة بالدقيقة." },
  { id: 29, question: "What is the Normal BP Range?", english: "Less than 120/80 mmHg.", arabic: "أقل من 120/80 ملم زئبق." }
];

export const lists: ListQ[] = [
  {
    id: 30,
    question: "List Nursing Roles.",
    items: [
      { english: "Care Provider", arabic: "مقدم رعاية" },
      { english: "Communicator", arabic: "متواصل" },
      { english: "Teacher", arabic: "معلم" },
      { english: "Client Advocate", arabic: "مدافع عن المريض" }
    ]
  },
  {
    id: 31,
    question: "List Health Care Providers.",
    items: [
      { english: "Nurses", arabic: "تمريض" },
      { english: "Physicians", arabic: "أطباء" },
      { english: "Pharmacists", arabic: "صيادلة" },
      { english: "Physiotherapists", arabic: "علاج طبيعي" }
    ]
  },
  {
    id: 32,
    question: "List Areas of Nursing Practice.",
    items: [
      { english: "Promoting Health", arabic: "تعزيز الصحة" },
      { english: "Preventing Illness", arabic: "الوقاية من المرض" },
      { english: "Restoring Health", arabic: "العلاج" },
      { english: "Palliative Care", arabic: "الرعاية التلطيفية" }
    ]
  },
  {
    id: 33,
    question: "List Maslow’s Hierarchy of Needs.",
    items: [
      { english: "Physiological", arabic: "فسيولوجية" },
      { english: "Safety", arabic: "الأمان" },
      { english: "Love/Belonging", arabic: "الحب والانتماء" },
      { english: "Esteem", arabic: "التقدير" },
      { english: "Self-Actualization", arabic: "تحقيق الذات" }
    ]
  },
  {
    id: 34,
    question: "Nursing Activities for Fluid Needs.",
    items: [
      { english: "Monitor I/O", arabic: "مراقبة السوائل الداخلة والخارجة" },
      { english: "Encourage oral/IV fluids", arabic: "تشجيع السوائل الفموية والوريدية" }
    ]
  },
  {
    id: 35,
    question: "Nursing Activities for Nutritional Needs.",
    items: [
      { english: "Small frequent meals", arabic: "وجبات صغيرة متكررة" },
      { english: "Tube feeding", arabic: "تغذية أنبوبية" }
    ]
  },
  {
    id: 36,
    question: "Nursing Activities for Elimination of Wastes.",
    items: [
      { english: "High fiber/fluid", arabic: "ألياف وسوائل كافية" },
      { english: "Assist to toilet", arabic: "المساعدة للمرحاض" }
    ]
  },
  {
    id: 37,
    question: "Nursing Activities for Sleep and Rest.",
    items: [
      { english: "Quiet environment", arabic: "بيئة هادئة" },
      { english: "Cluster nursing care", arabic: "تجميع الأنشطة التمريضية" }
    ]
  },
  {
    id: 38,
    question: "Nursing Activities for Exercise.",
    items: [
      { english: "Early ambulation", arabic: "المشي المبكر" },
      { english: "ROM exercises", arabic: "تمارين حركة المفاصل" }
    ]
  },
  {
    id: 39,
    question: "Nursing Activities for Safety.",
    items: [
      { english: "Lower bed", arabic: "خفض السرير" },
      { english: "Clear walking paths", arabic: "تنظيف الممرات" }
    ]
  },
  {
    id: 40,
    question: "Factors Affecting Body Temperature.",
    items: [
      { english: "Age", arabic: "العمر" },
      { english: "Exercise", arabic: "الرياضة" },
      { english: "Hormones", arabic: "الهرمونات" },
      { english: "Stress", arabic: "التوتر" }
    ]
  },
  {
    id: 41,
    question: "Clinical Signs of Fever.",
    items: [
      { english: "Chills", arabic: "قشعريرة" },
      { english: "Warm skin", arabic: "جلد دافئ" },
      { english: "Tachycardia", arabic: "تسارع القلب" },
      { english: "Sweating", arabic: "تعرق" }
    ]
  },
  {
    id: 42,
    question: "Nursing Interventions for Hyperthermia.",
    items: [
      { english: "Antipyretics", arabic: "خافضات حرارة" },
      { english: "Cool sponge baths", arabic: "كمادات فاترة" },
      { english: "Fluids", arabic: "سوائل" }
    ]
  },
  {
    id: 43,
    question: "Signs of Hypothermia.",
    items: [
      { english: "Shivering", arabic: "ارتجاف" },
      { english: "Cold pale skin", arabic: "جلد بارد وشاحب" },
      { english: "Bradycardia", arabic: "بطء القلب" }
    ]
  },
  {
    id: 44,
    question: "Nursing Interventions for Hypothermia.",
    items: [
      { english: "Warm blankets", arabic: "أغطية دافئة" },
      { english: "Warm drinks", arabic: "مشروبات دافئة" }
    ]
  },
  {
    id: 45,
    question: "Sites of Body Temperature Measurement.",
    items: [
      { english: "Oral", arabic: "الفم" },
      { english: "Axillary", arabic: "الإبط" },
      { english: "Rectal", arabic: "الشرج" },
      { english: "Tympanic", arabic: "الأذن" }
    ]
  },
  {
    id: 46,
    question: "Factors Affecting Respiration.",
    items: [
      { english: "Exercise", arabic: "الرياضة" },
      { english: "Acute pain", arabic: "الألم الحاد" },
      { english: "Anxiety", arabic: "القلق" },
      { english: "Smoking", arabic: "التدخين" },
      { english: "Narcotics", arabic: "المخدرات والمسكنات" }
    ]
  },
  {
    id: 47,
    question: "Factors Affecting Pulse Rate.",
    items: [
      { english: "Age", arabic: "العمر" },
      { english: "Exercise", arabic: "الرياضة" },
      { english: "Fever", arabic: "الحمى" },
      { english: "Stress", arabic: "التوتر" },
      { english: "Hemorrhage", arabic: "النزيف" }
    ]
  },
  {
    id: 48,
    question: "Sites of Pulse.",
    items: [
      { english: "Carotid", arabic: "السباتي" },
      { english: "Apical", arabic: "قمة القلب" },
      { english: "Brachial", arabic: "العضدي" },
      { english: "Radial", arabic: "الكعبري" },
      { english: "Femoral", arabic: "الفخذي" }
    ]
  },
  {
    id: 49,
    question: "Factors Affecting Blood Pressure.",
    items: [
      { english: "Age", arabic: "العمر" },
      { english: "Stress", arabic: "التوتر" },
      { english: "Obesity", arabic: "السمنة" },
      { english: "Medications", arabic: "الأدوية" },
      { english: "Race", arabic: "العرق" }
    ]
  },
  {
    id: 50,
    question: "Sites to Avoid for BP Measurement.",
    items: [
      { english: "Arm with mastectomy", arabic: "ذراع استئصال الثدي" },
      { english: "Arm with IV line", arabic: "ذراع بها محلول" },
      { english: "Arm with AV fistula", arabic: "ذراع غسيل الكلى" },
      { english: "Injured/casted arm", arabic: "ذراع مصابة أو مجبرة" }
    ]
  }
];
