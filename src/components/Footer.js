import React from "react";
import { TbWorld } from 'react-icons/tb';


const Footer = () => {
  return (
    <div className="footer w-full h-72 bg-stone-900 flex gap-x-44 ">
      <div className="first flex">
        <div className="text-neutral-50 flex gap-x-40 p-8">
          <div className=" flex flex-col gap-y-2 text-sm">
            <a href="/" className="hover:underline">Udemy Business</a>
            <a href="/"  className="hover:underline">Teach on Udemy</a>
            <a href="/"  className="hover:underline">Get the App</a>
            <a href="/"  className="hover:underline">About Us</a>
            <a href="/"  className="hover:underline">Contact Us</a>
          </div>

          <div className="flex flex-col gap-y-2 text-sm">
            <a href="/" className="hover:underline">Careers</a>
            <a href="/" className="hover:underline">Blogs</a>
            <a href="/" className="hover:underline">Help and Support</a>
            <a href="/" className="hover:underline">Affiliate</a>
            <a href="/" className="hover:underline">Investors</a>
          </div>

          <div className="flex flex-col gap-y-2 text-sm">
            <a href="/" className="hover:underline">Terms</a>
            <a href="/" className="hover:underline">Privacy Policy</a>
            <a href="/" className="hover:underline">Cookie Settings</a>
            <a href="/" className="hover:underline">SiteMaps</a>
            <a href="/" className="hover:underline">Accesibility Statement</a>
          </div>
        </div>
      </div>

      <div className="second py-8">
      <a
              href="#"
              className="ml-2 inline-flex items-center justify-center whitespace-nowrap  border border-stone-50 bg-neutral-900 px-6 py-1  text-sm   text-white shadow-sm hover:bg-neutral-800"
            >
              <TbWorld size={"20px"}/><span className="px-2 text-lg ">English</span>
            </a>
      </div>
    </div>
  );
};

export default Footer;
