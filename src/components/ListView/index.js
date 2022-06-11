import React from "react";
import DoneImg from "../../assets/correct.png";
import CancelImg from '../../assets/multiply.png'

import "./listView.css";

export default function ListView({ pId, taskName, updateToRemove, updateToComplete}) {
  return (
    <div className="card">
      <span>{taskName}</span>
      <div className="action-cta">
        <img src={DoneImg} className="m-2" alt="done" width={25} height={25} onClick={() => updateToComplete(pId)}/>
        <img src={CancelImg} className="m-2" alt="done" width={25} height={25} onClick={() => updateToRemove(pId)} />
      </div>
    </div>
  );
}
