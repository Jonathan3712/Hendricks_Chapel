import React from "react";

const App = () => {
  const handleClick = async () => {
    try {
      
      const response = await fetch("http://localhost:6000/test");
      const data = await response.json();
      alert(data.message); // ✅ Show the backend response in an alert
    } catch (error) {
      console.error("Error connecting to backend:", error);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Bridge Family</h1>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};

export default App;
