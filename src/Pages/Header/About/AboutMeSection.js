import { domaine, myinfo, name } from '../Data';


const AboutMeSection = () => {
    return (
        <section className="w-full h-screen max-lg:h-fit max-md:h-fit bg-[#ffe9d9] flex justify-center">
            <div className="w-11/12 flex h-fit items-center border- max-md:flex-col">
                <span data-aos="zoom-in" className="flex justify-center items-center border- border-black h-fit w-1/2 max-md:w-full">
                    <img
                        src={require('../../Images/about2.png')}
                        alt=""
                        className="w-4/5 border-"
                    />
                </span>
                <span data-aos="zoom-in" className="border- border-black h-fit w-1/2 p-16 max-md:w-full max-md:p-10">
                    <p className='text-xl font-semibold text-[#ffb646]'>About me</p>
                    <p className='text-5xl font-bold'>{name}</p>
                    <p className='text-2xl font-semibold my-4'>{domaine}</p>
                    <p className='text-xl font-semibold my-4'>{myinfo[0]}</p>
                    <p className='text-lg font- text-gray-600 my-4'>{myinfo[1]}</p>
                    <img
                        src={require('../../Images/signature.png')}
                        alt=''
                        className='border- w-3/4 p-[0px] m-0'
                    />
                </span>                    
            </div>
        </section>
    )
}

export default AboutMeSection;