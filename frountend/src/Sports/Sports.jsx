import { Index } from "../HomePart"
import f8 from "../../public/f8.json"
import { HeadRs } from "./Headers"
import { Footer } from "../Footer"
import { useAuth } from "../store/ContextApi"
import f3 from "../../public/f3.json"
import f14 from "../../public/f14.json"
import f15 from "../../public/f15.json"
import { FaAngleLeft, FaAngleRight, FaPlay } from "react-icons/fa"
export const Sports = () =>{
  const{on,scrollRef,handleLeftRef,handleRightRef,handleDel} = useAuth()
return(
    <section className="CategoriesS">
    <Index/>
    <body style={{opacity: on ? 0.4 : 1}}>
      <HeadRs/>
    <div>
       <h1 className="PopularC2">Popular Sports</h1>  
       <section className="f6Json">
         {
            f8.map((curr)=>{
            return (
                <div>
                    <img src={curr.img} alt="" />
                </div>
            )    
            })
         }     
       </section> 
       </div> 
     
       <div className={`Sp1`}>
        <h2>Latest Sports</h2>
        <span onClick={handleRightRef}><FaAngleLeft/></span>
        <div className="FaAngleRight" onClick={handleLeftRef} ><FaAngleRight/></div>
        </div>
        <section className={`SpItem `} ref={scrollRef}>
          {
            f3.map((item,index)=>{
                return(
                <div key={index} className="SPH" onClick={() =>handleDel(item.img2,item.date,item.text,item.satificate,item.genra,item.img3)}>
                  <img src={item.img} alt="" />
                  <span>{item.p}</span>
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
        
             
       <div className={`Sp1`} style={{marginTop: "-1rem"}}>
        <h2>Pro kabaddi League S11</h2>
        <span onClick={handleRightRef}><FaAngleLeft/></span>
        <div className="FaAngleRight" onClick={handleLeftRef} ><FaAngleRight/></div>
        </div>
        <section className={`SpItem `} ref={scrollRef}>
          {
            f14.map((item,index)=>{
                return(
                <div key={index} className="SPH" onClick={() =>handleDel(item.img2,item.date,item.text,item.satificate,item.genra,item.img3)}>
                  <img src={item.img} alt="" />
                  <span>{item.p}</span>
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

             
       <div className={`Sp1`} style={{marginTop: "-1rem"}}>
        <h2>UpCpming Movies</h2>
        <span onClick={handleRightRef}><FaAngleLeft/></span>
        <div className="FaAngleRight" onClick={handleLeftRef} ><FaAngleRight/></div>
        </div>
        <section className={`SpItem `} ref={scrollRef}>
          {
            f15.map((item,index)=>{
                return(
                <div key={index} className="SPH" onClick={() =>handleDel(item.img2,item.date,item.text,item.satificate,item.genra,item.img3)}>
                  <img src={item.img} alt="" />
                  <span>{item.p}</span>
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

        <div className={`Sp1`} style={{marginTop: "-1rem"}}>
        <h2>UpCpming Movies</h2>
        <span onClick={handleRightRef}><FaAngleLeft/></span>
        <div className="FaAngleRight" onClick={handleLeftRef} ><FaAngleRight/></div>
        </div>
        <section className={`SpItem `} ref={scrollRef}>
          {
            [...f3].reverse().map((item,index)=>{
                return(
                <div key={index} className="SPH" onClick={() =>handleDel(item.img2,item.date,item.text,item.satificate,item.genra,item.img3)}>
                  <img src={item.img} alt="" />
                  <span>{item.p}</span>
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
       </body>
       <br /><br /><br />
       <Footer/>
    </section>
)    
}