import axios from "../components/api/axios";
import { createContext, useContext, useEffect, useState } from "react";
import UserContext from "./user-context";

const LeaveContext = createContext({
  leaveBalance: {},
  leaveHistory: [],
  addLeave: (request) => {},
  getLeave: (username) => {},
  getHistory: (username) => {},
});

export function LeaveContextProvider(props) {
  const userContext = useContext(UserContext);
  const [leaveBalance, setLeaveBalance] = useState({});
  const [leaveHistory, setLeaveHistory] = useState([]);

  async function addLeave(request) {
    const res = await axios.post("/api/v1/leave", request).catch((e) => {
      throw new Error(e.message);
    });
    getLeave(userContext.username);
    getHistory(useContext.username);
    return res;
  }

  async function getLeave(username) {
    const res = await axios.get(`/api/v1/leave/${username}`).catch((e) => {
      throw new Error(e.message);
    });
    setLeaveBalance(res.data);
  }

  async function getHistory(username) {
    const res = await axios
      .get(`/api/v1/leave/history/${username}`)
      .catch((e) => {
        throw new Error(e.message);
      });
    console.log(res.data);
    setLeaveHistory(res.data);
  }

  const context = {
    leaveBalance: leaveBalance,
    leaveHistory: leaveHistory,
    addLeave: addLeave,
    getLeave: getLeave,
    getHistory: getHistory,
  };

  useEffect(() => {
    getLeave(userContext.username);
    getHistory(userContext.username);
  }, []);

  return (
    <LeaveContext.Provider value={context}>
      {props.children}
    </LeaveContext.Provider>
  );
}

export default LeaveContext;
