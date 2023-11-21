import { useContext } from "react";
import UserContext from "../../store/user-context";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const userContext = useContext(UserContext);
  const location = useLocation();
  const isHome = location.pathname === "/" ? true : false;
  return (
    <nav id="navbar" className="flex justify-between p-2">
      Welcome {userContext.username}
      <Link to={isHome ? "/history" : "/"} className=" text-blue-700 pe-8">
        {isHome ? "history" : "home"}
      </Link>
    </nav>
  );
}

export default Navbar;
