"use client";
import React from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface ICheckbox extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  checked?: boolean;
}

const Checkbox: React.FC<ICheckbox> = ({
  checked = false,
  className,
  ...props
}) => {
  const [isChecked, setIsChecked] = React.useState(checked);
  const handleChecked = () => {
    setIsChecked((prev) => !prev);
  };
  return (
    <button
      type="button"
      role="checkbox"
      onClick={handleChecked}
      aria-checked={isChecked}
      data-state={isChecked ? "checked" : "unchecked"}
      className={cn(
        "text-neutral-white outline outline-2 outline-neutral-white-100 -outline-offset-2 rounded-[3px] min-w-[18px] min-h-[18px] max-w-[18px] max-h-[18px] flex items-center justify-center focus-visible:outline-primary/80",
        isChecked && "bg-neutral-black-600 outline-transparent",
        className,
      )}
      {...props}
    >
      <span
        className={cn("transition-transform scale-0", isChecked && "scale-100")}
      >
        <Check size={12} strokeWidth={3} />
      </span>
    </button>
  );
};

export default Checkbox;
