import { PluginAPI } from 'tailwindcss/types/config';
import { default as flattenColorPalette } from 'tailwindcss/lib/util/flattenColorPalette';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [addVariablesForColors],
};
// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }: PluginAPI) {
  const allColors = flattenColorPalette(theme('colors'));
  const newVars: Record<string, string> = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => {
      // Ensure `val` is a string
      const value = typeof val === 'string' ? val : String(val);
      return [`--${key}`, value];
    }),
  );

  addBase({
    ':root': newVars,
  });
}
