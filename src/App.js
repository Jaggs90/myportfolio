import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Container } from "reactstrap";
import NavbarBrand from "react-bootstrap/NavbarBrand";
import NavBar from "react-bootstrap/Navbar";
import "./App.css";
import NavbarCollapse from "react-bootstrap/NavbarCollapse";
import NavbarToggle from "react-bootstrap/NavbarToggle";
import Nav from "react-bootstrap/Nav";

import Footer from './components/Footer'
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Daniel Jaggs",
      headerLinks: [
        { title: "Home", path: "/ " },
        { title: "About", path: "/about " },
        { title: "Contact", path: "/contact " },
      ],
      home: {
        title: "Daniel Jaggs",
        subTitle: "Web Developer",
        text: "View my projects below",
      },
      about: {
        title: "About Me",
      },
      contact: {
        title: "Contact Me",
      },
    };
  }

  render() {
    return (
      <Router>
        <Container className="p-0" fluid={true}>
          <NavBar className="border-bottom" bg="transparent" expand="sm">
            <NavbarBrand>Daniel Jaggs</NavbarBrand>

            <NavbarToggle className="border-0" aria-controls="navbar-toggle" />
            <NavbarCollapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">
                  Home
                </Link>
                <Link className="nav-link" to="/about">
                  About
                </Link>
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
                
              </Nav>
            </NavbarCollapse>
          </NavBar>

          <Route path="/" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} />} />
          <Route path="/about" render={() => <AboutPage title={this.state.about.title}/>} />
          <Route path="/contact" render={() => <ContactPage title={this.state.contact.title}/>} />

          <Footer />


        </Container>
      </Router>
    );
  }
}

export default App;
