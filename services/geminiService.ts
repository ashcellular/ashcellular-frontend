
import { GoogleGenAI } from "@google/genai";
import { STORE_INFO } from "../constants";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getChatbotResponse = async (message: string) => {
  const systemInstruction = `
    You are a helpful customer service representative for "Ash Cellular" (Ash Cellular PA LLC).
    We are a premium wireless store in Lebanon, PA and an authorized partner of Total Wireless.
    
    Identity:
    - Primary Name: Ash Cellular
    - Partnership: Total Wireless Authorized Retailer
    - Domain: ashcellular.com
    
    Store Details:
    - Address: ${STORE_INFO.address}
    - Phone: ${STORE_INFO.phone}
    - Hours: Mon-Sat (${STORE_INFO.hours.mon_sat}), Sun (${STORE_INFO.hours.sun})
    
    Core Services:
    - Selling the latest Smartphones (iPhone, Samsung, Motorola, etc.)
    - Offering No-Contract Unlimited Plans on the Verizon 5G Network (via Total Wireless)
    - Full range of accessories.
    - Features: Fast local delivery across Lebanon, Express in-store pickup, and professional tech setup.
    
    Guideline:
    Always refer to the store as "Ash Cellular". If people ask about Total Wireless, confirm we are the authorized local center for them.
    Be professional, helpful, and direct customers to our Bowman St location or the products page on ashcellular.com.
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: message,
      config: {
        systemInstruction,
        temperature: 0.7,
      },
    });

    return response.text || "I'm sorry, I'm having trouble connecting right now. Please call us at Ash Cellular: " + STORE_INFO.phone;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I apologize, but I am unable to assist at this moment. Please visit Ash Cellular in person or call " + STORE_INFO.phone;
  }
};
