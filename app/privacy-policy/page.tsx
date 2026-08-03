import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Pitra Dosh Puja collects, uses and protects your information."
};

export default function PrivacyPolicyPage() {
  return <LegalPage page="privacy" />;
}
