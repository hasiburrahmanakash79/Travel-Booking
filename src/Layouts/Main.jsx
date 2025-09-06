import { Outlet } from "react-router";
import Navbar from "../Pages/Shared/Navbar";
import Footer from "../Pages/Shared/Footer";

const Main = () => {
  return (
    <div className="">
      <Navbar />
      <div className="min-h-[calc(100vh-371px)] bg-[#FBFEFA]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
