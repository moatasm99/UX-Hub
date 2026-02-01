
import { GoogleGenerativeAI } from "@google/generative-ai";

// Use Vite's environment variable convention
const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

// Fallback "Simulated Logic" (Rule-based)
const getSimulatedResponse = (prompt: string): string => {
  const p = prompt.toLowerCase();

  if (p.includes('persona') || p.includes('بيرسونا')) {
    return "البيرسونا (Persona) هي شخصية خيالية بتمثل مجموعة من المستخدمين الحقيقيين. بنعملها عشان نفهم احتياجاتهم وأهدافهم، ومنصممش بناءً على ذوقنا الشخصي. عادة بتتكون من اسم، سن، وظيفة، ومشاكل بتواجههم.";
  }
  if (p.includes('research') || p.includes('بحث')) {
    return "بحث المستخدم (User Research) هو أول وأهم خطوة. بينقسم لنوعين: كمي (Quantitative) زي الاستبيانات والأرقام، ونوعي (Qualitative) زي المقابلات والملاحظة عشان نفهم الـ 'ليه' وراء التصرفات.";
  }
  if (p.includes('test') || p.includes('اختبار')) {
    return "اختبار قابلية الاستخدام (Usability Testing) مش معناه إننا بنختبر المستخدم، إحنا بنختبر التصميم! ببساطة بتطلب من المستخدم يعمل مهمة معينة وتشوف هيقدر يعملها بسهولة ولا هيتعطل.";
  }
  if (p.includes('tool') || p.includes('figma') || p.includes('أدوات')) {
    return "أهم أداة دلوقتي هي Figma للتصميم والبروتوتايب. بس متنساش إن الورقة والقلم هما أسرع وسيلة لتفريغ أفكارك قبل ما تفتح الكمبيوتر!";
  }
  if (p.includes('start') || p.includes('بداية') || p.includes('أبدأ')) {
    return "عشان تبدأ صح، ركز على الأساسيات قبل الأدوات. افهم يعني إيه Empathy، واقرأ كتاب 'The Design of Everyday Things'. وطبق اللي تتعلمه في مشاريع وهمية.";
  }

  return "أنا هنا عشان أساعدك في الـ UX! ممكن تسألني عن الـ Research، الـ Personas، أو إزاي تبدأ في المجال. 😄";
};

export const askUXAI = async (prompt: string) => {
  // 1. Fallback if no API Key found
  if (!API_KEY) {
    console.warn("Gemini API Key missing. Using simulated response.");
    return getSimulatedResponse(prompt);
  }

  try {
    // 2. Try calling Real Gemini API
    const genAI = new GoogleGenerativeAI(API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const systemPrompt = `You are an expert UX Design mentor. 
    Your goal is to help students learn UX design. 
    Keep your answers concise, practical, and in Arabic (Egyptian dialect if possible). 
    You have a friendly, encouraging personality. 
    Refer to topics like Personas, User Research, Information Architecture, and Prototyping.
    
    User Question: ${prompt}`;

    const result = await model.generateContent(systemPrompt);
    const response = result.response;
    const text = response.text();

    return text;

  } catch (error) {
    // 3. Fallback on Error
    console.error("Gemini API Error (Falling back to simulation):", error);
    return getSimulatedResponse(prompt);
  }
};
