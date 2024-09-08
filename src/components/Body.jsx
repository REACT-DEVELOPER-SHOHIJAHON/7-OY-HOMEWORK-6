import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteUser } from "../redux/actions";
import UserTable from "./UserTable";

const Body = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.register.user);

  const handleDelete = (userId) => {
    dispatch(deleteUser(userId));
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <section className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Registered Users
        </h2>
        {users.length > 0 ? (
          <UserTable users={users} onDelete={handleDelete} />
        ) : (
          <p className="text-center text-gray-500">No users registered yet.</p>
        )}
      </section>
    </div>
  );
};

export default Body;
