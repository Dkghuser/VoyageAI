import { NextResponse } from 'next/server';
import OpenAI from "openai";

// Uses Groq's free-tier API (https://console.groq.com) which is OpenAI-SDK compatible.
// Set GROQ_API_KEY in your .env.local file to a key obtained from console.groq.com.
const groq = new OpenAI({
  apiKey: process.env.GROQ_API_KEY,
  baseURL: "https://api.groq.com/openai/v1",
});

export async function POST(req) {
  try {
    const { prompt } = await req.json();

    const chatCompletion = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [
        {
          role: "system",
          content:
            "You are VoyageAI, an expert AI Travel Guide. Your role is to help users plan memorable trips by offering personalized destination suggestions, day-by-day itinerary ideas, accommodation recommendations across all budgets, must-see local attractions, cultural tips, packing advice, and safety information. Always tailor your advice to the user's stated preferences, travel dates, and budget. Keep your tone friendly, enthusiastic, and concise. When listing items, use short bullet points. Never fabricate specific prices or booking URLs.",
        },
        { role: "user", content: prompt },
      ],
      temperature: 0.7,
      max_tokens: 1024,
    });

    return NextResponse.json({
      content: chatCompletion.choices[0].message.content,
    });
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({ error: 'Failed to generate response' }, { status: 500 });
  }
}
