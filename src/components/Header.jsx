import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import logoe from '../assests/logo1.jpg'
import {LuAlignJustify,LuX} from "react-icons/lu";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleNavbar = () => {
    debugger
    console.log("open")
    setIsOpen(!isOpen)
  }
  const closeNavbar = () => {
    setIsOpen(false);
  };

  return (
  <>
  <nav className='w={full} sticky top-0 mx-auto items-center border-b border-gray-500  justify-end z-[999] bg-black text-ten font-serif'>
    <ul className='md:flex justify-around hidden font-bold text-center items-center py-2'>
     <Nav/>
    
       

    </ul>
    <div className='md:hidden justify-between flex p-2 text-xl'>
      <li className='items-center rounded list-none inline-flex font-serif text-sm'><Link to={"/"} ><img src={logoe} alt="" width={"65vw"} height={"120vh"} srcset="" className='rounded-lg inline'/> Pushpanjali Palace</Link>
  
      </li>
       
      <button onClick={toggleNavbar}>{isOpen ? <LuX/> : <LuAlignJustify/> }</button>

    </div>
  {isOpen && (
    <div className='flex items-center list-none flex-col basis-full md:hidden '>
      {/* <Nav /> */}
      <nav>

    
<li><Link to={"/"} onClick={closeNavbar}>Home</Link></li>
<li>  <Link to={"/about"} onClick={closeNavbar}>About </Link></li>
  <li><Link to={"/gallery"}  onClick={closeNavbar}>Gallery</Link></li>
 <li><Link to={"/contact"}  onClick={closeNavbar}>Contact Us</Link></li>
 </nav>
    </div>
  )}
  </nav>
  </>
  )
}

const Nav = () => {
  
    return(
    <>
 

    
       <Link to={"/"}>Home</Link>
       <li> <Link to={"/about"} >About </Link></li>
        <li className='items-center rounded'><Link to={"/"} ><img src={logoe} alt="" width={"85px"} height={"50px"} srcset="" className='rounded-full'/></Link></li>
        <li><Link to={"/gallery"}>Gallery</Link></li>
        <li><Link to={"/contact"}>Contact Us</Link></li>
      
    </>
    )
}

export default Header