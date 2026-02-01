/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./*.{js,ts,jsx,tsx}"
    ],
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                cairo: ['Cairo', 'sans-serif'],
            },
            colors: {
                // Map legacy class 'dark' if needed, but better to use semantic names
                // The existing code uses 'bg-dark', let's map it to our background variable
                dark: 'var(--bg-primary)',

                // Semantic colors
                background: 'var(--bg-primary)',
                foreground: 'var(--text-primary)',
                card: 'var(--card-bg)',
            }
        },
    },
    plugins: [],
}
