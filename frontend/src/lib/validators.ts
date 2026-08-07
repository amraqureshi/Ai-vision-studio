export const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const isValidEmail = (value: string) => emailRegex.test(value.trim());

export const getPasswordStrength = (value: string) => {
  let score = 0;
  if (value.length >= 8) score += 1;
  if (/[A-Z]/.test(value) && /[a-z]/.test(value)) score += 1;
  if (/[0-9]/.test(value)) score += 1;
  if (/[^A-Za-z0-9]/.test(value)) score += 1;

  const levels = [
    { label: "Too weak", color: "bg-rose-400", width: "w-1/4" },
    { label: "Weak", color: "bg-amber-400", width: "w-2/4" },
    { label: "Strong", color: "bg-cyan-400", width: "w-3/4" },
    { label: "Secure", color: "bg-fuchsia-400", width: "w-full" },
  ];

  return levels[Math.min(score, levels.length - 1)];
};
