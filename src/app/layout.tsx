import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";
import { PageTransitionProvider } from "@/components/pageTransitionProvider";

const lexend = Lexend({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"]
});



export const metadata: Metadata = {
  title: "YourBank",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${lexend.className} bg-[#191919] text-white antialiased`}
      >
        <PageTransitionProvider>
          {children}
        </PageTransitionProvider>
      </body>
    </html>
  );
}
