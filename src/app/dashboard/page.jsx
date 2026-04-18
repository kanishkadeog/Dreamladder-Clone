"use client";
import { useAuth } from "../../context/AuthContext";

export default function Dashboard() {
  const { user } = useAuth();

  return (
    <div className="p-20">
      <h1>Welcome {user?.user}</h1>
    </div>
  );
}