const LightSwitchButton = () => {
  return (
    <button className='LightSwitchButton'>
      {/* When the state is on */}
      <span>
        <i>💡</i> I'm on!
      </span>
      {/* When the state is off */}
      <span className='off'>
        <i>💡</i> I'm off!
      </span>
    </button>
  );
};

export default LightSwitchButton;
