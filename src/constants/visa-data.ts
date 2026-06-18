export interface Destination {
  name: string;
  flag: string;
  id: string;
}

export const POPULAR_DESTINATIONS: Destination[] = [
  { name: "United States", flag: "🇺🇸", id: "us" },
  { name: "United Kingdom", flag: "🇬🇧", id: "uk" },
  { name: "Canada", flag: "🇨🇦", id: "ca" },
  { name: "United Arab Emirates", flag: "🇦🇪", id: "uae" },
  { name: "Kuwait", flag: "🇰🇼", id: "kw" },
  { name: "Qatar", flag: "🇶🇦", id: "qa" },
  { name: "Saudi Arabia", flag: "🇸🇦", id: "sa" },
  { name: "Germany", flag: "🇩🇪", id: "de" },
  { name: "France", flag: "🇫🇷", id: "fr" },
  { name: "Italy", flag: "🇮🇹", id: "it" },
  { name: "Spain", flag: "🇪🇸", id: "es" },
  { name: "Netherlands", flag: "🇳🇱", id: "nl" },
  { name: "Belgium", flag: "🇧🇪", id: "be" },
  { name: "Switzerland", flag: "🇨🇭", id: "ch" },
  { name: "Austria", flag: "🇦🇹", id: "at" },
  { name: "Sweden", flag: "🇸🇪", id: "se" },
  { name: "Norway", flag: "🇳🇴", id: "no" },
  { name: "Denmark", flag: "🇩🇰", id: "dk" },
  { name: "Finland", flag: "🇫🇮", id: "fi" },
  { name: "Portugal", flag: "🇵🇹", id: "pt" },
  { name: "Greece", flag: "🇬🇷", id: "gr" },
  { name: "Ireland", flag: "🇮🇪", id: "ie" },
  { name: "Poland", flag: "🇵🇱", id: "pl" },
  { name: "Australia", flag: "🇦🇺", id: "au" },
  { name: "New Zealand", flag: "🇳🇿", id: "nz" },
  { name: "Japan", flag: "🇯🇵", id: "jp" },
  { name: "Pakistan", flag: "🇵🇰", id: "pk" },
];

export const VISA_TYPES = [
  { id: "tourist", name: "Tourist Visa", icon: "Plane" },
  { id: "student", name: "Student Visa", icon: "GraduationCap" },
  { id: "work", name: "Work Visa", icon: "Briefcase" },
  { id: "business", name: "Business Visa", icon: "Building" },
  { id: "family", name: "Family Visa", icon: "Users" },
  { id: "transit", name: "Transit Visa", icon: "Clock" },
];

export interface VisaRequirement {
  documents: string[];
  steps: string[];
  processingTime: string;
  fees: string;
  governmentLink: string;
}

export const VISA_REQUIREMENTS: Record<string, VisaRequirement> = {
  default: {
    documents: [
      "Valid Passport (at least 6 months validity)",
      "Recent Passport-size Photographs",
      "Completed Visa Application Form",
      "Proof of Financial Means (Bank Statements)",
      "Travel Insurance",
      "Flight Itinerary",
      "Hotel Reservation / Proof of Accommodation",
    ],
    steps: [
      "Gather required documents",
      "Complete the online application form",
      "Pay the visa fee",
      "Schedule an appointment at the embassy/consulate",
      "Attend the visa interview",
      "Wait for processing and collect your passport",
    ],
    processingTime: "10-15 Business Days",
    fees: "Estimated $80 - $160 USD",
    governmentLink: "https://www.example-immigration.gov",
  },
};
