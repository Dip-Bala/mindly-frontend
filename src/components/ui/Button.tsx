import { type ReactElement } from "react";

type VariantType = "primary" | "secondary";
type SizeType = "sm" | "md" | "lg";

type ButtonProps = {
  variant: VariantType;
  size: SizeType;
  text?: string;
  type?: "button" | "submit" | "reset"; // ✅ Fixed
  startIcon?: ReactElement;
  endIcon?: ReactElement;
  onClick?: () => void;
  fullWidth?: boolean;
  loading?: boolean;
  className? : string;
};

const DefaultStyle =
  "rounded-lg flex items-center justify-center gap-2 cursor-pointer ";
const SizeStyle: Record<SizeType, string> = {
  sm: "px-2 py-1 text-md",
  md: "px-4 py-2 text-md",
  lg: "px-6 py-3 text-md font-semibold",
};
const VariantStyle: Record<VariantType, string> = {
  primary:
    "bg-white outline text-indigo-700 hover:outline-2 hover:outline-indigo-600/90 hover:bg-white",
  secondary: "bg-indigo-600 text-white  hover:shadow-md hover:shadow-indigo-600/50",
};
const fullWidthStyle = "w-full";
const loadingStyle = "disabled opacity-70";

export const Button = ({
  onClick,
  type = "button", // ✅ defaulted
  variant,
  size,
  text,
  startIcon,
  endIcon,
  fullWidth,
  loading,
  className=""
}: ButtonProps) => {
  // console.log(onClick)
  return (
    <div>
      <button
        type={type}
        onClick={onClick}
        disabled={loading}
        className={`${DefaultStyle} ${VariantStyle[variant]} ${SizeStyle[size]} ${
          fullWidth ? fullWidthStyle : ""
        } ${loading ? loadingStyle : ""} ${className}`}
      >
        {startIcon}
        {text}
        {endIcon}
      </button>
    </div>
  );
};
