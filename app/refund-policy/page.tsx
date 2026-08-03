import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Refund Policy",
  description: "Cancellation and refund terms for puja bookings."
};

export default function RefundPolicyPage() {
  return <LegalPage page="refund" />;
}
