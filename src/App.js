import React, { Component} from 'react'
import './App.css';
import NavBar from './components/NavBar'
import ShoppingCart from './components/ShoppingCart';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import  Homepage  from './components/Homepage';
import Reviews from './components/Reviews';
import Footer from './components/Footer'
import NewReleases  from './components/NewReleases';




class App extends Component{

render(){
  return (
    <> 
    <Router basename={`${process.env.PUBLIC_URL}`}>

    <div className="app"> 

          <NavBar/>
          <Switch>
          <Route path="\" component={App}/>
            <Route path="/shop" component={ShoppingCart}/>
            <Route path="/bestseller" component={Reviews}/> 
            <Route path="/newreleases" component={NewReleases}/> 

            <Homepage/>
            </Switch>
    </div>

      </Router>
    <Footer/>
    </>
  );
}
}

export default App;
