import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
import "./globals.css";

const josefin = Josefin_Sans({ 
  subsets: ["latin"],
  weight: ['400', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Todo App",
  description: "Frontend Mentor Challenge",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={josefin.className}>
        {children}
      </body>
    </html>
  );
}