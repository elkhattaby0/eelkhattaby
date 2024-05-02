import HeroSection from './Home/HeroSection';
import SpecialtieSection from './Home/SpecialtieSection';
import AboutSection from './Home/AboutSection';
import RecentWorkSection from './Home/RecentWorkSection';
import TestimonialSection from './Home/TestimonialSection';
import BlogSection from './Home/BlogSection';
import ResumeSection from './Home/ResumeSection';
import Footer from './Footer';

import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
    return (
        <div className="h-full max-2xl:w-full max-xl:w-full max-lg:w-full max-md:w-full max-sm:w-full">
            {/* First Section */}
            <HeroSection />

            {/* Second Section */}
            <SpecialtieSection />

            {/* Third Section */}
            <AboutSection />

            {/* Forth Section */}
            <ResumeSection />

            {/* Fifth Section */}
            <RecentWorkSection />

            {/* Sixth Section */}
            <TestimonialSection />

            {/* Seventh Section */}
            <BlogSection />

            {/* Eighth Section */}
            <Footer />
        </div>
    )
}

AOS.init()
export default Home;