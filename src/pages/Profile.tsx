import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import MobileLayout from "@/components/layout/MobileLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User, LogOut, Settings, CreditCard, Bell, ShieldCheck } from "lucide-react";

export default function Profile() {
  const [user, setUser] = useState<any>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const userData = localStorage.getItem("voyasphere_user");
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("voyasphere_user");
    toast.info("Logged out successfully");
    navigate("/login");
  };

  if (!user) return null;

  return (
    <MobileLayout>
      <div className="p-4 space-y-6">
        <header className="flex flex-col items-center py-6">
          <Avatar className="w-24 h-24 mb-4 border-4 border-primary/10">
            <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${user.name}`} />
            <AvatarFallback>{user.name?.charAt(0)}</AvatarFallback>
          </Avatar>
          <h1 className="text-2xl font-bold">{user.name}</h1>
          <p className="text-gray-500">{user.email}</p>
        </header>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500 uppercase">Account Settings</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="divide-y">
              <button className="flex items-center w-full p-4 hover:bg-gray-50 transition-colors">
                <User className="w-5 h-5 text-gray-400 mr-3" />
                <span className="flex-1 text-left">Personal Information</span>
                <span className="text-gray-400">›</span>
              </button>
              <button onClick={() => navigate("/subscriptions")} className="flex items-center w-full p-4 hover:bg-gray-50 transition-colors">
                <CreditCard className="w-5 h-5 text-gray-400 mr-3" />
                <span className="flex-1 text-left">Subscription Plans</span>
                <span className="text-gray-400">›</span>
              </button>
              <button className="flex items-center w-full p-4 hover:bg-gray-50 transition-colors">
                <Bell className="w-5 h-5 text-gray-400 mr-3" />
                <span className="flex-1 text-left">Notifications</span>
                <span className="text-gray-400">›</span>
              </button>
              <button className="flex items-center w-full p-4 hover:bg-gray-50 transition-colors">
                <ShieldCheck className="w-5 h-5 text-gray-400 mr-3" />
                <span className="flex-1 text-left">Security & Privacy</span>
                <span className="text-gray-400">›</span>
              </button>
            </div>
          </CardContent>
        </Card>

        <Button 
          variant="outline" 
          className="w-full text-destructive hover:text-destructive border-destructive/20 hover:bg-destructive/5"
          onClick={handleLogout}
        >
          <LogOut className="w-4 h-4 mr-2" />
          Log Out
        </Button>

        <div className="text-center py-4">
          <p className="text-xs text-gray-400">VoyaSphere App Version 1.0.0</p>
        </div>
      </div>
    </MobileLayout>
  );
}
