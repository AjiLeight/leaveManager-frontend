import { useContext } from "react";
import AddLeave from "../components/add-leave";
import LeaveDetails from "../components/leave-details";
import UserContext from "../store/user-context";
import Navbar from "../components/layout/navbar";

function EmployeeHome() {
  const userContext = useContext(UserContext);

  return (
    <div id="employee-home">
      <Navbar />
      <div className=" flex justify-center w-full flex-col items-center h-full">
        <LeaveDetails />
        <AddLeave />
      </div>
    </div>
  );
}

export default EmployeeHome;
