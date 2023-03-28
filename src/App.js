import "./styles.css";

import React, { useEffect, useState } from "react";
import Home from "./components/home";
import Blocks from "./components/blocks";
// import BlockA from "./components/blockA";
// import Addtenant from "./components/addtenant";
// import TenantDetails from './components/tenant_details';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// let blockData = {
//   blockA: {
//     rooms: [
//       {
//         room: "001",
//         tenants: []
//       },
//       {
//         room: "002",
//         tenants: []
//       },
//       {
//         room: "003",
//         tenants: []
//       }
//     ]
//   },
//   blockB: {
//     rooms: [
//       {
//         room: "001",
//         tenants: []
//       },
//       {
//         room: "002",
//         tenants: []
//       },
//       {
//         room: "003",
//         tenants: []
//       }
//     ]
//   }
// };
// localStorage.setItem("blockdata", JSON.stringify(blockData));

function App() {
  const [blocks, setBlocks] = useState({});
  useEffect(() => {
    setBlocks(JSON.parse(window.localStorage.getItem("blocks")));
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blocks" element={<Blocks props={blocks} />} />
        {/* <Route path="/blocks" element={<Blocks />} />
        <Route path="/addtenant" element={<Addtenant />} />
        {Object.keys(blockData).map((key) => {
          let rot = "/" + key + "";
          return (
            <Route
              path={rot}
              element={<BlockA block={key} props={blockData[key]} />}
            />
          );
        })} */}
      </Routes>
    </Router>
  );
}

export default App;
