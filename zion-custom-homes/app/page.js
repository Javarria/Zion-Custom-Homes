import Image from "next/image";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <Header></Header>

      <section className="relative hero-section h-screen bg-black text-white flex justify-center items-center">
  {/* <!-- Golden Square --> */}
  <div className="absolute w-48 h-48 bg-gold top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[-1]"></div>

  {/* <!-- Overlay Content (Text & Buttons) --> */}
  <div className="hero-content text-center space-y-8 px-6">
    <h1 style={{ textAlign: "center", fontSize: "116px", fontWeight: 600, fontFamily: "'Ivypresto-Display', sans-serif" }}>Bold is a luxury</h1>

    <div className="hero-buttons flex gap-6 justify-center">
      <a href="tel:+13108858865" className="contact-button bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition duration-300">310-885-8865</a>
      <a href="#contact" className="contact-us-button bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition duration-300">Contact Us</a>
    </div>
  </div>
</section>
      
      <Footer></Footer>
    </div>
    )
}

