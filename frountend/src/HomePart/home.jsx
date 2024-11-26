import "../../src/App.css"
import f1 from "../../public/f1.json"
import { FaPlay, FaRegUserCircle } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { FaHome } from "react-icons/fa";
import { LuTv } from "react-icons/lu";
import { RiMovie2Line } from "react-icons/ri";
import { MdSportsCricket } from "react-icons/md";
import { BiCategory } from "react-icons/bi";
import { useEffect, useState } from "react";
import { Part3 } from "./Part3";
import { useAuth } from "../store/ContextApi";
import { NavLink } from "react-router-dom";

export const Home = () =>{
 const[on , seton] = useState(false)
 const[enter,setEnter] = useState(false)
 const{big,pic,handleimg} =useAuth()
const handleOver = () =>{
    seton(!on)
}


    return(
        <section className="CategoriesS">
        <section className={`HomePart ${on ? "yes2": "no"} ${big ? "big2":""}`}>
            <div className="ulli">
         <ul onMouseEnter={handleOver} onMouseLeave={handleOver} className={`${on ? "yes": "no"}`}>
         <NavLink to={'/User'}><li><FaRegUserCircle/> <span>My Space</span></li></NavLink>  
   <NavLink to={'/search'}> <li><CiSearch/> <span>Search</span></li> </NavLink>  
    <NavLink to={'/Home'}> <li><FaHome/> <span>Home</span></li></NavLink> 
  <NavLink to={'/tv'}><li><LuTv/> <span>Tv</span></li></NavLink>  
  <NavLink to={'/Movies'}><li><RiMovie2Line/> <span>Movies</span></li>  </NavLink> 
 <NavLink to={'/Sports'}><li><MdSportsCricket/> <span>Sports</span></li> </NavLink> 
 <NavLink to={'/Categories'}> <li><BiCategory/> <span>Categories</span></li> </NavLink>    
        </ul>       
         </div>
        </section>
        <footer style={{opacity: on ? 0.4 : 1,  opacity : pic ? 0.2: 1}}>
        <section className={`HomePart2 ${big ? "big2":""}`}>
          {
            f1.map((curr,index) =>{
              return(
                <main key={index} className={`M${index}`} onMouseEnter={() => handleimg(`M${index}`)}>
                <div>
                    <img src={curr.img} className="imge1" />
                    <img src={curr.img2} className="img2" />
                    <footer>
                    <p>Newly Added : BlockBuster</p>
                    <h4>{curr.date} <span>{curr.satificate}</span></h4>
                    <h2>{curr.text}</h2>
                    <h3>{curr.genra}</h3>
                    <button><span><FaPlay/></span> Subscride to wetch</button>
                    <button className="icon">+</button>
                    </footer>
                </div>
                </main>
              )
            })
          }
        </section>
        </footer>
        <Part3/>
        </section>
    )
}