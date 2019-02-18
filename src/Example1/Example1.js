import React from "react";

function Example1(props) {
  return (
    <div className="Example1">
      <input
        type="text"
        value={props.title}
        onChange={event => props.changeTitle(event.target.value)}
      />
    </div>
  );
}

export default Example1;
