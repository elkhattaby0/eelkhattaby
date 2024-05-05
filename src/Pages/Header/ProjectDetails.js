import Footer from './Footer';

const ProjectDetails = () => {
    return (
        <div className="bg-[#ffe9d9] h-fit max-2xl:w-full max-xl:w-full max-lg:w-full max-md:w-full max-sm:w-full flex flex-col justify-center items-center max-lg:h-full">
            <section className="w-4/5	mt-20 border- border-red-500 h-fit max-lg:h-fit flex flex-col items-center justify-center max-xl:flex-col  max-lg:mt-24">
                <span className="flex w-full max-lg:flex-col">
                    <div className="border- w-1/2 max-lg:w-full">
                        <span className="flex">                        
                            <p className="flex items-center mr-4">
                                <div className="bg-[#212121] w-2 h-2 rounded-full mr-2"></div>
                                <label>UI Design</label>
                            </p>
                            <p className="flex items-center text-[#ffb646]">
                                <div className="bg-[#ffb646] w-2 h-2 rounded-full mr-2"></div>
                                <label>03 May 2019</label>
                            </p>
                        </span>
                        <p className="font-bold text-4xl my-4">Mendero fintech dashboard design</p>
                    </div>
                    <div className="border- w-1/2 flex flex-wrap max-lg:w-full">
                        <p className="flex flex-col p-4 mx-2">
                            <label className="font- text-gray-500">Client</label>
                            <label className="font-semibold">Mashorom</label>
                        </p>
                        <p className="flex flex-col p-4 mx-2">
                            <label className="font- text-gray-500">Category</label>
                            <label className="font-semibold">User Experience</label>
                        </p>
                        <p className="flex flex-col p-4 mx-2">
                            <label className="font- text-gray-500">Tools</label>
                            <label className="font-semibold">Figma, Webflow</label>
                        </p>
                        <p className="flex flex-col p-4 mx-2">
                            <label className="font- text-gray-500">Start date</label>
                            <label className="font-semibold">09/01/ 2020</label>
                        </p>
                        <p className="flex flex-col p-4 mx-2">
                            <label className="font- text-gray-500">End date</label>
                            <label className="font-semibold">09/01/ 2020</label>
                        </p>
                    </div>
                </span>
                <span className='my-4'>
                    <img
                        src={require('../Images/content/banner.png')}
                        alt=''
                        className=''
                    />
                </span>
                <span>
                    <p className='font-bold text-3xl text-left w-full border- my-5'>Overview</p>
                    <p className="text-gray-500 text-lg my-5">
                        Minimalism combined with elements of french typography and brutalism helped us to realize the site exactly as we imagined with the client at the beginning: visually restrained, but stylish. Informative and pleasant to use, with an elegant aftertaste of a serious financial institution. Combined with elements of french typography and visually restrained, but stylish. Informative and pleasant to use, with an elegant aftertaste of a serious financial institutional client, and close collaboration.
                    </p>
                    <p className="text-gray-500 text-lg my-5">
                        That is where I come in. A lover of words, a wrangler of copy. Here to create copy that not only reflects who you are and what you stand for, but words that truly land with those that read them, calling your audience in and making them want more.
                    </p>
                    <ul className='list-disc ml-8 my-5'>
                        <li className='font-bold text-xl'>Advantage</li>
                        <li className='font-bold text-xl'>Accomplished</li>
                        <li className='font-bold text-xl'>Marketplace startups</li>
                        <li className='font-bold text-xl'>SaaS startups</li>
                    </ul>
                    <p className='font-bold text-3xl text-left w-full border- my-5'>Typography</p>
                    <p className="text-gray-500 text-lg my-5">
                        The basic idea was to find a balance between the thin, wispy sans-serif used to indicate a ‘futuristic‘ tone, and a bold, masculine font synonymous with ‘construction‘. We came up with something in the middle, leaning towards lighter-weighted fonts, but still with a hint of that blocky ‘construction’ vibe. We use Chaney for general display and when we want to drive attention to the content, and the technical and geometric Sora font for the body copy and paste overall hierachy.
                    </p>
                    <div className='flex w-full my-5 max-lg:flex-col '>
                        <img
                            src={require('../Images/content/post1.png')}
                            alt=''
                            className='p-3 max-lg:p-1'
                        />
                        <img
                            src={require('../Images/content/post2.png')}
                            alt=''
                            className='p-3 max-lg:p-1'
                        />
                    </div>
                    <p className='font-bold text-3xl text-left w-full border- my-5'>Conclusion</p>
                    <div className='w-full flex max-lg:flex-col'>                        
                        <label className='w-1/2  p-4 max-lg:w-full'>                            
                            <p className="text-gray-500 text-lg">
                                The basic idea was to find a balance between the thin, wispy sans-serif used to indicate a ‘futuristic‘ tone, and a bold, masculine font synonymous with ‘construction‘. We came up with something in the middle, leaning towards lighter-weighted fonts, but still with a hint of that blocky ‘construction’ vibe. We use Chaney for general display and when we want to drive attention to the content, and the technical and geometric Sora font for the body copy and paste overall hierachy.
                            </p>
                        </label>
                        <label className='w-1/2 p-4 max-lg:w-full'>
                            <p className="text-gray-500 text-lg">
                                The basic idea was to find a balance between the thin, wispy sans-serif used to indicate a ‘futuristic‘ tone, and a bold, masculine font synonymous with ‘construction‘. We came up with something in the middle, leaning towards lighter-weighted fonts, but still with a hint of that blocky ‘construction’ vibe.
                            </p>
                        </label>
                    </div>
                </span>
                <span data-aos="fade-up" className='leading-[30px] h-fit w-1/2  max-md:h-[100px] border- max-md:w-[90%]'>
                    <p className='text-[#ffb646] text-xl font-semibold'>Portfolio</p>
                    <p className=" text-5xl font-semibold border- h-20">
                        <div className="bg-[#ffb646] h-[60px] w-[60px] max-md:w-[50px] max-md:h-[50px] rounded-full absolute z-0 ml-[170px] mt-[-10px]"></div>
                        <label className='absolute z-1'>Related work</label>
                    </p>
                </span>
                <span className='flex items-center text-[13px] h-fit max-md:w-full max-md:flex-col max-md:h-[80%] mb-8'>
                    <div data-aos="fade-up" className='p-[20px]'>
                        <img
                            src={require('../Images/project1.png')}
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
                            src={require('../Images/project2.png')}
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
            </section>
            <Footer />
        </div>
    )
}

export default ProjectDetails;