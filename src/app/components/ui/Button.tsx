import React from "react";
import Link from "next/link";

interface ButtonProps {
  label: string;
  onClick?: () => void;
  href?: string;
  variant?: "outline" | "filled-teal" | "filled-orange";
  size?: "small" | "medium" | "large";
  disabled?: boolean;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  href,
  variant = "filled-teal",
  size = "medium",
  disabled = false,
  className = "",
}) => {
  const variantClasses = {
    outline:
      "text-text-button border-text-button border rounded font-medium hover:text-brand",
    "filled-teal": "bg-text-button text-white hover:bg-teal-700",
    "filled-orange":
      "text-white bg-orange rounded hover:bg-orange-600 hover:bg-tangerine-700",
  };

  const buttonSize = (size: string) => {
    if (size === "medium") {
      return "py-2.5 px-3";
    } else if (size === "small") {
      return "py-1.5 px-3";
    } else return "py-4 px-3";
  };

  const buttonClasses = `rounded ${
    variantClasses[variant]
  } ${className} ${buttonSize(size)} ${
    disabled ? "opacity-50 cursor-not-allowed" : ""
  }`;

  if (href) {
    return (
      <Link href={href} className={buttonClasses}>
        {label}
      </Link>
    );
  }

  return (
    <button onClick={onClick} disabled={disabled} className={buttonClasses}>
      {label}
    </button>
  );
};

export default Button;
