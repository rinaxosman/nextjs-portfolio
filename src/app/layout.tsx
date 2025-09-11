import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";

// Import Poppins
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rina's Portfolio",
  description: "Personal portfolio showcasing my projects, skills, and career in software development.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
