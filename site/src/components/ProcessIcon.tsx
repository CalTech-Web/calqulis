const INK = "#1e1b4b";
const SIGNAL = "#4338ca";
const CYAN = "#22d3ee";

export type ProcessIconName = "connect" | "analyze" | "surface" | "act" | "refine";

/**
 * Miniature versions of the stations in the ProcessStory line drawing,
 * so each step badge visually points at its part of the scene.
 */
export default function ProcessIcon({ name }: { name: ProcessIconName }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className="h-7 w-7"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {name === "connect" && (
        <>
          <g stroke={INK} strokeWidth="1.8">
            <circle cx="7" cy="7" r="3.4" />
            <circle cx="5" cy="16" r="3.4" />
            <circle cx="7" cy="25" r="3.4" />
          </g>
          <g stroke={SIGNAL} strokeWidth="1.5" opacity="0.55">
            <path d="M10 9 C16 11 20 13 22.6 14.6" />
            <path d="M8.6 16 H22.4" />
            <path d="M10 23 C16 21 20 19 22.6 17.4" />
          </g>
          <circle cx="26" cy="16" r="3.2" stroke={SIGNAL} strokeWidth="1.8" />
          <circle cx="26" cy="16" r="1.4" fill={CYAN} />
        </>
      )}
      {name === "analyze" && (
        <>
          <g stroke={INK} strokeWidth="1.8">
            <circle cx="16" cy="16" r="6.5" />
            <path d="M16 6.5 v3 M16 22.5 v3 M6.5 16 h3 M22.5 16 h3 M9.3 9.3 l2.1 2.1 M20.6 20.6 l2.1 2.1 M22.7 9.3 l-2.1 2.1 M11.4 20.6 l-2.1 2.1" />
          </g>
          <circle cx="16" cy="16" r="1.4" fill={CYAN} />
        </>
      )}
      {name === "surface" && (
        <>
          <g stroke={INK} strokeWidth="1.8">
            <rect x="5" y="8" width="22" height="16" rx="3" />
          </g>
          <path d="M9 19 l4 -4.5 3 2.5 5.5 -6" stroke={SIGNAL} strokeWidth="1.8" />
          <circle cx="21.5" cy="11" r="1.4" fill={CYAN} />
        </>
      )}
      {name === "act" && (
        <>
          <circle cx="5.5" cy="16" r="2.6" stroke={SIGNAL} strokeWidth="1.8" />
          <g stroke={SIGNAL} strokeWidth="1.5" opacity="0.55">
            <path d="M8.4 14.6 C13 11 16.5 8.5 20 7.8" />
            <path d="M8.8 16 H20" />
            <path d="M8.4 17.4 C13 21 16.5 23.5 20 24.2" />
          </g>
          <g stroke={INK} strokeWidth="1.8">
            <path d="M21.4 5 L26 7.6 L21.4 10.2" />
            <path d="M21.4 13.4 L26 16 L21.4 18.6" />
            <path d="M21.4 21.8 L26 24.4 L21.4 27" />
          </g>
        </>
      )}
      {name === "refine" && (
        <>
          <circle cx="16" cy="16" r="8.5" stroke={INK} strokeWidth="1.8" />
          <g stroke={CYAN} strokeWidth="1.8">
            <path d="M21.9 13.2 l2.7 4.6 2.7 -4.6" />
            <path d="M4.7 18.8 l2.7 -4.6 2.7 4.6" />
          </g>
          <circle cx="16" cy="16" r="1.4" fill={CYAN} />
        </>
      )}
    </svg>
  );
}
