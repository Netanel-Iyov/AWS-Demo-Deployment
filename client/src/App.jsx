import React, { useEffect, useState } from "react";
import "./App.css";

const apiBaseUrl = "http://46.51.129.218:3000";

function App() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    fetchCounter();
  }, []);

  const fetchCounter = async () => {
    try {
      const response = await fetch(`${apiBaseUrl}/counter`);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setCounter(data.counter);
    } catch (error) {
      console.error("Error fetching initial counter value:", error);
    }
  };

  const increment = async () => {
    try {
      const response = await fetch(`${apiBaseUrl}/counter/increase`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setCounter(data.counter);
    } catch (error) {
      console.error("Error incrementing counter:", error);
    }
  };

  const decrement = async () => {
    try {
      const response = await fetch(`${apiBaseUrl}/counter/decrease`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setCounter(data.counter);
    } catch (error) {
      console.error("Error decrementing counter:", error);
    }
  };

  return (
    <div className="app">
      <h1>AWS Demo - Counter</h1>
      <div className="counter-container">
        <div className="counter" id="counter">
          {counter}
        </div>
        <div className="buttons">
          <button onClick={decrement}>-</button>
          <button onClick={increment}>+</button>
        </div>
      </div>
    </div>
  );
}

export default App;
