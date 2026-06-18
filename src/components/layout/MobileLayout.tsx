import { ReactNode } from "react";
import BottomNav from "./BottomNav";

interface MobileLayoutProps {
  children: ReactNode;
  showNav?: boolean;
}

export default function MobileLayout({ children, showNav = true }: MobileLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen bg-background font-sans max-w-md mx-auto border-x shadow-sm">
      <main className="flex-1 pb-20 overflow-y-auto">
        {children}
      </main>
      {showNav && <BottomNav />}
    </div>
  );
}
