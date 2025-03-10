import { Inter } from "next/font/google";
import "./globals.css";
import Dashboard from "@/components/Dashboard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "EpicEmporium",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Dashboard />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
