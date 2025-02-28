import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import MobileNavigation from "@/components/layout/MobileNavigation";
import React from "react";
import { Toaster } from "@/components/ui/toaster";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex h-screen">
      <section className="flex size-full flex-1 flex-col">
        <MobileNavigation />
        <Header />

        <div className="main-content">
          {children}
          <Footer />
        </div>
      </section>
      <Toaster />
    </main>
  );
};

export default Layout;
