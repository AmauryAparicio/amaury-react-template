import React, { FunctionComponent } from "react";
import Footer from "../layouts/Footer";
import Header from "../layouts/Header";

const Home: FunctionComponent = () => {
  return (
    <main className="home">
      <Header />
      <h1 className="heading heading--1">Home</h1>
      <Footer />
    </main>
  );
};

export default Home;
