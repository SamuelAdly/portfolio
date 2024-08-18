import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Samuels Portfolio",
  description: "Hello, thanks for being here",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div className="pt-16 sm:pt-20">
          {children}
        </div>
      </body>
    </html>
  );
}
