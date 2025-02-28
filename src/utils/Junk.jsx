fetch("https://byway-backend.vercel.app/api/auth/signup", reqObj)
  .then((response) => {
    if (!response.ok) {
      throw new Error(data.message || "Signup Failed");
    }
    response.json();
  })
  .then((data) => console.log(data))
  .catch((error) => {
    setError(error.message);
    throw error;
  });
