import Footer from "../components/Footer";
import Header from "../components/Header";

const Services = () => {
  return (
    <div>
      <Header></Header>
      {/* Made to your taste */}
      <section className="bg-black text-white flex justify-center items-center h-screen">
        <h1
          className="font-[Ivypresto-Display] opacity-0 animate-fade-in"
          style={{
            fontWeight: 560,
            fontSize: "calc(5vw + 3.5rem)",
            marginTop: "-450px",
            textAlign: "center",
            animation: "fadeIn 3s forwards",
          }}
        >
          Taste is Tailored.
        </h1>
      </section>

      {/* Our services 3 columns section */}
      <section className="bg-white text-black items-center min-h-[170vh]">
        <h1
          className="font-[Ivypresto-Display] text-left"
          style={{
            paddingTop: "calc(5vw + 4rem)",
            fontSize: "calc(2.5vw + 5rem)",
            fontWeight: 560,
            paddingLeft: "calc(2.5vw + 3rem)",
            color: "#A87900",
          }}
        >
          Our services.
        </h1>
        <div style={{ height: "calc(3vw + 2rem)" }}></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 p-12">
          <div>
            <h2 className="font-[Ivypresto-Display] text-5xl font-medium">
              Construction.
            </h2>
            <p className="text-xl pt-6 font-light text-black" style={{lineHeight: "1.95rem"}}>
              Zion Custom Homes offers general contracting services for a variety of custom residential projects, ranging from distinctive luxury homes to more affordable, personalized properties. Our versatile team is skilled in addressing various challenges throughout the building process, including hillsides, basements, large skylights, oversized glass, and unique structural elements. We are dedicated to providing quality craftsmanship and exceptional service, ensuring that each home reflects your individual style and preferences.
            </p>
            <button
              className="button mt-4 bg-white text-black py-2 px-7 rounded font-[Ivypresto-Display] text-1xl flex items-center justify-center mx-auto hover:text-[#A87900] hover:font-bold"
              style={{
                textAlign: "center",
                marginTop: "46px",
                outline: "2.3px solid #A87900",
                transform: "skewX(-30deg) scale(1.15)",
              }}
            >
              <span
                style={{ transform: "skewX(30deg)" }}
                className="font-[Ivypresto-Display]"
              >
                LEARN MORE
              </span>
            </button>
          </div>
          <div>
            <h2 className="font-[Ivypresto-Display] text-5xl font-medium">
              Development.
            </h2>
            <p className="text-xl pt-6 font-light text-black" style={{lineHeight: "1.95rem"}}>
              Are you interested in a collaborative partnership? We not only work for clients but also partner with some on development deals, which can lead to waived fees, project investments, or even developing projects ourselves. By partnering with us, you can diversify your investments securely through real estate development. Our expertise in the field enables us to assemble a skilled team, manage design aspects, and oversee construction while adhering to a well-defined development pro forma, ensuring a successful and stress-free experience.
            </p>
            <button
              className="button mt-4 bg-white text-black py-2 px-7 rounded font-[Ivypresto-Display] text-1xl flex items-center justify-center mx-auto hover:text-[#A87900] hover:font-bold"
              style={{
                textAlign: "center",
                marginTop: "46px",
                outline: "2.3px solid #A87900",
                transform: "skewX(-30deg) scale(1.15)",
              }}
            >
              <span
                style={{ transform: "skewX(30deg)" }}
                className="font-[Ivypresto-Display]"
              >
                LEARN MORE
              </span>
            </button>
          </div>
          <div>
            <h2 className="font-[Ivypresto-Display] text-5xl font-medium">
              Project Management.
            </h2>
            <p className="text-xl pt-6 font-light text-black" style={{lineHeight: "1.95rem"}}>
              Zion PM specializes in project management and owner representation for various residential projects in both private and public sectors. We understand the importance of your time and strive to minimize impacts on your daily tasks by providing quick and efficient updates on the progress of your project through constant communication.
            </p>
            <button
              className="button mt-4 bg-white text-black py-2 px-7 rounded font-[Ivypresto-Display] text-1xl flex items-center justify-center mx-auto hover:text-[#A87900] hover:font-bold"
              style={{
                textAlign: "center",
                marginTop: "46px",
                outline: "2.3px solid #A87900",
                transform: "skewX(-30deg) scale(1.15)",
              }}
            >
              <span
                style={{ transform: "skewX(30deg)" }}
                className="font-[Ivypresto-Display]"
              >
                LEARN MORE
              </span>
            </button>
          </div>
        </div>


      </section>

      {/* Construction Section */}
      <section>
        <div className="bg-[#292d31] h-screen"></div>
      </section>
      {/* Project Management Section */}
      <section>
        <div className=" bg-[#484a47] h-screen"></div>
      </section>
      {/* Development Section */}
      <section>
        <div className="bg-white h-screen"></div>
      </section>

      <Footer></Footer>
    </div>
  );
};

export default Services;
