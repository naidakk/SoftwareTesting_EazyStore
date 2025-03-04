import React from "react";

export default function PageTitle({ title }) {
  return (
    <h1 className="text-3xl font-primary font-extrabold text-center text-primary mt-4 py-2">
      {title}
    </h1>
  );
}
