import { clsx } from "clsx";
import { Slot } from "@radix-ui/react-slot";
import { ReactNode } from "react";

export interface TextProps {
  size?: "sm" | "md" | "lg";
  children: ReactNode;
  asChild?: boolean;
  text?: "100" | "200" | "400";
}
export const Text = ({ size = "md", children, asChild, text }: TextProps) => {
  const Comp = asChild ? Slot : "span";
  return (
    <Comp
      className={clsx(" font-sans", {
        "text-xs": size === "sm",
        "text-sm": size === "md",
        "text-md": size === "lg",
        "text-gray-100": text === "100",
        "text-gray-200": text === "200",
        "text-gray-400": text === "400",
      })}
    >
      {children}
    </Comp>
  );
};
