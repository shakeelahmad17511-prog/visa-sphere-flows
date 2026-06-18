import { useParams, useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight, FileText, CheckCircle2, Clock, Globe, Info, ExternalLink } from "lucide-react";
import MobileLayout from "@/components/layout/MobileLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { POPULAR_DESTINATIONS, VISA_TYPES, VISA_REQUIREMENTS } from "@/constants/visa-data";

export default function VisaDetail() {
  const { countryId, visaType } = useParams();
  const navigate = useNavigate();

  const country = POPULAR_DESTINATIONS.find(d => d.id === countryId);
  const type = VISA_TYPES.find(t => t.id === visaType);
  const requirements = VISA_REQUIREMENTS[countryId!] || VISA_REQUIREMENTS.default;

  if (!country || !type) return <div>Invalid Selection</div>;

  return (
    <MobileLayout>
      <div className="flex flex-col min-h-full">
        <header className="p-4 flex items-center border-b bg-white sticky top-0 z-10">
          <Button variant="ghost" size="icon" onClick={() => navigate(-1)} className="mr-2">
            <ChevronLeft className="w-5 h-5" />
          </Button>
          <div className="flex items-center space-x-2">
            <span className="text-xl">{country.flag}</span>
            <h1 className="font-bold">{country.name} - {type.name}</h1>
          </div>
        </header>

        <div className="p-4 space-y-6 flex-1">
          {/* Overview Card */}
          <div className="grid grid-cols-2 gap-3">
            <Card className="border-none shadow-sm bg-blue-50">
              <CardContent className="p-4 flex flex-col items-center text-center">
                <Clock className="w-6 h-6 text-primary mb-2" />
                <span className="text-[10px] text-gray-500 uppercase font-bold tracking-wider">Processing</span>
                <span className="text-xs font-semibold">{requirements.processingTime}</span>
              </CardContent>
            </Card>
            <Card className="border-none shadow-sm bg-blue-50">
              <CardContent className="p-4 flex flex-col items-center text-center">
                <Info className="w-6 h-6 text-primary mb-2" />
                <span className="text-[10px] text-gray-500 uppercase font-bold tracking-wider">Estimated Fee</span>
                <span className="text-xs font-semibold">{requirements.fees}</span>
              </CardContent>
            </Card>
          </div>

          {/* Required Documents */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold flex items-center">
              <FileText className="w-5 h-5 mr-2 text-primary" />
              Required Documents
            </h2>
            <Card>
              <CardContent className="p-4">
                <ul className="space-y-3">
                  {requirements.documents.map((doc, i) => (
                    <li key={i} className="flex items-start text-sm">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2 mt-0.5 shrink-0" />
                      <span className="text-gray-600">{doc}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </section>

          {/* Application Steps */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold flex items-center">
              <Globe className="w-5 h-5 mr-2 text-primary" />
              Application Steps
            </h2>
            <div className="space-y-4 ml-3 border-l-2 border-primary/10 pl-5 relative">
              {requirements.steps.map((step, i) => (
                <div key={i} className="relative">
                  <div className="absolute -left-[29px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-white shadow-sm shrink-0" />
                  <p className="text-sm font-medium text-gray-800">{step}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Government Links */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold">Official Resources</h2>
            <a 
              href={requirements.governmentLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-dashed border-gray-300 hover:bg-gray-100 transition-colors"
            >
              <div className="flex items-center">
                <ExternalLink className="w-5 h-5 text-gray-400 mr-3" />
                <span className="text-sm font-medium">Government Portal</span>
              </div>
              <ChevronRight className="w-4 h-4 text-gray-400" />
            </a>
          </section>
        </div>

        {/* Action Button */}
        <div className="p-4 border-t bg-white sticky bottom-16">
          <Button 
            className="w-full h-12 text-lg font-bold shadow-lg"
            onClick={() => navigate(`/apply/${countryId}/${visaType}`)}
          >
            Apply for Assistance
          </Button>
          <p className="text-[10px] text-center text-gray-400 mt-2 italic">
            Disclaimer: Final visa decisions are made by official authorities.
          </p>
        </div>
      </div>
    </MobileLayout>
  );
}
