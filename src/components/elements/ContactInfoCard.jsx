import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";

const ContactInfoCard = () => {
  return (
    <div className=" text-white md:p-16 p-8 m-16 rounded-xl border border-zinc-700 max-w-7xl mx-8 lg:mx-auto ">
      <h3 className="md:text-3xl text-2xl font-bold mb-4">Get in Touch</h3>
      <p className="text-gray-400 mb-8 max-w-3xl">
        Whether you're dreaming big or just curious, the team at SQARIS is just a message away. Let's build something amazing—reach out with your thoughts, ideas, or challenges, and we’ll get back to you in no time!
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
        {/* Location */}
        <div className="flex items-start space-x-4">
          <div className="bg-zinc-800 p-3 rounded-full">
            <FaMapMarkerAlt className="text-green-400 text-xl" />
          </div>
          <div>
            <h4 className="font-semibold">Location</h4>
            <p className="text-gray-400 text-sm">SQARIS, Thrissur, Kerala, India</p>
          </div>
        </div>

        {/* Email */}
        <div className="flex items-start space-x-4">
          <div className="bg-zinc-800 p-3 rounded-full">
            <FaEnvelope className="text-green-400 text-xl" />
          </div>
          <div>
            <h4 className="font-semibold">Email Address</h4>
            <p className="text-gray-400 text-sm">sqaris.in@gmail.com</p>
          </div>
        </div>

        {/* Phone */}
        <div className="flex items-start space-x-4">
          <div className="bg-zinc-800 p-3 rounded-full">
            <FaPhone className="text-green-400 text-xl" />
          </div>
          <div>
            <h4 className="font-semibold">Phone Number</h4>
            <p className="text-gray-400 text-sm">+91 99953 26699</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfoCard;
