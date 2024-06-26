import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                'primary': "#141414",
                'secodary': "#232324",
                'modal': "#303030",
                'accent': "#0047BB",
                'static-green': "#25824F",
                'static-red': "#DB4546",
                'static-orange': "#FFB649",
                'tertiary': "#202021",

                'text-primary': "#E1E3E6",
                'text-secondary': "#B0B1B6",
                'text-tertiary': "#76787A",

            },
            fontFamily: {
                'base': ['"Poppins"', "sans-serif"]
            },
            padding: {
                'grid-x': '213px'
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
        },
    },
    plugins: [],
};
export default config;
