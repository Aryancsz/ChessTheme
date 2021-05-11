import React from "react";
import Board from "./components/Board";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <Board />
      <Footer />
    </React.Fragment>
  );
};
export default App;
