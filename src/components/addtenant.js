import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import format from "date-fns/format";
const Addtenant = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    block: "",
    room: "",
    name: "",
    phone: "",
    date:
      new Date().getFullYear() +
      "-0" +
      new Date().getMonth() +
      "-" +
      new Date().getDate(),
    feePerMonth: "",
    adhaar: "",
    occupation: "",
    address: ""
  });
  function addTenant(e) {
    e.preventDefault();
    if (
      formData.name === "" ||
      formData.phone === "" ||
      formData.feePerMonth === ""
    ) {
      alert("please enter all fields");
    } else {
      let data = JSON.parse(localStorage.getItem("blockdata"));
      if (sessionStorage.getItem("addtenant") === "blockA") {
        Object.values(data.blockA).map((key) => {
          if (key.room === formData.room) {
            data.block.key.push(formData);
          }
        });
      }
    }
  }
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  return (
    <div>
      <div className="head">
        <h1>Add Tenant</h1>
        <h1
          onClick={() => {
            navigate("/blocks");
          }}
        >
          ⌂
        </h1>
      </div>
      <form onSubmit={addTenant}>
        <input
          type="number"
          name="room"
          value={formData.room}
          onChange={handleInputChange}
          placeholder="room number"
        />
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="Tenant Name"
        />
        <input
          type="number"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          maxLength="10"
          placeholder="Phone number"
        />
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleInputChange}
          placeholder="Date of joining"
        />
        <input
          type="number"
          name="feePerMonth"
          value={formData.feePerMonth}
          onChange={handleInputChange}
          placeholder="Fee per month"
        />
        <input
          type="number"
          name="adhaar"
          value={formData.adhaar}
          onChange={handleInputChange}
          placeholder="Adhaar number"
        />
        <div>
          <label>Occupation</label>
          <select
            name="occupation"
            value={formData.occupation}
            onChange={handleInputChange}
          >
            <option>Student</option>
            <option>Employee</option>
            <option>Business</option>
          </select>
        </div>
        <textarea
          type="text"
          name="address"
          placeholder="Address"
          onChange={handleInputChange}
          value={formData.address}
        />
        <button className="addtenant" type="submit">
          Add Tenant
        </button>
      </form>
    </div>
  );
};
export default Addtenant;
