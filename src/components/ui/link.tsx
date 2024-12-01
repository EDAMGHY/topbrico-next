import { Button } from "./button";
import { default as NXLink } from "next/link";
import { cn } from "@/lib/utils";
import { ILink } from "@/types";

export const Link = ({
  className,
  iconLeft = false,
  iconRight = false,
  icon,
  variant = "default",
  children,
  href,
}: ILink) => {
  const contentLink = (
    <NXLink className={cn("flex items-center gap-2", className)} href={href}>
      {iconLeft && icon && icon}
      <span className="inline-flex">{children}</span>
      {iconRight && icon && icon}
    </NXLink>
  );

  return variant === "custom" ? (
    contentLink
  ) : (
    <Button variant={variant} asChild>
      {contentLink}
    </Button>
  );
};
