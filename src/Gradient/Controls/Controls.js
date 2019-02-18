import React from 'react';

function Controls(props) {
  return (
    <div className='Controls'>
      <input type="color" value={props.color1} />
      <input type="color" value={props.color2} />
    </div>
  );
}

export default Controls;