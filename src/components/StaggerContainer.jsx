// components/StaggerContainer.jsx
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15, // jarak antar item muncul
    },
  },
};

export default function StaggerContainer({ children }) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
    >
      {children}
    </motion.div>
  );
}
