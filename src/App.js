import React, { useEffect } from 'react';
//library
import { Route, Switch } from 'react-router-dom';
//component
import Header from './component/common/Header';
import Footer from './component/common/Footer';
import Main from './page/Main';
//css
import '../src/asset/css/reset.css';
import { useLocation } from 'react-router-dom';






function App() {
  //const location = useLocation();


/*   useEffect(()=>{
    window.scrollTo(0,0);
  }, [location]); */



  return (
    <div className="wrap">
      <Header/>
      <div className="container">
        <Switch>
          <Route exact path="/" component={Main}/>
        </Switch>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
