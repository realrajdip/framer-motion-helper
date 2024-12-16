import { motion } from 'framer-motion';

const StaggerContainer = ({ children, stagger = 0.2, ...rest }) => {
  const variants = {
    animate: {
      transition: {
        staggerChildren: stagger,
      },
    },
  };

  return (
    <motion.div variants={variants} initial="hidden" animate="animate" {...rest}>
      {children}
    </motion.div>
  );
};

export default StaggerContainer;
