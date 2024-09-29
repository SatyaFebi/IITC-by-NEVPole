/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#CF0000",
                secondary: "#F30223",
                success: "#0FBB00",
                danger: "#dc3545", 
                warning: "#ffc107", 
                info: "#0dcaf0", 
                light: "#f8f9fa", 
                dark: "#212529",
            },
        },
    },
    plugins: [],
};
