const Header = () => {
  // This component creates a header with 5 buttons
  // The buttons are mapped from an array of length 5
  // Each button is given a different text value based on its index
  // The text values are "Services", "About", "Home", "Process", and "Build Your Dream"
  // The buttons are given a hover effect of a dark gray background
  // The buttons are given a margin of 3.4rem on either side
  // The buttons are given a rounded corner
  // The buttons are given a font style of Ivypresto-Display
  // The buttons are given a text color of white
  return (
    <nav className="flex justify-center bg-[#000] px-8 py-2">
      {[...Array(5)].map((_, index) => (
        <button
          key={index}
          className="text-white text-2xl hover:bg-[#333] p-1 mx-8 rounded font-[Ivypresto-Display]"
          style={{
            margin: "1 5rem",
            fontWeight: "500",
            letterSpacing: ".15rem",
            fontSize: "0.99925rem",
          }}
        >
          {index === 0
            ? "ABOUT US"
            : index === 1
            ? "SERVICES"
            : index === 2
            ? "ZION HOMES"
            : index === 3
            ? "CONTACT US"
            : "BUILD YOUR DREAM"}
        </button>
      ))}
    </nav>
  );
};
export default Header;
