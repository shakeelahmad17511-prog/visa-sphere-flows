import { Home, Search, ClipboardList, LifeBuoy, User } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { icon: Home, label: "Home", href: "/" },
  { icon: Search, label: "Search", href: "/search" },
  { icon: ClipboardList, label: "My Visas", href: "/dashboard" },
  { icon: LifeBuoy, label: "Support", href: "/support" },
  { icon: User, label: "Profile", href: "/profile" },
];

export default function BottomNav() {
  const location = useLocation();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 max-w-md mx-auto">
      <div className="flex justify-around items-center h-16">
        {NAV_ITEMS.map(({ icon: Icon, label, href }) => {
          const isActive = location.pathname === href;
          return (
            <Link
              key={href}
              to={href}
              className={cn(
                "flex flex-col items-center justify-center w-full h-full transition-colors",
                isActive ? "text-primary" : "text-gray-500"
              )}
            >
              <Icon className={cn("w-5 h-5", isActive && "stroke-[2.5px]")} />
              <span className="text-[10px] mt-1 font-medium">{label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
