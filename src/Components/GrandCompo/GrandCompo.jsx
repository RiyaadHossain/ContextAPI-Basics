import React, { createContext, useState } from "react";
import ParentCompo from "../ParentCompo/ParentCompo";

export const CountAPI = createContext("Mobile"); /* 1 step - createContext('Default Value') and declear in a variable. Also export it */

const GrandCompo = () => {
  const [count, setCount] = useState(0);
  const technology = "PC";
  return (
    <CountAPI.Provider value={[technology, setCount, count]}> {/* <APIName.Provider></APIName.Provider> ~ Also set a props named 'value'. Packed more than one value inside an array.  */}
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
