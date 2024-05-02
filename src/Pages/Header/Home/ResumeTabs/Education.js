import { educationD } from "../../Data";


const Education = () => {
    return (
        <div className="w-full h-96 flex flex-col justify-around">
            <p className="text-3xl font-semibold ml-[5px]">Education</p>
            <section className="flex flex-wrap">
                {
                    educationD.map(n=> (
                        <div key={n.id} className="bg-[#ebebeb] rounded-xl p-[20px] w-full h-24 flex justify-around m-[5px] hover:bg-[#fff] hover:shadow-md">
                            <p className="text-sm text-left">{n.date}</p>
                            <div>
                                <span className="flex items-center">
                                    <div className="bg-[#ffb646] h-[10px] w-[10px] rounded-full"></div>
                                    <p className="text-lg ml-[10px]">{n.company}</p>
                                </span>
                                <p className="font-semibold font-mono text-2xl">{n.title}</p>
                            </div>                    
                        </div>
                    ))
                }                
            </section>  
        </div>
    )
}

export default Education;