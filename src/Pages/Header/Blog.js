import BlogSection from "../Header/Home/BlogSection";
import Footer from "./Footer";

const Blog = () => {
    return (
        <div className="bg-[#fff] h-fit max-2xl:w-full max-xl:w-full max-lg:w-full max-md:w-full max-sm:w-full flex flex-col justify-center items-center max-lg:h-full">
            <section className="w-4/5	mt-20 border- border-red-500 h-fit max-lg:h-fit flex flex-col items-center justify-center max-xl:flex-col  max-lg:mt-24">
                <BlogSection />    
            </section>
            <Footer />
        </div>
    )
}

export default Blog;