import './App.css';
import Footer from './assets/components/footer/footer';
import Header from './assets/components/header/header';
import Home from  "./assets/package/home_pg/home"
import Rizzi from "./assets/package/Rizzi/rizzi"
import { Route, Routes } from 'react-router-dom';
import Production from './assets/package/production/production';
import './assets/css/scss/style.scss'
import Menu_window from './assets/components/header/menu_window';
import About from './assets/package/about.pg/about';
import Retail from './assets/package/retail.pg/retail';

function App() {
  return (
    <div className="App">
      <Header/>

    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/rizzi' element={<Rizzi/>}/>
      <Route path='/production' element={<Production/>}/>
      <Route path='/menu_window' element={<Menu_window/>} />
      <Route path='/about'  element={<About/>} />
      <Route path='/retail'  element={<Retail/>}  />
    </Routes>

      <Footer/>
    </div>
  );
}

export default App;
