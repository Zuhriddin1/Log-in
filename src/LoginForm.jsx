import React, { useState } from "react";
function LoginForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    Name: "",
    Email_address: "",
    Birthday: "",
    Religion: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      name: "",
      address: "",
      birthday: "",
      religion: "",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col w-[350px] rounded-3xl gap-5"
    >
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
        className="rounded-2xl p-3"
      />
      <input
        type="text"
        name="address"
        value={formData.address}
        onChange={handleChange}
        placeholder="Address"
        className="rounded-2xl p-3"
      />
      <input
        type="text"
        name="birthday"
        value={formData.birthday}
        onChange={handleChange}
        placeholder="Birthday"
        className="rounded-2xl p-3"
      />
      <input
        type="text"
        name="religion"
        value={formData.religion}
        onChange={handleChange}
        placeholder="Religion"
        className="rounded-2xl p-3"
      />
      <button type="submit" className="btn glass">
        Submit
      </button>
    </form>
  );
}
export default LoginForm;
