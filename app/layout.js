// import { Poppins } from "next/font/google";
import "./globals.css";

// const poppins = Poppins({
//   subsets: ["latin"],
// });


export const metadata = {
  title: "Portfolio | Vicharo",
  description: "Explore Vicharo's portfolio showcasing expertise in mechatronics, programming, microcontroller interfacing, 3D CAD design, and so on. Discover projects, skills, and professional experience.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
