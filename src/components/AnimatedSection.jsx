import { motion } from "framer-motion";

const AnimatedSection = ({ children }) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: false }}
      className="my-16"
    >
      {children}
    </motion.section>
  );
};

export default AnimatedSection;
