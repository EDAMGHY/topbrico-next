import { config } from "@/lib/project.config";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/ui";
import {
  Heart,
  Home,
  Settings,
  User2,
  ChevronUp,
  Users,
  Logs,
  UserPen,
  MessageSquareText,
  MessageSquareQuote,
} from "lucide-react";

// Menu items.
const sidebar = [
  {
    title: "Overview",
    url: "/overview",
    icon: Home,
  },
  {
    title: "Favorite/User",
    url: "/overview/favorite",
    icon: Heart,
  },
  {
    title: "Reviews/Artisan",
    url: "/overview/reviews",
    icon: MessageSquareQuote,
  },
  {
    title: "Profile Approvals/Admin",
    url: "/overview/profile-approvals",
    icon: UserPen,
  },
  {
    title: "Listing Reviews/Admin",
    url: "/overview/listing-reviews",
    icon: MessageSquareText,
  },
  {
    title: "Users/Admin",
    url: "/overview/users",
    icon: Users,
  },
  {
    title: "Logs/Admin",
    url: "/overview/logs",
    icon: Logs,
  },
  // {
  //   title: "Account",
  //   url: "/overview/account",
  //   icon: User,
  // },
  {
    title: "Settings",
    url: "/overview/settings",
    icon: Settings,
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>{config.name}</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {sidebar.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton>
                  <User2 /> John Doe
                  <ChevronUp className="ml-auto" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                side="top"
                className="w-[--radix-popper-anchor-width]"
              >
                <DropdownMenuItem>
                  <span>Account</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>Billing</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>Sign out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
