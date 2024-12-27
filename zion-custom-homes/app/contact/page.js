import Footer from "../components/Footer";
import Header from "../components/Header";


const Contact = () => {
    return (
        <div>
            <Header/>
            {/* Lets Connect Div With Image */}
            <section className="bg-black text-white text-6xl flex justify-center items-center h-screen">

                <header className="font-[Real-Ivypresto] text-center" style={{ textAlign: "center", fontSize: "calc(4.5vw + 3.5rem)", fontWeight: 500, marginTop: "-250px", animation: "fadeIn 3s forwards", letterSpacing: "0.05em" }}>
                    Let's Connect.
                </header>


            </section>
            {/* Section with contact input field */}
            <section className="bg-white text-black text-6xl flex justify-center items-center min-h-[120vh]">
                {/* Wrap for Contact form */}
                <div className="h-full w-full mx-auto p-12 border-2 border-red-500 relative">
                    {/* Line in between two columns */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-[1px] bg-[#A87900] h-full"></div>
                    {/* Div containing two columns */}
                    <div className="h-full grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* First Column (left) on contact */}
                        <div className="h-full border-2 border-red-500">
                            {/* Div containing the project Inquiries section  */}
                            <div>
                                <header className="text-[2.875rem] font-[Real-Ivypresto] p-12 pl-12 text-left" style={{ fontWeight: 575, letterSpacing: "-0.02em" }}>
                                    Project Inquiries.
                                    <h2 className="font-montserrat font-bold text-[#A87900] text-xl pt-6 text-left" style={{letterSpacing: "-0.02em"}}>(919)791-6682</h2>
                                        <h3 className="font-montserrat font-bold text-black hover:text-[#A87900] text-left" style={{ marginTop: "-10px", letterSpacing: "-0.02em" }}>
                                            <a href="mailto:zioncustomhomes@yahoo.com" className="text-xl">zioncustomhomes@yahoo.com</a>
                                        </h3> 
                                    <hr className="border-1 border-[#A87900] w-[280px] my-8" style={{ marginTop: "-1px" }} />
                                </header>
                            </div>
                            {/* Div containing Front desk info */}
                            <div>
                                <header className="text-[2.875rem] font-[Real-Ivypresto] p-12 pl-12 text-left" style={{ fontWeight: 575, letterSpacing: "-0.02em" }}>
                                    Front Desk.
                                    <h2 className="font-montserrat font-bold text-[#A87900] text-xl pt-6 text-left" style={{letterSpacing: "-0.02em"}}>(919)791-6682</h2>
                                        <h3 className="font-montserrat font-bold text-black hover:text-[#A87900] text-left" style={{ marginTop: "-10px", letterSpacing: "-0.02em" }}>
                                            <a href="mailto:zioncustomhomes@yahoo.com" className="text-xl">zioncustomhomes@yahoo.com</a>
                                        </h3> 
                                    <hr className="border-1 border-[#A87900] w-[280px] my-8" style={{ marginTop: "-1px" }} />
                                </header>
                            </div>
                            {/* Div containing Careers info */}
                            <div>
                                <header className="text-[2.875rem] font-[Real-Ivypresto] p-12 pl-12 text-left" style={{ fontWeight: 575, letterSpacing: "-0.02em" }}>
                                    Careers.
                                    <h2 className="font-montserrat font-bold text-[#A87900] text-xl pt-6 text-left" style={{letterSpacing: "-0.02em"}}>(919)791-6682</h2>
                                        <h3 className="font-montserrat font-bold text-black hover:text-[#A87900] text-left" style={{ marginTop: "-10px", letterSpacing: "-0.02em" }}>
                                            <a href="mailto:zioncustomhomes@yahoo.com" className="text-xl">zioncustomhomes@yahoo.com</a>
                                        </h3> 
                                    <hr className="border-1 border-[#A87900] w-[280px] my-8" style={{ marginTop: "-1px" }} />
                                </header>
                            </div>

                        </div>
                        {/* Second Column (right) on contact */}
                        <div className="h-full border-2 border-red-500">
                            <header className="text-[4.5rem] font-[Real-Ivypresto] p-12 pl-12 text-left text-[#A87900]" style={{ fontWeight: 575, letterSpacing: "-0.02em" }}>
                                Tell us about your project.
                            </header>
                            {/* Input field div */}
                            <div>
                                <header className="text-[2.875rem] font-[Real-Ivypresto] p-12 pl-12 text-left" style={{ fontWeight: 575, letterSpacing: "-0.02em" }}>
                                    Send a message.
                                </header>
                                {/* Input fields and there headers  */}
                                    <div>
                                        <header className="text-black text-2xl font-bold font-montserrat">Name</header>
                                        <input type="text" className="w-full border-2 border-black p-2" />
                                    </div>
                                        
                                    <div>
                                        <header className="text-black text-2xl font-bold font-montserrat">Email</header>
                                        <input type="email" className="w-full border-2 border-black p-2" />
                                    </div>

                                    <div>
                                        <header className="text-black text-2xl font-bold font-montserrat">Phone</header>
                                        <input type="tel" className="w-full border-2 border-black p-2" />
                                    </div>

                                    <div>
                                        <header className="text-black text-2xl font-bold font-montserrat">Message</header>
                                        <textarea rows="4" className="w-full border-2 border-black p-2" />
                                    </div>
                                    
                                    <div>
                                        <header className="text-black text-2xl font-bold font-montserrat">Budget</header>
                                        <input type="number" className="w-full border-2 border-black p-2" />
                                    </div>
                            
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Footer Section */}
            <Footer/>
        </div>
    );
}

export default Contact;