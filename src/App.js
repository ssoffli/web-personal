import React from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import MobileHeader from './components/MobileHeader';
import Aside from './components/Aside';
import Content from './components/Content';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App container-fluid">
      <MobileHeader/>
      <div className="row">
        <Aside/>
        <Content/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
