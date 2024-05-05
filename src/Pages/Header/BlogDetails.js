import Footer from './Footer';
import BlogSection from '../Header/Home/BlogSection'

const BlogDetails = () => {
    return (
        <div className="bg-[#fff] h-fit max-2xl:w-full max-xl:w-full max-lg:w-full max-md:w-full max-sm:w-full flex flex-col justify-center items-center max-lg:h-full">
            <section className="w-4/5	mt-20 border- border-red-500 h-fit max-lg:h-fit flex flex-col items-center justify-center max-xl:flex-col  max-lg:mt-24">
                <span className="w-full border-">
                    <p className='my-20 font-semibold text-5xl w-2/3 max-lg:w-full'>Designing the perfect feature comparison table</p>
                    <img
                        src={require('../Images/content/banner2.png')}
                        alt=""
                        className=""
                    />
                    <label className='flex my-8 max-lg:flex-wrap'>
                        <div className='flex items-center m-2 mx-2'>
                            <img
                                src={require('../Images/content/user.png')}
                                alt=""
                                className=""
                            />
                            <p className=' mx-2'>
                                <p className='text-gray-600 '>Written by</p>
                                <p className='font-semibold '>Mark Henry</p>
                            </p>
                        </div>
                        <p className=' m-2 mx-7'>
                            <p className='text-gray-600 '>Category</p>
                            <p className='font-semibold '>User Experience</p>
                        </p>
                        <p className=' m-2 mx-7'>
                            <p className='text-gray-600 '>Date</p>
                            <p className='font-semibold '>02/08/2023</p>
                        </p>
                    </label>
                    <hr />
                </span>
                <span className="w-full border- text-lg mt-8">
                    <p className='font-bold text-2xl'>About the position</p>
                    <p className='text-gray-500 my-6'>
                        Everyone in my team works towards the samegoal. This enabled our teams to ship new ideas and feel more capable. Podcasting operational — change management inside of workflows. Completely synergize.
                    </p>
                    <p className='text-gray-500 my-6'>
                        But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself
                    </p>
                    <p className='text-gray-500 my-6'>
                        On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided.
                    </p>
                </span>
                <span className='flex my-4 max-lg:flex-col w-full'>
                    <img
                        src={require('../Images/content/post3.png')}
                        alt=''
                        className='p-2'
                    />
                    <img
                        src={require('../Images/content/post4.png')}
                        alt=''
                        className='p-2'
                    />
                </span>
                <span className=''>
                    <p className='font-bold text-2xl'>1. Learning the basics</p>
                    <p className='text-gray-500 my-6'>
                        Everyone in my team works towards the samegoal. This enabled our teams to ship new ideas and feel more capable. Podcasting operational — change management inside of workflows. Completely synergize.
                    </p>
                    <p className='text-gray-500 my-6'>
                        But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself
                    </p>
                    <p className='font-bold text-2xl'>2. Learning the basics</p>
                    <p className='text-gray-500 my-6'>
                        Everyone in my team works towards the samegoal. This enabled our teams to ship new ideas and feel more capable. Podcasting operational — change management inside of workflows. Completely synergize.
                    </p>
                    <p className='text-gray-500 my-6'>
                        But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself
                    </p>
                </span>
                <span className='flex items-center justify-between w-full mb-20 max-lg:flex-col max-lg:justify-left'>
                    <label className='flex item-center'>
                        <p className="mr-8">Share:</p>
                        <a href='https://www.linkedin.com/in/lahoucine-el-khattaby-0335341bb/'>
                            <img src="https://cdn-icons-png.flaticon.com/512/3128/3128219.png" alt="linkedin" className='w-[20px] mx-[5px] hover:bg-[#ffb646] rounded-full hover:border-2 hover:border-[#ffb646] cursor-pointer' />
                        </a>
                        <a href='https://github.com/elkhattaby0/'>
                            <img src="https://cdn-icons-png.flaticon.com/512/733/733609.png" alt="github" className='w-[20px] mx-[5px] hover:bg-[#ffb646] rounded-full hover:border-2 hover:border-[#ffb646] cursor-pointer' />
                        </a>
                        <a href='#'>
                            <img src="https://cdn-icons-png.flaticon.com/512/2111/2111710.png" alt="" className='w-[20px] mx-[5px] hover:bg-[#ffb646] rounded-full hover:border-2 hover:border-[#ffb646] cursor-pointer' />
                        </a>
                        <a href='https://www.instagram.com/lahoucine_elkhattaby/'>
                            <img src="https://cdn-icons-png.flaticon.com/512/15707/15707776.png" alt="instagram" className='w-[20px] mx-[5px] hover:bg-[#ffb646] rounded-full hover:border-2 hover:border-[#ffb646] cursor-pointer' />
                        </a>
                    </label>
                    <label className='flex my-[10px] '>
                        <button className=' hover:bg-[#212121] hover:text-[#fff] border-[1px] border-[#212121] rounded-xl px-[15px] py-[2px] mr-[10px]'>APP</button>
                        <button className='hover:bg-[#212121] hover:text-[#fff] border-[1px] border-[#212121] rounded-xl px-[15px] py-[2px] mr-[10px]'>DEVELOPMENT</button>
                    </label> 
                </span>
            </section>
            <BlogSection />
            <Footer />
        </div>
    )
}

export default BlogDetails;