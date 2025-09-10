// src/components/ui/Button.tsx
import * as React from "react";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
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
    // リンクとして使いたい場合
    return (
      <a className={cls} href={href} {...(props as any)}>
        {children}
      </a>
    );
  }

  // ふつうのボタン
  return (
    <button className={cls} {...props}>
      {children}
    </button>
  );
}

export default Button;