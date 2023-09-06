const LightSwitchButton = (props) => {

  const { light, switchLight } = props;
  
  // Since the handleClick function only calls switchLight
  // const handleClick = () => switchLight(); 
  return (
    // We will skip using handleClick, and instead give switchLight directly to the onClick event listener
    // <button onClick={handleClick} className="LightSwitchButton">
    <button onClick={switchLight} className='LightSwitchButton'>
      {light === 'on' && <span><i>💡</i> I'm on!</span>}
      {light === 'off' && <span className='off'><i>💡</i> I'm off!</span>}
    </button>
  );
};

export default LightSwitchButton;
