import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { FcEditImage, FcDeleteDatabase } from "react-icons/fc";
import { toast } from "react-toastify";

const Home = () => {
  const storedUsers = useLoaderData();
  const [users, setUsers] = useState(storedUsers);
  const removeUser = (user) => {
    fetch(`http://localhost:5000/delete/${user._id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          toast.success("User Deleted Successfully");
        }
      });

    const remaining = users.filter((usr) => usr._id !== user._id);
    setUsers(remaining);
  };
  return (
    <div className="h-screen bg-slate-300 flex justify-center items-center">
      <div className="flex flex-col space-y-5">
        {users.map((user) => {
          const { _id, name, email, url } = user;

          return (
            <div
              key={_id}
              className="w-[20rem] h-36 bg-slate-600 rounded-xl flex flex-col justify-center space-y-3 px-3">
              <div className="flex items-center space-x-4">
                <img
                  src={url}
                  alt=""
                  className="w-14 h-14 ring-2 ring-green-500 rounded-full"
                />
                <div>
                  <h4 className="text-xl text-white">{name}</h4>
                  <p className="text-white">{email}</p>
                </div>
              </div>
              <div className="flex justify-center text-xl">
                <Link to={`/update/${_id}`}>
                  <FcEditImage />
                </Link>
                <FcDeleteDatabase onClick={() => removeUser(user)} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
