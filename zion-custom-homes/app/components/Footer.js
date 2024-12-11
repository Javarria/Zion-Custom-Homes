"use client";
import { useState, useEffect, useRef } from "react";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const footerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      {
        root: null,
        rootMargin: "900px",
        threshold: 1.0,
      }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);

      return () => {
        observer.unobserve(footerRef.current);
      };
    }
  }, [footerRef]);

  return (
    <div
      ref={footerRef}
      id="footer"
      className="footer bg-black text-white py-300 flex justify-center items-center"
      style={{ height: "500px" }}
    >
      <div className="flex gap-10">
        <a
          href="/about"
          className={`font-light text-white text-1.30xl hover:bg-[#333] px-6 py-4 mx-7 rounded font-[Ivypresto-Display] transition-opacity duration-1000 ease-in-out ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
          style={{ letterSpacing: "0.20em" }}
        >
          ABOUT US
        </a>
        <a
          href="/services"
          className={`font-light text-white text-1.30xl hover:bg-[#333] px-6 py-4 mx-7 rounded font-[Ivypresto-Display] transition-opacity duration-1000 ease-in-out ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
          style={{ letterSpacing: "0.20em" }}
        >
          SERVICES
        </a>
        <a
          href="/"
          className={`font-light text-[#A87900] tracking-widest text-1.30xl hover:bg-[#333] px-6 py-4 mx-4 rounded font-[Ivypresto-Display] transition-opacity duration-1000 ease-in-out ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
          style={{ letterSpacing: "0.20em" }}
        >
          ZION HOMES
        </a>
        <a
          href="/process"
          className={`font-light text-white tracking-widest text-1.30xl hover:bg-[#333] px-6 py-4 mx-7 rounded font-[Ivypresto-Display] transition-opacity duration-1000 ease-in-out ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
          style={{ letterSpacing: "0.20em" }}
        >
          OUR PROCESS
        </a>
        <a
          href="/contact"
          className={`font-light text-white tracking-widest text-1.30xl hover:bg-[#333] px-6 py-4 mx-12 rounded font-[Ivypresto-Display] transition-opacity duration-1000 ease-in-out ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
          style={{ letterSpacing: "0.20em" }}
        >
          CONTACT US
        </a>
      </div>
    </div>
  );
};

export default Footer;

