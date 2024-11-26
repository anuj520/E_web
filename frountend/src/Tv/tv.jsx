import f7 from "../../public/f7.json"
import { Footer } from "../Footer";
import { Index } from "../HomePart";
import { useAuth } from "../store/ContextApi";

export const Tv = () =>{
   const{on} = useAuth()
    return(
        <section className="CategoriesS">
        <Index/>
        <body style={{opacity: on ? 0.4 : 1}}>
         <h1 className="Channals">Popular Channals</h1>
        <section className="Tv">
         {
            f7.map((curr,index) =>{
             return(
                <div key={index}>
                   <img src={curr.img} alt="" /> 
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