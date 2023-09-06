import { useReducer } from 'react';

const AngryButton = () => {
  const [anger, dispatch] = useReducer((anger, action) => {
    // if (anger < 1) {
    //   return anger + action;
    // } else {
    //   return 0;
    // }
    // We will use a ternary instead:
    return anger > 1 ? 0 : anger + action;
  }, 0);

  return (
    <button
      style={{ backgroundColor: `rgba(255,0,0,${anger})` }}
      onClick={() => dispatch(0.1)}
      className='AngryButton'
    >
      {anger < 1 && <span>Don't click me too much! </span>}
      {anger > 1 && <span>ANGRY MODE: ACTIVATED 😠</span>}
    </button>
  );
};

export default AngryButton;
