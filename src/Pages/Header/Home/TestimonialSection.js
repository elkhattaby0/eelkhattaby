import TestimonialCarousel from '../Carousel';

const TestimonialSection = () => {
    return (
        <section className='h-screen max-lg:h-fit max-md:h-fit max-sm:h-fit w-full flex flex-col items-center justify-center bg-[#ffffff] py-[5%] border-'>
            <div className='border- w-5/6 max-lg:w-full h-full max-lg:h-fit max-md:h-fit max-sm:h-fit flex items-center max-md:flex-col'>
                <span className=' font-semibold w-[25%] h-[70%] max-md:w-[90%] max-md:h-[20%]'>
                    <p className='text-xl text-[#ff9330]'>Testimonial</p>
                    <p>
                        <div className="bg-[#ffb646] h-[55px] w-[55px] rounded-full absolute z-0 max-md:w-[40px] max-md:h-[40px]"></div>
                        <label className='text-5xl absolute z-1 w-[10px] leading-[50px] max-md:text-3xl max-md:w-[90%]'>
                            Client feedback
                        </label>
                    </p>
                </span>
                <span className='w-[75%] max-md:w-[90%] max-md:h-[80%]'>
                    <TestimonialCarousel />
                </span>
            </div>
        </section>
    )
}

export default TestimonialSection;