import { experienceD } from "../../Data";


const Experience = () => {
    return (
        <div className="w-full h-96 flex flex-col justify-around">
            <p className="text-3xl font-semibold ml-[5px]">Experience</p>
            <section className="flex flex-wrap">
                {
                    experienceD.map(n=> (
                        <div key={n.id} className="bg-[#ebebeb] rounded-xl p-[20px] w-[47%] h-48 flex flex-col justify-around m-[5px] hover:bg-[#fff] hover:shadow-md">
                            <p className="text-sm">{n.date}</p>
                            <div>
                                <span className="flex items-center">
                                    <div className="bg-[#ffb646] h-[10px] w-[10px] rounded-full"></div>
                                    <p className="text-lg ml-[10px]">{n.company}</p>
                                </span>
                                <p className="font-semibold font-mono text-2xl w-3/5">{n.title}</p>
                            </div>                    
                        </div>
                    ))
                }                
            </section>            
        </div>
    )
}

export default Experience;