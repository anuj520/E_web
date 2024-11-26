import "../../src/Menu.css"
import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import f5 from "../../public/f5.json"
import f6 from "../../public/f6.json"
import { FaPlay } from "react-icons/fa";
import { useAuth } from "../store/ContextApi";
import { SearchDetalish } from "./SearchDetalish";
import { useNavigate } from "react-router-dom";
import { BiCategory } from "react-icons/bi";
import { Index } from "../HomePart";
import { Footer } from "../Footer";
export const Search = () => {
  const [api, setApi] = useState('');
const [tog, settog] = useState(false)
const [data , setdata] = useState([])
const [error, seterror] = useState()
const [response , setresponse] = useState() 
const navigator = useNavigate()

const{img,date,tex,handleDel2,satificate,
Released,genra,imdbRating,Runtime,Language,Title,Wirter,item,on} = useAuth()


  const handleChange = (e) => {
    setApi(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=87e6fe62&t=${api}`);
      const data = await response.json();
      setdata(data)
      if (data.Error) {
       seterror(data.Error)
      }else{
        setresponse(data)
      }
    } catch (error) {
      console.log(error);
    }
  };
 

  const handleClick = () =>{
if (api.length == 1) {
  settog(!tog)
}else if(api.length == 45){
navigator('/Home')
}    
  }
  return (
    <section className="CategoriesS" style={{cursor: "pointer"}}>
<Index/>
<footer style={{opacity: on ? 0.4 : 1}}>
    <header>
      <section className="searchapi">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Movies, shows and many more"
            value={api}
            onChange={handleChange} onKeyDown={handleClick}
          />
          <div><CiSearch/></div>
        </form>
      </section>
      {tog &&  response &&   <>
      <section className={`Apiitem ${!data.Poster ? "switch" : ""}`}>
        <pre>TOP  RESULT</pre>
        <menu className={`Hover`} onClick={() =>handleDel2(data.Poster,
        data.Genre,data.Plot,data.Title,data.Year,data.Released,data.BoxOffice,data.Language,
        data.Runtime,data.Awards,data.imdbRating,data.Writer)}>

       <img src={data.Poster} />
       <div>
       <button> <span><FaPlay/></span> Watch Now</button>
       <button className="icon">+</button>
        <p>{data.Genre}</p>
        <h5>{data.Plot}</h5>
        </div>
       </menu>
       </section>
       {/* //error */}
       {error  && <>
          <section className={`Error-Data ${data.Poster ? "switch":""}`}>
        <img src="https://img.hotstar.com/image/upload/v1656431463/web-images/no-result-search.svg" alt="" />
        <h1>Cluldn't find {api}</h1>
         <p>Try searching for something else or try with a different spelling</p>
         </section>
        </>}   
        {/* //error */}
      </>}
      {!tog && <>
       <section className={`Sfapi`}>
       <menu><h1>Popular Language</h1></menu>
        {
         f5.map((curr,index) =>{
         return(
          <div key={index}>
         <img src={curr.img} alt="" />
          </div>
         ) 
         })
        }
       </section>
       <section className="Sfapi">
       <menu><h1>Popular Genres</h1></menu>
        {
         f6.map((curr,index) =>{
         return(
          <div key={index}>
         <img src={curr.img} alt="" />
          </div>
         ) 
         })
        }
       </section>
       </>}
    </header>
   </footer>
    {item && data.Poster && <>
       <SearchDetalish img={img} tex={tex} date={date} Released={Released}
       imdbRating={imdbRating} Runtime={Runtime} Language={Language} 
      satificate={satificate} genra={genra} Title={Title} Wirter={Wirter} item ={item}/>
      </>}
      <br /><br /><br />
      <Footer/>
    </section>
  );
};
