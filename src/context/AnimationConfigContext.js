import { createContext, useContext } from 'react';

const AnimationConfigContext = createContext({
  duration: 0.5,
  easing: 'easeInOut',
});

export const AnimationConfigProvider = ({ children, config }) => {
  return (
    <AnimationConfigContext.Provider value={config}>
      {children}
    </AnimationConfigContext.Provider>
  );
};

export const useAnimationConfig = () => useContext(AnimationConfigContext);
