import { email, name, nationality, phone } from "./Data";

const Footer = () => {
    return (
        <section className="bg-[#212121] w-full h-screen max-lg:h-fit max-md:h-fit max-sm:h-fit flex justify-center">
            <div data-aos="flip-up" className=" w-1/2 max-lg:h-fit max-md:h-fit max-sm:h-fit w-[85%] py-[2%] flex flex-col justify-between border-  max-lg:my-[2%]">
                <span className='font-semibold w-full h-2/5 flex items-center max-lg:flex-col max-lg:h-1/3 '>
                    <div className="p-[20px] max-lg:p-[0px] w-2/5 m-[15px] border- max-lg:m-[0px] h-4/5 flex flex-col justify-between max-lg:h-[40%] max-lg:w-full max-lg:h-[200px]">
                        <p className="h-[200px] max-lg:h-[100px] max-lg:mt-[50px]  max-lg:full max-lg: border- relative">
                            <div className="bg-[#ffb646] h-[55px] w-[55px] rounded-full absolute z-0"></div>
                            <label className='text-5xl absolute z-1 w-[350px] leading-[45px] text-[#fff] font-bold  max-lg:text-4xl  max-lg:w-4/5'>
                                Le t’s work together
                            </label>
                        </p>
                        <p className="text-2xl text-[#fff] my-[10px] flex items-center max-lg:w-full border- ">Based in {nationality} | 
                            <span className="flex items-center max-lg:m-[0px]">
                                <a href='https://www.linkedin.com/in/lahoucine-el-khattaby-0335341bb/'>
                                    <img src="https://img.icons8.com/windows/32/FFFFFF/linkedin-2.png" alt="linkedin" className='w-[22px] mx-[5px] hover:bg-[#ffb646] rounded-full hover:border-2 hover:border-[#ffb646] cursor-pointer' />
                                </a>
                                <a href='https://github.com/elkhattaby0/'>
                                    <img src="https://img.icons8.com/windows/32/FFFFFF/github.png" alt="github" className='w-[22px] mx-[5px] hover:bg-[#ffb646] rounded-full hover:border-2 hover:border-[#ffb646] cursor-pointer' />
                                </a>
                                <a href='#'>
                                    <img src="https://img.icons8.com/sf-regular/48/FFFFFF/telegram.png" alt="" className='w-[22px] mx-[5px] hover:bg-[#ffb646] rounded-full hover:border-2 hover:border-[#ffb646] cursor-pointer' />
                                </a>
                                <a href='https://www.instagram.com/lahoucine_elkhattaby/'>
                                    <img src="https://img.icons8.com/sf-regular/48/FFFFFF/instagram-new.png" alt="instagram" className='w-[22px] mx-[5px] hover:bg-[#ffb646] rounded-full hover:border-2 hover:border-[#ffb646] cursor-pointer' />
                                </a>
                            </span>
                        </p>
                    </div>
                    <div className="flex flex-col justify-between border-[1px] border-[#f5f5f5] rounded-xl p-[20px] h-[90%] w-4/12 m-[15px] text-[25px] max-lg:w-full max-lg:h-[200px]">
                        <p className="text-[#fff] font-semibold">Looking for a hectic designer?</p>
                        <p className="text-[#ffb646] font-bold">{email}</p>
                    </div>
                    <div className="flex flex-col justify-between border-[1px] border-[#f5f5f5] rounded-xl p-[20px] h-[90%] w-4/12 m-[15px] text-[25px] max-lg:w-full max-lg:h-[200px]">
                        <p className="text-[#fff] font-semibold">Want a more in-depth look at my history?</p>
                        <p className="text-[#ffb646] font-bold">{phone}</p>
                    </div>
                </span>
                <span className="w-full max-lg:hidden">
                    <p className="font-bold text-[#f5f5f5] text-[91px]   max-lg:text-center max-lg:h-1/3 border- break-words	">{name.toLocaleUpperCase()}</p>
                </span>
                <span className="w-full text-[#f5f5f5] max-lg:flex max-lg:felx-col max-lg:h-1/3">
                    <hr className="h-[1px] max-lg:hidden"/>
                    <span className="flex justify-between font-semibold items-center border- mt-[10px] max-lg:flex-col max-lg:w-full">
                        <p>©2024 {name}, All Rights Reserved</p>
                        <button className="flex items-center hover:text-[#ffb646]" onClick={()=> {
                            window.scrollTo({
                                top: 0,
                                behavior: 'smooth' 
                            })
                        }}>
                            <p>Back to Top</p>
                            <img className="w-[24px]" src="https://img.icons8.com/sf-black-filled/64/FFFFFF/up.png" alt="up"/>
                        </button>
                    </span>
                </span>
            </div>
        </section>
    )
}

export default Footer;