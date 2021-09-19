import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Header";
import AboutPage from "./pages/About";
import ProjectsPage from "./pages/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Route exact path="/" component={AboutPage} />
      <Route exact path="/about" component={AboutPage} />
      <Route exact path="/projects" component={ProjectsPage} />
      <Footer />
    </Router>
  );
}

export default App;
