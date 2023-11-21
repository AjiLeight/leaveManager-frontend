import { useContext } from "react";
import LeaveContext from "../store/leave-context";
import HistoryCard from "./history-card";

function HistoryTable() {
  const leaveContext = useContext(LeaveContext);
  return (
    <div className=" p-3 border w-full flex flex-col items-center">
      {leaveContext.leaveHistory.map((history) => (
        <HistoryCard key={history} data={history} />
      ))}
    </div>
  );
}

export default HistoryTable;
