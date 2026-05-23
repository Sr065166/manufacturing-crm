import { useState } from "react";
import axios from "axios";

function Login() {

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        formData
      );

      localStorage.setItem("token", res.data.token);

      alert("Login Successful");

      window.location.href = "/dashboard";

    } catch (error) {

      console.log(error);

      alert("Login Failed");

    }
  };

  return (
    <div className="bg-black text-white h-screen flex items-center justify-center">

      <form
        onSubmit={handleSubmit}
        className="bg-gray-900 p-10 rounded-xl w-[500px]"
      >

        <h1 className="text-5xl mb-10 text-center font-bold">
          Manufacturing CRM Login
        </h1>

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          className="block w-full p-4 mb-6 text-black rounded"
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          className="block w-full p-4 mb-6 text-black rounded"
          onChange={handleChange}
        />

        <button
          className="bg-blue-500 hover:bg-blue-600 transition-all px-5 py-4 rounded w-full text-xl"
        >
          Login
        </button>

      </form>

    </div>
  );
}

export default Login;