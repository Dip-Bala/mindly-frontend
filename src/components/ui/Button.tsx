import { type ReactElement } from "react";

type VariantType = "primary" | "secondary";
type SizeType = "sm" | "md" | "lg";

interface ButtonProps {
  variant: VariantType;
  size: SizeType;
  text: string;
  startIcon?: ReactElement;
  endIcon?: ReactElement;
  onClick?: () => void;
  fullWidth?: boolean;
  loading?: boolean;
}

const DefaultStyle: string =
  "rounded-md flex items-center justify-center gap-2 cursor-pointer";

const SizeStyle: Record<SizeType, string> = {
  sm: "px-2 py-1 text-sm",
  md: "px-4 py-2 text-md",
  lg: "px-6 py-2 text-md",
};
const VariantStyle: Record<VariantType, string> = {
  primary: "bg-purple-300 text-purple-600",
  secondary: "bg-purple-500 text-white",
};
const fullWidthStyle = "w-full";
const loadingStyle = "disabled opacity-70"
export const Button = (props: ButtonProps) => {
  return (
    <div>
      <button
        onClick={props.onClick ? props.onClick : () => {}}
        className={`${DefaultStyle} ${VariantStyle[props.variant]} ${
          SizeStyle[props.size]} ${props.fullWidth && fullWidthStyle} ${props.loading && loadingStyle}`}
      >
        {props.startIcon}
        {props.text}
        {props.endIcon}
      </button>
    </div>
  );
};
