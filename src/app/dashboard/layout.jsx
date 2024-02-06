import { NavProvider } from "../../context/nav_context";
import { Sidebar } from "../../components";
import Header from "../../components/Header";
import AuthProvider from "../../components/authProvider";

export const metadata = {
  title: "Dashboard | Verxio Protocol",
  description: "Community powered future of work",
};

const Layout = ({ children }) => {
  return (
    <AuthProvider>
      <NavProvider>
        <main className=" flex h-screen overflow-hidden">
          <Sidebar />
          <section className="w-full h-[calc(100%-0px)] overflow-scroll ">
            <Header />
            <div className=" overflow-scroll h-[calc(100%-75px)]">
              {children}
            </div>
          </section>
        </main>
      </NavProvider>
     </AuthProvider>
  );
};

export default Layout;
