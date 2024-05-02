import { Outlet, Link } from "react-router-dom";
const Logo = "https://cdn-icons-png.flaticon.com/512/2420/2420249.png";

const Header = () => {
    
    return (
        <div className="w-full flex justify-center border- border-red-500 ">
        <section className="w-full flex flex-col items-center font-sans bg-[#ffe9d9] relative">            
            <nav className="w-11/12 flex justify-between absolute z-[10]">
                <ul className="w-1/2 flex p-[0px] my-[30px] m-[0px] text-[30px] font-semibold">
                    <h1>
                        <Link to="/">
                            <img 
                                src={Logo}
                                alt="logo"
                                className="w-[60px]"
                            />
                        </Link>
                    </h1>
                </ul>
                <ul className=" flex  text-[18px] p-[0px] my-[30px] m-[0px] font-semibold">
                    <button className="bg-[#212121] hover:bg-[#fff] hover:text-[#212121] rounded px-[20px] py-[10px] text-[#fff] text-[30px]" onClick={()=> {
                    document.getElementById('respnav').style.display = "flex"
                }}>
                        &#8801;
                    </button>
                </ul>
                
            </nav>
            <ul id="respnav" className="max-md:w-full absolute z-[11] bg-[#212121] text-[#fff] text-[30px] z-0 right-0 h-screen w-1/4 flex flex-col justify-center px-[25px]">
                <button className="absolute right-0 top-0 bg-red-500 hover:bg-red-600 py-[10px] px-[25px]" onClick={()=> {
                    document.getElementById('respnav').style.display = "none"
                }}>x</button>
                    <li className="hover:text-[#ffb646]">
                        <Link to="/">HOME</Link>
                    </li><hr className="py-[10px]"/>
                    <li className="hover:text-[#ffb646]">
                        <Link to="/about">ABOUT</Link>
                    </li><hr className="py-[10px]"/>
                    <li className="hover:text-[#ffb646]">
                        <Link to="/project">PROJECT</Link>
                    </li><hr className="py-[10px]"/>
                    <li className="hover:text-[#ffb646]">
                        <Link to="/project_details">PROJECT DETAILS</Link>
                    </li><hr className="py-[10px]"/>
                    <li className="hover:text-[#ffb646]">
                        <Link to="/blog">BLOG</Link>
                    </li><hr className="py-[10px]"/>
                    <li className="hover:text-[#ffb646]">
                        <Link to="/blog_details">BLOG DETAILS</Link>
                    </li><hr className="py-[10px]"/>
                    <li className="hover:text-[#ffb646]">
                        <Link to="/contact">CONTACT</Link>
                    </li>
                </ul>
            <Outlet />
        </section>
        </div>
    )
}

export default Header;