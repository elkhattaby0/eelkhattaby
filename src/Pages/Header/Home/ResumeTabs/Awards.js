import { AwardsD } from "../../Data";


const Awards = () => {
    return (
        <div className="w-full h-96 flex flex-col justify-around">
            <p className="text-3xl font-semibold ml-[5px]">Awards</p>
            <section className="flex flex-wrap">
                {
                    AwardsD.map(n=> (
                        <div key={n.id} className="bg-[#ebebeb] rounded-xl p-[20px] w-[47%] h-48 flex flex-col justify-around m-[5px] hover:bg-[#fff] hover:shadow-md">
                            <div className="flex justify-between items-center">
                                <img
                                    src={n.img}
                                    alt=""
                                    className="w-[50px]"
                                />
                                <p>{n.year}</p>
                            </div>
                            <div>
                                <span className="flex items-center">
                                    <div className="bg-[#ffb646] h-[10px] w-[10px] rounded-full"></div>
                                    <p className="text-lg ml-[10px]">{n.position}</p>
                                </span>
                                <p className="font-semibold font-mono text-2xl ">{n.name}</p>
                            </div>                    
                        </div>
                    ))
                }
            </section>
        </div>
    )
}

export default Awards;