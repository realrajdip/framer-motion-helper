import { motion } from 'framer-motion';

const Slide = ({ children, direction = 'left', distance = 100, duration = 0.5, ...rest }) => {
  const variants = {
    hidden: {
      x: direction === 'left' ? -distance : direction === 'right' ? distance : 0,
      y: direction === 'up' ? -distance : direction === 'down' ? distance : 0,
      opacity: 0,
    },
    visible: { x: 0, y: 0, opacity: 1 },
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      transition={{ duration }}
      {...rest}
    >
      {children}
    </motion.div>
  );
};

export default Slide;
