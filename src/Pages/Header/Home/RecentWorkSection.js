

const RecentWorkSection = () => {
    return (
        <section className='h-screen max-lg:h-fit max-md:h-fit max-sm:h-fit w-full flex flex-col items-center justify-center bg-[#ffe9d9] py-[1%] max-lg:py-[5%]' >
            <div className='w-5/6 h-screen max-lg:h-fit max-md:h-fit max-sm:h-fit flex flex-col items-center justify-between max-md:justify-around'>
                <span data-aos="fade-up" className='leading-[30px] h-24 w-1/2  max-md:h-[100px] border- max-md:w-[90%]'>
                    <p className='text-[#ffb646] text-xl font-semibold'>Portfolio</p>
                    <p className=" text-5xl font-semibold">
                        <div className="bg-[#ffb646] h-[60px] w-[60px] max-md:w-[50px] max-md:h-[50px] rounded-full absolute z-0 ml-[225px] mt-[-10px]"></div>
                        <label className='absolute z-1'>My recent work</label>
                    </p>
                </span>
                <span className='flex items-center text-[13px] h-48 max-md:w-full max-md:flex-col max-md:h-[80%]'>
                    <div data-aos="fade-up" className='p-[20px]'>
                        <img
                            src={require('../../Images/project1.png')}
                            alt=''
                            className='rounded-xl w-full my-[10px]'
                        />
                        <label className='flex my-[10px]'>
                            <button className=' hover:bg-[#212121] hover:text-[#fff] border-[1px] border-[#212121] rounded-xl px-[15px] py-[2px] mr-[10px]'>APP</button>
                            <button className='hover:bg-[#212121] hover:text-[#fff] border-[1px] border-[#212121] rounded-xl px-[15px] py-[2px] mr-[10px]'>DEVELOPMENT</button>
                        </label>                            
                        <p className='font-bold text-2xl'>Basinik Finance App</p>
                    </div>
                    <div data-aos="fade-up" className='p-[20px]'>
                        <img
                            src={require('../../Images/project2.png')}
                            alt=''
                            className='rounded-xl w-full my-[10px]'
                        />
                        <label className='flex my-[10px] '>
                            <button className=' hover:bg-[#212121] hover:text-[#fff] border-[1px] border-[#212121] rounded-xl px-[15px] py-[2px] mr-[10px]'>APP</button>
                            <button className='hover:bg-[#212121] hover:text-[#fff] border-[1px] border-[#212121] rounded-xl px-[15px] py-[2px] mr-[10px]'>DEVELOPMENT</button>
                        </label>                            
                        <p className='font-bold text-2xl'>Oxilex Dashboard Design</p>
                    </div>
                </span>                    
                <button data-aos="fade-up" className='w-full h-15 bg-[#212121] text-[#fff] rounded-xl p-[15px] border-[1px] border-[#212121] hover:bg-[#fff] hover:text-[#212121] font-semibold'>
                    View All Project
                </button>
            </div>
        </section>
    )
}

export default RecentWorkSection;