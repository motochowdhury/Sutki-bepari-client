import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";

const Update = () => {
  const storedUser = useLoaderData();
  const [editeInfo, setEditeInfo] = useState(storedUser);
  const addUser = (event) => {
    event.preventDefault();
    fetch(`http://localhost:5000/update/${storedUser._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(editeInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.modifiedCount > 0) {
          toast.success("User info Updated");
        }
      });
  };

  const saveInfo = (event) => {
    event.preventDefault();
    const value = event.target.value;
    const name = event.target.name;

    const info = { ...editeInfo };
    info[name] = value;
    setEditeInfo(info);
  };
  return (
    <div>
      <div className="flex justify-center items-center h-screen">
        <form
          onSubmit={addUser}
          className="flex flex-col space-y-3 w-[20rem] bg-slate-400 p-10 rounded-xl">
          <input
            defaultValue={storedUser.name}
            onChange={saveInfo}
            className="border border-slate-100 p-2 outline-none bg-transparent text-white placeholder:text-white"
            type="text"
            name="name"
            placeholder="name"
          />
          <input
            defaultValue={storedUser.email}
            onChange={saveInfo}
            className="border border-slate-100 p-2 outline-none bg-transparent text-white placeholder:text-white"
            type="email"
            name="email"
            placeholder="email"
          />
          <input
            defaultValue={storedUser.url}
            onChange={saveInfo}
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

export default Update;
