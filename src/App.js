import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Header";
import Wrapper from "./components/Wrapper";
import AboutPage from "./pages/About";
import ProjectsPage from "./pages/Projects";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Wrapper>
      <Route exact path="/" component={AboutPage} />
      <Route exact path="/about" component={AboutPage} />
      <Route exact path="/projects" component={ProjectsPage} />
      </Wrapper>
      <Footer />
    </Router>
  );
}

export default App;
