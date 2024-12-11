import { Outlet } from "react-router-dom";
import ResponsiveNavbar from "../../Shared/ResponsiveNavbar/ResponsiveNavbar";

const MainLayout = () => {
  return (
    <div>
      <ResponsiveNavbar />
      <Outlet />
    </div>
  );
};

export default MainLayout;
