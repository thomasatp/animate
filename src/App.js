import './App.css';
import Nav from "./Nav";
import Story from "./Story";
import Starter from './Starter';
import VisualStory from './VisualStory';
import Push from './Push';

function App() {
  return (
    <div className="App">
      <Nav />
      <Starter isFirst={true} padding="0"/>
      <VisualStory direction="row"/>
      <Story direction="row-reverse" />
      <Push />
      <Story direction="row" />
      <VisualStory direction="row-reverse"/>
    </div>
  );
}

export default App;
