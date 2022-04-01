import React, { useContext } from "react";
import ChildCompo from "../ChildCompo/ChildCompo";
import { CountAPI } from "../GrandCompo/GrandCompo";

const ParentCompo = () => {
  const [tech, setCount, count] = useContext(CountAPI);
  return (
    <div>
      <h1>Parent</h1>
          <span>{count}</span><strong>{tech}</strong>
          <div><button onClick={() => setCount(count + 1)}>Add Point</button></div>
      <ChildCompo count={count} />
    </div>
  );
};

export default ParentCompo;
