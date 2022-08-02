import React, { useEffect } from "react";
import "./App.css";
import { getNodes } from "../api/thunks/get-nodes.thunk";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { ComponentFromRef } from "../components";
import { addAndAttachNodeThunk } from "../api/thunks/add-and-attach-node.thunk";

function App() {
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => state);
  console.log(state);
  useEffect(() => {
    dispatch(getNodes());
  }, []);
  useEffect(() => {
    const ret = dispatch(addAndAttachNodeThunk({ data: "Test", parent: "N3" }));
    console.log("hello");
    console.log(ret);
    dispatch(
      addAndAttachNodeThunk({
        data: "https://www.larryco.com/uploaded/article/Article_435.jpg?1659433678",
        parent: "N3",
        preferredPresentation: "IMAGE",
      })
    );
  }, []);
  return (
    <div className="App">
      <ComponentFromRef nodeRef={"NODE-1"} />
    </div>
  );
}

export default App;
