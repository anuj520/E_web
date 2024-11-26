import { Index } from "../HomePart"
import f10 from "../../public/f10.json"
import f11 from "../../public/f11.json"
import f13 from "../../public/f13.json"
import f2 from "../../public/f2.json"
import f12 from "../../public/f12.json"
import { useAuth } from "../store/ContextApi"
import { FaAngleLeft, FaAngleRight, FaPlay } from "react-icons/fa"
import { Footer } from "../Footer";
export const Movies =( )=>{
    const{big,on
      ,scrollRef2,handleLeftRef2,handleRightRef2,scrollRef3,handleLeftRef3,handleRightRef3,
      scrollRef4,handleLeftRef4,handleRightRef4,scrollRef5,handleLeftRef5,handleRightRef5,scrollRef6,handleLeftRef6,handleRightRef6,handleimg      
    } = useAuth()
    return(
        <section className="CategoriesS">
      <Index/>
      <footer style={{opacity: on ? 0.4 : 1}}>
      <section className={`HomePart2 ${big ? "big2":""}`}>
          {
            f10.map((curr,index) =>{
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
                    <button>Subscride to wetch</button>
                    <button className="icon">+</button>
                    </footer>
                </div>
                </main>
              )
            })
          }
        </section>
        <div className={`MovieP1 `}>
        <h2>UpCpming Movies</h2>
        <span onClick={handleRightRef2}><FaAngleLeft/></span>
        <div className="FaAngleRight" onClick={handleLeftRef2}><FaAngleRight/></div>
        </div>
        <section className={`MItem1 `} ref={scrollRef2}>
          {
            [...f2].reverse().map((item,index)=>{
                return(
                <div key={index} className="MmainH">
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
        <div className={`MovieP1 `} style={{marginTop: "-2rem"}}>
        <h2>UpCpming Movies</h2>
        <span onClick={handleRightRef3}><FaAngleLeft/></span>
        <div className="FaAngleRight" onClick={handleLeftRef3}><FaAngleRight/></div>
        </div>
        <section className={`MItem1 `} ref={scrollRef3} style={{marginTop: "-4rem"}}>
          {
            [...f13].reverse().map((item,index)=>{
                return(
                <div key={index} className="MmainH">
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
        <div className={`MovieP1 `} style={{marginTop: "21rem"}}>
        <h2>UpCpming Movies</h2>
        <span onClick={handleRightRef4}><FaAngleLeft/></span>
        <div className="FaAngleRight" onClick={handleLeftRef4}><FaAngleRight/></div>
        </div>
        <section className={`MItem1 `} ref={scrollRef4} style={{marginTop: "-4rem"}}>
          {
           [...f11].reverse().map((item,index)=>{
                return(
                <div key={index} className="MmainH">
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
        <div className={`MovieP1 `} style={{marginTop: "45rem"}}>
        <h2>UpCpming Movies</h2>
        <span onClick={handleRightRef5}><FaAngleLeft/></span>
        <div className="FaAngleRight" onClick={handleLeftRef5}><FaAngleRight/></div>
        </div>
        <section className={`MItem1 `} ref={scrollRef5} style={{marginTop: "-4rem"}}>
          {
            [...f12].reverse().map((item,index)=>{
                return(
                <div key={index} className="MmainH">
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
        <div className={`MovieP1 `} style={{marginTop: "68rem"}}>
        <h2>UpCpming Movies</h2>
        <span onClick={handleRightRef6}><FaAngleLeft/></span>
        <div className="FaAngleRight" onClick={handleLeftRef6}><FaAngleRight/></div>
        </div>
        <section className={`MItem1 `} ref={scrollRef6} style={{marginTop: "-4rem"}}>
          {
            f2.map((item,index)=>{
                return(
                <div key={index} className="MmainH">
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
          <Footer/>
 
        </footer>
        </section>
    )
}