import { SkillsD } from "../../Data";


const Skills = () => {
    return (
        <div className="w-full h-96 flex flex-col justify-around">
            <p className="text-3xl font-semibold ml-[5px]">Skills</p>
            <section className="flex flex-wrap border-">
            {
                SkillsD.map(n=> (
                    <div key={n.id} className="bg-[#ebebeb] rounded-xl p-[20px] w-[31%] h-32 flex  justify-around m-[5px] hover:bg-[#fff] hover:shadow-md max-sm:w-[47%]">
                        <img
                            src={n.img}
                            alt=""
                            className="w-[40px] h-[40px]"
                        />
                        <div>
                            <span className="flex items-center">
                                <p className="font-semibold text-2xl ml-[10px]">{n.name}</p>
                            </span>
                            <p className="font-mono text-lg w-3/5">({n.percentage})</p>
                        </div>                    
                    </div>
                ))
            }     
            </section>
        </div>
    )
}

export default Skills;