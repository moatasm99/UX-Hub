// Vercel Serverless Function - Secure Gemini API Proxy
// This file runs on the server, NOT in the browser.
// The API Key is safe here.

export default async function handler(req, res) {
    // Only allow POST requests
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const { message } = req.body;

        if (!message) {
            return res.status(400).json({ error: 'Message is required' });
        }

        // Get API Key from Environment (Server-side, secure)
        const API_KEY = process.env.GEMINI_API_KEY;

        if (!API_KEY) {
            console.error('GEMINI_API_KEY is not set in environment variables');
            return res.status(500).json({ error: 'Server configuration error: API Key missing' });
        }

        // Call Google Gemini API
        const googleResponse = await fetch(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`,
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    contents: [{ parts: [{ text: message }] }]
                })
            }
        );

        const data = await googleResponse.json();

        if (!googleResponse.ok) {
            console.error('Gemini API Error:', data.error);
            return res.status(googleResponse.status).json({
                error: data.error?.message || 'Failed to get response from AI'
            });
        }

        // Extract the response text
        const responseText = data.candidates?.[0]?.content?.parts?.[0]?.text;

        if (!responseText) {
            return res.status(500).json({ error: 'No response from AI' });
        }

        // Return success
        return res.status(200).json({ response: responseText });

    } catch (error) {
        console.error('Server Error:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
}
