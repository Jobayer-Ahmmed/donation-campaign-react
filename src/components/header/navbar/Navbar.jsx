import { useState} from "react"
import { NavLink } from "react-router-dom"
import {AiOutlineMenu} from "react-icons/ai"
import {AiOutlineClose} from "react-icons/ai"
import logo from "../../../assets/images/Logo.png"



const Navbar = () => {
    const [toggle, setToggle] = useState(true)
    const handleToggle = ()=>{
        setToggle(!toggle)
    }


  return (
    <header className="relative z-10">
        <nav className=" flex justify-between items-center gap-2 lg:gap-0 px-12 lg:px-leftRightPadding pt-8">
            <div>
                <img src={logo} alt="logo image" className="w-44"/>
            </div>
            
            <div className="relative lg:static">
                <div className="text-3xl lg:hidden">
                    {
                        toggle? <AiOutlineMenu onClick={handleToggle}/> : <AiOutlineClose onClick={handleToggle}/>
                    }
                </div>
                <ul onClick={()=>setToggle(!toggle)} className={`absolute lg:static flex flex-col lg:flex-row duration-700 
                 bg-gray-200 lg:bg-transparent 
                p-8 lg:p-0 rounded-lg gap-6 lg:gap-10 
                ${!toggle? 'right-5 top-20' : '-right-56 top-20'} `}
                >
                    <li>
                        <NavLink to="/" className="text-lg font-bold">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/donation" className="text-lg font-bold">Donation</NavLink>
                    </li>
                    <li>
                        <NavLink to="/statistics" className="text-lg font-bold">Statistics</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
  )
}

export default Navbar

