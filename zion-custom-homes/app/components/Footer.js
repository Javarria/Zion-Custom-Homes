const Footer = () => {
  return (
    <div className="footer fixed bottom-0 left-0 right-0 bg-black text-white py-12 flex justify-center items-center" style={{ animation: "el_fade_in 600ms linear 2400ms forwards", height: "100px" }}>
      <div className="flex gap-12">
        <a href="/about" className="font-light text-white text-1.5xl hover:bg-[#333] px-6 py-4 mx-7 rounded font-[Ivypresto-Display]">ABOUT US</a>
        <a href="/services" className="font-light text-white text-1.5xl hover:bg-[#333] px-6 py-4 mx-7 rounded font-[Ivypresto-Display]">SERVICES</a>
        <a href="/" className="font-light text-white tracking-widest text-1.5xl hover:bg-[#333] px-6 py-4 mx-4 rounded font-[Ivypresto-Display]">ZION HOMES</a>
        <a href="/process" className="font-light text-white tracking-widest text-1.5xl hover:bg-[#333] px-6 py-4 mx-7 rounded font-[Ivypresto-Display]">PROCESS</a>
        <a href="/contact" className="font-light text-white tracking-widest text-1.5xl hover:bg-[#333] px-6 py-4 mx-12 rounded font-[Ivypresto-Display]">CONTACT US</a>
      </div>
    </div>
  );
}

export default Footer;
