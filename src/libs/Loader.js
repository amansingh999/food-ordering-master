import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPizzaSlice } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

export default function PizzaLoader() {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
        className="text-yellow-500 text-6xl"
        style={{ fontSize: '60px' }}
      >
        <FontAwesomeIcon icon={faPizzaSlice} />
      </motion.div>
    </div>
  );
}
