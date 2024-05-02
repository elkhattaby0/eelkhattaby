import CountUp from 'react-countup';
import { domaine, name, nationality } from '../Data';

const AboutSection = () => {
    return (
        <section className='h-screen max-lg:h-fit  w-full flex flex-col items-center justify-center bg-[#ffffff] py-[5%]' >
            <div className='h-screen flex border- max-lg:flex-col max-lg:w-5/6 max-lg:items-center max-lg:justify-around max-md:h-fit max-sm:h-fit' id='thirdSection'>
                <div data-aos="zoom-in" className='w-1/2 flex justify-center max-lg:w-full'>
                    <img 
                        src={require('../../Images/about1.png')}
                        alt=''
                        className='w-2/3 max-lg:w-1/2'
                    />
                </div>
                <div data-aos="zoom-in" className='w-1/2 leading-[20px] border- max-lg:w-4/5'>
                    <p className='text-[#ffb646] text-3xl font-semibold py-[20px]'>Hello I’m</p>
                    <h1 className="font-bold text-6xl h-48 max-md:text-5xl max-sm:text-5xl ">
                        <div className="bg-[#ffb646] h-[80px] w-[80px] rounded-full absolute z-[0]"></div>
                        <p className="leading-[80px] absolute z-[1] max-sm:leading-[50px]">{name}, 
                            <p className="font-medium leading-[45px] font-[30px] break-words w-1/2 max-sm:w-full max-sm:text-4xl">{domaine}</p>
                        </p>                            
                    </h1>
                    <p className="font-medium leading-[40px] text-3xl pb-[20px]">Based in {nationality}</p>
                    <p className='font-normal text-lg leading-[25px] w-5/6 text-gray-500 max-sm:w-full'>
                        That is where I come in. A    lover of words, a wrangler of copy. Here to create copy that not only reflects who you are and what you stand for, but words that truly land with those that read them, calling your audience in and making them.
                    </p>
                    
                    <span className='flex flex-wrap justify-center leading-[25px] text-center py-[20px]'>
                        <span className='text-gray-500 text-xl p-[10px]'><b className='text-[#212121] text-3xl'>0{<CountUp end={8} duration={12}/>}</b><br/>Award winner</span>
                        <span className='text-gray-500 text-xl p-[10px]'><b className='text-[#212121] text-3xl'>{<CountUp end={1200} duration={12}/>}</b><br/>Worldwide client</span>
                        <span className='text-gray-500 text-xl p-[10px]'><b className='text-[#212121] text-3xl'>{<CountUp end={3500} duration={12}/>}</b><br/>Job done successfully</span>
                    </span>
                </div>
            </div>
        </section>
    )
}

export default AboutSection;