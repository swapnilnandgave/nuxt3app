/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
  safelist: [
    'whitelisted',
    {
      pattern: /bg-(red|green|blue)-(100|200|300|400|500|600|700|800|900)/,
    },
    'h-[200px]'
  ]
}
