import { useScroll } from 'framer-motion';

export const useViewportProgress = (ref) => {
  const { scrollYProgress } = useScroll({ target: ref });
  return scrollYProgress;
};
