module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx,css,mdx}',
    './app/**/*.{js,jsx,ts,tsx,css,mdx}',
  ],
  theme: {
    extend: {
      maxWidth: {
        '480': '480px'
      }
    }
  },
  // Safelist everything as a pragmatic fix for build errors from @apply
  safelist: [
    { pattern: /.*/ }
  ],
  plugins: [],
};
