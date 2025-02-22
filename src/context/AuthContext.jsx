import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  //states
  const [user, setUser] = useState(null); // carry's the userData
  const [loading, setLoading] = useState(true); // Loading
  const [error, setError] = useState(null); // errors

  //Checking if the user data is present in the local storage
  // only json, it cannot take objects, when we are storing information nin the local storage we mostly convert the object to JSON by stringifying the object, which mains converting the obj to json: Stringify means converting from object to JSON and "parsing" or "parse" is vice-versa.
  useEffect(() => {
    const userData = localStorage.getItem("userData");
    if (userData) {
      setUser(JSON.parse(userData));
    }
    setLoading(false);
  }, []);

  // signup logic
  const signup = async (userData) => {
    try {
      //Ensure all required fields from schema are present
      const { firstname, lastname, username, email, password } = userData;
      // Simple Check Using the OR operator
      if (!firstname || !lastname || !username || !email || !password) {
        throw new Error("All fields are required");
      }

      // RequestObj
      const reqObj = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstname,
          lastname,
          username,
          email,
          password,
        }),
      };


      // make the api call
      const response = await fetch("http://localhost:3002/api/auth/signup", reqObj);
      const data = await response.json();

      if(!response.ok) {
        throw new Error(data.message || "Signup Failed");
      }

      return data; 
    } catch (error) {
        setError(error.message);
        throw error
    }
  };

  // signin logic

  // signout
  const signout = () => {
    localStorage.removeItem("userData");
    setUser(null)
    setError(null)
  }
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
