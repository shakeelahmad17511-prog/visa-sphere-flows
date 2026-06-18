import { useState } from "react";
import { MessageCircle, Phone, Mail, ChevronRight, HelpCircle, Send, Plus } from "lucide-react";
import MobileLayout from "@/components/layout/MobileLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const FAQS = [
  {
    q: "How long does the visa process take?",
    a: "Processing times vary by country and visa type. Generally, it takes 10-15 business days for tourist visas."
  },
  {
    q: "Can VoyaSphere guarantee my visa?",
    a: "No platform can guarantee a visa. Final decisions are made by government authorities. We ensure your application is professionally prepared to maximize success."
  },
  {
    q: "What documents do I need for a student visa?",
    a: "Typically you need an acceptance letter from an institution, proof of funds, and a valid passport. Check our Search section for specific country requirements."
  },
  {
    q: "Is my personal data secure?",
    a: "Yes, VoyaSphere uses industry-standard encryption to protect your sensitive documents and personal information."
  }
];

export default function Support() {
  const [activeTab, setActiveTab] = useState<"faq" | "ticket">("faq");
  const [ticketData, setTicketData] = useState({ subject: "", message: "" });

  const handleSubmitTicket = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Ticket submitted! Our support team will contact you soon.");
    setTicketData({ subject: "", message: "" });
  };

  return (
    <MobileLayout>
      <div className="p-4 space-y-6">
        <header>
          <h1 className="text-2xl font-bold">Support Center</h1>
          <p className="text-gray-500 text-sm">We're here to help you with your visa journey</p>
        </header>

        {/* Contact Quick Options */}
        <div className="grid grid-cols-3 gap-3">
          <button className="flex flex-col items-center p-3 bg-white rounded-xl border border-gray-100 shadow-sm transition-transform active:scale-95">
            <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center mb-2">
              <MessageCircle className="w-5 h-5 text-emerald-600" />
            </div>
            <span className="text-[10px] font-bold text-gray-700">WhatsApp</span>
          </button>
          <button className="flex flex-col items-center p-3 bg-white rounded-xl border border-gray-100 shadow-sm transition-transform active:scale-95">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mb-2">
              <Phone className="w-5 h-5 text-blue-600" />
            </div>
            <span className="text-[10px] font-bold text-gray-700">Call Us</span>
          </button>
          <button className="flex flex-col items-center p-3 bg-white rounded-xl border border-gray-100 shadow-sm transition-transform active:scale-95">
            <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mb-2">
              <Mail className="w-5 h-5 text-purple-600" />
            </div>
            <span className="text-[10px] font-bold text-gray-700">Email</span>
          </button>
        </div>

        {/* Tab Selection */}
        <div className="flex bg-gray-100 p-1 rounded-xl">
          <button 
            className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${activeTab === "faq" ? "bg-white text-primary shadow-sm" : "text-gray-500"}`}
            onClick={() => setActiveTab("faq")}
          >
            FAQs
          </button>
          <button 
            className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${activeTab === "ticket" ? "bg-white text-primary shadow-sm" : "text-gray-500"}`}
            onClick={() => setActiveTab("ticket")}
          >
            Submit Ticket
          </button>
        </div>

        {activeTab === "faq" ? (
          <div className="space-y-4">
            <h2 className="text-sm font-bold text-gray-400 uppercase tracking-widest flex items-center">
              <HelpCircle className="w-4 h-4 mr-2" />
              Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="w-full space-y-2">
              {FAQS.map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="bg-white px-4 rounded-xl border border-gray-100 shadow-sm">
                  <AccordionTrigger className="text-sm font-semibold text-left py-4 hover:no-underline">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-xs text-gray-500 leading-relaxed pb-4">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        ) : (
          <Card className="border-none shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg">Open a New Ticket</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmitTicket} className="space-y-4">
                <div className="space-y-2">
                  <Input 
                    placeholder="Subject" 
                    value={ticketData.subject}
                    onChange={(e) => setTicketData({...ticketData, subject: e.target.value})}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Textarea 
                    placeholder="Describe your issue..." 
                    className="min-h-[120px]"
                    value={ticketData.message}
                    onChange={(e) => setTicketData({...ticketData, message: e.target.value})}
                    required
                  />
                </div>
                <Button className="w-full h-11">
                  <Send className="w-4 h-4 mr-2" />
                  Send Ticket
                </Button>
              </form>
            </CardContent>
          </Card>
        )}

        {/* Existing Tickets */}
        <div className="space-y-3 pt-4">
          <h2 className="text-sm font-bold text-gray-400 uppercase tracking-widest px-1">Your Recent Tickets</h2>
          <Card className="p-4 flex items-center justify-between border-none shadow-sm">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3" />
              <div>
                <span className="text-xs font-bold block">Document Inquiry #4421</span>
                <span className="text-[10px] text-gray-400">Status: Replied • 2 hours ago</span>
              </div>
            </div>
            <ChevronRight className="w-4 h-4 text-gray-300" />
          </Card>
        </div>
      </div>
    </MobileLayout>
  );
}
