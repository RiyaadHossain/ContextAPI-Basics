import React, { createContext, useState } from "react";
import ParentCompo from "../ParentCompo/ParentCompo";

export const CountAPI = createContext("Mobile");

const GrandCompo = () => {
  const [count, setCount] = useState(0);
  const technology = "PC";
  return (
    <CountAPI.Provider value={[technology, setCount, count]}>
      <h1>Grand Member</h1>
      <span>{count}</span>
      <div>
        <button onClick={() => setCount(count + 1)}>Add Point</button>
      </div>
      <ParentCompo count={count} />
    </CountAPI.Provider>
  );
};

export default GrandCompo;
