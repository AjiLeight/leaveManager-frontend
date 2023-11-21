import HistoryTable from "../components/history-table";
import Navbar from "../components/layout/navbar";

function History() {
  return (
    <>
      <Navbar />
      <div className=" h-full flex p-10 justify-center">
        <HistoryTable />
      </div>
    </>
  );
}

export default History;
