import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Karla } from "next/font/google";

const karla = Karla({
  subsets: ["latin"],
  variable: "--font-karla",
  display: "swap",
});

export const metadata = {
  title: "Mother's Kitchen",
  description: "The taste of mother's love",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={karla.variable}>
      <body>
        <Navbar/>
        <main>{children}</main>
        <Footer/>
      </body>
    </html>
  );
}