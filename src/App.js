
import SearchForm from "./components/SearchForm"
import './App.css';
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Good from "./pages/Good";
import Bad from "./pages/Bad";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Search from "./pages/Search";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";


import Calculator from './components/calculatorForm';





function App() {
  return (

<div>
      <Router>
        <Navbar />
        <Wrapper>
      

          <Route exact path="/" component={About} />

        
         
          <Route exact path="/about" component={About} />
          <Route path="/good/:solarValue" component={Good} />
          <Route path="/bad/:solarValue" component={Bad} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/search" component={Search} />
        </Wrapper>
        <Footer />
    </Router>
  </div>
  );
}

export default App;
