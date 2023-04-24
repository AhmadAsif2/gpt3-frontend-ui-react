import './App.css';

import {
  Footer,
  Blog,
  Possibility,
  Features,
  GPT3,
  Header,
} from './containers';
import { Cta, Navbar } from './components';
import Brand from './components/brand/Brand';

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <GPT3 />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
