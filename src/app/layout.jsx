import "./globals.css";
import { Inter } from "next/font/google";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import ReduxProvider from "../components/reduxProvider";
import { NavProvider } from "../context/nav_context";
import JunoProvider from "../components/junoProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const inter = Inter({
  subsets: ["latin"],
  variable: "--inter",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Verxio Protocol",
  description: "Verxio Protocol",
};

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-inter`}>
        {/* <NavProvider> */}
        <AppRouterCacheProvider>
          <JunoProvider>
            <ReduxProvider>{children}</ReduxProvider>
          </JunoProvider>
        </AppRouterCacheProvider>
        {/* </NavProvider> */}
        <ToastContainer/>
      </body>
    </html>
  );
}
