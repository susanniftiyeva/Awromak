import './App.css';
import Footer from './assets/components/footer/footer';
import Header from './assets/components/header/header';
import Home from  "./assets/package/home_pg/home"
import Rizzi from "./assets/package/Rizzi/rizzi"
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header/>

    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/' element={<Rizzi/>}/>
    </Routes>

      <Footer/>
    </div>
  );
}

export default App;
