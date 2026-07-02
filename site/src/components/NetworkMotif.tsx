import type { CSSProperties } from "react";

/**
 * Decorative node/network motif for hero and section backgrounds.
 * Pure SVG, no external image assets. Reinforces "data intelligence"
 * without a literal magnifying glass or brain cliche.
 */
export default function NetworkMotif({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 1200 700"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <radialGradient id="glow" cx="50%" cy="30%" r="65%">
          <stop offset="0%" stopColor="#22D3EE" stopOpacity="0.35" />
          <stop offset="45%" stopColor="#4338CA" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#1E1B4B" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="line" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#6366F1" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#22D3EE" stopOpacity="0.15" />
        </linearGradient>
      </defs>
      <rect width="1200" height="700" fill="url(#glow)" />
      <g stroke="url(#line)" strokeWidth="1">
        <line x1="120" y1="140" x2="360" y2="240" />
        <line x1="360" y1="240" x2="300" y2="420" />
        <line x1="360" y1="240" x2="620" y2="180" />
        <line x1="620" y1="180" x2="860" y2="260" />
        <line x1="620" y1="180" x2="700" y2="400" />
        <line x1="860" y1="260" x2="1080" y2="160" />
        <line x1="860" y1="260" x2="960" y2="440" />
        <line x1="300" y1="420" x2="520" y2="520" />
        <line x1="700" y1="400" x2="520" y2="520" />
        <line x1="700" y1="400" x2="960" y2="440" />
        <line x1="960" y1="440" x2="1100" y2="560" />
      </g>
      <g fill="#22D3EE">
        <circle className="node-pulse" style={{ "--pulse-opacity": 0.8, "--pulse-delay": "0s" } as CSSProperties} cx="120" cy="140" r="3" opacity="0.8" />
        <circle className="node-pulse" style={{ "--pulse-opacity": 0.9, "--pulse-delay": "0.6s" } as CSSProperties} cx="860" cy="260" r="4" opacity="0.9" />
        <circle className="node-pulse" style={{ "--pulse-opacity": 0.7, "--pulse-delay": "1.2s" } as CSSProperties} cx="1080" cy="160" r="3" opacity="0.7" />
      </g>
      <g fill="#6366F1">
        <circle className="node-pulse" style={{ "--pulse-opacity": 0.9, "--pulse-delay": "0.3s" } as CSSProperties} cx="360" cy="240" r="4" opacity="0.9" />
        <circle className="node-pulse" style={{ "--pulse-opacity": 0.9, "--pulse-delay": "0.9s" } as CSSProperties} cx="620" cy="180" r="4" opacity="0.9" />
        <circle className="node-pulse" style={{ "--pulse-opacity": 0.8, "--pulse-delay": "1.5s" } as CSSProperties} cx="700" cy="400" r="3.5" opacity="0.8" />
        <circle className="node-pulse" style={{ "--pulse-opacity": 0.8, "--pulse-delay": "2.1s" } as CSSProperties} cx="960" cy="440" r="3.5" opacity="0.8" />
      </g>
      <g fill="#FFFFFF">
        <circle className="node-pulse" style={{ "--pulse-opacity": 0.6, "--pulse-delay": "0.9s" } as CSSProperties} cx="300" cy="420" r="2.5" opacity="0.6" />
        <circle className="node-pulse" style={{ "--pulse-opacity": 0.6, "--pulse-delay": "1.8s" } as CSSProperties} cx="520" cy="520" r="2.5" opacity="0.6" />
        <circle className="node-pulse" style={{ "--pulse-opacity": 0.5, "--pulse-delay": "2.4s" } as CSSProperties} cx="1100" cy="560" r="2.5" opacity="0.5" />
      </g>
    </svg>
  );
}
