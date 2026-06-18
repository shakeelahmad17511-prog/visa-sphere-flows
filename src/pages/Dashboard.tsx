import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ClipboardList, ChevronRight, Clock, CheckCircle2, AlertCircle, Search, Plus } from "lucide-react";
import MobileLayout from "@/components/layout/MobileLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

interface Application {
  id: string;
  country: string;
  flag: string;
  type: string;
  status: string;
  date: string;
}

export default function Dashboard() {
  const [applications, setApplications] = useState<Application[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const data = localStorage.getItem("voyasphere_applications");
    if (data) {
      setApplications(JSON.parse(data));
    }
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Started": return "bg-blue-100 text-blue-600";
      case "Documents uploaded": return "bg-amber-100 text-amber-600";
      case "Under review": return "bg-purple-100 text-purple-600";
      case "Processing": return "bg-orange-100 text-orange-600";
      case "Completed": return "bg-emerald-100 text-emerald-600";
      default: return "bg-gray-100 text-gray-600";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Completed": return <CheckCircle2 className="w-4 h-4" />;
      case "Started": return <Clock className="w-4 h-4" />;
      default: return <AlertCircle className="w-4 h-4" />;
    }
  };

  return (
    <MobileLayout>
      <div className="p-4 space-y-6">
        <header className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">My Visas</h1>
          <Button size="sm" onClick={() => navigate("/search")} className="rounded-full h-9">
            <Plus className="w-4 h-4 mr-1" />
            New
          </Button>
        </header>

        <Tabs defaultValue="active" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="active">Active</TabsTrigger>
            <TabsTrigger value="history">History</TabsTrigger>
          </TabsList>
          
          <TabsContent value="active" className="space-y-4">
            {applications.filter(a => a.status !== "Completed").length > 0 ? (
              applications.filter(a => a.status !== "Completed").map((app) => (
                <Card key={app.id} className="overflow-hidden border-none shadow-sm">
                  <CardContent className="p-0">
                    <div className="p-4 flex items-center justify-between border-b bg-white">
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">{app.flag}</span>
                        <div>
                          <h3 className="font-bold text-sm">{app.country}</h3>
                          <p className="text-[10px] text-gray-500 font-medium uppercase">{app.type}</p>
                        </div>
                      </div>
                      <Badge className={`${getStatusColor(app.status)} border-none flex items-center gap-1`}>
                        {getStatusIcon(app.status)}
                        {app.status}
                      </Badge>
                    </div>
                    <div className="p-3 bg-gray-50 flex items-center justify-between">
                      <span className="text-[10px] text-gray-400">Application ID: #{app.id}</span>
                      <Button variant="ghost" size="sm" className="text-xs h-8 text-primary font-bold">
                        Details
                        <ChevronRight className="w-3 h-3 ml-1" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))
            ) : (
              <div className="flex flex-col items-center justify-center py-12 text-center bg-white rounded-2xl border-2 border-dashed border-gray-100">
                <ClipboardList className="w-12 h-12 text-gray-200 mb-4" />
                <h3 className="font-bold text-gray-600">No active applications</h3>
                <p className="text-sm text-gray-400 max-w-[200px] mt-2">Start your visa journey by selecting a destination.</p>
                <Button variant="outline" className="mt-6" onClick={() => navigate("/search")}>
                  Explore Destinations
                </Button>
              </div>
            )}
          </TabsContent>

          <TabsContent value="history" className="space-y-4">
             {applications.filter(a => a.status === "Completed").length > 0 ? (
              applications.filter(a => a.status === "Completed").map((app) => (
                <Card key={app.id} className="opacity-75">
                  <CardContent className="p-4 flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl opacity-50">{app.flag}</span>
                      <div>
                        <h3 className="font-bold text-sm text-gray-600">{app.country}</h3>
                        <p className="text-[10px] text-gray-400">{app.date}</p>
                      </div>
                    </div>
                    <Badge variant="outline" className="text-emerald-600 border-emerald-200 bg-emerald-50">
                      Completed
                    </Badge>
                  </CardContent>
                </Card>
              ))
            ) : (
              <div className="py-12 text-center text-gray-400 text-sm italic">
                No application history yet.
              </div>
            )}
          </TabsContent>
        </Tabs>

        {/* Quick Links */}
        <section className="mt-8 space-y-3">
          <h2 className="text-sm font-bold text-gray-400 uppercase tracking-widest px-1">Resources</h2>
          <Card className="p-4 flex items-center justify-between cursor-pointer hover:bg-gray-50 transition-colors">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                <Search className="w-4 h-4 text-primary" />
              </div>
              <span className="text-sm font-medium">Find Visa Requirements</span>
            </div>
            <ChevronRight className="w-4 h-4 text-gray-300" />
          </Card>
        </section>
      </div>
    </MobileLayout>
  );
}
