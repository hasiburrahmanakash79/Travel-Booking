import { Outlet } from "react-router";
import Navbar from "../Pages/Shared/Navbar";
import Footer from "../Pages/Shared/Footer";

const Main = () => {
  return (
    <div className="relative">
      <Navbar />

      <div className="min-h-[calc(100vh-361px)] sm:min-h-[calc(100vh-381px)] mt-[54px] sm:mt-[74px] bg-[#FBFEFA]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
