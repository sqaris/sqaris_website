import React from "react";
import CareerSection from '../elements/CareerSection'

import JobListing from '../elements/JobListing'
const Career = () => {
  return (
    <section id="career" className="pt-4 bg-black">
      <CareerSection />
      <JobListing />
    </section>
  );
};

export default Career;
