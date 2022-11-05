import React from "react";

const Demo = ({onClick,name, age}) => {
    console.log('demo');
  return <div>
    <button onClick={onClick}>Deme click</button>
    <div>{name}</div>
    <div>{age}</div>
  </div>;
};

export default React.memo(Demo);
