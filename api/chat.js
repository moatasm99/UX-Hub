export default async function handler(req, res) {
    // 1. Setup CORS (Allow connections from your frontend)
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
    res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    try {
        const { message } = req.body;

        // 2. Securely get Key from Server Environment
        const API_KEY = process.env.GEMINI_API_KEY ||
            process.env.NEXT_PUBLIC_GEMINI_API_KEY ||
            process.env.REACT_APP_GEMINI_API_KEY;

        if (!API_KEY) throw new Error("Server Error: API Key is missing.");

        // 3. Call Google API (Server-to-Server) - Using gemini-1.5-flash
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ contents: [{ parts: [{ text: message }] }] })
        });

        const data = await response.json();

        if (!response.ok) throw new Error(data.error?.message || "Google API Error");

        const reply = data.candidates[0].content.parts[0].text;
        res.status(200).json({ reply });

    } catch (error) {
        console.error("Backend Error:", error);
        res.status(500).json({ error: error.message });
    }
}
