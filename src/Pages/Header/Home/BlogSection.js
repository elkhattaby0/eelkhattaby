import { blog } from "../Data";

const BlogSection = () => {
    return (
        <section className='h-screen max-lg:h-fit max-md:h-fit max-sm:h-fit w-full flex flex-col items-center justify-center bg-[#ffffff] py-[1%] pb-[100px] border-' >
            <div className='w-5/6 h-screen max-lg:h-fit max-md:h-fit max-sm:h-fit flex flex-col items-center '>
                <span data-aos="fade-up" className='leading-[30px] h-1/4 w-1/2 border- max-lg:w-5/6 max-lg:h-[100px]'>
                    <p className='text-[#ffb646] text-xl font-semibold'>Blog</p>
                    <p className=" text-5xl font-semibold">
                        <div className="bg-[#ffb646] h-[60px] w-[60px] rounded-full absolute z-0 max-lg:ml-[100px] ml-[215px] mt-[-10px]"></div>
                        <label className='absolute z-1'>My blog post</label>
                    </p>
                </span>
                <span className='flex items-center text-sm h-3/4 max-lg:flex-wrap max-lg:justify-between max-md:justify-center border-'>
                    {
                        blog.map(n=> (
                            <div data-aos="fade-up" className={`w-[250px] max-md:w-[100%] max-md:mx-0 max-lg:mt-[20px] mx-[10px] ${n.ste}`} key={n.id}>
                                <img 
                                    src={n.img}
                                    alt=""
                                    className='w-full'
                                />
                                <span className='text-sm font-semibold flex justify-around my-[15px]'>
                                    <label className='flex items-center'>
                                        <span className='w-[10px] h-[10px] bg-[#212121] rounded mr-[9px]'></span>
                                        <p className=''>{n.type}</p>
                                    </label>
                                    <label className='flex items-center'>
                                        <span className='w-[10px] h-[10px] bg-[#ffb646] rounded mr-[9px]'></span>
                                        <p className='text-[#ffb646]'>{n.date}</p>
                                    </label>                                
                                </span>
                                <p className='text-xl font-semibold w-[80%] leading-[25px] cursor-pointer hover:text-[#ffb646]'>{n.content}</p>
                            </div>
                        ))
                    }                     
                </span> 
            </div>
        </section>
    )
}

export default BlogSection;