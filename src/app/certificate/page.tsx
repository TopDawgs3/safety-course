import type { Metadata } from "next";
import { CertificateClient } from "@/components/CertificateClient";

export const metadata: Metadata = {
  title: "Certificate",
};

export default function CertificatePage() {
  return <CertificateClient />;
}
