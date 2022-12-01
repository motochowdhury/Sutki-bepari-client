import React, { useState } from "react";
import { toast } from "react-toastify";

const User = () => {
  const [userInfo, setUserInfo] = useState({});
  const addUser = (event) => {
    event.preventDefault();
    fetch("http://localhost:5000/user", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success("User Successfully added");
        }
      });
  };

  const saveInfo = (event) => {
    event.preventDefault();
    const value = event.target.value;
    const name = event.target.name;

    const info = { ...userInfo };
    info[name] = value;
    setUserInfo(info);
  };
  return (
    <div>
      <div className="flex justify-center items-center h-screen">
        <form
          onSubmit={addUser}
          className="flex flex-col space-y-3 w-[20rem] bg-slate-400 p-10 rounded-xl">
          <input
            onBlur={saveInfo}
            className="border border-slate-100 p-2 outline-none bg-transparent text-white placeholder:text-white"
            type="text"
            name="name"
            placeholder="name"
          />
          <input
            onBlur={saveInfo}
            className="border border-slate-100 p-2 outline-none bg-transparent text-white placeholder:text-white"
            type="email"
            name="email"
            placeholder="email"
          />
          <input
            onBlur={saveInfo}
            className="border border-slate-100 p-2 outline-none bg-transparent text-white placeholder:text-white"
            type="text"
            name="url"
            placeholder="url"
          />
          <button type="submit" className="bg-green-400 p-2">
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default User;
