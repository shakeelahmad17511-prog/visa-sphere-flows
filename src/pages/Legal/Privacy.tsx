import { useNavigate } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import MobileLayout from "@/components/layout/MobileLayout";
import { Button } from "@/components/ui/button";

export default function Privacy() {
  const navigate = useNavigate();
  return (
    <MobileLayout showNav={false}>
      <div className="p-4 space-y-6">
        <header className="flex items-center">
          <Button variant="ghost" size="icon" onClick={() => navigate(-1)} className="mr-2">
            <ChevronLeft className="w-5 h-5" />
          </Button>
          <h1 className="text-xl font-bold">Privacy Policy</h1>
        </header>
        <div className="prose prose-sm text-gray-600 space-y-4">
          <p className="text-xs italic text-gray-400">Last updated: May 20, 2024</p>
          <p>
            Your privacy is of paramount importance to us. This Privacy Policy explains how we collect, use, and protect your personal information when you use VoyaSphere.
          </p>
          <h2 className="font-bold text-gray-900">Data Collection</h2>
          <p>
            We collect information you provide directly, such as your name, email, and passport details when you start a visa application.
          </p>
          <h2 className="font-bold text-gray-900">Data Security</h2>
          <p>
            We implement state-of-the-art encryption to ensure your sensitive documents are protected from unauthorized access.
          </p>
        </div>
      </div>
    </MobileLayout>
  );
}
