import OpenAI from "openai";

export async function POST(request) {
    try {
        const { prompt } = await request.json();
        
        if (!prompt) {
            return Response.json(
                { error: "Prompt is required" },
                { status: 400 }
            );
        }

        if (!process.env.VOYAGEAI_APP_API_KEY) {
            return Response.json(
                { error: "API key not configured" },
                { status: 500 }
            );
        }

        const openAI = new OpenAI({
            apiKey: process.env.VOYAGEAI_APP_API_KEY,
            baseURL: "https://api.aimlapi.com"
        });

        const chatCompletion = await openAI.chat.completions.create({
            model: "gpt-3.5-turbo-instruct",
            messages: [
                {
                    role: "system", 
                    content: "You are VoyageAI, an AI Travel Guide chatbot designed to assist users in planning their trips. Provide personalized recommendations for destinations, itineraries, accommodations, local attractions, and travel tips. Always keep recommendations user-specific and regionally relevant. Respond with a friendly and informative tone, ensuring concise yet helpful answers."
                },
                { role: "user", content: prompt }
            ],
            temperature: 0.7,
            max_tokens: 100
        });

        const response = chatCompletion.choices[0].message.content;
        
        return Response.json({ response });
        
    } catch (error) {
        console.error("OpenAI API error:", error);
        return Response.json(
            { error: "Failed to get AI response" },
            { status: 500 }
        );
    }
}