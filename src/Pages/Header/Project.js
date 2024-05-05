import { RecentWork } from "./Data";
import Footer from "./Footer";

const Project= () => {
    return (
        <div className="bg-[#fff] h-fit max-2xl:w-full max-xl:w-full max-lg:w-full max-md:w-full max-sm:w-full flex flex-col justify-center items-center max-lg:h-full">
            <section className="w-11/12	mt-20 border- border-red-500 h-fit max-lg:h-fit flex flex-col items-center justify-center max-xl:flex-col  max-lg:mt-24">
                <span className="border- w-1/2 h-[10%] max-lg:h-fit max-lg:w-5/6">
                    <p className="font-semibold text-[#ffb646] text-xl">Portfolio</p>
                    <p className="border- border-black h-16">
                        <div className="bg-[#ffb646] w-[55px] h-[55px] rounded-full absolute ml-[230px]"></div>
                        <label className="font-bold text-5xl absolute">My recent work</label>
                    </p>
                </span>
                <span className="border- border-black w-fit h-5/6 max-lg:h-fit flex flex-wrap max-lg:flex-nowrap max-lg:flex-col">
                    {
                        RecentWork.map(n=> (
                            <div key={n.id} className={`${n.width} border- h-1/3  p-4 relative max-lg:w-full`}>
                                <img
                                    src={n.img}
                                    alt=""
                                    className="w-full h-full"
                                />
                                <p className="text-2xl font-bold text-[#fff] hover:text-[#ffb646] cursor-pointer absolute bottom-10 left-8">{n.content}</p>
                            </div>
                        ))
                    }
                </span>
            </section>            
            
            <Footer />
        </div>
    )
}

export default Project;