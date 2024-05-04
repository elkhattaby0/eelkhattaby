import AboutMeSection from "./About/AboutMeSection";
import MyVision from "./About/MyVision";
import Footer from "./Footer";
import ResumeSection from "./Home/ResumeSection";
import TestimonialSection from "./Home/TestimonialSection";

const About = () => {
    return (
        <div className="h-fit max-2xl:w-full max-xl:w-full max-lg:w-full max-md:w-full max-sm:w-full border-">
            {/* First Section */}
            <AboutMeSection />

            {/* Second Section */}
            <MyVision />

            {/* Third Section */}
            <ResumeSection />

            {/* Fifth Section */}
            <TestimonialSection />

            {/* Sixth Section */}
            <Footer />
        </div>
    )
}

export default About;