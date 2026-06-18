import { useState } from "react";
import { Check, Shield, Zap, Star, CreditCard, ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import MobileLayout from "@/components/layout/MobileLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";

const PLANS = [
  {
    id: "basic",
    name: "Basic",
    price: "$29",
    description: "Essential visa information",
    features: ["Visa requirements", "Checklists", "Application steps", "Government links"],
    color: "bg-gray-50",
    text: "text-gray-800",
    icon: Shield
  },
  {
    id: "premium",
    name: "Premium",
    price: "$99",
    description: "Guided personal assistance",
    features: ["Personal consultant", "Document guidance", "Priority support", "Error checking"],
    color: "bg-blue-600",
    text: "text-white",
    icon: Star,
    popular: true
  },
  {
    id: "professional",
    name: "Professional",
    price: "$249",
    description: "End-to-end application support",
    features: ["Full application handling", "Document verification", "Interview prep", "Dedicated manager"],
    color: "bg-slate-900",
    text: "text-white",
    icon: Zap
  }
];

export default function Subscriptions() {
  const navigate = useNavigate();
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const handleSubscribe = (planId: string) => {
    setSelectedPlan(planId);
    toast.success(`Subscribing to ${planId.toUpperCase()} plan...`);
    // Simulated payment delay
    setTimeout(() => {
      localStorage.setItem("voyasphere_subscription", planId);
      toast.success("Subscription successful! You now have full access.");
      navigate("/");
    }, 1500);
  };

  return (
    <MobileLayout showNav={false}>
      <div className="p-4 space-y-6">
        <header className="flex items-center">
          <Button variant="ghost" size="icon" onClick={() => navigate(-1)} className="mr-2">
            <ChevronLeft className="w-5 h-5" />
          </Button>
          <h1 className="text-2xl font-bold">Premium Plans</h1>
        </header>

        <p className="text-sm text-gray-500 px-1">
          Unlock the full power of VoyaSphere and get expert assistance for your visa application.
        </p>

        <div className="space-y-6 pb-20">
          {PLANS.map((plan) => (
            <Card 
              key={plan.id} 
              className={`relative border-none overflow-hidden transition-all duration-300 ${plan.popular ? "ring-2 ring-primary scale-[1.02]" : "shadow-md"}`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-primary text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg">
                  MOST POPULAR
                </div>
              )}
              <CardHeader className={`${plan.color} ${plan.text} p-6 pb-4`}>
                <div className="flex items-center justify-between mb-2">
                  <plan.icon className="w-6 h-6 opacity-80" />
                  <CardTitle className="text-xl font-bold">{plan.name}</CardTitle>
                </div>
                <div className="flex items-baseline space-x-1">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  <span className="text-xs opacity-70">/ application</span>
                </div>
                <p className="text-xs mt-2 opacity-90 font-medium">{plan.description}</p>
              </CardHeader>
              <CardContent className="p-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start text-xs font-medium text-gray-600">
                      <Check className="w-4 h-4 text-emerald-500 mr-2 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button 
                  className={`w-full h-11 font-bold ${plan.popular ? "bg-primary" : "bg-slate-100 text-slate-800 hover:bg-slate-200"}`}
                  onClick={() => handleSubscribe(plan.id)}
                  disabled={!!selectedPlan}
                >
                  {selectedPlan === plan.id ? "Processing..." : "Select Plan"}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Payment Methods Info */}
        <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white/80 backdrop-blur-md p-4 border-t">
          <div className="flex items-center justify-center space-x-4 opacity-50 grayscale">
            <CreditCard className="w-6 h-6" />
            <span className="text-[10px] font-bold">PayPal</span>
            <span className="text-[10px] font-bold">Google Play</span>
            <span className="text-[10px] font-bold">Apple Pay</span>
          </div>
        </div>
      </div>
    </MobileLayout>
  );
}
