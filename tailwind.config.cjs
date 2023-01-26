/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        'serif': ["Swomun Serif", 'Times New Roman', 'sans-serif'],
        'sans': ['Nexa', 'Helvetica', 'Verdana', 'sans-serif'],
      },
      colors: {
        'hero-blue': "#1A91FF",
        'hero-green': "#14E983",
        'dark-shadow': "#02192F",
        'dark-primary-text': "#D9EFEE",
        'theme-black': "#000103"
      },
      fontSize: {
        'hero': ['128px', '106%'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'menu-radial': 'radial-gradient(220.89% 90.64% at 4.38% 0%, #02192F 0%, #000103 100%)',
        'hero-gradient': 'radial-gradient(192.77% 78.62% at 0% 0%, #02192F 0%, #000103 100%)',
        'hr-gradient': 'linear-gradient(90deg, rgba(26,145,255,.9) 0%, rgba(20,233,131,.6) 40%, rgba(20,233,131,0) 100%)',
        'carousel-gradient': 'linear-gradient(90deg, rgba(255,255,255, 1) 0%, rgba(255,255,255, 1) 66%, rgba(20,233,131,0) 100%)'
      },
      borderRadius: {
        'quirky': "36px 24px 43px 64px",
      },
      dropShadow: {
        'theme-button': '0px 0px 6px rgba(255, 255, 255, 0.10)',
        'theme-button-hover': '0px 0px 8px rgba(255, 255, 255, 0.25'
      },
    },
    plugins: [],
  },
}

