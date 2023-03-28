import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const BlockA = (props) => {
  console.log(props.block);
  const navigate = useNavigate();
  const data = props.props;
  function addTenant() {
    sessionStorage.setItem("addtenant", props.block);
    setTimeout(() => {
      navigate("/addtenant");
    }, 3000);
  }
  return (
    <div>
      <div className="head">
        <h1 className="block-title">Block-A</h1>
        <h1
          onClick={() => {
            navigate("/blocks");
          }}
        >
          ⌂
        </h1>
      </div>

      <div className="head">
        <button className="button">Add Room</button>
        <button className="button" onClick={addTenant}>
          Add tenant
        </button>
      </div>
      <div className="rooms">
        {Object.values(data).map((key) => {
          return <button>{key.room}</button>;
        })}
      </div>
    </div>
  );
};
export default BlockA;
