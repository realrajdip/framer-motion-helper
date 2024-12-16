# framer-motion-helper

`framer-motion-helper` is a utility library designed to simplify animations using Framer Motion in React applications. It provides reusable components, hooks, and utilities to speed up the animation process and enhance developer productivity.

## Features

### Components
- **Fade**: Quickly add fade-in/out animations to any element.
- **Slide**: Create sliding animations in various directions (left, right, up, down).
- **StaggerContainer**: Animate child elements with staggered delays.

### Hooks
- **useParallaxScroll**: Create parallax effects based on scroll progress.
- **useViewportProgress**: Track how far an element has entered the viewport.

### Utilities
- **combineAnimations**: Merge multiple animation variants into one.
- **saveAnimationTemplate**: Save animation configurations to local storage.
- **loadAnimationTemplate**: Load saved animations from local storage.

### Context
- **AnimationConfigProvider**: Manage global animation configurations like duration and easing.

### Responsive Animations
Handle animations dynamically based on screen sizes.

## Installation

Install the package using npm or yarn:

```bash
npm install framer-motion-helper
```

Or:

```bash
yarn add framer-motion-helper
```

## Usage

### Basic Example: Fade Animation

```jsx
import { Fade } from 'framer-motion-helper';

function App() {
  return (
    <Fade duration={0.8}>
      <h1>Hello, World!</h1>
    </Fade>
  );
}
```

### Slide Animation

```jsx
import { Slide } from 'framer-motion-helper';

function App() {
  return (
    <Slide direction="left" distance={200}>
      <p>Sliding in from the left!</p>
    </Slide>
  );
}
```

### Staggered Animations

```jsx
import { StaggerContainer, Slide } from 'framer-motion-helper';

function App() {
  return (
    <StaggerContainer stagger={0.3}>
      <Slide>Item 1</Slide>
      <Slide>Item 2</Slide>
      <Slide>Item 3</Slide>
    </StaggerContainer>
  );
}
```

### Parallax Effect

```jsx
import { useParallaxScroll } from 'framer-motion-helper';

function ParallaxComponent() {
  const y = useParallaxScroll(0, 0.5, 200);

  return <motion.div style={{ y }}>Parallax Content</motion.div>;
}
```

### Global Configuration

```jsx
import { AnimationConfigProvider, Fade } from 'framer-motion-helper';

function App() {
  const config = { duration: 1, easing: "easeInOut" };

  return (
    <AnimationConfigProvider config={config}>
      <Fade>
        <h1>Configured Animation</h1>
      </Fade>
    </AnimationConfigProvider>
  );
}
```

## API Reference

### Components

#### Fade
- **Prop**: `duration` (number) - Duration of the fade animation. Default is `0.5`.
- **Prop**: `delay` (number) - Delay before the animation. Default is `0`.

#### Slide
- **Prop**: `direction` (string) - Direction of the slide (left, right, up, down). Default is `left`.
- **Prop**: `distance` (number) - Distance to slide the element. Default is `100`.
- **Prop**: `duration` (number) - Duration of the slide animation. Default is `0.5`.

#### StaggerContainer
- **Prop**: `stagger` (number) - Time delay between animations of children. Default is `0.2`.

### Hooks

#### useParallaxScroll
- **Parameter**: `start` (number) - Start scroll position for the effect. Default is `0`.
- **Parameter**: `end` (number) - End scroll position for the effect. Default is `1`.
- **Parameter**: `offset` (number) - Maximum offset for the parallax motion. Default is `50`.

#### useViewportProgress
- **Parameter**: `ref` (Ref) - A React ref to track viewport progress.

## Contributing

Contributions are welcome! Please submit a pull request or open an issue for feature requests or bug fixes.

## License

This package is licensed under the MIT License. See the `LICENSE` file for more details.
