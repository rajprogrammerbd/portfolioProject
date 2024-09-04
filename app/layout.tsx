import type { Metadata } from "next";
import { Inter } from "next/font/google";
import StyledComponentsRegistry from '@/lib/registry';
import StoreProvider from "./StoreProvider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio Website",
  description: "Portfolio Website of Author",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>
      <html lang="en">
        <head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link rel="icon" href="logo.png" type="image/x-icon" />
        </head>
        <body className={inter.className}>
          <StyledComponentsRegistry>
            {children}
          </StyledComponentsRegistry>
        </body>
      </html>
    </StoreProvider>
  );
}
