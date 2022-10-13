import { clsx } from "clsx";
import { Slot } from "@radix-ui/react-slot";
import { ReactNode } from "react";

export interface ButtonProps {
  children: ReactNode;
  asChild?: boolean;
}
export const Button = ({ children, asChild }: ButtonProps) => {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      className={clsx(
        "w-full py-4 px-3 bg-cyan-500 rounded font-semibold text-black text-sm hover:bg-cyan-800 transition-colors focus:ring-2 ring-white"
      )}
    >
      {children}
    </Comp>
  );
};
