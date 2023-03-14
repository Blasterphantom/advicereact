import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import HomeComponent from './components/homecomponent';

//Marcel Rodriguez
//3-14-23
//Advice Generator
//This app lets the user get a random advice slip with a fetch
//Peer review: This app is a fantastic 1 : 1 representation of the prototype that was given. The glow on hover is beautiful, a work of art. The colors are spot on and accurately reflect what was given. Overall great job and awesome design.

function App() {
  return (
    <BrowserRouter>
      <div id='startPage' className='App'>
        <Routes>
              <Route path="/" element={<HomeComponent />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
