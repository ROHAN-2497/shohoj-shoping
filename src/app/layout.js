import { Roboto } from "next/font/google";
import "./globals.css";
import Footer from "@/component/Footer";
import Navbar from "@/component/Navbar";

const roboto = Roboto({
  weight: ["100", "300", "500", "700", "900"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

export const metadata = {
  title: "Shohoj Shoping",
  description: "Shohoj Shopping is an e-commerce web application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en " data-theme="dark" className="transition-all">
      <body className={roboto.className}>
        <div className="flex min-h-screen flex-col justify-between">
          <div>
            <Navbar />
            <main className="mt-5">{children}</main>
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
