import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Search, Globe, ChevronRight, MessageCircle, CreditCard, Plane } from "lucide-react";
import MobileLayout from "@/components/layout/MobileLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { POPULAR_DESTINATIONS, VISA_TYPES } from "@/constants/visa-data";

export default function Home() {
  const [userName, setUserName] = useState("Guest");
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("voyasphere_user");
    if (user) {
      setUserName(JSON.parse(user).name);
    }
  }, []);

  const filteredDestinations = POPULAR_DESTINATIONS.filter(d => 
    d.name.toLowerCase().includes(searchQuery.toLowerCase())
  ).slice(0, 4);

  return (
    <MobileLayout>
      <div className="flex flex-col">
        {/* Hero Section */}
        <section className="relative h-64 bg-primary overflow-hidden">
          <img 
            src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/03eeb0a4-fa14-4d2c-8003-d6a68eb474f9/hero-travel-a05272ae-1781736085673.webp" 
            alt="VoyaSphere Travel" 
            className="absolute inset-0 w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
          <div className="relative z-10 p-6 flex flex-col justify-end h-full text-white">
            <h1 className="text-3xl font-bold mb-1">VoyaSphere</h1>
            <p className="text-blue-100 mb-4 opacity-90">Global Visa Assistance Platform</p>
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-lg p-3">
              <p className="text-sm font-medium">Hello, {userName}!</p>
            </div>
          </div>
        </section>

        {/* Search Section */}
        <div className="p-4 -mt-6 relative z-20">
          <Card className="shadow-lg border-none">
            <CardContent className="p-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input 
                  placeholder="Where do you want to go?" 
                  className="pl-10 h-12 border-gray-200"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => navigate("/search")}
                />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Categories */}
        <section className="px-4 py-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold">Visa Categories</h2>
            <Link to="/search" className="text-sm text-primary font-medium">View all</Link>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {VISA_TYPES.slice(0, 3).map((type) => (
              <Link 
                key={type.id} 
                to={`/search?type=${type.id}`}
                className="flex flex-col items-center p-3 bg-white rounded-xl border border-gray-100 shadow-sm hover:border-primary/50 transition-colors"
              >
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mb-2">
                  <Plane className="w-5 h-5 text-primary" />
                </div>
                <span className="text-[11px] font-medium text-center leading-tight">{type.name}</span>
              </Link>
            ))}
          </div>
        </section>

        {/* Popular Destinations */}
        <section className="px-4 py-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold">Popular Destinations</h2>
          </div>
          <div className="space-y-3">
            {POPULAR_DESTINATIONS.slice(0, 5).map((destination) => (
              <button
                key={destination.id}
                onClick={() => navigate(`/search?country=${destination.id}`)}
                className="flex items-center justify-between w-full p-4 bg-white rounded-xl border border-gray-100 shadow-sm hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">{destination.flag}</span>
                  <span className="font-semibold text-gray-700">{destination.name}</span>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-300" />
              </button>
            ))}
          </div>
        </section>

        {/* Action Cards */}
        <section className="px-4 py-4 grid grid-cols-2 gap-4">
          <Card className="bg-blue-600 text-white overflow-hidden relative">
            <CardContent className="p-4">
              <MessageCircle className="w-8 h-8 mb-4 opacity-50" />
              <h3 className="font-bold text-sm mb-1">Customer Support</h3>
              <p className="text-[10px] text-blue-100 mb-3">Live assistance 24/7</p>
              <Button 
                variant="secondary" 
                size="sm" 
                className="w-full text-[10px] h-7 bg-white text-blue-600 hover:bg-gray-100"
                onClick={() => navigate("/support")}
              >
                Get Help
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-emerald-600 text-white overflow-hidden relative">
            <CardContent className="p-4">
              <CreditCard className="w-8 h-8 mb-4 opacity-50" />
              <h3 className="font-bold text-sm mb-1">Premium Plans</h3>
              <p className="text-[10px] text-emerald-100 mb-3">Priority assistance</p>
              <Button 
                variant="secondary" 
                size="sm" 
                className="w-full text-[10px] h-7 bg-white text-emerald-600 hover:bg-gray-100"
                onClick={() => navigate("/subscriptions")}
              >
                View Plans
              </Button>
            </CardContent>
          </Card>
        </section>

        {/* Footer info */}
        <section className="px-6 py-8 text-center bg-gray-100/50 mt-4">
          <div className="flex justify-center mb-4">
            <Globe className="w-6 h-6 text-primary/40" />
          </div>
          <p className="text-xs text-gray-400 mb-2">VoyaSphere - Your Journey, Our Expertise</p>
          <div className="flex justify-center space-x-4">
            <Link to="/about" className="text-[10px] text-gray-500 hover:underline">About</Link>
            <Link to="/terms" className="text-[10px] text-gray-500 hover:underline">Terms</Link>
            <Link to="/privacy" className="text-[10px] text-gray-500 hover:underline">Privacy</Link>
          </div>
        </section>
      </div>
    </MobileLayout>
  );
}
