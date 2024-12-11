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
            className="text-[108px] font-[560] font-[Ivypresto-Display]"
            style={{ textAlign: "center" }}
          >
            Building Redefined.
          </h1>
        </div>
      </section>

      {/* Section saying we are ZION (White Area) */}
      <section>
        <div
          className="relative items-center bg-white text-black h-[150vh]"
          style={{ width: "100vw", paddingTop: "13vh" }}
        >
          <div
            className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full"
            style={{
              width: "500",
              height: "0",
              borderLeft: "200px solid transparent",
              borderRight: "200px solid transparent",
              borderBottom: "300px solid white",
              borderRadius: "50% 50% 50% 50% / 10% 10% 0 0",
            }}
          ></div>
          {/* 
            className is a property in the JSX element that is being used to apply CSS styles to the element. 
            The value of className is a string which contains the names of the CSS classes that should be applied 
            to the element. 
            "flex" is a class that makes the element a flexible container, and makes its children flexible items. 
            "justify-center" is a class that makes the flexible items inside the container be centered horizontally. 
            "items-center" is a class that makes the flexible items inside the container be centered vertically. 
            "bg-white" is a class that sets the background color of the element to white. 
            "text-black" is a class that sets the text color of the element to black. 
            "h-[90vh]" is a class that sets the height of the element to 90% of the viewport's height. 
          */}
          <div
            className="absolute top-1/4 left-0 transform -translate-y-1/4"
            style={{
              width: "0",
              height: "0",
              borderLeft: "80px solid #A87900",
              borderRight: "80px solid transparent",
              borderTop: "80px solid transparent",
              borderBottom: "80px solid transparent",
            }}
          ></div>

          <h1 className="text-[95px] font-[900] font-[Ivypresto-Display] text-[#A87900] text-center pb-20 pt-20">
            We Are Zion.
          </h1>
          {/* 
              This section is divided into 4 columns. Each column contains a heading and a paragraph of text. 
              The headings are all the same font size and weight, and are colored with the orange color from the Zion branding. 
              The paragraphs are all the same font size and weight, and are colored with the orange color from the Zion branding. 
              The text is centered and has a line height of 1.5. 
              The section is separated from the previous section by a margin of 10px at the top and bottom. 
            */}
          {/* Div containing 4 columns  */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-x-16 gap-y-10 mb-10 mt-10 px-35">
            {/* Columns Header & Body Text #1  */}
            <div className="text-[#A87900] relative px-8">
              <h2 className="text-[25px] font-sans font-[700] text-black">
                CREATORS
              </h2>
              <p className="text-[21px] font-light text-black">
                We are a team of passionate individuals who are dedicated to
                creating unique and functional designs for our clients.
              </p>
              <div
                className="absolute right-[-5px] top-1/2 transform -translate-y-1/2"
                style={{
                  height: "70px",
                  width: "2px",
                  backgroundColor: "black",
                }}
              ></div>
            </div>

            {/* Columns Header & Body Text #2 */}
            <div className="text-[#A87900] relative px-8">
              <h2 className="text-[25px] font-sans font-[900] text-black ">
                BUILDERS
              </h2>
              <p className="text-[21px] font-light text-black">
                We take pride in our attention to detail and our commitment to
                delivering high-quality construction projects.
              </p>
              <div
                className="absolute right-[-5px] top-1/2 transform -translate-y-1/2 opacity-0 animate-fade-in"
                style={{
                  height: "70px",
                  width: "2px",
                  backgroundColor: "black",
                  animation: "fadeIn 2s forwards",
                }}
              ></div>
            </div>

            {/* Columns Header & Body Text #3  */}
            <div className="text-[#A87900] relative px-8">
              <h2 className="text-[25px] font-sans font-[900] text-black ">
                DEVELOPERS
              </h2>
              <p className="text-[21px] font-light text-black">
                We have the expertise to develop and manage projects of all
                sizes, from small residential developments to large commercial
                projects.
              </p>
              <div
                className="absolute right-[-5px] top-1/2 transform -translate-y-1/2"
                style={{
                  height: "70px",
                  width: "2px",
                  backgroundColor: "black",
                }}
              ></div>
            </div>

            {/* Columns Header & Body Text #4  */}
            <div className="text-[#A87900] relative px-8">
              <h2 className="text-[25px] font-sans font-[900] text-black">
                INNOVATORS
              </h2>
              <p className="text-[21px] font-light text-black">
                We are constantly looking for new and innovative ways to improve
                our services and deliver the best possible results for our
                clients.
              </p>
            </div>
          </div>
          {/* IMAGES IN BETWEEN WE ARE ZION & MEET THE TEAM */}
          <div className="flex justify-between pt-16 pr-10">
            {/* 
              When the width of an image is increased, the height will also 
              increase if the image's aspect ratio is not explicitly set. This 
              is because the image's aspect ratio is determined by its width 
              and height attributes. If only the width is set, the image will 
              maintain its original aspect ratio, so the height will increase 
              proportionally. To avoid this, the height attribute can be set 
              explicitly, or the aspect ratio can be set using the 'object-fit' 
              CSS property. 
            */}
            <img
              src="/about-us-large.jpg"
              alt="Large Image of best rated custom home builder of 2024"
              className="w-[90%] h-[80vh] border-black border-[2px] object-fit:cover"
            />
            <img
              src="/about-us.jpg"
              alt="Image of best rated custom home builder of 2024"
              className="w-[25%] h-[50%] border-black border-[2px]"
            />
          </div>
        </div>
      </section>

      {/* GREY BOX SECTION */}
      <section className="bg-[#292d31] h-[200vh]">
        <header className="flex items-center text-white font-[Ivypresto-Display] text-[100px] font-[600] pt-96 pb-80 pl-40">
          Meet the Team.
          <div
            className="triangle"
            style={{ position: "absolute", left: "-40px" }}
          ></div>
        </header>
        {/* Image of best rated custom home builder of 2024  */}
        <div className="flex items-center pl-5 pt-40 ">
          <img
            src="/path-to-your-image.jpg"
            alt="Image of best rated custom home builder of 2024"
            className="w-[30%] h-auto "
          />
          <div className="ml-8 text-white">
            <div className="flex items-center">
              <h2 className="text-3xl font-bold mr-4">Juan Carlos</h2>
              <div className="h-[2px] w-[50px] bg-[rgb(168,121,0)]"></div>
            </div>
            <h3 className="text-2xl text-[#A87900] font-thin">CEO</h3>
            <div className="text-xl absolute top-[370%] right-10 pr-18 text-[#A87900] transform -translate-y-1/2 border border-black w-[600px]">
              <p style={{ fontWeight: "350" }}>
                This is the body of text that appears to the right of the image.
                You can add more details about the image or any relevant content
                here. Putting more text in this area to test the power of this
                div and confirm that the border box does not move depending on
                the amount of text in the area. This is the body of text that
                appears to the right of the image. You can add more details
                about the image or any relevant content here. Putting more text
                in this area to test the power of this div and confirm that the
                border box does not move depending on the amount of text in the
                area. This is the body of text that appears to the right of the
                image. You can add more details about the image or any relevant
                content here. Putting more text in this area to test the power
                of this div and confirm that the border box does not move
                depending on the amount of text in the area.{" "}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHITE SECTION FOR "LETS CHAT"  */}
      <section className="bg-white h-[100vh]">
        <div className="flex justify-start items-start h-full pl-40 pt-40">
          <h1
            className="text-[120px] font-[Ivypresto-Display] font-[510] text-[#A87900]"
            style={{ textAlign: "left" }}
          >
            Let's Chat.
          </h1>

          <div className="mt-48 ml-[-350px]">
            <h3
              style={{ fontSize: "140%", fontWeight: "350" }}
              className="text-lg text-gray-700"
            >
              If you’d like to learn more about our services or set a meeting
              with our firm, let’s chat. We’re listening.
            </h3>
            <button
              className=" button mt-4 bg-white text-black py-2 px-7 rounded font-[Ivypresto-Display] text-1xl flex items-center justify-center hover:text-[#A87900] hover:font-bold"
              style={{
                textAlign: "left",
                marginLeft: "55px",
                marginTop: "46px",
                outline: "2.3px solid #A87900",
                transform: "skewX(-40deg) scale(1.35)",
                
              }}
            >
              <span
                style={{ transform: "skewX(40deg)" }}
                className="font-[Ivypresto-Display]"
              >
                TELL US ABOUT IT
              </span>
            </button>
          </div>
        </div>
      </section>

      <Footer></Footer>
    </div>
  );
};

export default About;
