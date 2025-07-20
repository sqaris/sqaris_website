import {
  FaLightbulb,
  FaTools,
  FaProjectDiagram,
  FaShieldAlt,
  FaHandshake,
} from 'react-icons/fa';
import { motion } from 'framer-motion';

const values = [
  {
    icon: FaLightbulb,
    title: 'Innovation through Research',
    description: 'Pushing boundaries with cutting-edge research and development',
  },
  {
    icon: FaTools,
    title: 'Precision in Engineering',
    description: 'Delivering high-quality solutions with meticulous attention to detail',
  },
  {
    icon: FaProjectDiagram,
    title: 'Scalable AI Products',
    description: 'Building intelligent systems that grow with your business needs',
  },
  {
    icon: FaShieldAlt,
    title: 'Global Standards',
    description: 'Committed to international quality and security standards',
  },
  {
    icon: FaHandshake,
    title: 'Ethical AI & Tech Responsibility',
    description: 'Developing responsible AI that benefits humanity',
  },
];

export default function CoreValues() {
  return (
    <section className="bg-black text-white py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-16">Our Core Values</h2>

        {/* Top Row */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-6">
          {values.slice(0, 3).map((val, i) => (
            <Card key={i} {...val} index={i} />
          ))}
        </div>

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
          {values.slice(3).map((val, i) => (
            <Card key={i + 3} {...val} index={i + 3} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Card({ icon: Icon, title, description, index }) {
  return (
    <motion.div
      className="bg-[#121212] border border-[#2a2a2a] rounded-md px-6 py-5 md:px-7 md:py-6 w-full max-w-[300px] md:max-w-[340px] text-left transition-all duration-300 hover:shadow-[0_0_12px_#22c55e]"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <div className="flex items-center gap-2 mb-2">
        <Icon className="text-green-400 w-4 h-4 md:w-5 md:h-5" />
        <h3 className="text-sm md:text-base font-semibold">{title}</h3>
      </div>
      <p className="text-xs md:text-sm text-zinc-400 leading-relaxed">{description}</p>
    </motion.div>
  );
}
