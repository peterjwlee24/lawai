"use client";

import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
}

export default function Button({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}: ButtonProps) {
  const base = "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200";

  const variants = {
    primary:
      "text-white bg-navy hover:bg-navy-900 shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0",
    secondary:
      "text-neutral-700 bg-white border-2 border-neutral-200 hover:border-neutral-300 hover:bg-neutral-50",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-5 py-2.5 text-sm",
    lg: "px-8 py-4 text-lg font-semibold",
  };

  return (
    <button
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
