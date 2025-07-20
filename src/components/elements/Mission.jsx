import { motion } from 'framer-motion';

export default function Mission() {
  return (
    <section className="bg-black text-white py-16 px-4">
      <motion.div
        className="max-w-3xl mx-auto  border border-[#2a2a2a] rounded-md px-6 py-10 text-center shadow-md hover:shadow-lg transition-transform duration-300 hover:scale-[1.02]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <h2 className="text-lg font-semibold text-green-500 mb-4">Mission</h2>
        <p className="italic text-sm text-zinc-300 leading-relaxed">
          "Empowering industries with intelligent AI platforms and robotic systems through engineering excellence."
        </p>
      </motion.div>
    </section>
  );
}
