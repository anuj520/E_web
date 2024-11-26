import { useState } from "react"

export const SearchDetalish = ({img,date,tex,Released,imdbRating,Runtime,Language,Title,satificate,genra,Wirter,}) =>{
const[db , setdb] = useState(false)
const handlebd = () =>{
 setdb(!db)   
}
    
    return(
        <>
        <section className={`Detalish3 ${db ? "bouble" : ""}`}>
            <img src={img} alt="" />
            <p>{Title}</p>
            <pre>Released: {Released}</pre>
            <pre>Newly Added : BlockBuster</pre>
            <h3>{date}</h3>
            <h2>{tex}</h2>
            <button>Subscride to wetch</button>
            <pre>Language: {Language}   Year: {satificate}</pre>
            <menu>
            <h1>Imdb Rating</h1>
 <pre>🌟   {genra}/10</pre>  
 <pre>Runtime: {Runtime}</pre> 
 <pre>Abord: {imdbRating}</pre>
 <h3>Director: <span>{Wirter}</span></h3>
 <h3>Writers: <span>{Wirter} KrishnaRaj Kumar Kandamudi</span></h3>
 <h3>Stars: <span>
 Dulquer Salmaan ,MrunalThakur,Rashmika Mandanna</span></h3>
</menu>         
        </section>
        </>
    )
}