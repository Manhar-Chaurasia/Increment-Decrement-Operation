import React, { useState } from "react";
import Card from './Card';

const App = () => {
  const [count, setCount] = useState(0);

  const doInc = () => {
    setCount(count + 1);
  }
  const doDec = () => {
    if (count <= 0) {
      alert("Can't be decreased now")
    }
    else {
      setCount(count - 1);
    }
  }

  return (
    <>
      <Card doInc={doInc} doDec={doDec} count={count} />
    </>
  );
}

export default App;