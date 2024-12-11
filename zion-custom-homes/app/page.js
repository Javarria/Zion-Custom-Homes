import Image from "next/image";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <Header></Header>

      <section className="relative hero-section h-[calc(114vh-10rem)] bg-black text-white flex justify-center items-center">
        {/* <!-- Golden Square --> */}
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[-1]"
          style={{
            width: "calc(100vw - 2.5rem)",
            height: "calc(100vw - 2.5rem)",
          }}
        ></div>

        {/* <!-- Overlay Content (Text & Buttons) --> */}
        <div
          className="hero-content text-center space-y-8 px-6"
          style={{ marginTop: "-295px" }}
        >
          <h1
            className="font-[Ivypresto-Display] opacity-0 animate-fade-in"
            style={{
              textAlign: "center",
              fontSize: "calc(5vw + 3.5rem)",
              fontWeight: 560,
              marginTop: "-50px",
              animation: "fadeIn 3s forwards",
            }}
          >
            Bold is a luxury.
          </h1>

          {/* <!-- Contact Button --> */}
          <div className="hero-buttons flex flex-col gap-12 items-center justify-center">
            <a
              href="#contact"
              className="button contact-us-button bg-transparent text-white px-20 py-3 rounded-lg font-[Ivypresto-Display] font-large outline outline-[1px] outline-[#A87900] transition duration-300 tracking-widest"
              style={{ letterSpacing: "0.11em" }}
            >
              C O N T A C T &nbsp; U S
            </a>
          </div>
        </div>
      </section>
      {/* Zion Introduction Section (White box) */}
      <section
        className="text-section bg-white text-black py-[25vh]"
        style={{ minHeight: "calc(100vh - 200px)" }}
      >
        <div className="container mx-auto">
          <div className="text-section">
            <h2 className="text-7xl font-[500] font-[Ivypresto-Display] text-[#A87900] mb-4">
              High End Builders In The RDU Area
            </h2>
            {/* Benifits of Hiring Zion Custom Homes */}
            <h3
              className="text-3xl font-bold font-[Ivypresto-Display] mb-4 mt-16"
              style={{ marginTop: "100px", color: "black" }}
            >
              Benefits of Hiring High-End Builders with Over 20+ Years of
              Experience to Design and Build a Custom Home in Raleigh, NC
            </h3>
            {/* Comment About Why You Should Hire Zion Custom Homes */}
            <div className="mt-8">
              <p className="text-lg font-[350] font-sans leading-relaxed">
                Elevate your home-building experience with Zion Custom Homes, a
                high-end builder you can trust with over 20 years of
                construction expertise. Specializing in designing and building
                luxury homes across North Carolina, our leadership team,
                including the owner, directly oversees each project. Unlike
                other companies, we do not delegate to less experienced general
                contractors, ensuring exceptional quality and attention to
                detail. With Zion Custom Homes, your dream home becomes a
                reality as our experienced team exceeds expectations and
                guarantees direct communication throughout the entire process.
                Say goodbye to the uncertainty of inexperienced companies
              </p>
            </div>
            {/* Advantages of Hiring Zion Custom Homes */}
            <h3
              className="text-3xl font-bold font-[Ivypresto-Display] mb-4 mt-16 relative"
              style={{
                color: "black",
                textDecoration: "underline",
                textDecorationColor: "#A87900",
                textDecorationThickness: "1.3px",
              }}
            >
              Advantages of Hiring High-End Home Builders in Raleigh, NC for
              Your Custom Home
            </h3>
            {/* Cost Savings */}
            <div className="mt-8">
              <h4 className="text-2xl font-[1000] font-[Ivypresto-Display] mb-2 italic text-[#A87900]">
                Cost Savings
              </h4>
              <p className="text-lg font-[350] font-sans leading-relaxed">
                While it might seem like using the services of high-end builders
                near you would cost an exorbitant amount of money, in reality, a
                luxury builder can actually help to keep the costs under
                control. Why? Because of the reputable Raleigh, NC high-end home
                builders will be committed to delivering the best materials and
                the finest quality craftsmanship while keeping the design and
                construction of your custom house within your budget. Add to
                that the fact that energy-efficient appliances and materials
                will be used, and that your house will be expertly crafted and
                durably built, which will result in lower utility and
                maintenance expenses, which will translate to lower living
                expenses.
              </p>
            </div>
            {/* Youll Get Exactly What You Want */}
            <div className="mt-8">
              <h4 className="text-2xl font-[1000] font-[Ivypresto-Display] mb-2 italic text-[#A87900]">
                You’ll Get Exactly What You Want
              </h4>
              <p className="text-lg font-[350] font-sans leading-relaxed">
                With Beverly Hills, CA high-end home builders, you’re guaranteed
                to get exactly what you want. The layout, design, number of
                bedrooms and bathrooms, and features and amenities will be to
                your exact specifications. You’ll be able to sit down with the
                builders and explain exactly what it is that you are
                envisioning. The builders will combine the information you
                provided with their insight and experience to create a design
                that incorporates everything on your list of wants and needs.
                You’ll literally be able to create your dream home!
              </p>
            </div>
            {/* Leadership Involvement Pledge */}
            <div className="mt-8">
              <h4 className="text-2xl font-[1000] font-[Ivypresto-Display] mb-2 italic text-[#A87900]">
                Leadership Involvement Pledge
              </h4>
              <p className="text-lg font-[350] font-sans leading-relaxed">
                Zion Custom Homes takes pride in offering a personalized
                approach to each project we undertake. Unlike other companies,
                we do not delegate project management to less experienced
                general contractors. When you choose Zion Custom Homes, you are
                guaranteed direct communication with our owner and head builder,
                ensuring that every detail of your custom home is executed to
                perfection. By prioritizing clear and open communication, we
                ensure that your vision is realized in every aspect of your
                luxury home. Trust Zion Custom Homes for a seamless, top-quality
                home-building experience, where you'll always be in direct
                contact with the experts dedicated to making your dream home a
                reality.
              </p>
            </div>
            {/* A Home for Life */}
            <div className="mt-8">
              <h4 className="text-2xl font-[1000] font-[Ivypresto-Display] mb-2 italic text-[#A87900]">
                A Home for Life
              </h4>
              <p className="text-lg font-[350] font-sans leading-relaxed">
                The last (but certainly not the least) benefit that you’ll be
                able to take advantage of when you hire Raleigh, NC high-end
                home builders to design and construct your custom house, you’ll
                receive a home that you and your family will be able to live in
                for life. With luxury home builders, you’ll be able to choose
                the location and plot of land, incorporate everything on your
                list of wants and needs, such as the design, layout, number of
                bedrooms and bathrooms, and the specific features and amenities
                that you desire, and will get to choose the finishes that you
                love. In other words, luxury builders will design and build the
                most aesthetically pleasing, comfortable, and expertly crafted
                custom house; a home that you and your family will be able to
                live in and love for a lifetime.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </div>
  );
}
