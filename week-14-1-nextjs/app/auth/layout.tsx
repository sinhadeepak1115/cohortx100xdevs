import React from "react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="border-b p-1 text-center">
        20% off on all items for the next 3 days
      </div>
      {children}
    </div>
  );
}
