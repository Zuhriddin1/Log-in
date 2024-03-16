import React from "react";
function DataTable({ data }) {
  return (
    <table className="text-white ml-12">
      <thead>
        <tr className="ml-4">
          <th className="mr-4">Name</th>
          <th>Address</th>
          <th>Birthday</th>
          <th>Religion</th>
        </tr>
      </thead>
      <tbody>
        {data.map((userData, index) => (
          <tr key={index} className="ml-5">
            <td>{userData.name}</td>
            <td className="pl-5">{userData.address}</td>
            <td className="pl-5">{userData.birthday}</td>
            <td className="pl-5">{userData.religion}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
export default DataTable;
