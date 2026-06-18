import { useNavigate } from "react-router-dom";
import { ChevronLeft, Mail, Phone, MapPin } from "lucide-react";
import MobileLayout from "@/components/layout/MobileLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Contact() {
  const navigate = useNavigate();
  return (
    <MobileLayout showNav={false}>
      <div className="p-4 space-y-6">
        <header className="flex items-center">
          <Button variant="ghost" size="icon" onClick={() => navigate(-1)} className="mr-2">
            <ChevronLeft className="w-5 h-5" />
          </Button>
          <h1 className="text-xl font-bold">Contact Us</h1>
        </header>
        
        <div className="space-y-4">
          <Card className="border-none shadow-sm">
            <CardContent className="p-4 flex items-center">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="text-sm font-bold">Email Support</h3>
                <p className="text-xs text-gray-500">support@voyasphere.com</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-none shadow-sm">
            <CardContent className="p-4 flex items-center">
              <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center mr-4">
                <Phone className="w-5 h-5 text-emerald-600" />
              </div>
              <div>
                <h3 className="text-sm font-bold">Phone Support</h3>
                <p className="text-xs text-gray-500">+1 (555) 123-4567</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-none shadow-sm">
            <CardContent className="p-4 flex items-center">
              <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center mr-4">
                <MapPin className="w-5 h-5 text-slate-600" />
              </div>
              <div>
                <h3 className="text-sm font-bold">Global Headquarters</h3>
                <p className="text-xs text-gray-500">123 Aviation Way, London, UK</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </MobileLayout>
  );
}
