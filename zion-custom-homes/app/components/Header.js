"use client";
import { useState, useEffect, useRef } from "react";

function Header() {
  const [isVisible, setIsVisible] = useState(false);
  const navLinksRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      {
        root: null,
        rootMargin: "0px",
        threshold: 1.0,
      }
    );

    if (navLinksRef.current) {
      observer.observe(navLinksRef.current);

      return () => {
        observer.unobserve(navLinksRef.current);
      };
    }
  }, [navLinksRef]);

  return (
    <div id="header">
      <nav className="flex justify-center bg-black py-2">
        <div ref={navLinksRef} id="nav-links" className="hidden md:flex gap-2">
          <a
            href="/about"
            className={`transition-opacity duration-1000 ease-in-out ${
              isVisible ? "opacity-100" : "opacity-0"
            } font-light text-md text-white hover:bg-[#333] px-16 py-4 mx-7 rounded font-[Ivypresto-Display]`}
            style={{ letterSpacing: "0.20em", textAlign: "center" }}
          >
            ABOUT US
          </a>
          <a
            href="/services"
            className={`transition-opacity duration-1000 ease-in-out ${
              isVisible ? "opacity-100" : "opacity-0"
            } font-light text-md text-white hover:bg-[#333] px-6 py-4 mx-7 rounded font-[Ivypresto-Display]`}
            style={{ letterSpacing: "0.20em", textAlign: "center" }}
          >
            SERVICES
          </a>
          <a
            href="/"
            className={`transition-opacity duration-900 ease-in-out ${
              isVisible ? "opacity-100" : "opacity-0"
            } font-light text-md text-[#A87900] hover:bg-[#333] px-6 py-4 mx-4 rounded font-[Ivypresto-Display]`}
            style={{ letterSpacing: "0.20em", textAlign: "center" }}
          >
            ZION HOMES
          </a>
          <a
            href="/build-your-dream"
            className={`transition-opacity duration-1000 ease-in-out ${
              isVisible ? "opacity-100" : "opacity-0"
            } font-light text-md text-white hover:bg-[#333] px-6 py-4 mx-7 rounded font-[Ivypresto-Display]`}
            style={{ letterSpacing: "0.20em", textAlign: "center" }}
          >
            OUR PROCESS
          </a>
          <a
            href="/contact"
            className={`transition-opacity duration-1000 ease-in-out ${
              isVisible ? "opacity-100" : "opacity-0"
            } font-light text-md text-white hover:bg-[#333] px-6 py-4 mx-12 rounded font-[Ivypresto-Display]`}
            style={{ letterSpacing: "0.20em", textAlign: "center" }}
          >
            CONTACT US
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Header;
