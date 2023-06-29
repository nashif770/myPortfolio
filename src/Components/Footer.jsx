import React from "react";
import { FaBeer, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer footer-center p-10 bg-base-200 text-base-content">
      {/* <div className="grid grid-flow-col gap-4">
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </div> */}
      <div>
        <div className="grid grid-flow-col gap-4">
          <a href="https://web.facebook.com/nashif910" target="blank">
            <FaFacebook className="btn btn-circle me-4"></FaFacebook>
          </a>
          <a href="https://twitter.com/AN361770" target="blank">
            <FaTwitter className="btn btn-circle me-4"></FaTwitter>
          </a>
          <a href="https://www.linkedin.com/in/ahmed-nashif-9840941a0/" target="blank">
            <FaLinkedin className="btn btn-circle me-4"></FaLinkedin>
          </a>
        </div>
      </div>
      <div>
        <p>Copyright © 2023 - All right reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
