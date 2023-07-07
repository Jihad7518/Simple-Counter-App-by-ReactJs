
import { useState } from "react";
import "./App.css";

function App() {

  const [count, setCount] = useState(0);

  function decreaseHandler() {
    setCount(count-1);
  }

  function increaseHandler() {
    setCount(count+1);
  }

  function resetHandler() {
    setCount(0);
  }

