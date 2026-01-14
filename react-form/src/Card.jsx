import React from "react";
const Card = React.memo(({ onClick }) => {
  console.log("Card rendered");
  return (
    <div className="card">
      <h3>Card Component</h3>
      <button onClick={onClick}>Click</button>
    </div>
  );
});

export default Card;
