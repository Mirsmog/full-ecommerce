import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import React from "react";

interface ICheckbox extends React.InputHTMLAttributes<HTMLInputElement> {}

const Checkbox: React.FC<ICheckbox> = ({ className }) => {
  return (
    <label className="cursor-pointer bg-transparent outline outline-2 -outline-offset-2 outline-neutral-black-100 checkbox-label w-[18px] h-[18px] relative rounded-[3px]">
      <input type="checkbox" className={cn("sr-only peer", className)} />
      <Check
        className="absolute top-[3px] left-[3px] transition-transform scale-0 peer-checked:scale-100"
        color="white"
        size={12}
        strokeWidth={3}
      />
    </label>
  );
};

export default Checkbox;
