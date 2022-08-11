import React, { useState } from "react";
import Table from "./Table";

const AddUser = () => {
  const [userData, setUserData] = useState<{ name: string; email: string }[]>(
    []
  );
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setUserData((prevData) => {
      return [...prevData, { name, email }];
    });
    setName("");
    setEmail("");
  };
  return (
    <div className="col-sm-12 text-center d-flex flex-column align-items-center">
      <form onSubmit={handleSubmit} className="w-50 p-3">
        <div className="pt-3">
          <label
            className="form-label w-100"
            style={{ textAlign: "left" }}
            htmlFor="name"
          >
            Name
          </label>
          <input
            className="form-control"
            name="name"
            type="text"
            placeholder="Name..."
            value={name}
            onChange={(e) => setName(e.target.value)}
            autoComplete="off"
          />
        </div>
        <div className="pt-3">
          <label
            className="form-label w-100"
            style={{ textAlign: "left" }}
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="form-control"
            name="email"
            type="email"
            placeholder="Email..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="off"
          />
        </div>
        <div className="pt-3">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
      {userData.length > 0 ? <Table userData={userData} /> : ""}
    </div>
  );
};

export default AddUser;
