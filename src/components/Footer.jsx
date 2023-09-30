import React from 'react';
import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';
import logo from "../assests/logo1.jpg";

const Footer = () => {
  return (
    <footer className="bg-black text-ten pt-12 pb-20  rounded-tl  md:rounded-tl-full font-bold font-serif">
      <div className="container mx-auto flex flex-wrap justify-between text-center md:text-center ">
        {/* First Section: Logo and Name */}
        <div className='flex w-full md:w-1/4 mb-4 md:mb-0 ml-0 md:ml-0 justify-center flex-col items-center '>
  <img
    src={logo}
    alt="Company Logo"
    className="h-24 w-40 rounded-lg mb-6 md:mb-3"
  />

  <h2 className="text-2xl font-semibold " >Pushpanjali Palace</h2>
  <p className="text-gray-500  text-sm md:text-base mx-3 md:mx-0 mt-3">
"Celebrate in Grandeur: A Perfect Blend of Luxury Banquet and Delectable Dining for Unforgettable Moments"
</p>

</div>
        {/* Second Section: Navigation */}
        <div className="w-full md:w-1/4 mb-4 md:mb-0 ml-0 md:ml-0 ">
          <h3 className="text-2xl font-semibold mb-4 underline decoration-3 underline-offset-4">Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-blue-500">Home</a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500">About</a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500">Services</a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500">Portfolio</a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500">Contact</a>
            </li>
          </ul>
        </div>

        {/* Third Section: Contact Details */}

        <div className="w-full md:w-1/3 mb-4 md:mb-0  flex flex-col md:flex-row">
       
<div>

          <h3 className="text-2xl font-semibold mb-4 underline decoration-3 underline-offset-4">Contact Us</h3>
          <p>123 Main Street</p>
          <p>City, State ZIP Code</p>
          <p className="mt-2">Email: info@example.com</p>
          <p>Phone: (123) 456-7890</p>
</div>
<div className='flex justify-center  ml-4  mt-6 md:mt-0'>
<a href="">   <iframe className='rounded-lg' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387323.89851548566!2d-74.25986689512714!3d40.69766377928455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25b4b688e7255%3A0xd1c79b180f04f8e1!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1628610219600!5m2!1sen!2sus" width="200" height="150"  allowfullscreen="" loading="lazy"></iframe>
</a>
</div>
       
        </div>

      {/* Fourth Section: Follow Us */}
        <div className="w-full md:w-1/6 mb-4 md:mb-0 mt-6 md:mt-0">
          <h3 className="text-xl font-semibold mb-4 underline decoration-3 underline-offset-4">Follow Us</h3>
          <div className="flex justify-center space-x-4">
            <a href="#" className="text-white hover:text-pink-700">
              <FaInstagram size={24} />
            </a>
            <a href="#" className="text-white hover:text-blue-700">
              <FaFacebook size={24} />
            </a>
            <a href="#" className="text-white hover:text-blue-700">
              <FaTwitter size={24} />
            </a>
          </div>
       
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center mt-16 bg-gray-800 text-white">
        <p>&copy; 2023 Your Company. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
