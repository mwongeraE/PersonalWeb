import React from 'react';

import Layout from '../components/Layout';
import PageFooter from '../components/PageFooter';
import SideBar from '../components/SideBar';
import Projects from '../components/Projects'

import pic10 from '../assets/images/pic10.jpg'
import Scroll from '../components/Scroll';


const sections = [
  { id: 'top', name: 'Intro', icon: 'fa-home' },
  { id: 'portfolio', name: 'Portfolio', icon: 'fa-th' },
  { id: 'about', name: 'About Me', icon: 'fa-user' },
  { id: 'contact', name: 'Contact', icon: 'fa-envelope' },
];

const IndexPage = () => (
  <Layout>
    <SideBar sections={sections} />

    <div id="main">
      <section id="top" className="one dark cover">
        <div className="container">
          <header>
            <h2 className="alt">
              <h1 style={{fontWeight: 'bold', color: '#000'}}>Hi! <strong>I'm MWONGERA</strong> </h1>
              <br />
              Mobile & Web developer
            </h2>
            <p>I have made few things check it out.</p>
          </header>

          <footer>
            <Scroll type="id" element={'portfolio'}>
              <a href="#portfolio" className="button">
                Show me
              </a>
            </Scroll>
          </footer>
        </div>
      </section>

      <section id="portfolio" className="two">
        <div className="container">
          <header>
            <h2>PORTFOLIO</h2>
            <hr/>
          </header>

          <div className="row">
            <Projects />
          </div>
          
        </div>
      </section>

      <section id="about" className="three">
        <div className="container">
          <header>
            <h2>ABOUT THIS GENIE</h2>
            <hr/>
          </header>

          <a href="/#" className="image featured">
            <img src={pic10} alt="" />
          </a>

          <p>
          To me, programming is a way of looking at things. <br/>
          I use programming as a way to reason about phenomena and model them.<br/>
          Got to love everything you do. 
          </p>
          <h1 style={{color: "#92a897", fontSize: "2rem", fontWeight: "bold"}}>Learning wherever I can</h1>
          <hr/>
          <p>
            I was born in Meru, Kenya. <br/>
            I had the possibility to work on start ups, a pan-african company and for different clients around the world. <br/>
            I have learnt alot from different points of views. Today I keep learning about different ways of working and new technologies.

          </p>
        </div>
      </section>

      <section id="contact" className="four">
        <div className="container">
          <header>
            <h2>Get in touch</h2>
            <hr/>
          </header>

          <p>
          Do you have some idea do you want to discuss? You are not sure how to proceed? <br/>Do you want to understand how something could cost to build? <br/>
          You can write me and we will figure it out together.<br/>
          
          I will write back to you within 1-3 days saying:<br/>
          
          - if this is something feasible<br/>
          - if I can help you with that<br/>
          - if I can point you to someone who can help you with that.<br/>
          
          You can contact me by filling the form or write me an email: evansmwongera@gmail.com

          </p>

          <form method="post" action="https://getform.io/f/5a4915d1-7794-4378-b00c-1c472f8cf256">
            <div className="row">
              <div className="col-6 col-12-mobile">
                <input type="text" name="name" placeholder="Name" id="name" />
              </div>
              <div className="col-6 col-12-mobile">
                <input type="email" name="email" placeholder="Email" id="email"/>
              </div>
              <div className="col-12">
                <textarea name="message" placeholder="Message" id="message" />
              </div>
              <div className="col-12">
                <button type="submit">Send Message </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>

    <PageFooter />
  </Layout>
);

export default IndexPage;
