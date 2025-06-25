/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  safelist: [
    'bg-blue-500',
    'text-white',
    'shadow-neumorph',
    'shadow-neumorph-button',
    'bg-gray-100',
    'text-blue-500',
    'text-gray-800',
    'text-gray-600',
    'text-gray-700',
    'hover:text-blue-500',
    'bg-gradient-to-r',
    'from-blue-50',
    'to-blue-100'
  ]
}
