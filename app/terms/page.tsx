import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms governing puja bookings and services on Pitra Dosh Puja."
};

export default function TermsPage() {
  return <LegalPage page="terms" />;
}
