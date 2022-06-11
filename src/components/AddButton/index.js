import React from "react";
import "./addButton.css";

export default function AddButton({addToStore}) {
  return (
    <>
      <button type="button" className="mt-3 btn btn-success submit" onClick={() => addToStore()}>
        Add Task
      </button>
    </>
  );
}
