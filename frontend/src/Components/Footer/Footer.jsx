import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import Logo from "../Images/Logo.png";

const Footer = () => {
  return (
    <footer className=" text-white mt-8">
      <div className="max-w-6xl mx-auto px-4 py-10 md:py-20">
        {/* Starting line */}
        <div className="border-t border-gray-700 pt-4">
          <p className="text-center text-sm text-gray-400">
            Empowering Your Mental Health Journey
          </p>
        </div>

        <div className="flex flex-col items-center justify-center space-y-10 md:space-y-0 md:flex-row md:justify-between text-center mt-10">
          {/* Company Info */}
          <div>
            <h5 className="uppercase mb-6 font-bold">Company</h5>
            <ul className="mb-4">
              <li className="mt-2">About Us</li>
              <li className="mt-2">Contact</li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h5 className="uppercase mb-6 ml-16 font-bold">Services</h5>
            <ul className="mb-4">
              <li className="mt-2 ml-16">FAQ</li>
              <li className="mt-2 ml-16">Help</li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h5 className="uppercase mb-6 font-bold">Follow Us</h5>
            <div className="flex justify-center space-x-6">
              <FaFacebookF />
              <FaTwitter />
              <FaInstagram />
              <FaLinkedinIn />
            </div>
          </div>
        </div>

        {/* CopyRight */}
        <div className="pt-8 mt-8 border-t ml-12 border-gray-700 text-center">
          © 2024 Mind Unleashed. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
