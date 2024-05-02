import { specialtie, email } from "../Data";

const SpecialtieSection = () => {
    return (
        <section className="h-screen max-md:h-fit max-sm:h-fit w-full flex flex-col items-center justify-around bg-[#ffffff] py-[1%]" id='sectionTwo'>
            <div className='w-4/5 h-16 flex items- py-[1%] max-md:flex max-md:flex-col max-sm:justify-between max-md:h-[200px] max-sm:h-[200px]' >
                <span data-aos="fade-up" className='w-2/5 max-sm:w-full h-full max-sm:h-fit p-[0px] m-[0px] leading-[10px] max-md:h-full'>
                    <p className='text-base text-[#ffb646] font-semibold my-[0px]'>Services</p>
                    <h2 className='flex '>
                        <div className="bg-[#ffb646] h-[35px] w-[35px] rounded-full absolute z-[0] "></div>
                        <p className='absolute z-[1] text-4xl  font-semibold'>My specialties</p>
                    </h2>
                </span>
                <span data-aos="fade-up" className='w-1/2 font-medium text-gray-500 max-md:w-5/6 max-md:h-2/4 max-sm:w-full'>
                    Synergistically seize front-end methods of empowerment without extensive core competencies. Progressively repurpose alternative platforms
                </span>
            </div>
            <div className='w-5/6 flex flex-nowrap justify-center h-80 flex items-center p-[0px] max-md:h-4/5 max-sm:h-[80%] max-md:flex max-md:flex-col' id='sectionTwoImg'>
                <section className='w-full flex flex-wrap justify-between p-[0px] max-sm:flex-col '>
                    {
                        specialtie.map(n=> (
                            <div  data-aos="fade-up" className='bg-[#f5f5f5] font-medium text-base p-[35px] m-[8px] w-[31%] rounded-xl hover:bg-[#fff] cursor-pointer hover:shadow-xl hover:text-[#ff9330] max-lg:w-[30%] max-md:w-[30%] max-sm:w-full max-sm:m-[0px] max-sm:my-[4px] max-sm:flex max-sm:items-center max-sm:p-[20px]'>
                                <img 
                                    src={n.img}
                                    alt=''
                                    className='w-[40px] h-[40px] rounded-full bg-[#ffffff] p-[8px] my-[20px] shadow'
                                />
                                <p className='w-[80%] max-sm:ml-4'>{n.title}</p>
                            </div>
                        ))
                    }
                </section>
                <section data-aos="fade-up" className='w-1/3 bg-[#212121] font-medium text-[20px] p-[35px] m-[8px]   rounded-xl max-md:w-3/4 max-sm:w-full'>
                    <p className='text-[#ff9330] text-[18px]'>SAY HELLO!</p>
                    <h3 className='text-[#fff] text-[24px]'>{email}</h3>
                </section>
            </div>
        </section>
    )
}

export default SpecialtieSection;