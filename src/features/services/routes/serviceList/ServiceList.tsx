import * as React from "react";
import { Footer, MainNavbar } from "~src/components";
import { ServiceListSection } from "../../components";

export const ServiceList = () => {
  return (
    <>
      <MainNavbar />
      <section id="service-list-section" className="pt-8 pb-6">
        <ServiceListSection />
      </section>
      <Footer />
    </>
  );
};
