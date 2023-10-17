
import './App.css';
import { Navbar } from './compents/Navbar';
import {Slider } from './compents/Slider';
import {Card }  from './compents/Card';
import {Smallcards} from './compents/Smallcards';
import {Download} from './compents/Download';
import {Footer}  from './compents/Footer';

function App() {
  return (
    <div>
      <Navbar/>
      <Slider/>
      <Card/>
      <Smallcards/>
      <Download/>
      <Footer/>
    </div>
  );
}

export default App;
