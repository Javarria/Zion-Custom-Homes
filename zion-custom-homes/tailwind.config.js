/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // This section extends the default Tailwind CSS theme with custom colors.
      colors: {
        // 'background' and 'foreground' are CSS variables defined in the global styles.
        // They adapt to the user's preferred color scheme (light or dark mode).
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
