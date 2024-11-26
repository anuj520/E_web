import { useAuth } from "../store/ContextApi";
import { useState } from "react";
export const Detalish = ({img,date,tex,satificate,genra,img3,pic}) =>{
    
    
const{handleClick,big} =useAuth()
 return(
<section className={`Detalish ${!pic ? "yes1": "no"} ${big ? "big":""}`} onDoubleClick={handleClick}>
    <img src={img} alt="" />
 <div  className="imge2">
<img src={img3} />
<p>Newly Added : BlockBuster</p>
 <h4>{date} <span>{satificate}</span></h4>   
<h2>{tex}</h2>
<h3>{genra}</h3>
<button>Subscride to wetch</button>
<menu>
<h1>Imdb Rating</h1>
 <pre>🌟   9.9/10</pre>   
 <h3>Director: <span>Hanu Raghavapudi</span></h3>
 <h3>Writers: <span>Hanu RaghavapudiJay KrishnaRaj Kumar Kandamudi</span></h3>
 <h3>Stars: <span>
 Dulquer SalmaanMrunal ThakurRashmika Mandanna</span></h3>
</menu>

</div> 
</section>
 )   
}