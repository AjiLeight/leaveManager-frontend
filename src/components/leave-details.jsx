import { useContext } from "react";
import LeaveContext from "../store/leave-context";

function LeaveDetails() {
  const leaveContext = useContext(LeaveContext);

  return (
    <div className=" m-4 mb-8 border w-1/4 flex h-1/8">
      <div className=" border w-1/2 m-2 flex justify-center bg-green-400">
        <p>
          Medical <span>{leaveContext.leaveBalance.medical}</span>
        </p>
      </div>
      <div className=" border w-1/2 m-2 flex justify-center bg-red-400">
        <p>
          Casual <span>{leaveContext.leaveBalance.casual}</span>
        </p>
      </div>
    </div>
  );
}

export default LeaveDetails;
