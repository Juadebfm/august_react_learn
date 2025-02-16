import { createContext, useContext, useEffect, useState } from "react";

const JsonPlaceholderContext = createContext();

export const JsonPlaceholderProvider = ({ children }) => {
  //use State to catch the posts coming from the backend - posts is the initial which is an empty array
  const [posts, setPosts] = useState([]); // posts = []
  const [loading, setLoading] = useState(true);

  // effectual logic, so if we put something in the dependency array, it triggers the useEffect, if not it runs everytime the component renders
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
       
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setPosts(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <JsonPlaceholderContext.Provider value={{ posts, loading }}>
      {children}
    </JsonPlaceholderContext.Provider>
  );
};


// Custom hooks
export const useJsonPlaceholder = () => {
  const context = useContext(JsonPlaceholderContext);
  if(!context) {
    throw new Error("`useJsonPlaceholder` must be used within a `JsonPlaceholderProvider`")
  }
  return context;
}
