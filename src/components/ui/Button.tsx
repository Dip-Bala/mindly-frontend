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
};

const DefaultStyle =
  "rounded-md flex items-center justify-center gap-2 cursor-pointer font-medium";
const SizeStyle: Record<SizeType, string> = {
  sm: "px-2 py-1 text-sm",
  md: "px-4 py-2 text-md",
  lg: "px-6 py-2 text-md",
};
const VariantStyle: Record<VariantType, string> = {
  primary:
    "bg-purple-300 text-purple-600 focus:bg-purple-500 focus:text-white hover:bg-gray-700 hover:text-white",
  secondary: "bg-purple-500 text-white bg-gray-700",
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
        } ${loading ? loadingStyle : ""}`}
      >
        {startIcon}
        {text}
        {endIcon}
      </button>
    </div>
  );
};
