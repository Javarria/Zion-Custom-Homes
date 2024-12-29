"use client";
import Link from "next/link";

const ContactPreFooter = () => {
  return (
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
          {/* This link tag redirects the user to the contact page when clicked. */}
          {/* 
            The Link component from next/link is needed to enable client-side
            routing. The error "ReferenceError: Link is not defined" is thrown
            because the Link component was not imported from next/link.
          */}
          <Link href="/contact" legacyBehavior>
            <a
              className="button mt-4 bg-white text-black py-2 px-7 rounded font-[Ivypresto-Display] text-1xl flex items-center justify-center hover:text-[#A87900] hover:font-bold"
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
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};
export default ContactPreFooter;
