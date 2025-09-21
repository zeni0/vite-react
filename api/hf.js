import { InferenceClient } from "@huggingface/inference";

const SYSTEM_PROMPT = `
You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients. You don't need to use every ingredient they mention in your recipe. The recipe can include additional ingredients they didn't mention, but try not to include too many extra ingredients. Format your response in markdown to make it easier to render to a web page
`;

export default async function handler(req, res) {
    
    // Set CORS headers for all requests
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    // Handle the preflight OPTIONS request
    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }
    
    try {
    // The request body is automatically parsed and available on req.body
    const body = req.body;
    const { ingredientsArr } = body;

    if (!ingredientsArr || !Array.isArray(ingredientsArr)) {
      res.status(400).json({ error: "Invalid ingredients list provided." });
      return;
    }

    const hf = new InferenceClient(process.env.HF_ACCESS_TOKEN);

    const response = await hf.chatCompletion({
      model: "mistralai/Mixtral-8x7B-Instruct-v0.1",
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        {
          role: "user",
          content: `I have ${ingredientsArr.join(", ")}. Please give me a recipe you'd recommend I make!`,
        },
      ],
      max_tokens: 1024,
    });

    res.status(200).json({
      recipe: response.choices[0].message.content,
    });
  } catch (err) {
    console.error("API error:", err);
    res.status(500).json({ error: err.message || "Internal Server Error" });
  }
}