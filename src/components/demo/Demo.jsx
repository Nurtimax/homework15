import React from "react";

const Demo = ({ onClick, name, age }) => {
  console.log("demo");
  return (
    <div>
      <button onClick={onClick}>Demo click</button>
      <div>{name}</div>
      <div>{age}</div>
    </div>
  );
};

export default React.memo(Demo); // бул качан state  озгоргондо rendering болот // app  компонентин ичинде demo дагы rendering болот бизге бул нерсе кереги жок ошол учун memo ну колдонобуз
