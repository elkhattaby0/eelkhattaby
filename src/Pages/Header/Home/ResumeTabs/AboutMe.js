import { domaine, email, experience, freelance, language, name, nationality, phone } from "../../Data";

const AboutMe = () => {
    return (
        <div className="w-full">
            <p className="text-3xl font-semibold mb-[20px]">Based in {nationality}</p>
            <p className="text-lg text-gray-500">
            {name}, <b>{domaine}</b>, based in {nationality}. That is where I come in. A lover of words, a wrangler of copy. Here to create copy that not only reflects who you are and what you stand for,<br/>
            <p className="mt-[20px]">but words that truly land with those that read them, calling your audience in and making them want more.</p>
            </p>
            <table className="flex text-left w-3/4 justify-between mt-[20px] border- max-sm:w-full">
                <tr className="flex flex-col justify-between text-semibold text-gray-600">
                    <th className="font-normal">Name</th>
                    <th className="font-normal">Nationality</th>
                    <th className="font-normal">Phone</th>
                    <th className="font-normal">Email</th>
                    <th className="font-normal">Experience</th>
                    <th className="font-normal">Freelance</th>
                    <th className="font-normal">Language</th>
                </tr>
                <tr className="flex flex-col justify-between font-bold text-2xl	font-mono max-sm:text-sm">
                    <td>{name}</td>
                    <td>{nationality}</td>
                    <td>{phone}</td>
                    <td>{email}</td>
                    <td>{experience}</td>
                    <td>{freelance}</td>
                    <td>{language}</td>
                </tr>
            </table>
        </div>
    )
}

export default AboutMe;