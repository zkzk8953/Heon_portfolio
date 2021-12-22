import React from 'react';
//library
import { Route, Switch } from 'react-router-dom';
//component
import Header from './component/common/Header';
import Footer from './component/common/Footer';
import Main from './page/Main';

//css
import '../src/asset/css/reset.css';






function App() {
  return (
    <div className="wrap">
      <Header/>
      <div className="container">
        <Main />
      </div>
      <Footer/>
    </div>
  );
}

export default App;
