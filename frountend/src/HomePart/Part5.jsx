import { useAuth } from "../store/ContextApi";
import f12 from "../../public/f12.json"
import { FaPlay } from "react-icons/fa";
import { FaAngleLeft,FaAngleRight } from "react-icons/fa6";
import { Detalish2 } from "./Detalish2.0";
import { Part6 } from "./Part6";
import { Part7 } from "./Part7";
export const Part5 = () =>{
    const{scrollRef,handleLeftRef,handleRightRef,big,scrollRef2,handleLeftRef2,handleRightRef2,
        img,date,tex,satificate,genra,img3,handleDel,pic,pic2
          } = useAuth()
    
          
 return(
  <>
    <header className={`${big ? "big2": ""}`}  style={{  opacity : pic ? 0.2: 1}}>
            <div className={`Topitem5 `}>
        <h2>Drama Delights</h2>
        <span onClick={handleRightRef2}><FaAngleLeft/></span>
        <div className="FaAngleRight" onClick={handleLeftRef2}><FaAngleRight/></div>
        </div>
        <section className={`HomePart4 `} ref={scrollRef2}>
          {
            f12.map((item,index)=>{
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
        <Part6/>
        <Part7/>
        </header>
        {pic2 && <>
        <Detalish2 img={img} tex={tex} date={date} satificate={satificate} genra={genra} img3={img3} pic={pic}></Detalish2>
        </>}
    </>
 )   
}