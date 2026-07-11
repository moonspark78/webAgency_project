import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import Provider from "../components/Hoc/Provider";

const font = Rubik({
  weight: ["300", "400", "500", "600", "700", "800" ,"900"],
  subsets: ["latin"],
})


export const metadata: Metadata = {
  title: "Create Next App",
  description: "A modern web application built with Next.js and TypeScript.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <body
        className={`${font.className} antialiased`}>
          <Provider>
            {children}
          </Provider>
      </body>
    </html>
  );
}
