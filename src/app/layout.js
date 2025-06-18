import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import {AppContextProvider} from "@/app/contexts/AppContext";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Tp2 Movies",
  description: "TP2",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AppContextProvider>
        <Navbar />
        {children}
        <Footer />
        </AppContextProvider>
      </body>
    </html>
  );
}
