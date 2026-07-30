import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0a1a30",
        }}
      >
        <div
          style={{
            width: 124,
            height: 124,
            borderRadius: "50%",
            border: "16px solid #4aa3ff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: "50%",
              background: "#f15a24",
            }}
          />
        </div>
      </div>
    ),
    { ...size }
  );
}
