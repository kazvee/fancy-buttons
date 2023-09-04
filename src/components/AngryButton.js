import { useState } from 'react';

const AngryButton = (props) => {
  const [anger, setAnger] = useState(0);

  return (
    <button style={{ backgroundColor: `rgba(255,0,0,${anger})` }} className='AngryButton'>
      {anger < 1 && <span>Don't click me too much! </span>}
      {anger > 1 && <span>ANGRY MODE: ACTIVATED 😠</span>}
    </button>
  );
};

export default AngryButton;
