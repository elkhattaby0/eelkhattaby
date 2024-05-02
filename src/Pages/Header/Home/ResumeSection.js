
import { useState } from "react";
import AboutMe from "./ResumeTabs/AboutMe";
import Awards from "./ResumeTabs/Awards";
import Education from "./ResumeTabs/Education";
import Experience from "./ResumeTabs/Experience";
import Skills from "./ResumeTabs/Skills";

const ResumeSection = () => {
    const [tab, setTab] = useState(<AboutMe />);
    return (
        <section className='h-screen w-full flex flex-col items-center justify-center bg-[#f5f5f5] py-[1%]  max-md:pb-[1%] max-md:h-fit max-sm:h-fit'>
            <div className='w-[80%] h-screen max-md:h-fit max-sm:h-fit flex justify-around border-  max-md:flex-col'>
                <section data-aos="fade-up" className='w-1/3 h-full flex flex-col justify-between max-md:w-full max-md:h-[10%] max-sm:mb-[50px] '>                    
                    <span className="h-3/6 w-full">
                        <p className='text-[25px] text-[#ffb646] font-semibold my-[5px]'>Resume</p>
                        <div className="bg-[#ffb646] h-[60px] w-[60px] rounded-full absolute z-0"></div>
                        <p className='font-semibold text-[50px] max-md:text-[40px] leading-[55px] absolute z-1 w-full  border-'>
                            All over my details find here...
                        </p>
                    </span>
                    <ul className="mt-[150px] font-semibold tabUl max-md:flex max-md:justify-between max-sm:text-xs max-md:mt-[120px]">
                        <li className="p-[13px] pl-[25px] bg-[#fff] rounded my-[10px] shadow hover:bg-[#212121] hover:text-[#fff] cursor-pointer  max-sm:p-[8px]"  onClick={()=> setTab(<AboutMe />)}>About Me</li>
                        <li className="p-[13px] pl-[25px] bg-[#fff] rounded my-[10px] shadow hover:bg-[#212121] hover:text-[#fff] cursor-pointer  max-sm:p-[8px]" onClick={()=> setTab(<Experience />)}>Experience</li>
                        <li className="p-[13px] pl-[25px] bg-[#fff] rounded my-[10px] shadow hover:bg-[#212121] hover:text-[#fff] cursor-pointer  max-sm:p-[8px]" onClick={()=> setTab(<Education />)}>Education</li>
                        <li className="p-[13px] pl-[25px] bg-[#fff] rounded my-[10px] shadow hover:bg-[#212121] hover:text-[#fff] cursor-pointer  max-sm:p-[8px]" onClick={()=> setTab(<Skills />)}>Skills</li>
                        <li className="p-[13px] pl-[25px] bg-[#fff] rounded my-[10px] shadow hover:bg-[#212121] hover:text-[#fff] cursor-pointer  max-sm:p-[8px]" onClick={()=> setTab(<Awards />)}>Awards</li>
                    </ul>
                </section>
                <section data-aos="fade-up" className='w-3/5 flex items-center max-md:h-[85%] max-md:w-full  border-'>
                    {tab}
                    {/* <AboutMe /> */}
                    {/* <Experience /> */}
                    {/* <Education /> */}
                    {/* <Skills /> */}
                    {/* <Awards /> */}
                </section>
            </div>
        </section>
    )
}

export default ResumeSection;