// src/components/ui/Button.tsx
import * as React from "react";

export type ButtonProps =
  React.ButtonHTMLAttributes<HTMLButtonElement> &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    as?: "button" | "a";
    href?: string;
  };

const base =
  "inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium " +
  "bg-black text-white hover:opacity-90 transition disabled:opacity-50 disabled:pointer-events-none";

export function Button({
  as = "button",
  className = "",
  href,
  children,
  ...props
}: ButtonProps) {
  const cls = `${base} ${className}`.trim();

  if (as === "a") {
    return (
      <a className={cls} href={href} {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </a>
    );
  }

  return (
    <button className={cls} {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}

export default Button;