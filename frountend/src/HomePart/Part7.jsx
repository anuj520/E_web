import { useAuth } from "../store/ContextApi";
import f4 from "../../public/f4.json"
import { FaPlay } from "react-icons/fa";
import { FaAngleLeft,FaAngleRight } from "react-icons/fa6";
import { Footer } from "../Footer";
export const Part7 = () =>{

 return(
    <>
            <div className={`Topitem8 `}>
        <h1>UpCpming Movies</h1>
        </div>
        <section className={`HomePart7 `} >
            <div>
          {
            f4.map((item,index)=>{
                return(
                <div key={index} >
                  <img src={item.img} alt="" />
                </div>
                )
            })
          }
          </div>
        </section> 
        <br /> <br /> <br />
        <Footer/>
    </>
 )   
}