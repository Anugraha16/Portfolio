import { Inter } from "next/font/google";
import "../app/globals.css";
import StarsCanvas from "../components/main/Starbackground";
import Navbar from "../components/main/Navbar";
import Footer from "../components/main/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio",
  description: "Created by Anugraha",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}
      >
        <StarsCanvas />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
