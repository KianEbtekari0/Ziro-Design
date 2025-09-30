import React from "react";

// اسکلت ساده
export function Skeleton({ className = "", ...props }) {
  return (
    <div
      className={`animate-pulse rounded-3xl bg-gray-200/20 ${className}`}
      {...props}
    />
  );
}
