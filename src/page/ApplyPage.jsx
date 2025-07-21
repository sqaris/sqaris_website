import React from "react";
import Navbar from "../components/elements/NavBar";
import Footer from "../components/elements/Footer";
import JobApplicationForm from "../elements/JobApplicationForm";

const ApplyPage = () => {
  return (
    <section className="bg-black  overflow-hidden">
      <Navbar />
      <JobApplicationForm />
      <Footer />
    </section>
  );
};

export default ApplyPage;
