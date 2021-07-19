
import './App.css';
import Home from './Home.jsx'
import { Switch, Route, Redirect } from 'react-router-dom';
import Services from './Services.jsx';
import Contact from './Contact.jsx';
import About from './About.jsx';
import Footer from './Footer';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';

import Navbar from './Navbar';

function App() {
  return (
    <>
    <Navbar/>
      <Switch>
        <Route exact path="/home" component={Home}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/services" component={Services}/>
        <Route exact path="/contact" component={Contact}/>
        <Redirect to="/home"></Redirect>
      </Switch>
      <Footer/>

    </>

  );
}

export default App;
