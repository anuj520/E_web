import { FaRegUserCircle } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { FaHome } from "react-icons/fa";
import { LuTv } from "react-icons/lu";
import { RiMovie2Line } from "react-icons/ri";
import { MdSportsCricket } from "react-icons/md";
import { BiCategory } from "react-icons/bi";
import { NavLink } from "react-router-dom";

import { useAuth } from "../store/ContextApi";
export const Index = () =>{
    const{handleOver,on} = useAuth()
    return(
    
    <section className={`HomePart ${on ? "yes2": "no"}`}>
    <div className="ulli">
 <ul onMouseEnter={handleOver} onMouseLeave={handleOver} className={`${on ? "yes": "no"}`}>
<NavLink to={'/User'}><li><FaRegUserCircle/> <span>My Space</span></li></NavLink>  
<NavLink to={'/search'}> <li><CiSearch/> <span>Search</span></li> </NavLink>  
<NavLink to={'/Home'}> <li><FaHome/> <span>Home</span></li></NavLink> 
<NavLink to={'/tv'}><li><LuTv/> <span>Tv</span></li></NavLink>  
 <NavLink to={'/Movies'}><li><RiMovie2Line/> <span>Movies</span></li>  </NavLink>
<NavLink to={'/Sports'}><li><MdSportsCricket/> <span>Sports</span></li> </NavLink> 
<NavLink to={'/Categories'}> <li><BiCategory/><span>Categories</span></li> </NavLink> 
</ul>       
 </div>
</section>
    )
}