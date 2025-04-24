module.exports = {
    content: ["./src/**/*.{astro,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            keyframes: {
                "pulse-blur": {
                    "0%, 100%": {
                        transform: "scale(1)",
                        opacity: "0.7",
                        filter: "blur(80px)",
                    },
                    "50%": {
                        transform: "scale(1.1)",
                        opacity: "1",
                        filter: "blur(80px)",
                    },
                },
            },
            animation: {
                "pulse-blur": "pulse-blur 6s ease-in-out infinite",
            },
            fontFamily: {
                poppins: ["Poppins", "sans-serif"],
            },
        },
    },
    plugins: [],
};
