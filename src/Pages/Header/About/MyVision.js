import CountUp from 'react-countup';
import { email } from '../Data';

const MyVision = () => {
    return (
        <section className="w-full h-screen max-lg:h-fit max-md:h-fit bg-[#ffffff] flex justify-center">
            <div className="w-11/12 flex  items-center justify-center border- max-md:flex-col">
                <span data-aos="zoom-in" className="border- w-1/2 h-fit p-10 max-md:w-full">
                    <h1 className="font-bold text-5xl">My vision is to create happy my clients</h1>
                    <p className="text-lg text-gray-600 my-10">
                        That is where I come in. A lover of words, a wrangler of copy. Here to create copy that not only reflects who you are and what you stand for, but words that truly land with those that read them, calling your audience in and making them want more.
                    </p>
                    <span className='flex flex-wrap justify-center leading-[25px] text-center py-[20px]'>
                        <span className='text-gray-500 text-xl p-[10px]'><b className='text-[#212121] text-3xl'>0{<CountUp end={8} duration={12}/>}</b><br/>Award winner</span>
                        <span className='text-gray-500 text-xl p-[10px]'><b className='text-[#212121] text-3xl'>{<CountUp end={1200} duration={12}/>}</b><br/>Worldwide client</span>
                        <span className='text-gray-500 text-xl p-[10px]'><b className='text-[#212121] text-3xl'>{<CountUp end={3500} duration={12}/>}</b><br/>Job done successfully</span>
                    </span>
                </span>
                <span data-aos="zoom-in" className="border- w-1/2 h-fit  max-md:w-full">
                    <p className='border- border-black w-[90px] h-[85px]'>
                        <div className='bg-[#ffb646] w-20 h-20 rounded-full absolute'></div>
                        <label className='text-6xl font-bold absolute z-2 left-5 top-2'>2+</label>
                    </p>
                    <p className="text-5xl font-bold text-[#fff] w-1/3  text-stroke-2 ">Years of experience</p>
                    <div className='bg-[#212121] p-6 rounded-xl mt-10'>
                        <p className='text-[#ffb646] text-lg font-semibold'>SAY HELLO!</p>
                        <p className='text-[#fff] text-2xl font-bold pt-3'>{email}</p>
                    </div>
                </span>
            </div>
        </section>
    )
}

export default MyVision;