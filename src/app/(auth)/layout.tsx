import { ReactNode } from "react";

export default function LoginLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return <main>{children}</main>;
}
