import f3 from "../../public/f3.json"
import { FaPlay } from "react-icons/fa";
import { useAuth } from "../store/ContextApi";
import { FaAngleLeft,FaAngleRight } from "react-icons/fa6";
export const Part4 =() =>{
    const{scrollRef,handleLeftRef,handleRightRef,big,
        img,date,tex,satificate,genra,img3,pic,handleDel
          } = useAuth()
    return(
        <>
            <div className={`Topitem3 `}>
        <h2>UpCpming Movies</h2>
        <span onClick={handleRightRef}><FaAngleLeft/></span>
        <div className="FaAngleRight" onClick={handleLeftRef}><FaAngleRight/></div>
        </div>
        <section className={`HomePart5 `} ref={scrollRef}>
          {
            f3.map((item,index)=>{
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