import React from 'react'
import './footer.css'
import footer_logo from '../../assets/footer_logo.svg'
import user_icon from '../../assets/user_icon.svg'

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          {/* <img src={footer_logo} alt="" />
           */}

          {/* <p>I am a Fullstack Developer</p> */}
        </div>
        <div className="footer-top-right">
          <div className="footer-subscribe">
            <a href=" https://www.linkedin.com/in/hariharanvb/" target="blank">
              <i class="fa-brands fa-linkedin"></i>
            </a>
            <a href="https://github.com/domivbhh" target='blank'>
              <i class="fa-brands fa-github"></i>
            </a>
          </div>
        </div>
      </div>

      <hr />

      <div className="footer-bottom">
        <p className="footer-bottom-left">©2024 hariharan</p>
        <div className="footer-bottom-right">
        </div>
      </div>
    </div>
  );
}

export default Footer
