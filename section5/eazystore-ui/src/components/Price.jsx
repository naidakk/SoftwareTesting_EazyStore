import React from "react";

export default function Price({ currency, price }) {
  return (
    <>
      {currency}
      <span>{price}</span>
    </>
  );
}
