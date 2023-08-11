import React,{useEffect} from 'react';
import axios from 'axios';

import Navbar from './components/navbar';
import HeroSection from './components/HeroSection';
import Category from './components/CategorySection';
import Products from './AllProduct';

function App() {
  return (
 <>
 <Navbar/>
 <HeroSection/>
 <Category/>
 <Products/>
 </>
    
  );
}

export default App;
