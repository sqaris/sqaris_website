import { useEffect, useState } from "react";

const ContactSection = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setShow(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section
      className={`bg-black text-white py-16 px-4 text-center transition-opacity duration-1000 ${
        show ? "opacity-100" : "opacity-0"
      }`}
    >
        <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white mt-20">
          Contact{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-500">
            US
          </span>
        </h2>

      {/* Fading gradient line */}
      <div className="w-full h-[1px] mb-10 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

      <div className="max-w-xl mx-auto space-y-2 text-sm sm:text-base">
        <p className="text-gray-300 uppercase tracking-wide">We're Hiring</p>
        <p>Want to create bold impact through design & engineering?</p>
        <p>
          Apply to open positions by writing to us at{" "}
          <a
            href="mailto:sqaris@gmail.com"
            className="text-green-400 hover:underline"
          >
            sqaris.in@gmail.com
          </a>
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
