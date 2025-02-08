import Header from "./components/Header";
import ClassHeader from "./components/ClassHeader";
import Footer from "./components/footer/Footer";
import React from "react";
import Home from "./components/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./custom.scss";

function App() {
  return (
    <>
      <Header />
      <Home />
      <Footer />
    </>
  );
}

export default App;
