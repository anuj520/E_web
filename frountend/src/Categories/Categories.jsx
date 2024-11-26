import { Index } from "../HomePart"
import f4 from "../../public/f4.json"
import f5 from "../../public/f5.json"
import f6 from "../../public/f6.json"
import f7 from "../../public/f7.json"
import f8 from "../../public/f8.json"
import { Footer } from "../Footer"

export const Categories = () =>{
    return(
        <section className="CategoriesS">
        <Index/>
        <h1 style={{margin: "0px 35rem", position:"relative",
        top: "3rem", fontSize:"4rem", color: "#B3C8CF"   
        }}>Categories</h1>   
         <section className="f4Json">
         {
            f4.map((curr)=>{
            return (
                <div>
                    <img src={curr.img} alt="" />
                </div>
            )    
            })
         }     
       </section> 
       <div>
       <h1 className="PopularC">Popular Lnaguage</h1>  
       <section className="f5Json">
         {
            f5.map((curr)=>{
            return (
                <div>
                    <img src={curr.img} alt="" />
                </div>
            )    
            })
         }     
       </section> 
       </div>

       <div>
       <h1 className="PopularC2">Popular Channels</h1>  
       <section className="f6Json">
         {
            f6.map((curr)=>{
            return (
                <div>
                    <img src={curr.img} alt="" />
                </div>
            )    
            })
         }     
       </section> 
       </div>   

           <div>
       <h1 className="PopularC2">Popular Genres</h1>  
       <section className="f6Json">
         {
            f7.map((curr)=>{
            return (
                <div>
                    <img src={curr.img} alt="" />
                </div>
            )    
            })
         }     
       </section> 
       </div>     

       
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
       <br /><br /><br />
       <Footer/> 
        </section>
    )
}