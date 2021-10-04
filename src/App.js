
import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import Services from './Component/Services/Services';
import Free from './Component/FreeServices/Free';
import About from './Component/About/About';
import Notfound from './Component/NotFound/Notfound';
import Footer from './Component/Footer/Footer';


function App() {

  return (

    <Router>
      <Header></Header>


      <Switch>
        <Route exact path="/">
          <Home></Home>

        </Route>
        <Route path="/home">
          <Home></Home>

        </Route>
        <Route path="/services">
          <Services></Services>

        </Route>
        <Route path="/free">
          <Free></Free>

        </Route>
        <Route path="/about">
          <About></About>

        </Route>
        <Route path="*">
          <Notfound></Notfound>

        </Route>


      </Switch>
      <Footer></Footer>

    </Router>

  );
}

export default App;
