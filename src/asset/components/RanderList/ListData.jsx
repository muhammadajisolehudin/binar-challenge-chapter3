import React, { useState } from "react";

export const ListData = ({ data }) => {
  const [check, setCheck] = useState(data.check);

  const handleCheckboxChange = () => {
    setCheck(!check);
  };

  return (
    <div className="px-4 py-2 flex justify-between gap-4 items-center bg-yellow-500 rounded w-full">
      <div>
        <p className={`${check ? "line-through" : ""}`}>{data.task}</p>
      </div>
      <div className="flex w-[12%] bg-green-500 justify-between">
        <input checked={check} onChange={handleCheckboxChange} type="checkbox" />
        <button>edit</button>
        <button>hapus</button>
      </div>
    </div>
  );
};