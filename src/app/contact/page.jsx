"use client";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted!");
  };

  return (
    <form onSubmit={handleSubmit} className="p-20 space-y-4">
      <input placeholder="Name" className="border p-2 w-full" />
      <input placeholder="Email" className="border p-2 w-full" />
      <button className="bg-red-500 text-white px-4 py-2">Submit</button>
    </form>
  );
}