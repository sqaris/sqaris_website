import {
  FaClock,
  FaUserShield,
  FaChartLine,
  FaUserCheck,
} from 'react-icons/fa';

const philosophies = [
  {
    icon: FaClock,
    title: 'Performance-Driven Culture',
    description:
      '8-hour productive workday minimum with lifecycle aligned rewards',
  },
  {
    icon: FaUserShield,
    title: 'High Accountability',
    description:
      'Fostering initiative and responsibility across all team members',
  },
  {
    icon: FaChartLine,
    title: 'Transparent Growth',
    description:
      'Open contribution to operating cost, growth, and valuation',
  },
  {
    icon: FaUserCheck,
    title: 'Full Commitment',
    description:
      'No part-time or side employment for focused excellence',
  },
];

export default function Philosophy() {
  return (
    <section className="bg-black text-white py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-16">Our Philosophy</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {philosophies.map((item, i) => (
            <Card key={i} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Card({ icon: Icon, title, description }) {
  return (
    <div className="bg-[#121212] border border-[#2a2a2a] rounded-md px-6 py-6 text-left">
      <div className="flex items-center gap-2 mb-3">
        <Icon className="text-green-400 w-5 h-5" />
        <h3 className="text-base font-semibold">{title}</h3>
      </div>
      <p className="text-sm text-zinc-400 leading-relaxed">{description}</p>
    </div>
  );
}
