/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts,}'],
  theme: {
    extend: {
      fontFamily: {
        'serif': ["Alliance and Data", "Swomun Serif", 'Times New Roman', 'serif'],
        'sans': [ 'Nexa', 'Helvetica', 'Verdana', 'sans-serif'],
        'mono': ['Andale Mono', 'monospace']
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
        'react': 'url("/src/images/react.svg")',
        'svelte': 'url("/src/images/svelte.svg")',
        'astro': 'url("/src/images/astro.svg")',
        'tailwind': 'url("/src/images/tailwind.svg")',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'card-gradient': 'linear-gradient(159deg, #EDE1DB 42.08%, #8289A1 145.14%)',
        'menu-radial': 'radial-gradient(220.89% 90.64% at 4.38% 0%, #02192F 0%, #000103 100%)',
        'hero-gradient': 'radial-gradient(192.77% 78.62% at 0% 0%, #02192F 0%, #000103 100%)',
        'hr-gradient': 'linear-gradient(90deg, rgba(26,145,255,.9) 0%, rgba(20,233,131,.6) 40%, rgba(20,233,131,0) 100%)',
        'carousel-gradient': 'linear-gradient(90deg, rgba(255,255,255, 1) 0%, rgba(255,255,255, 1) 66%, rgba(20,233,131,0) 100%)',
        'mesh-gradient': 'radial-gradient(at 79% 38%, hsla(0,100%,88%,1) 0px, transparent 50%), radial-gradient(at 100% 70%, hsla(198,100%,77%,1) 0px, transparent 50%), radial-gradient(at 15% 86%, hsla(57,100%,85%,1) 0px, transparent 50%), radial-gradient(at 60% 81%, hsla(165,100%,77%,1) 0px, transparent 50%);'
      },
      borderRadius: {
        'quirky': "36px 24px 43px 64px",
      },
      dropShadow: {
        'theme-button': '0px 0px 6px rgba(255, 255, 255, 0.10)',
        'theme-button-hover': '0px 0px 8px rgba(255, 255, 255, 0.25'
      },
      animation: {
        marquee: 'marquee 25s linear infinite',
        marquee2: 'marquee2 25s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
    },
    plugins: [],
  },
}

