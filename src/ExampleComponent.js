import { TypeAnimation } from 'react-type-animation';

const ExampleComponent = () => {
  return (
    <TypeAnimation
    sequence={['Hello, welcome to blogger', 1000, '']}
    speed={70} 
    wrapper="h4"
    repeat={Infinity}
  />
  );
};

export default ExampleComponent;