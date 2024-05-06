import { Outlet, useNavigation } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Spinner from "../components/Spinner";
import  { Toaster } from "react-hot-toast";

const MainLayout = () => {
  const navigation = useNavigation();
  if (navigation.state == "loading") {
    return <Spinner></Spinner>;
  }
  return (
    <div className="">
      <div className="container mx-auto max-w-screen-xl">
        <NavBar></NavBar>
      </div>

      <Outlet></Outlet>

      <div className="bg-[#131313]">
        <Footer></Footer>
      </div>
      <Toaster />
    </div>
  );
};

export default MainLayout;
