import React from "react";
import { Table,Table2 } from "./lib/db";// Adjust the import path if necessary

const TableComponent = () => {
  return (
<div className="p-6 bg-gray-100 rounded-lg shadow-md">

  <div className="overflow-x-auto">
    <table className="w-full border-collapse bg-white shadow-md rounded-lg">
      <thead>
        <tr className="bg-blue-600 text-white">
          <th className="px-4 py-2">ID</th>
          <th className="px-4 py-2">Title</th>
          <th className="px-4 py-2">Email</th>
          <th className="px-4 py-2">Nationality</th>
          <th className="px-4 py-2">Author</th>
          <th className="px-4 py-2">category</th>
        </tr>
      </thead>
      <tbody>
        {Table.map((item) => (
          <tr key={item.id} className="border-b hover:bg-gray-100">
            <td className="px-4 py-2 text-center">{item.id}</td>
            <td className="px-4 py-2 text-center">{item.title}</td>
            <td className="px-4 py-2 text-center">{item.email}</td>
            <td className="px-4 py-2 text-center">{item.nationality}</td>
            <td className="px-4 py-2 text-center">{item.author}</td>
            <td className="px-4 py-2 text-center">{item.category}</td>
          </tr>
        ))}
      </tbody>
    </table>


    <table className="w-full border-collapse bg-white shadow-md rounded-lg mt-10">
      <thead>
        <tr className="bg-blue-600 text-white">
          <th className="px-4 py-2">ID</th>
          <th className="px-4 py-2">age</th>
          <th className="px-4 py-2">name</th>
          <th className="px-4 py-2">role</th>
        </tr>
      </thead>
      <tbody>
        {Table2.map((item) => (
          <tr key={item.id} className="border-b hover:bg-gray-100">
            <td className="px-4 py-2 text-center">{item.id}</td>
            <td className="px-4 py-2 text-center">{item.age}</td>
            <td className="px-4 py-2 text-center">{item.name}</td>
            <td className="px-4 py-2 text-center">{item.role}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>

  );
};

export default TableComponent;
