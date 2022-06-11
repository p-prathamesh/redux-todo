import React, { useEffect, useRef, memo } from "react";
import "./timeInput.css";

const TimeInput = ({ getTime, time }) => {
  const inputRef = useRef(null);

  useEffect(() => {
    const d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();

    if (h < 10) h = "0" + h;
    if (m < 10) m = "0" + m;

    inputRef.current.value = h + ":" + m;
  }, [time]);

  return (
    <>
      <input
        ref={inputRef}
        type="time"
        className="time"
        id="timeId"
        value={time}
        onChange={(event) => getTime(event.target.value)}
      />
    </>
  );
};

export default memo(TimeInput);
