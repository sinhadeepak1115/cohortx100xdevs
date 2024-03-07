import React from "react";

export default function Signin({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className="border-b text-center">
        20% off on all items for the next 3 days
      </div>
      {children}
    </div>
  );
}
