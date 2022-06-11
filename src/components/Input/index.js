import React from "react";
import "./searchInput.css";

export default function SearchInput({fetchInput, placeholder}) {
  return (
      <div className="center-align mt-3">
        <input
          type="text"
          className="form-control m-0"
          placeholder={placeholder}
          onChange={(event) => fetchInput(event.target.value)}
        ></input>
      </div>
  );
}
