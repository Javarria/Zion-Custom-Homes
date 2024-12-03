import Header from "../components/Header";
import Footer from "../components/Footer";
const About = () => {
  return (
    <div>
      <Header></Header>
      {/* section with "Building Redfifined" */}
      <section>
        <div
          className="flex justify-center items-start bg-black text-white h-[90vh]"
          style={{ width: "100vw", paddingTop: "13vh" }}
        >
          <h1
            className="text-[108px] font-[480] font-[Ivypresto-Display]"
            style={{ textAlign: "center" }}
          >
            Building Redefined.
          </h1>
        </div>
      </section>

      {/* Section saying we are ZION (White Area) */}

      <section>
        <div
          className="flex justify-center items-center bg-white text-black h-[90vh]"
          style={{ width: "100vw", paddingTop: "13vh" }}
        >
          <h1
            className="text-[108px] font-[650] font-[Ivypresto-Display] text-[#A87900]"
            style={{ textAlign: "center", marginTop: "-30vh", letterSpacing: ".01em" }}
          >
            We are Zion.
          </h1>
        </div>
      </section>
      <Footer></Footer>
    </div>
  );
};

export default About;
