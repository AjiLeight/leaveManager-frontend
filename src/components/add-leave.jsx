import { useContext, useState } from "react";
import LeaveContext from "../store/leave-context";
import axios from "./api/axios";

function AddLeave() {
  const leaveContext = useContext(LeaveContext);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  async function handleAddLeave(e) {
    setSuccess(false);
    setError("");
    let req = {
      email: "ajith@positra.com",
      startDate: e.target.start.value,
      endDate: e.target.end.value,
      leaveType: e.target.ltype.value,
    };

    e.preventDefault();
    if (req.startDate > req.endDate) {
      setError("start date cannot be after end date");
      return;
    }

    if (
      !checkvalidDate(new Date(req.startDate)) ||
      !checkvalidDate(new Date(req.endDate))
    ) {
      setError("start or end date should not be weekend");
      return;
    }

    if (e.target.dtype.value === "half") {
      if (req.startDate !== req.endDate) {
        setError("half day leave cannot span for more than one day");
        return;
      }
      req = { ...req, isFull: false, totalLeave: 0.5 };
    } else {
      const startDate = new Date(req.startDate);
      const endDate = new Date(req.endDate);

      let totalLeave = getTotalLeaves(startDate, endDate);
      req = { ...req, isFull: true, totalLeave: totalLeave };
    }
    await leaveContext.addLeave(req);
    setSuccess(true);
  }

  function checkvalidDate(date) {
    if (date.getDay() === 6 || date.getDay() === 0) {
      return false;
    }
    return true;
  }

  function getTotalLeaves(startDate, endDate) {
    const date = startDate;
    const dates = [];
    while (date <= endDate) {
      if (checkvalidDate(date)) dates.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }
    console.log(dates);
    return dates.length;
  }

  return (
    <div id="add-leave" className=" border p-3 w-1/4">
      <form className="flex flex-col" onSubmit={handleAddLeave}>
        <select className="mt-3" name="ltype" required>
          <option value="casual">casual</option>
          <option value="medical">medical</option>
        </select>
        <label htmlFor="start" className=" p-2">
          start date
        </label>
        <input
          type="date"
          id="start"
          className=" border-2 border-black"
          name="start"
          required
        />
        <label htmlFor="end" className=" p-2">
          end date
        </label>
        <input
          type="date"
          id="end"
          className=" border-2 border-black"
          name="end"
          required
        />
        <select className="mt-3" name="dtype">
          <option value="half">half</option>
          <option value="full">full</option>
        </select>
        <button className=" border bg-blue-600 mt-3">apply</button>
      </form>
      <p className={success ? " text-green-600" : "text-red-700"}>
        {success ? "leave added" : error}
      </p>
    </div>
  );
}

export default AddLeave;
