import { AppSidebar } from "@/layout";
import { SidebarProvider } from "@/ui";
import { ReactNode } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full">{children}</main>
    </SidebarProvider>
  );
}
