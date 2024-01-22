import { NavProvider } from "../../context/nav_context";
import { Sidebar } from "../../components";
import Header from "../../components/Header";

export const metadata = {
  title: "Dashboard | Enugu SME center",
  description: "Enugu SME center",
};

const Layout = ({ children }) => {
  return (
    <NavProvider>
      <main className=" flex h-screen overflow-hidden">
        <Sidebar />
        <section className="w-full h-screen border overflow-scroll ">
          <Header />
          <div className=" p-5 overflow-scroll relativ">
            {children}
          </div>
        </section>
      </main>
    </NavProvider>
  );
};

export default Layout;
