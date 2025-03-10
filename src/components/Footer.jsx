import React from "react";
import { Link } from "react-router-dom";
import {
  FaGithub,
  FaInstagramSquare,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="footer xl:px-24 px-4 p-10 sm:footer-horizontal  text-base-content">
     
        <aside>
          <img src="/logo.png" alt="" />
          <p className="my-3 md:w-40">
            Savor the artistry where every dish is a culinary masterpiece
          </p>
        </aside>
        <nav>
          <header className="footer-title text-black">Useful links</header>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Events</a>
          <a className="link link-hover">Blogs</a>
          <a className="link link-hover">FAQ</a>
        </nav>
        <nav>
          <header className="footer-title">Main Menu</header>
          <Link to="/" className="link link-hover">Home</Link>
          <Link to="/special-dishes" className="link link-hover">Offers</Link>
          <Link to="/menu" className="link link-hover">Menus</Link>
          <Link className="link link-hover">Reservation</Link>
        </nav>
        <nav>
          <header className="footer-title">Contact Us</header>
          <a className="link link-hover">thals4jesus@email.com</a>
          <a className="link link-hover">+2347067300133</a>
          <a className="link link-hover">Social media</a>
        </nav>
      </footer>
      <hr />
      <footer className="footer items-center xl:px-24 px-4 py-4 mt-2">
        <aside className="items-center grid-flow-col">
          <p>Copyright © 2025 Thales Awor | All right reserved</p>
        </aside>
        <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
          <a
            href="https://www.linkedin.com/in/thales-awor-6bb350219"
            target="_blank"
            className="w-auto p-2 rounded-full border border-black cursor-pointer"
          >
            <FaLinkedin className="text-2xl hover:text-green" />
          </a>
          <a
            href="https://github.com/AworThales"
            target="_blank"
            className="p-2 rounded-full border border-black cursor-pointer"
          >
            <FaGithub className="text-2xl hover:text-green" />
          </a>
          <a
            href="https://instagram.com/itzzzzzz_thallo"
            target="_blank"
            className="p-2 rounded-full border border-black cursor-pointer"
          >
            <FaInstagramSquare className="text-2xl hover:text-green" />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            className="p-2 rounded-full border border-black cursor-pointer"
          >
            <FaTwitter className="text-2xl hover:text-green" />
          </a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
