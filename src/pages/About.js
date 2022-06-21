import React, { Component } from 'react';
import "./About.css";
import Headshot from "../assets/Headshot.jpeg";
  
export default class About extends Component {
  render() {
    return (
      <div>
          <div className="name_title">Jasmine McCoy
          </div>
        <div class="split left">
         {/* <div className="centered"> */}
            <img 
              className="profile_image"
              src= {Headshot}
              alt="Profile Pic"
              ></img>
        </div>
        <div className="split right">
          {/*<div className="centered">*/}
            <div className="brief_description">
              <p>Hi, I'm Jasmine and I am a Computer Science and Business
               Administration major at Northeastern University. One day
               I aspire to work in Front-End Development and UI
               design.
               </p>
               Feel free to add me on LinkedIn&nbsp;
               <a href="https://www.linkedin.com/in/jasmine-mccoy-8b19b3231/">here</a>
          </div>
        </div>
      </div>
    )
  }
}