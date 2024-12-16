import { useScroll, useTransform } from 'framer-motion';

export const useParallaxScroll = (start = 0, end = 1, offset = 50) => {
  const { scrollYProgress } = useScroll();
  const transform = useTransform(scrollYProgress, [start, end], [0, offset]);
  return transform;
};
