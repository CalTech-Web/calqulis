import { ImageResponse } from "next/og";

export const contentType = "image/png";
export const dynamic = "force-static";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #4338CA 0%, #1E1B4B 100%)",
        }}
      >
        <svg width="360" height="360" viewBox="4 7 22 15" fill="none">
          <path
            d="M6.5 19.5L12 14.5L16 17.5L23.5 9.5"
            stroke="white"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="6.5" cy="19.5" r="1.9" fill="white" />
          <circle cx="12" cy="14.5" r="1.9" fill="white" />
          <circle cx="16" cy="17.5" r="1.9" fill="white" />
          <circle cx="23.5" cy="9.5" r="1.9" fill="white" />
        </svg>
      </div>
    ),
    { width: 512, height: 512 }
  );
}
