import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Search from "./pages/Search";
import VisaDetail from "./pages/VisaDetail";
import Apply from "./pages/Apply";
import Dashboard from "./pages/Dashboard";
import Support from "./pages/Support";
import Profile from "./pages/Profile";
import Subscriptions from "./pages/Subscriptions";
import About from "./pages/Legal/About";
import Privacy from "./pages/Legal/Privacy";
import Terms from "./pages/Legal/Terms";
import Contact from "./pages/Legal/Contact";
import Disclaimer from "./pages/Legal/Disclaimer";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/search" element={<Search />} />
          <Route path="/visa/:countryId/:visaType" element={<VisaDetail />} />
          
          {/* Protected Routes */}
          <Route path="/apply/:countryId/:visaType" element={<ProtectedRoute><Apply /></ProtectedRoute>} />
          <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
          <Route path="/support" element={<ProtectedRoute><Support /></ProtectedRoute>} />
          <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
          <Route path="/subscriptions" element={<ProtectedRoute><Subscriptions /></ProtectedRoute>} />
          
          {/* Legal Routes */}
          <Route path="/about" element={<About />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
        </Routes>
        <Toaster position="top-center" />
      </div>
    </Router>
  );
}

export default App;
