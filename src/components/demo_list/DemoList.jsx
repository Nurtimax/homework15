import React from "react";

const DemoList = () => {
  console.log("demolist");
  return (
    <div>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
    </div>
  );
};

export default React.memo(DemoList); // бул качан state  озгоргондо rendering болот // app  компонентин ичинде demo дагы rendering болот бизге бул нерсе кереги жок ошол учун memo ну колдонобуз
