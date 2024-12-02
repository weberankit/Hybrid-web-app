import React from "react"
import Header from "./Header"
import { Outlet } from "react-router-dom"
import useControllStatic from "../hooks/useControllStatic"
const Layout=()=>{
useControllStatic()
return(
    <>
   <div className="top-0 absolute w-full"> <Header/></div>
   <Outlet/>
    </>
)
}

export default Layout