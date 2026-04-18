"use client";
import axios from "axios";
import { useState } from "react";

export default function Signup() {
  const [data, setData] = useState({ email: "", password: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("/api/auth/signup", data);
    alert("User Created");
  };

  return (
    <form onSubmit={handleSubmit} className="p-20 space-y-4">
      <input placeholder="Email" onChange={e => setData({...data, email: e.target.value})} />
      <input placeholder="Password" type="password" onChange={e => setData({...data, password: e.target.value})} />
      <button className="bg-red-500 text-white px-4 py-2">Signup</button>
    </form>
  );
}