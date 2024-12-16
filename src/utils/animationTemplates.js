export const saveAnimationTemplate = (name, animation) => {
    localStorage.setItem(name, JSON.stringify(animation));
  };
  
  export const loadAnimationTemplate = (name) => {
    return JSON.parse(localStorage.getItem(name));
  };
  