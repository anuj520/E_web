import { useAuth } from "../store/ContextApi";
import f13 from "../../public/f13.json"
import { FaPlay } from "react-icons/fa";
import { FaAngleLeft,FaAngleRight } from "react-icons/fa6";
export const Part6 = () =>{
    const{scrollRef,handleLeftRef,handleRightRef,big,
        img,date,tex,satificate,genra,img3,handleDel,
          } = useAuth()
 return(
    <>
            <div className={`Topitem6 `}>
        <h2>Most Loved Romantic K-Dramas </h2>
        <span onClick={handleRightRef}><FaAngleLeft/></span>
        <div className="FaAngleRight" onClick={handleLeftRef}><FaAngleRight/></div>
        </div>
        <section className={`HomePart6 `} ref={scrollRef}>
          {
            f13.map((item,index)=>{
                return(
                <div key={index} className="parentP3" onClick={() =>handleDel(item.img2,item.date,item.text,item.satificate,item.genra,item.img3)}>
                  <img src={item.img} alt="" />
                  <menu >
                  <button> <span><FaPlay/></span> Watch Now</button>
                  <button className="icon">+</button>
                   <p>{item.date}</p>
                   <h5>{item.text}</h5>
                  </menu>
                </div>
                )
            })
          }
        </section> 
    </>
 )   
}