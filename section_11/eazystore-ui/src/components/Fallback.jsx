import React from "react";

export default function Fallback() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <span className="text-2xl font-semibold text-primary dark:text-light">
        Loading...
      </span>
    </div>
  );
}
