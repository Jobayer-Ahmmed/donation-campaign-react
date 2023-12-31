import { Outlet } from "react-router-dom"
import Navbar from "./components/header/navbar/Navbar"


const Root = () => {
  return (
    <div className="pb-24 overflow-x-hidden">
        <Navbar/>
        <Outlet/>
    </div>
  )
}

export default Root