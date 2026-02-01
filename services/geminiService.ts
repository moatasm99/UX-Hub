
import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY;

export const askUXAI = async (prompt: string) => {
  if (!API_KEY) return "API Key is missing.";
  
  try {
    const ai = new GoogleGenAI({ apiKey: API_KEY });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: `You are an expert UX Design mentor. 
        Your goal is to help students learn UX design. 
        Keep your answers concise, practical, and in Arabic (Egyptian dialect if possible). 
        You have a friendly, encouraging personality. 
        Refer to topics like Personas, User Research, Information Architecture, and Prototyping.`
      }
    });
    
    return response.text || "عذراً، حدث خطأ ما. حاول مرة تانية!";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "للأسف مش قادر أرد دلوقتي، جرب في وقت تاني.";
  }
};
