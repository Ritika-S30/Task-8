// const Stomach = ({name}) => {
//   return (
//     <div>
//         <h2>Stomach:{name}</h2>
       
//     </div>
//   )
// }
// export default Stomach






import { useState } from 'react';

const Stomach = ({ name, color }) => {
  return (
    <div style={{ color: color }}>
      <h2>Stomach: {name}</h2>
      <p>Click to change color!</p>
    </div>
  );
};

export default Stomach;
