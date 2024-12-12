import { Outlet } from "react-router-dom";
import ResponsiveNavbar from "../../Shared/ResponsiveNavbar/ResponsiveNavbar";
import Footer from "../../Shared/Footer/Footer";

const MainLayout = () => {
  return (
    <>
      <div className="flex flex-col  min-h-screen">
        <ResponsiveNavbar />
        <div className="flex-grow">
          <Outlet />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MainLayout;
