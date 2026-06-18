import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { ChevronLeft, ChevronRight, Upload, CheckCircle2, FileText, User, Plane } from "lucide-react";
import MobileLayout from "@/components/layout/MobileLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";
import { POPULAR_DESTINATIONS, VISA_TYPES } from "@/constants/visa-data";

export default function Apply() {
  const { countryId, visaType } = useParams();
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    passportNumber: "",
    fullName: "",
    dateOfBirth: "",
    purpose: "",
    documents: [] as string[]
  });

  const country = POPULAR_DESTINATIONS.find(d => d.id === countryId);
  const type = VISA_TYPES.find(t => t.id === visaType);

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
    else handleSubmit();
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
    else navigate(-1);
  };

  const handleSubmit = () => {
    const newApplication = {
      id: Math.random().toString(36).substr(2, 9),
      country: country?.name,
      flag: country?.flag,
      type: type?.name,
      status: "Started",
      date: new Date().toLocaleDateString(),
      ...formData
    };

    const existing = JSON.parse(localStorage.getItem("voyasphere_applications") || "[]");
    localStorage.setItem("voyasphere_applications", JSON.stringify([newApplication, ...existing]));
    
    toast.success("Application started successfully!");
    navigate("/dashboard");
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({
        ...formData,
        documents: [...formData.documents, e.target.files[0].name]
      });
      toast.info(`Uploaded: ${e.target.files[0].name}`);
    }
  };

  return (
    <MobileLayout showNav={false}>
      <div className="p-4 flex flex-col h-full">
        <header className="flex items-center justify-between mb-6">
          <Button variant="ghost" size="icon" onClick={handleBack}>
            <ChevronLeft className="w-5 h-5" />
          </Button>
          <div className="text-center">
            <h1 className="font-bold text-lg">Apply Assistance</h1>
            <p className="text-xs text-gray-500">{country?.name} - {type?.name}</p>
          </div>
          <div className="w-10" /> {/* Spacer */}
        </header>

        <div className="mb-8 space-y-2">
          <div className="flex justify-between text-xs font-medium text-gray-500 px-1">
            <span>Personal Info</span>
            <span>Documents</span>
            <span>Review</span>
          </div>
          <Progress value={(step / 3) * 100} className="h-2" />
        </div>

        <div className="flex-1">
          {step === 1 && (
            <div className="space-y-4">
              <h2 className="text-xl font-bold flex items-center">
                <User className="w-5 h-5 mr-2 text-primary" />
                Personal Details
              </h2>
              <div className="space-y-3">
                <div className="space-y-1">
                  <Label htmlFor="fullName">Full Name (as in Passport)</Label>
                  <Input 
                    id="fullName" 
                    value={formData.fullName}
                    onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                    placeholder="John Adam Doe" 
                  />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="passport">Passport Number</Label>
                  <Input 
                    id="passport" 
                    value={formData.passportNumber}
                    onChange={(e) => setFormData({...formData, passportNumber: e.target.value})}
                    placeholder="A1234567" 
                  />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="dob">Date of Birth</Label>
                  <Input 
                    id="dob" 
                    type="date"
                    value={formData.dateOfBirth}
                    onChange={(e) => setFormData({...formData, dateOfBirth: e.target.value})}
                  />
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <h2 className="text-xl font-bold flex items-center">
                <Upload className="w-5 h-5 mr-2 text-primary" />
                Upload Documents
              </h2>
              <p className="text-sm text-gray-500">Please provide clear scans of the required documents.</p>
              
              <div className="grid grid-cols-1 gap-4 mt-4">
                <div className="border-2 border-dashed border-gray-200 rounded-xl p-8 flex flex-col items-center justify-center text-center hover:border-primary/50 transition-colors relative">
                  <input 
                    type="file" 
                    className="absolute inset-0 opacity-0 cursor-pointer" 
                    onChange={handleFileUpload}
                  />
                  <div className="bg-primary/5 p-4 rounded-full mb-4">
                    <Upload className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-sm">Tap to upload passport scan</h3>
                  <p className="text-[10px] text-gray-400 mt-1">PDF, JPG or PNG (Max 5MB)</p>
                </div>

                {formData.documents.length > 0 && (
                  <div className="space-y-2">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400">Uploaded Files</h3>
                    {formData.documents.map((doc, i) => (
                      <div key={i} className="flex items-center p-3 bg-emerald-50 border border-emerald-100 rounded-lg">
                        <FileText className="w-4 h-4 text-emerald-600 mr-2" />
                        <span className="text-xs font-medium text-emerald-800 flex-1">{doc}</span>
                        <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4">
              <h2 className="text-xl font-bold flex items-center">
                <CheckCircle2 className="w-5 h-5 mr-2 text-primary" />
                Review Application
              </h2>
              <Card className="border-none shadow-sm bg-gray-50">
                <CardContent className="p-4 space-y-4">
                  <div className="flex items-center justify-between pb-4 border-b">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl">{country?.flag}</span>
                      <span className="font-bold">{country?.name}</span>
                    </div>
                    <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full font-medium">{type?.name}</span>
                  </div>
                  <div className="grid grid-cols-1 gap-3">
                    <div className="flex justify-between">
                      <span className="text-xs text-gray-400">Applicant Name</span>
                      <span className="text-xs font-medium">{formData.fullName || "Not provided"}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-xs text-gray-400">Passport Number</span>
                      <span className="text-xs font-medium">{formData.passportNumber || "Not provided"}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-xs text-gray-400">Documents Uploaded</span>
                      <span className="text-xs font-medium">{formData.documents.length} files</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <div className="bg-amber-50 border border-amber-100 p-4 rounded-xl">
                <div className="flex">
                  <Plane className="w-5 h-5 text-amber-600 mr-3 mt-1 shrink-0" />
                  <div>
                    <h4 className="text-xs font-bold text-amber-800">What happens next?</h4>
                    <p className="text-[10px] text-amber-700 leading-relaxed mt-1">
                      Our visa experts will review your application within 24 hours. You'll receive updates in your dashboard and via email.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="pt-6 mt-auto">
          <Button 
            className="w-full h-12 text-lg font-bold shadow-lg"
            onClick={handleNext}
          >
            {step === 3 ? "Submit Application" : "Continue"}
            {step < 3 && <ChevronRight className="w-5 h-5 ml-2" />}
          </Button>
        </div>
      </div>
    </MobileLayout>
  );
}
