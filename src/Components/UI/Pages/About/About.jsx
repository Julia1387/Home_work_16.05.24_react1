import React from "react";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import cls from "../About/About.module.css";

const About = () => {
  return (
    <>
      <Header />
      <main>
        <section className="content__about">
          <h2>О компании</h2>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default About;
