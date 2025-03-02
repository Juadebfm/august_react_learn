import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const SignupPage = () => {
  //Get the initial value of the form data
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // navigate hook
  const navigate = useNavigate();
  // Call the auth context functionalites
  const { signup, error, clearError } = useAuth();

  // create a function for change
  const handleChange = (e) => {
    clearError();
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Submit function
  const handleSubmit = async (e) => {
    e.preventDefault();

    //basic validation
    if (formData.password !== formData.confirmPassword) {
      alert("Password Do Not Match");
      return;
    }

    // try catch
    try {
      // remove confirmPassword before sending the formdata payload to the api
      const { confirmPassword, ...signupData } = formData;
      const response = await signup(signupData);

      // catch response
      if (response.success) {
        navigate("/login");
      }
    } catch (error) {
      console.log("Signup Error", error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <h2>Create Account</h2>
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstname"
          placeholder="firstname"
          required
          value={formData.firstname}
          onChange={handleChange}
        />
        <input
          type="text"
          name="lastname"
          placeholder="lastname"
          required
          value={formData.lastname}
          onChange={handleChange}
        />
        <input
          type="text"
          name="username"
          placeholder="username"
          required
          value={formData.username}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          required
          placeholder="email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          required
          value={formData.password}
          onChange={handleChange}
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="confirm password"
          required
          value={formData.confirmPassword}
          onChange={handleChange}
        />

        <button
          type="submit"
          className="border border-slate-400 text-black px-[18px] py-2"
        >
          Signup
        </button>
      </form>
    </div>
  );
};

export default SignupPage;
