import { motion } from 'framer-motion';

const Fade = ({ children, duration = 0.5, delay = 0, ...rest }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration, delay }}
      {...rest}
    >
      {children}
    </motion.div>
  );
};

export default Fade;
