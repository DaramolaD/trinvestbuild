"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";

interface ExpandableButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  variant?: "primary" | "secondary";
  label: string;
}

export function ExpandableButton({
  className,
  href,
  variant = "primary",
  label,
  ...props
}: ExpandableButtonProps) {
  const isPrimary = variant === "primary";

  // Configuration for variants
  // Primary: Dark BG, Gold Icon BG -> Hover: Gold BG (via expansion), Dark Text
  // Secondary: Gold BG, White Icon BG -> Hover: White BG (via expansion), Dark Text

  const baseClasses = "group relative inline-flex items-center gap-3 overflow-hidden rounded-full pl-6 pr-2 py-2 font-semibold transition-all duration-300 shadow-xl hover:-translate-y-1 active:scale-95";

  const variantClasses = isPrimary
    ? "bg-white text-secondary hover:bg-accent hover:text-white"
    : "bg-accent text-white hover:bg-secondary";

  // The expanding circle (Icon BG)
  // Absolute positioned, starts as circle behind icon, scales up on hover
  const circleClasses = cn(
    "absolute right-2 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full transition-all duration-500 ease-out group-hover:scale-[25] z-0",
    isPrimary ? "bg-accent" : "bg-white"
  );

  // Icon Container
  // Must be z-10 to stay on top
  const iconContainerClasses = cn(
    "relative z-10 flex h-10 w-10 items-center justify-center rounded-full transition-colors duration-300",
    isPrimary ? "bg-accent group-hover:bg-white" : "bg-white group-hover:bg-accent"
  );

  // Content (Label)
  // Must be z-10 to stay on top
  const labelClasses = cn(
    "relative z-10 transition-colors duration-300",
    isPrimary ? "group-hover:text-white" : "group-hover:text-secondary"
  );

  const Icon = ChevronRight;

  const content = (
    <>
      <span className={labelClasses}>{label}</span>
      {/* Expanding Background Circle - positioned relative to the container but visually behind icon */}
      <div className={circleClasses} />

      <div className={iconContainerClasses}>
        <Icon className={cn(
          "w-5 h-5 transition-colors duration-300",
          isPrimary ? "text-white group-hover:text-accent" : "text-accent group-hover:text-white"
        )} />
      </div>
    </>
  );

  if (href) {
    return (
      <Link href={href} className={cn(baseClasses, variantClasses, className)}>
        {content}
      </Link>
    );
  }

  return (
    <button className={cn(baseClasses, variantClasses, className)} {...props}>
      {content}
    </button>
  );
}
