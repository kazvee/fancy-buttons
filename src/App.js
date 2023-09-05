import './App.css';
import AngryButton from '../src/components/AngryButton';
import CounterButton from '../src/components/CounterButton';
import LightSwitchButton from '../src/components/LightSwitchButton';
import TextRepeaterButton from '../src/components/TextRepeaterButton';

const App = () => {
  return (
    <div className={`App dark`}>
      <h1>Fancy Buttons! 😃</h1>
      <section>
        <AngryButton />
        <CounterButton />
        <LightSwitchButton />
        <TextRepeaterButton />
      </section>
    </div>
  );
};

export default App;