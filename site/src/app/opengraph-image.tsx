import { ImageResponse } from "next/og";

export const alt = "Calqulis | Behavioral Intelligence Platform";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundImage: "linear-gradient(135deg, #4338CA 0%, #1E1B4B 100%)",
          padding: "80px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <svg width="88" height="88" viewBox="0 0 30 30" fill="none">
            <defs>
              <linearGradient id="mark" x1="0" y1="30" x2="30" y2="0" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#4338CA" />
                <stop offset="1" stopColor="#22D3EE" />
              </linearGradient>
            </defs>
            <rect width="30" height="30" rx="7" fill="url(#mark)" />
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
          <div style={{ display: "flex", fontSize: 72, fontWeight: 700, color: "white" }}>
            Calqulis
            <span style={{ color: "#22D3EE" }}>.</span>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 40,
            fontSize: 32,
            lineHeight: 1.4,
            color: "#CBD5E1",
            textAlign: "center",
            maxWidth: 880,
          }}
        >
          Turn behavioral and market intelligence into your next best move
        </div>
      </div>
    ),
    { ...size }
  );
}
