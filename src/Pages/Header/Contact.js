import { email, phone } from "./Data";
import Footer from "./Footer";

const Contact = () => {
    return (
        <div className="bg-[#fff] h-full max-2xl:w-full max-xl:w-full max-lg:w-full max-md:w-full max-sm:w-full flex flex-col justify-center items-center max-lg:h-full">

            <section className="w-11/12	 border- border-black h-screen max-lg:h-fit flex items-center  max-xl:flex-col  max-lg:mt-24">
                <span className="border- w-1/2 h-fit  max-xl:w-full">
                    <p className="text-[#ffb646] text-xl font-semibold">Contact</p>
                    <p className="border- border-black h-[100px]">
                        <div className="h-[60px] w-[60px] bg-[#ffb646] rounded-full absolute"></div>
                        <label className="text-5xl font-bold absolute  w-10">Let’s connect</label>
                    </p>
                    <label className="flex items-center my-4">
                        <img src="https://img.icons8.com/fluency-systems-regular/48/new-post.png" alt="" className="w-8 h-8 m-2" />
                        <span>
                            <p className="text-lg text-gray-600">Email us</p>
                            <p className="text-xl font-bold">{email}</p>
                        </span>
                    </label><hr className="w-4/5 max-lg:w-full"/>
                    <label className="flex items-center my-4">
                        <img src="https://img.icons8.com/ios/50/phone--v1.png" alt="" className="w-8 h-8 m-2" />
                        <span>
                            <p className="text-lg text-gray-600">Call  us</p>
                            <p className="text-xl font-bold">{phone}</p>
                        </span>
                    </label><hr className="w-4/5 max-lg:w-full"/>
                    <label className="flex items-center my-4">
                        <img src="https://img.icons8.com/ios/50/address--v1.png" alt="" className="w-8 h-8 m-2" />
                        <span>
                            <p className="text-lg text-gray-600">Office address</p>
                            <p className="text-xl font-bold w-4/5">2715 Ash Dr. San Joe, South Dakota 6548</p>
                        </span>
                    </label><hr className="w-4/5 max-lg:w-full"/>
                </span>
                <span className="border- w-1/2 h-fit max-xl:w-full max-xl:mt-8">
                    <div className="flex flex-wrap  max-xl:flex-nowrap max-lg:flex-col">
                        <label className="w-[48%] m-1 max-lg:w-full">
                            <p>Name</p>
                            <input type="text" placeholder="Your name" className="w-full h-14 px-[10px] border-[1px] border-gray-300 outline-none rounded-md"/>
                        </label>
                        <label className="w-[48%] m-1 max-lg:w-full">
                            <p>Email</p>
                            <input type="email" placeholder="Your email" className="w-full h-14 px-[10px] border-[1px] border-gray-300 outline-none rounded-md" />
                        </label>
                        <label className="w-[48%] m-1 max-lg:w-full">
                            <p>Phone</p>
                            <input type="text" placeholder="Your phone" className="w-full h-14 px-[10px] border-[1px] border-gray-300 outline-none rounded-md" />
                        </label>
                        <label className="w-[48%] m-1 max-lg:w-full">
                            <p>Subject</p>
                            <input type="text" placeholder="Your subject" className="w-full h-14 px-[10px] border-[1px] border-gray-300 outline-none rounded-md" />
                        </label>      
                    </div>  
                    <label className="w-full m-2">
                        <p>Message</p>
                        <textarea placeholder="Your message" className="w-full h-20 p-[10px] border-[1px] border-gray-300 outline-none rounded-md"></textarea>
                    </label>   
                    <button className="bg-[#212121] p-3 rounded-xl text-[#fff] font-semibold hover:bg-[#fff] hover:text-[#212121] border-[1px] border-[#212121] w-40">Send</button>
                    <label className="flex items-center mt-8">
                        <div className="bg-gray-300 w-20 h-[2px]"></div>
                        <p className="text-xl font-bold mx-2">Follow me</p>
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
                </span>
            </section>

            <Footer />
        </div>
    )
}

export default Contact;