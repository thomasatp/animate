import './App.css';
import Nav from "./Nav";
import Story from "./Story";
import Starter from './Starter';
import VisualStory from './VisualStory';

function App() {
  return (
    <div className="App">
      <Nav />
      <Starter />
      <VisualStory direction="row"/>
      <Story direction="row-reverse" />
      <VisualStory direction="row-reverse"/>
      <Story direction="row" />
      <Story direction="row-reverse" />
      <Story direction="row" />
      <Story direction="row-reverse" />
    </div>
  );
}

export default App;
