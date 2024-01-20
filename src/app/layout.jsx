import "./globals.css";
// import 'leaflet/dist/leaflet.css';
import { Lato, Poppins, Inter } from "next/font/google";
// import { getServerSession } from "next-auth";
// import { Toaster } from "react-hot-toast";
// import { authOptions } from "./api/auth/[...nextauth]/route";
// import Provider from "@/components/Provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--inter",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Enugu SME center",
  description: "Enugu SME center",
};

export default async function RootLayout({children}) {
  // const session = await getServerSession(authOptions);
  return (
    <html lang="en">
      <body className={`${inter.variable} font-inter`}>
          {children}
      </body>
    </html>
  );
}
