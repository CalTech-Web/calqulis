type LogoProps = {
  className?: string;
  variant?: "dark" | "light";
};

/**
 * Calqulis wordmark. Generated in house, no upstream logo asset exists.
 * Icon: an abstract ascending signal/node mark, three connected points
 * rising left to right, echoing "behavioral signal" without being a
 * literal magnifying glass or brain icon.
 */
export default function Logo({ className = "", variant = "dark" }: LogoProps) {
  const wordColor = variant === "dark" ? "#0F0E2C" : "#FFFFFF";
  const subColor = variant === "dark" ? "#4338CA" : "#22D3EE";

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="calqulis-mark" x1="0" y1="30" x2="30" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#4338CA" />
            <stop offset="1" stopColor="#22D3EE" />
          </linearGradient>
        </defs>
        <rect width="30" height="30" rx="7" fill="url(#calqulis-mark)" />
        <path
          d="M6.5 19.5L12 14.5L16 17.5L23.5 9.5"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="6.5" cy="19.5" r="1.8" fill="white" />
        <circle cx="12" cy="14.5" r="1.8" fill="white" />
        <circle cx="16" cy="17.5" r="1.8" fill="white" />
        <circle cx="23.5" cy="9.5" r="1.8" fill="white" />
      </svg>
      <span
        className="font-semibold tracking-tight text-xl leading-none"
        style={{ color: wordColor, fontFamily: "var(--font-inter-tight)" }}
      >
        Calqulis
        <span style={{ color: subColor }}>.</span>
      </span>
    </span>
  );
}
