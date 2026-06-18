import { useState, useMemo } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Search as SearchIcon, ChevronRight, Globe, Filter } from "lucide-react";
import MobileLayout from "@/components/layout/MobileLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { POPULAR_DESTINATIONS, VISA_TYPES } from "@/constants/visa-data";
import { Button } from "@/components/ui/button";

export default function Search() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [selectedType, setSelectedType] = useState(searchParams.get("type") || "");

  const filteredCountries = useMemo(() => {
    return POPULAR_DESTINATIONS.filter(country => 
      country.name.toLowerCase().includes(query.toLowerCase())
    );
  }, [query]);

  const handleCountrySelect = (countryId: string) => {
    if (!selectedType) {
      // If no type selected, we just scroll to types or show a message
      // In a real app we'd probably have a 2-step flow
    } else {
      navigate(`/visa/${countryId}/${selectedType}`);
    }
  };

  return (
    <MobileLayout>
      <div className="p-4 space-y-6">
        <header>
          <h1 className="text-2xl font-bold">Find Your Visa</h1>
          <p className="text-gray-500 text-sm">Select destination and visa type to view requirements</p>
        </header>

        {/* Step 1: Select Type */}
        <div className="space-y-3">
          <label className="text-sm font-semibold flex items-center">
            <Filter className="w-4 h-4 mr-2 text-primary" />
            Step 1: Choose Visa Type
          </label>
          <div className="grid grid-cols-2 gap-2">
            {VISA_TYPES.map((type) => (
              <Button
                key={type.id}
                variant={selectedType === type.id ? "default" : "outline"}
                className="h-auto py-3 px-2 flex flex-col items-center justify-center text-center text-[11px]"
                onClick={() => setSelectedType(type.id)}
              >
                {type.name}
              </Button>
            ))}
          </div>
        </div>

        {/* Step 2: Select Country */}
        <div className="space-y-4">
          <label className="text-sm font-semibold flex items-center">
            <Globe className="w-4 h-4 mr-2 text-primary" />
            Step 2: Select Destination
          </label>
          <div className="relative">
            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input 
              placeholder="Search countries..." 
              className="pl-10 h-12"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>

          <div className="space-y-2 max-h-[400px] overflow-y-auto pr-1">
            {filteredCountries.map((country) => (
              <button
                key={country.id}
                onClick={() => handleCountrySelect(country.id)}
                disabled={!selectedType}
                className={`flex items-center justify-between w-full p-4 bg-white rounded-xl border border-gray-100 shadow-sm transition-all ${
                  !selectedType ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-50 active:scale-[0.98]"
                }`}
              >
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">{country.flag}</span>
                  <span className="font-semibold text-gray-700">{country.name}</span>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-300" />
              </button>
            ))}
            {filteredCountries.length === 0 && (
              <div className="py-8 text-center text-gray-500 italic text-sm">
                No destinations found for "{query}"
              </div>
            )}
          </div>
        </div>
      </div>
    </MobileLayout>
  );
}
