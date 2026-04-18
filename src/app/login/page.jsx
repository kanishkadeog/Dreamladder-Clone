"use client";
import axios from "axios";
import { useAuth } from "../../context/AuthContext";
import { useRouter } from "next/navigation";

export default function Login() {
  const { login } = useAuth();
  const router = useRouter();

  const handleLogin = async () => {
    const res = await axios.post("/api/auth/login");
    login(res.data);
    router.push("/dashboard");
  };

  return (
    <div className="p-20">
      <button onClick={handleLogin} className="bg-red-500 text-white p-2">
        Login
      </button>
    </div>
  );
}