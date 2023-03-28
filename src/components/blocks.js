import React from "react";
import { useNavigate } from "react-router-dom";
const Blocks = (props) => {
  const navigate = useNavigate();
  const data = props.props;
  function addBlock() {
    let blocks = JSON.parse(localStorage.getItem("blocks"));
    let n = Object.keys(blocks).length;
    n = n + 1;
    let block = "B " + n;
    blocks[block] = {};
    localStorage.setItem("blocks", JSON.stringify(blocks));
  }
  if (Object.keys(data).length) {
    let arr = Object.keys(data).map((key) => key.split("").join(" "));
    return (
      <div className="blocks-main">
        <div className="butts">
          <button className="butt" onClick={addBlock}>
            Add block
          </button>

          <button className="butt" onClick={navigate("/deleteblock")}>
            Del Block
          </button>
        </div>
        <div className="blocks">
          {arr.map((key) => {
            return (
              <div
                className="block"
                onClick={() => {
                  navigate("/blockA");
                }}
              >
                {key}
              </div>
            );
          })}

          {/* */}
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <button
          onClick={() => {
            addBlock();
          }}
        >
          Add Block
        </button>
      </div>
    );
  }
};
export default Blocks;
