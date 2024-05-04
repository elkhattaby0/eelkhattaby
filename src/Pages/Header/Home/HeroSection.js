import CountUp from 'react-countup';
import { domaine, name, nationality } from '../Data';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
    const navigate = useNavigate();
    return (
        <section className="flex h-screen w-full flex justify-center">
            <div className="w-3/5 max-sm:w-5/6 max-sm:h-screen max-md:h-screen h-[100%] flex items-center justify-center max-md:w-full" id='sectionOneLeft'>
                <section className=''>
                    <p data-aos="fade-right" className="flex items-center text-3xl max-sm:text-base	">
                        <div className="h-[2px] w-[80px] bg-black mr-[15px]"></div>Hello, I’m &#129306;
                    </p>
                    <h1 className="font-bold text-8xl max-sm:text-5xl h-[185px] max-sm:h-[90px] ">
                        <div className="bg-[#ffb646] h-[100px] max-sm:h-[80px] w-[100px] max-sm:w-[80px] rounded-full absolute z-[0]"></div>
                        <p data-aos="fade-right" id='sectionOneLeftName' className="w-6/12 leading-[80px] max-sm:leading-[40px] absolute z-[1] min-2xl:w-[1%] min-2xl:break-all" >{name}</p>
                    </h1>
                    <p data-aos="fade-right" className="text-2xl max-sm:w-text-xs my-[10px]">{domaine} | Based in {nationality}</p>
                    <label className='max-sm:block '>
                        <button data-aos="fade-right" className="max-sm:block max-sm:w-full max-sm:mb-2 py-[16px] px-[35px] rounded-[8px] bg-[#212121] text-[#fff] hover:bg-[#ffe9d9] hover:text-[#212121] border-[1px] border-[#212121] font-bold mr-[8px]" onClick={()=> {
                            navigate('/contact')
                        }}>Let's Talk</button>
                        <button data-aos="fade-right" className="max-sm:block max-sm:w-full py-[16px] px-[35px] rounded-[8px] bg-[#ffe9d9] text-[#212121] hover:bg-[#212121] hover:text-[#fff] border-[1px] border-[#212121] font-bold" onClick={()=> {
                            navigate('/project')
                        }}>My Work</button>
                    </label>
                    <p data-aos="fade-right" className="text-2xl max-sm:w-text-[6px] flex items-center my-[10px]">
                        <span><b>{<CountUp end={1200} duration={12}/>}+</b> Worldwide client</span>
                        <span className="w-[2px] h-[25px] bg-black mx-[8px]"></span>
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
                    </p>
                </section>
            </div>
            <div data-aos="fade-left" className="w-2/5  h-[100%] max-md:hidden" id='sectionOneImg'>
                <img 
                    src={require('../../Images/hero.png')}
                    alt='' 
                    className='w-full'
                    />
            </div>
        </section>
    )
}

export default HeroSection;