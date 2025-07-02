import Header from "@/components/Header";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers from "./Providers";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
   variable: "--font-geist-sans",
   subsets: ["latin"],
});

const geistMono = Geist_Mono({
   variable: "--font-geist-mono",
   subsets: ["latin"],
});

export const metadata = {
   title: "IMDB Clone",
   description: "A clone of the IMDB website using Next.js",
};

export default function RootLayout({ children }) {
   return (
      <html lang="en" suppressHydrationWarning>
         <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
         >
            <Providers>
               <Header />
               <Navbar />
               {children}
            </Providers>
         </body>
      </html>
   );
}
