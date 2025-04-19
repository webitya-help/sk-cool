import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/NavbarEl";
import FooterEl from "@/Components/FooterEl";
import PhoneIcon from "@mui/icons-material/Phone";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "SK COOL Services",
  description: "AC rentals and repairs in your city",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <FooterEl />

        {/* Floating Buttons */}
        <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
          {/* Call Button */}
          <a
            href="tel:+919990939208"
            className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition"
            title="Call Now"
          >
            <PhoneIcon />
          </a>

          {/* WhatsApp Button */}
          <a
            href="https://wa.me/919990939208"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition"
            title="Chat on WhatsApp"
          >
            <WhatsAppIcon />
          </a>
        </div>
      </body>
    </html>
  );
}
