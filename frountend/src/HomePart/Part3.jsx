import { useAuth } from "../store/ContextApi";
import f2 from "../../public/f2.json"
import f11 from "../../public/f11.json"
import { FaPlay } from "react-icons/fa";
import { FaAngleLeft,FaAngleRight } from "react-icons/fa6";
import { Detalish } from "./Detalish";
import { useState } from "react";
import { Part4 } from "./Part4";
import { Part5 } from "./Part5";
import { Part6 } from "./Part6";
import { Detalish2 } from "./Detalish2.0";

export const Part3 = () =>{

  const{scrollRef,handleLeftRef,handleRightRef,big,
img,date,tex,satificate,genra,img3,handleDel,on
  } = useAuth()

  const[pic , setpic] = useState(false)
const handletog = () =>{
  setpic(!pic)   
}


    return(
        <>
        <header onClick={handletog} className={`${big ? "big2": ""}`} 
        style={{  opacity : pic ? 0.2: 1}}>
        <div className={`Topitem`}>
        <h2>Latest Movies</h2>
        <span onClick={handleRightRef}><FaAngleLeft/></span>
        <div className="FaAngleRight" onClick={handleLeftRef}><FaAngleRight/></div>
        </div>
        <section className={`HomePart3`} ref={scrollRef}>
          {
            f2.map((item,index)=>{
                return(
                <div key={index} className={`parentP3 `} onClick={() =>handleDel(item.img2,item.date,item.text,item.satificate,item.genra,item.img3)}>
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
        <div className={`Topitem2 `}>
        <menu>
        <h2>Top 10 India Today </h2>
        </menu>
        <span onClick={handleRightRef}><FaAngleLeft/></span>
        <div className="FaAngleRight2" onClick={handleLeftRef}><FaAngleRight/></div>
        </div>
        <section className={`HomePart4 `} ref={scrollRef}>
          {
            f11.map((item,index)=>{
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
  <Part4/>
        </header>
        {pic &&<>
        <Detalish img={img} tex={tex} date={date} satificate={satificate} genra={genra} img3={img3} pic={pic}></Detalish>
        </>}
        {!pic && <>
        <Part5/>
        </>}
        </>        
    )
}