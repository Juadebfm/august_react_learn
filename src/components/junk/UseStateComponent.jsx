import { useState } from "react";

const FavoriteColor = () => {
    // color is the default state of the element 
    // setColor is the function/method that will now change the state of the element.
  const [color, setColor] = useState("red"); // color = "red"

  return (
    <>
      <h1>My favorite color is {color}!</h1>
      <button type="button" onClick={() => setColor("blue")}>
        Blue
      </button>
    </>
  );
};


export default FavoriteColor