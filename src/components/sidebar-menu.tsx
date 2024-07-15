import { Cog6ToothIcon, HomeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { ReactNode } from "react";

export default function SidebarMenu() {
  const menus = [
    { name: "Home", href: "", icon: <HomeIcon className="w-4 h-4 mr-2" /> },
    {
      name: "Settings",
      href: "/settings",
      icon: <Cog6ToothIcon className="w-4 h-4 mr-2" />,
    },
  ];
  return (
    <nav className="mt-6 space-y-2 mx-4">
      {menus.map((menu) => (
        <SidebarMenuItem
          key={menu.name}
          href={menu.href}
          icon={menu.icon}
          name={menu.name}
        />
      ))}
    </nav>
  );
}

type SidebarMenuItemProps = { href: string; icon: ReactNode; name: string };
function SidebarMenuItem({ href, icon, name }: SidebarMenuItemProps) {
  return (
    <Link
      href={href || ""}
      className="flex items-center px-4 py-2 text-sm font-medium text-muted-foreground"
      prefetch={false}
    >
      {icon}
      {name}
    </Link>
  );
}
