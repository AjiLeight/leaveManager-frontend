function HistoryCard({ data }) {
  console.log(data);
  return (
    <div className=" flex justify-between w-1/2 font-bold">
      <div>
        {data.start.slice(0, 10)} <span className=" text-gray-700"> to </span>
        {data.end.slice(0, 10)}
      </div>
      <div>{data.full ? "full day" : "half day"}</div>
      <div>{data.type}</div>
    </div>
  );
}

export default HistoryCard;
