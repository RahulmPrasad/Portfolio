import type { Metadata } from "next";
import "./globals.css";
import "./components.css"
import CustomCursor from "@/components/CustomCursor";

export const metadata: Metadata = {
  title: "Rahul Prasad Portfolio",
  description: "My Portfolio Website",
};

import SmoothScroll from "@/components/ui/SmoothScroll";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <SmoothScroll>
          <CustomCursor />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
