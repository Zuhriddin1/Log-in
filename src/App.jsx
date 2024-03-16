import React, { useState } from "react";
import LoginForm from "./LoginForm";
import DataTable from "./DataTable";
import "./App.css";
function App() {
  const [userData, setUserData] = useState([]);

  const handleFormSubmit = (data) => {
    setUserData([...userData, data]);
  };

  return (
    <div className="mr-[600px]">
      <h1 className="font-bold text-3xl ml-24 mb-5 mt-20">Log in</h1>
      <LoginForm onSubmit={handleFormSubmit} />
      <h2 className="text-white text-2xl mt-5 ml-24 font-bold ">User Data</h2>
      <DataTable data={userData} />
    </div>
  );
}
export default App;
