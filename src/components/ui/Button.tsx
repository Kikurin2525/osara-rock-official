// src/components/ui/Button.tsx
import * as React from "react";

export type ButtonProps =
  React.ButtonHTMLAttributes<HTMLButtonElement> &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    as?: "button" | "a";
    href?: string;
  };

const base =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-5 py-2.5 text-sm font-semibold " +
  "transition-colors duration-200 disabled:pointer-events-none disabled:opacity-50";

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
