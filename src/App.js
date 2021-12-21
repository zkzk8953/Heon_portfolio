import React from 'react';
//library
import { Route, Switch } from 'react-router-dom';
//component
import Header from './component/common/Header';
import Footer from './component/common/Footer';
import Main from './page/Main';
import Resume from './page/Resume';
import Contact from './page/Contact';

//css
import '../src/asset/css/reset.css';






function App() {
  return (
    <div className="wrap">
      <Header/>
      <div className="container">
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/potfolio" component={Resume} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
