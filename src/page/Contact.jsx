import React from "react";

import ContactElement from "../components/elements/ContactElement";
import contact from "../assets/image/contact/contact.png";

const Contact = () => {
  return (
    <div
      className="bg-gradient-to-br from-[#100F13] to-[#241a3d] bg-cover "
      style={{
        backgroundImage: `url(${contact})`,
      }}
    >
      <main className="flex justify-center  items-center min-h-screen p-4 sm:p-8 overflow-x-hidden">
        <ContactElement />
      </main>
    </div>
  );
};

export default Contact;
