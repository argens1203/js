import React, { useEffect, useState } from "react";
import "./App.css";
import { getNodes } from "../api/thunks/get-nodes.thunk";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { ComponentFromRef } from "../components";
import {
  addAndAttachImage,
  addAndAttachNodeThunk,
} from "../api/thunks/add-and-attach-node.thunk";
import { DataType } from "model";

function App() {
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => state);
  const [pageRef, setPageRef] = useState("");

  const setup = async () => {
    const article = await dispatch(
      addAndAttachNodeThunk({
        dataType: DataType.COLLECTION,
        preferredPresentation: "ARTICLE",
      })
    );
    setPageRef(article);
    const title = await dispatch(
      addAndAttachNodeThunk({
        dataType: DataType.STRING,
        preferredPresentation: "TITLE",
        data: "Two-Over-One GF -- Part 1 (Introduction)",
        parent: article,
      })
    );
    const body = await dispatch(
      addAndAttachNodeThunk({
        dataType: DataType.COLLECTION,
        preferredPresentation: "BODY",
        parent: article,
      })
    );
    await dispatch(
      addAndAttachNodeThunk({
        dataType: DataType.STRING,
        data: "Did any of you play bridge in the 1960's? You don't have to admit it. ",
        parent: body,
      })
    );
    await dispatch(addAndAttachNodeThunk({ data: "Test", parent: body }));
    await dispatch(
      addAndAttachImage({
        data: "https://www.larryco.com/uploaded/article/Article_435.jpg?1659433678",
        parent: body,
      })
    );
  };

  const onClick = () => {
    setup();
  };
  return (
    <div className="App">
      <button onClick={onClick}>onclick</button>
      <ComponentFromRef nodeRef={pageRef} />
    </div>
  );
}

export default App;
