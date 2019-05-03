import React from 'react';
import MainEditor from "./MainEditor";
import NavBar from "./NavBar";
import MainRenderer from "./MainRenderer";

let testDocument = "5ccc533fc07096d20d635024";

const App = () => (
  <div>
      <NavBar />
      <div className={"MainComponents"}>
          <MainEditor id={testDocument} />
          <MainRenderer id={testDocument}  />
      </div>
  </div>
);

export default App;
