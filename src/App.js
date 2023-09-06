import { useState } from 'react';
import './App.css';
import AngryButton from '../src/components/AngryButton';
import CounterButton from '../src/components/CounterButton';
import LightSwitchButton from '../src/components/LightSwitchButton';
import TextRepeaterButton from '../src/components/TextRepeaterButton';

const App = () => {
  const [light, setLight] = useState('off');
  const dark = light === 'off' ? 'dark' : '';
  const switchLight = () => setLight(light === 'on' ? 'off' : 'on');

  return (
    <div className={`App ${dark}`}>
      <h1>Fancy Buttons! 😃</h1>
      <section>
        <AngryButton />
        <CounterButton />
        <LightSwitchButton light={light} switchLight={switchLight} />
        <TextRepeaterButton />
      </section>
    </div>
  );
};

export default App;
