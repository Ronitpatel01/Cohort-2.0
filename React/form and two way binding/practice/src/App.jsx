import React from "react";
import "./App.css";
import { useState } from "react";
// import { useSearchParams } from "react-router-dom";

const App = () => {
  const [name, setName] = useState("");
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          alert(`Hello, ${name}!`);
          setName("");
        }}
      >
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <h1>Hello, {name}!</h1>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;
