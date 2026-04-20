// components/StaggerItem.jsx
import { motion } from "framer-motion";

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function StaggerItem({ children }) {
  return <motion.div variants={itemVariants}>{children}</motion.div>;
}
