import { createContext, useContext, useEffect, useState } from "react";

const JsonPlaceholderContext = createContext();

export default JsonPlaceholderProvider = ({ children }) => {
  //use State to catch the posts coming from the backend - posts is the initial which is an empty array
  const [balablue, setBabalue] = useState([]); // balablue = []
  const [loading, setLoading] = useState(true);


  // effectual logic, so if we put something in the dependency array, it triggers the useEffect, if not it runs everytime the component renders
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        response.json();
      })
      .then((data) => {
        console.log(data);
        setBabalue(data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  // balablue = [data]
  return(
    <JsonPlaceholderContext.Provider value={{posts, loading}}>
        {children}
    </JsonPlaceholderContext.Provider>
  )
};


// create a custom hook
export const useJsonPlaceholder = () => {
    const context = useContext(JsonPlaceholderContext);
    if(!context) {
        throw new Error("Context not found")
    }
}