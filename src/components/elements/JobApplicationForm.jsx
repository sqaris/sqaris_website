import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const JobApplicationForm = () => {
  const formRef = useRef();
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_rke19lx", // Your EmailJS service ID
        "template_p1n8c0j", // Your EmailJS template ID
        formRef.current,
        "FioSwvh9MMBw-YuGq" // Your EmailJS public key
      )
      .then(() => {
        setIsSent(true);
        setTimeout(() => setIsSent(false), 2000);
        formRef.current.reset();
      })
      .catch((error) => {
        console.error("Email failed:", error);
        alert("Failed to send application. Try again.");
      });
  };

  return (
    <section className="bg-black pt-32  w-full text-white p-6 y-auto">
     <div className="w-full max-w-4xl mx-auto md:my-32 rounded-xl border border-emerald-500 p-8 md:p-10">

        <h2 className="md:text-4xl text-2xl font-bold text-emerald-400 mb-8">Apply Now</h2>

        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="space-y-4"
          encType="multipart/form-data"
        >
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            required
            className="w-full p-2 bg-zinc-800 rounded"
          />

          <input
            type="text"
            name="qualification"
            placeholder="Qualification"
            required
            className="w-full p-2 bg-zinc-800 rounded"
          />

          <select
            name="job_title"
            required
            className="w-full p-2 bg-zinc-800 rounded"
          >
            <option value="">Select Job Title</option>
            <option value="MERN Stack Developer">MERN Stack Developer</option>
            <option value="Flutter Developer">Flutter Developer</option>
            <option value="UI/UX Designer">UI/UX Designer</option>
            <option value="QA/Tester">QA/Tester</option>
          </select>

          <input
            type="text"
            name="experience"
            placeholder="Experience (e.g. 1–2 years)"
            required
            className="w-full p-2 bg-zinc-800 rounded"
          />

          <input
            type="url"
            name="linkedin"
            placeholder="LinkedIn Profile URL"
            required
            className="w-full p-2 bg-zinc-800 rounded"
          />

          {/* File upload only shows file name — EmailJS can't send the file itself */}
<div>

</div>

          <textarea
            name="description"
            placeholder="Tell us about yourself or your motivation to apply..."
            rows="5"
            required
            className="w-full p-3 bg-zinc-800 rounded"
          ></textarea>

          <button
            type="submit"
            className="w-full py-2 bg-emerald-500 hover:bg-emerald-600 rounded text-white"
          >
            Submit Application
          </button>

          {isSent && (
            <p className="text-green-400 mt-3">
              Application submitted successfully!
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default JobApplicationForm;
