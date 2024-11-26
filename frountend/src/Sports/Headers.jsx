import { useAuth } from "../store/ContextApi"
import f9 from "../../public/f9.json"
export const HeadRs = () =>{
    const{big,handleimg} = useAuth()
    return(
        <>
            <section className={`HomePart2 ${big ? "big2":""}`}>
          {
            f9.map((curr,index) =>{
              return(
                <main key={index} className={`M${index}`} onMouseEnter={() => handleimg(`M${index}`)}>
                <div>
                    <img src={curr.img} className="imge1" />
                    <h1 className="img2" style={{fontSize:'47px', width: "25rem", position: "relative" , top: "-34rem"}}>{curr.img2} </h1>
                    <footer style={{marginTop: "3rem"}}>
                    <p>Newly Added</p>
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
        </>
    )
}