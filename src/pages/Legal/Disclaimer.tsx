import { useNavigate } from "react-router-dom";
import { ChevronLeft, AlertTriangle } from "lucide-react";
import MobileLayout from "@/components/layout/MobileLayout";
import { Button } from "@/components/ui/button";

export default function Disclaimer() {
  const navigate = useNavigate();
  return (
    <MobileLayout showNav={false}>
      <div className="p-4 space-y-6 text-center">
        <header className="flex items-center">
          <Button variant="ghost" size="icon" onClick={() => navigate(-1)} className="mr-2">
            <ChevronLeft className="w-5 h-5" />
          </Button>
          <h1 className="text-xl font-bold">Disclaimer</h1>
        </header>
        
        <div className="flex justify-center pt-8">
          <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center">
            <AlertTriangle className="w-10 h-10 text-amber-600" />
          </div>
        </div>

        <div className="prose prose-sm text-gray-600 px-4 space-y-6">
          <h2 className="text-2xl font-black text-slate-900 leading-tight">
            "VoyaSphere provides visa information and assistance. Final visa decisions are made by official government immigration authorities."
          </h2>
          <p className="text-sm leading-relaxed">
            While we strive to provide the most accurate and up-to-date information, immigration laws and requirements change frequently. VoyaSphere is not a government agency and cannot guarantee the issuance of any visa.
          </p>
          <p className="text-xs text-gray-400 pt-10">
            By using our services, you acknowledge that you have read and understood this disclaimer.
          </p>
        </div>
      </div>
    </MobileLayout>
  );
}
