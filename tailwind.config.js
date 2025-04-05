/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./layouts/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    'bg-primary',
    'text-white',
    'px-4',
    'py-2',
    'rounded-md',
    'flex',
    'items-center',
    'justify-center',
    'gap-2',
    'hover:bg-primary-dark',
    'transition-colors',
    'duration-200',
    'sm:px-6', // Explicitly safelist sm:px-6
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#5271ff',
          light: '#8496ff',
          dark: '#3e57cc',
        },
        background: '#ffffff',
        foreground: '#111827',
        muted: '#f3f4f6',
        'muted-foreground': '#6b7280',
        border: '#e5e7eb',
        accent: '#f8fafc',
        success: '#22c55e',
        error: '#ef4444',
        warning: '#f59e0b',
      },
      padding: {
        '6': '1.5rem', // Define padding value for px-6
      },
    },
  },
  plugins: [],
};
