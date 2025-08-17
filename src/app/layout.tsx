
import "./globals.css";
import { Poppins, Nunito } from "next/font/google";
import type { ReactNode } from "react";
import Navbar from "./components/Navbar";
import Providers from "./providers";


// Poppins
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-poppins",
});

// Nunito
const nunito = Nunito({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-nunito",
});

export const metadata = {
  title: "Savenest",
  description: "Finance app for saving together",
};

// ✅ Type the props
interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${nunito.variable} antialiased`}>
        <Providers>
        <Navbar />
  
        
         <div className="pt-20">{children} /</div>
        </Providers>
      </body>
    </html>
  );
}




