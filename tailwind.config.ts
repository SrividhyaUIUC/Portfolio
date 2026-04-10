import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#132D4B",      // Illinois Dark Blue
                orange: "#E84A27",       // Illinois Orange
                gray: "#707372",         // Illinois Gray
                "accent-yellow": "#FEE951",
                "accent-teal": "#27CFF9",
                "accent-blue": "#016FB9",
                "accent-light-orange": "#E3A535",
                background: "#ffffff",   // Clean white background
                "text-primary": "#132D4B", // Dark Blue for text
                "text-secondary": "#707372", // Gray for secondary text
                accent: "#E84A27",       // Default accent to Orange
            },
            fontFamily: {
                sans: ['var(--font-inter)', 'sans-serif'],
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
            },
        },
    },
    plugins: [],
};
export default config;
