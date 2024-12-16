export const responsiveAnimation = (animation, breakpoints) => {
    const { matches } = window.matchMedia(`(max-width: ${breakpoints.mobile}px)`);
    return matches ? animation.mobile : animation.desktop;
  };
  