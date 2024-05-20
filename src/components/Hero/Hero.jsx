import React from 'react'
import './Hero.css'
import res from '../../assets/Res.pdf'
import profile_img from "../../assets/vb.png";
import AnchorLink from "react-anchor-link-smooth-scroll";



const Hero = () => {
  return (
    <div className="hero" id="home">
      <div className="hero-image">
        <img src={profile_img} />
      </div>
      <h1>
        <span>I'm Hariharan,</span>Full stack developer
      </h1>
      <p>I am a Full stack developer from Madurai,Tamilnadu</p>
      <div className="hero-action">
        {/* <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect With me
          </AnchorLink>
        </div> */}
        <a href={res}><div className="hero-resume">My Resume</div></a>
      </div>
    </div>
  );
}

export default Hero
