import { Outlet, useNavigate } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
// import SupportChat from "../SupportChat/SupportChat";
import Footer from "../Footer/Footer";

export default function Layout() {
  // let navigate= useNavigate()

  return (
    <div className="d-flex flex-column min-vh-100">
      <NavBar/>
      
      <div className="flex-grow-1">
        <Outlet />
      </div>
      
      <Footer className="mt-auto" />
    </div>
  );
}
