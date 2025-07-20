import React from "react";
import Navbar from "../elements/NavBar";
import Footer from "../elements/Footer";
import JobApplicationForm from "../elements/JobApplicationForm";

const ApplyPage = () => {
  return (
    <section className="bg-black ">
      <Navbar />
      <JobApplicationForm/>
      <Footer />
    </section>
  );
};

export default ApplyPage;
