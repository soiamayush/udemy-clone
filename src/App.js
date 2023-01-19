import { BrowserRouter as Router} from "react-router-dom"
import Branding from './components/Branding';
import Categories from './components/Categories';
import End from './components/End';
import Featured from './components/Featured';
import Footer from './components/Footer';
import Header from './components/Header';
import Herosection from './components/Herosection';
import Instructor from "./components/Instructor";
import Personality from "./components/Personality";
import Quotes from './components/Quotes';
import Selection from './components/Selection';
import Trending from './components/Trending';
import UBusiness from "./components/UBusiness";
import './input.css';

function App() {
  return (
      <Router>
    <div className="App">
     <Header/>
     <Herosection/>
     <Selection/>
     <Quotes/>
     <Trending/>
     <Categories/>
     <Featured/>
     <Branding/>
      <Personality/>
    <UBusiness/>
     <Instructor/>
     <Footer/>
     <End/>
    </div>
     </Router>
  );
}

export default App;
