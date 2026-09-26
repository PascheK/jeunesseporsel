import React from "react";
import type { Metadata } from "next";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "Tableau de bord - Jeunesse de Porsel",
  robots: { index: false, follow: false }
};

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="min-h-screen bg-gray-50">
      {children}
      <Toaster />
    </main>
  );
};

export default AdminLayout;
