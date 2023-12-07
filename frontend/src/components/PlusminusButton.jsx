import React, { useState } from "react";

export default function PlusMinusButton() {
  let [productcount, setCount] = useState(0);

  function incrementProduct() {
    productcount = productcount + 1;
    setCount(productcount);
  }
  function decrementProduct() {
    if (productcount > 0) {
      productcount = productcount - 1;
      setCount(productcount);
    }
  }
  return (
    <div className="plusminus">
      <span className="minus" onClick={decrementProduct}>
        -
      </span>
      <span className="content">{productcount}</span>
      <span className="plus" onClick={incrementProduct}>
        +
      </span>
    </div>
  );
}
