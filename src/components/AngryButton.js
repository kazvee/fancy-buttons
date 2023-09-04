const AngryButton = () => {
  return (
    <button className='AngryButton'>
      {/* When the threshold is not reached */}
      <span>Don't click me too much!</span>
      {/* When the threshold is reached */}
      <span>ANGRY MODE: ACTIVATED 😠</span>
    </button>
  );
};

export default AngryButton;
