import ContactPreFooter from "../components/ContactPreFooter";
import Footer from "../components/Footer";
import Header from "../components/Header";
// import ContactPreFooter from "../components/ContactPreFooter";
// import Link from "next/link";

const Services = () => {
  return (
    <div>
      <Header></Header>

      <ContactPreFooter/>
      {/* Made to your taste */}
      <section className="bg-black text-white flex justify-center items-center h-screen">
        <h1
          className="font-[Ivypresto-Display] opacity-0 animate-fade-in"
          style={{
            fontWeight: 560,
            fontSize: "calc(5vw + 3.5rem)",
            marginTop: "-350px",
            textAlign: "center",
            animation: "fadeIn 3s forwards",
          }}
        >
          Taste is Tailored.
        </h1>
      </section>

      {/* Our services | 3 columns section */}
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
        <div
          style={{
            width: "0%",
            height: "0.225rem",
            backgroundColor: "#A87900",
            marginTop: "calc(-2vw + 1.5rem)",
            marginBottom: "-0.125rem",
            marginLeft: "0%",
            marginRight: "5%",
            animation: "line-anim 2s forwards",
          }}
        ></div>

        <div style={{ height: "calc(3vw + 2rem)" }}></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 p-12">
          {/* 1st Column */}
          <div>
            <h2 className="font-[Ivypresto-Display] text-5xl font-medium">
              Construction.
            </h2>
            <p
              className="text-xl pt-6 font-light text-black"
              style={{ lineHeight: "1.95rem" }}
            >
              Zion Custom Homes offers general contracting services for a
              variety of custom residential projects, ranging from distinctive
              luxury homes to more affordable, personalized properties. Our
              versatile team is skilled in addressing various challenges
              throughout the building process, including hillsides, basements,
              large skylights, oversized glass, and unique structural elements.
              We are dedicated to providing quality craftsmanship and
              exceptional service, ensuring that each home reflects your
              individual style and preferences.
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
          {/* Second Column */}
          <div>
            <h2 className="font-[Ivypresto-Display] text-5xl font-medium">
              Development.
            </h2>
            <p
              className="text-xl pt-6 font-light text-black"
              style={{ lineHeight: "1.95rem" }}
            >
              Are you interested in a collaborative partnership? We not only
              work for clients but also partner with some on development deals,
              which can lead to waived fees, project investments, or even
              developing projects ourselves. By partnering with us, you can
              diversify your investments securely through real estate
              development. Our expertise in the field enables us to assemble a
              skilled team, manage design aspects, and oversee construction
              while adhering to a well-defined development pro forma, ensuring a
              successful and stress-free experience.
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
          {/* Third Column */}
          <div>
            <h2 className="font-[Ivypresto-Display] text-5xl font-medium">
              Project Management.
            </h2>
            <p
              className="text-xl pt-6 font-light text-black"
              style={{ lineHeight: "1.95rem" }}
            >
              With over 20 years of project management expertise, specializes in
              representing owners for diverse residential projects across both
              private and public sectors. Recognizing the importance of your
              time, we work diligently to minimize disruptions to your daily
              tasks by providing quick, efficient updates on your project's
              progress through consistent communication. Our dedication to
              maintaining open and regular dialogue ensures that any concerns
              are addressed promptly, resulting in a smooth and satisfactory
              experience from start to finish.{" "}
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
        {/* The div block can be moved under "Construction" for better semantic structure and readability */}
        <div className="bg-[#292d31] h-[calc(100vh+300px)] flex items-center justify-start">
          <img
            src="/construction-image.png"
            alt="Construction"
            className="w-[900px] h-[428px] border border-black"
            style={{ marginTop: "-350px", marginLeft: "50px" }} // Move the image up and to the right
          />

          <div className="flex flex-col items-end justify-center pr-16">
            <h1
              className="text-[#A87900] text-1xl font-[Ivypresto-Display]"
              style={{
                fontWeight: 560,
                fontSize: "calc(2.5vw + 4rem)",
                marginTop: "-500px",
                letterSpacing: "0.02em", // Added spacing between letters
              }}
            >
              Construction.
            </h1>
            <h2
              className="text-white text-[25px] font-sans font-[300] text-right"
              style={{ marginTop: "-30px" }}
            >
              Best-in-class methods and results.
            </h2>
          </div>
        </div>
      </section>

      {/* Project Management Section */}
      <section className="bg-[#ffffff] h-[calc(100vh+300px)]">
        <div>
          <header
            className="relative text-[#A87900] text-1xl font-[Ivypresto-Display] font-semibold text-left pl-16 pt-52"
            style={{
              fontWeight: 560,
              fontSize: "calc(2.5vw + 4rem)",
            }}
          >
            Project
            <span
              className="font-[Ivypresto-Display]"
              style={{ display: "block", marginTop: "-0.6em" }}
            >
              Management.
            </span>
            <span
              className="font-sans font-[300] text-[#000000] text-[25px] block mt-4"
              style={{ marginTop: "-20px" }}
            >
              Open Communication and efficiency.
            </span>
            <img
              src="/construction-image.png"
              alt="PM Photo"
              className="w-[813px] h-[428px] border border-black float-right"
              style={{ marginTop: "-300px" }}
            />
          </header>
        </div>
      </section>

      {/* Development Section */}
      <section>
        <div className="bg-[#f5f2f2] h-[200vh] pt-48">
          <div className="flex flex-row items-center border border-red-500" style={{ height: "32%", width: "100%" }}>
            
            <img
              src="/dev-image.png"
              alt="Dev Photo"
              className="w-[813px] h-[428px] border border-black"
              style={{ height: "100%", width: "55%" }}
            />

            {/* Div containg the Large header and the smaller header */}
            <header className="text-right pl-7">
              <h1
                className="text-[#A87900] font-[Ivypresto-Display]"
                style={{
                  fontWeight: 560,
                  fontSize: "calc(2.5vw + 4rem)",
                }}
              >
                Development.
              </h1>
              <h2
                className="text-right font-[300]"
                style={{
                  marginLeft: "auto",
                  fontSize: "25px",
                  marginTop: "-20px",
                }}
              >
                Collaborate with a developer expert
              </h2>
            </header>
          </div>
          
        </div>
      </section>

      {/* <ContactPreFooter/> */}

      <Footer></Footer>
    </div>
  );
};








//  {/* div containing img and div containing headers (h1,h2)*/}
//  <div className="border border-black flex flex-row items-center">
//  <img
//    src="/construction-image.png"
//    alt="Development Photo"
//    className="w-[813px] h-[428px] border border-black pr-24 "
//    style={{ position: "relative", left: 0, top: "-800px" }}
//  />

//  {/* Encapsulating the two headers in the div below */}
//  <div
//    className="flex-none flex-col border border-black mx-4 pt-24"
//    style={{
//      borderWidth: "0.5px",
//      marginBottom: "calc(100vh - 128px - 48px - 24px)",
//      height: "calc(20% - 2px)",
//      position: "relative",
//      top: "-540px" // Move the div up by 50px
//    }}
//  >
//    <h1
//      className="text-[#A87900] text-1xl font-[Ivypresto-Display]"
//      style={{
//        fontWeight: 560,
//        fontSize: "calc(2.5vw + 4rem)",
//        letterSpacing: "0.02em",
//        textAlign: "right",
//      }}
//    >
//      Development.
//    </h1>
//    <h2
//      className="text-right font-[300]"
//      style={{
//        marginLeft: "auto",
//        fontSize: "25px",
//        marginTop: "-20px",
//      }}
//    >
//      Collaborate with a developer expert
//    </h2>
//  </div>
//  </div>

// { position: "relative", top: 0, left: 0 }


export default Services;
