import React from "react";

const UserTable = ({ users, onDelete }) => (
  <table className="min-w-full table-auto">
    <thead>
      <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
        <th className="py-3 px-6 text-left">№</th>
        <th className="py-3 px-6 text-left">Name</th>
        <th className="py-3 px-6 text-left">Age</th>
        <th className="py-3 px-6 text-left">Actions</th>
      </tr>
    </thead>
    <tbody className="text-gray-600 text-sm font-light">
      {users.map((user, i) => (
        <tr
          key={user.id}
          className="border-b border-gray-200 hover:bg-gray-100"
        >
          <td className="py-3 px-6 text-left">{i + 1}</td>
          <td className="py-3 px-6 text-left">{user.name}</td>
          <td className="py-3 px-6 text-left">{user.age}</td>
          <td className="py-3 px-6 text-left">
            <button
              onClick={() => onDelete(user.id)}
              className="text-red-500 hover:text-red-700 transition duration-300"
            >
              Delete
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default UserTable;
