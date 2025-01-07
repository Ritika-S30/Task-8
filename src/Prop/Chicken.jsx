// import Hen from './Hen'
// const Chicken= () => {
//   return (
//     <div>
//         <Hen name="waters"/>
//     </div>
//   )
// }
// export default Chicken;


import { useState } from 'react';
import Stomach from './Stomach';

const Chicken = () => {
  const [color, setColor] = useState('black'); // Initial color for the Stomach

  const handleButtonClick = () => {
    // Toggle color between black, green, and yellow
    if (color === 'black') {
      setColor('green');
    } else if (color === 'green') {
      setColor('purple');
    } else if (color === 'purple') {
        setColor('grey');
      } 
      else if (color === 'grey') {
        setColor('red');
      } 
      else if (color === 'red') {
        setColor('orange');
      } 
      else if (color === 'orange') {
        setColor('blue');
      } 
      else if (color === 'blue') {
        setColor('brown');
      } 
      else if (color === 'brown') {
        setColor('pink');
      } 
    else {
      setColor('black');
    }
  };

  return (
    <div>
      <h1>Chicken Component</h1>
      {/* Add a button that changes the color of the Stomach */}
      <button onClick={handleButtonClick}>Change Stomach Color</button>
      <Stomach name="Waters" color={color} /> {/* Pass the color to Stomach */}
    </div>
  );
};

export default Chicken;
