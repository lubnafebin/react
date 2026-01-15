import React from "react";

const Button = React.memo(({ onClick }) => {
  console.log("Button rendered");
  return (
    <div className="card">
      <h3>Button Component</h3>
      <button onClick={onClick}>Click</button>
    </div>
  );
});

export default Button;
