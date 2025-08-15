import React from "react";
import ServicesHero from "./ServicesHero";
import ServicesDetails from "./ServicesDetails";
import CoreServices from "./CoreServices";
import StudentProcess from "./StudentProcess";
import FaqSection from "./FaqSection";

export default function ServicesMain() {
  return (
    <div>
      <ServicesHero />
      <CoreServices />
      {/* <ServicesDetails /> */}
      <StudentProcess />
      <FaqSection />
    </div>
  );
}
