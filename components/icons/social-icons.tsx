/** Íconos de redes sociales con sus colores de marca (lucide-react no incluye logos). */

export function LinkedinIcon({ size = 24 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size}>
      <rect width="24" height="24" rx="5" fill="#0A66C2" />
      <path
        d="M7.4 9.6H4.7V19h2.7V9.6zM6.05 8.4c.9 0 1.5-.6 1.5-1.35C7.5 6.3 6.9 5.7 6.05 5.7c-.85 0-1.5.6-1.5 1.35 0 .75.6 1.35 1.5 1.35zM19.3 19h-2.7v-5c0-1.15-.4-1.95-1.45-1.95-.8 0-1.25.55-1.45 1.05-.1.2-.1.5-.1.75V19h-2.7s.05-8.5 0-9.4h2.7v1.3c.35-.55 1-1.35 2.45-1.35 1.8 0 3.15 1.15 3.15 3.65V19z"
        fill="#fff"
      />
    </svg>
  );
}

export function InstagramIcon({ size = 24 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size}>
      <defs>
        <linearGradient id="igGrad" x1="2" y1="22" x2="22" y2="2" gradientUnits="userSpaceOnUse">
          <stop stopColor="#f09433" />
          <stop offset="0.25" stopColor="#e6683c" />
          <stop offset="0.5" stopColor="#dc2743" />
          <stop offset="0.75" stopColor="#cc2366" />
          <stop offset="1" stopColor="#bc1888" />
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="24" height="24" rx="6.5" fill="url(#igGrad)" />
      <rect x="5.5" y="5.5" width="13" height="13" rx="3.5" fill="none" stroke="#ffffff" strokeWidth="2" />
      <circle cx="12" cy="12" r="3" fill="none" stroke="#ffffff" strokeWidth="2" />
      <circle cx="16.5" cy="7.5" r="1.2" fill="#ffffff" />
    </svg>
  );
}
