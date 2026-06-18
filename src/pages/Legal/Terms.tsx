import { useNavigate } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import MobileLayout from "@/components/layout/MobileLayout";
import { Button } from "@/components/ui/button";

export default function Terms() {
  const navigate = useNavigate();
  return (
    <MobileLayout showNav={false}>
      <div className="p-4 space-y-6">
        <header className="flex items-center">
          <Button variant="ghost" size="icon" onClick={() => navigate(-1)} className="mr-2">
            <ChevronLeft className="w-5 h-5" />
          </Button>
          <h1 className="text-xl font-bold">Terms & Conditions</h1>
        </header>
        <div className="prose prose-sm text-gray-600 space-y-4">
          <p>
            By using VoyaSphere, you agree to comply with these Terms and Conditions. Please read them carefully.
          </p>
          <h2 className="font-bold text-gray-900">1. Service Scope</h2>
          <p>
            VoyaSphere provides assistance and information. We do not issue visas. Final decisions remain with official immigration authorities.
          </p>
          <h2 className="font-bold text-gray-900">2. User Responsibility</h2>
          <p>
            You are responsible for the accuracy of the information provided in your applications.
          </p>
        </div>
      </div>
    </MobileLayout>
  );
}
