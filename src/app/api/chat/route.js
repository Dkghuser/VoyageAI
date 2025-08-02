import { NextResponse } from 'next/server';
import OpenAI from "openai";

export async function POST(req) {
  try {
    const { prompt } = await req.json();

    const openai = new OpenAI({
      apiKey: process.env.VOYAGEAI_APP_API_KEY,
      baseURL: "https://api.aimlapi.com",
    });

    const chatCompletion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo-instruct",
      messages: [
        {
          role: "system",
          content:
            "You are VoyageAI, an AI Travel Guide chatbot designed to assist users in planning their trips. Provide personalized recommendations for destinations, itineraries, accommodations, local attractions, and travel tips. Always keep recommendations user-specific and regionally relevant. Respond with a friendly and informative tone, ensuring concise yet helpful answers.",
        },
        { role: "user", content: prompt },
      ],
      temperature: 0.7,
      max_tokens: 100,
    });

    return NextResponse.json({
      content: chatCompletion.choices[0].message.content,
    });
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({ error: 'Failed to generate response' }, { status: 500 });
  }
}
