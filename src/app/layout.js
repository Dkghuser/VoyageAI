import "./globals.css";

export const metadata = {
  title: "VoyageAI - AI Travel Guide",
  description: "AI-powered travel planning and recommendations",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
