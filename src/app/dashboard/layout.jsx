import { Metadata } from "next";
// import Loading from "./loading";
import { NavProvider } from "../../context/nav_context";
import { Sidebar } from "../../components";
import { MainDashboardArea } from "../../components/templates";
import Header from "../../components/Header";

export const metadata = {
  title: "Dashboard | Enugu SME center",
  description: "Enugu SME center",
};

const Layout = ({ children }) => {
  return (
    <NavProvider>
      <main className="relative w-full flex min-h-screen max-h-screen overflow-hidden  max-w-[1920px] mx-auto">
        <Sidebar />
        <MainDashboardArea>
          <Header />
          <div className="h-full max-h-[calc(100%-100px)] relative p-5 rounded-[16px]  overflow-scroll">
            {children}
          </div>
        </MainDashboardArea>
      </main>
    </NavProvider>
  );
};

export default Layout;
