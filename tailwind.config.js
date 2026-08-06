import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        glow: '0 20px 120px rgba(56, 189, 248, 0.14)',
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(circle at top, rgba(59, 130, 246, 0.18), transparent 45%), radial-gradient(circle at bottom right, rgba(168, 85, 247, 0.15), transparent 22%)',
      },
      colors: {
        surface: '#0b1220',
        surfaceAlt: '#111828',
        border: 'rgba(148, 163, 184, 0.18)',
      },
    },
  },
  plugins: [],
};

export default config;
