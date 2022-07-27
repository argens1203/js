import React, { useEffect } from "react";
import "./App.css";
import { getNodes } from "../api/thunks/get-nodes.thunk";
import { useAppDispatch, useAppSelector } from "../store/hooks";

function App() {
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => state);
  console.log(state);
  useEffect(() => {
    dispatch(getNodes());
  }, []);
  return <div className="App"></div>;
}

export default App;
