import { useNavigate } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import MobileLayout from "@/components/layout/MobileLayout";
import { Button } from "@/components/ui/button";

export default function About() {
  const navigate = useNavigate();
  return (
    <MobileLayout showNav={false}>
      <div className="p-4 space-y-6">
        <header className="flex items-center">
          <Button variant="ghost" size="icon" onClick={() => navigate(-1)} className="mr-2">
            <ChevronLeft className="w-5 h-5" />
          </Button>
          <h1 className="text-xl font-bold">About VoyaSphere</h1>
        </header>
        <div className="prose prose-sm text-gray-600 space-y-4">
          <p>
            VoyaSphere is a premier global visa assistance platform dedicated to simplifying the international travel experience. We bridge the gap between travelers and their destinations by providing clear, accurate, and professional visa guidance.
          </p>
          <p>
            Founded by travel experts and technology enthusiasts, our mission is to empower every traveler with the tools and knowledge needed to navigate complex immigration requirements with confidence and ease.
          </p>
          <h2 className="text-lg font-bold text-gray-900 mt-6">Our Vision</h2>
          <p>
            A world without travel borders where information is accessible and the application process is transparent for everyone, everywhere.
          </p>
        </div>
      </div>
    </MobileLayout>
  );
}
