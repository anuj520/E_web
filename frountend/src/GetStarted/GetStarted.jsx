import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import { useAuth } from "../store/ContextApi"

export const GetStarted = () =>{
const[para,setparea] = useState([])    
const[para2,setparea2] = useState()  
const[para3,setparea3] = useState([]) 
const[video , setVideo] = useState(false) 
const{handletext} = useAuth()
const handleInput = () => {
    let count = 6; 
    const time = setInterval(() => {
      count -= 1; 
  
      if (count === 5) {
        setparea('Hey Welcome E-Movies');
      }
      if (count === 3) {
        setparea2('Please click the Get Started button to sign up and log in.');
      }
      if (count === 1) {
        setparea3("I'm sweet to you, buy on the menu page.");
      }
      if (count === 0) {
        setVideo(true)
        clearInterval(time); 
      }
    }, 2800);
  };
  
useEffect(()=>{
handleInput()
},[])

const handleImgH = () =>{
  window.location.reload()
}
      
    return(
        <>
        <section className="GetStarted">
         <section>
            <div className={`${video ? "open" : ""}`}><pre >{para}</pre><span>{para2}</span> <h5>{para3}</h5></div>
            <footer className={`optional ${video ? "open" : ""}`}></footer>
            <video src="1.mp4" autoPlay  muted loop className={`${video ? "open" : ""}`}></video>
            </section>   
        <div>
            <h1 >📽️ Welcom E Movies web Movies</h1>
            <p>At [E-Music], we live and breathe music. From the latest hits to timeless classics, we bring you a harmonious blend of sounds that cater to every taste. Our mission is to connect music enthusiasts with their next favorite song, artist, or album.</p>
        <NavLink to={'/signUp'}><div onClick={handletext}>Get Staretd</div></NavLink>  
        </div>
        <main className={`${video ? "open2" : ""}`}>
        <img src="https://img10.hotstar.com/image/upload/f_auto/sources/r1/cms/prod/1310/1371310-i-ddb6ca5e1d6b" className="mg1" style={{height: "49rem"}}/>
            <img src="https://img10.hotstar.com/image/upload/f_auto/sources/r1/cms/prod/8281/1408281-i-c37b76fe5525" className="mg2" />
            <img src="https://img10.hotstar.com/image/upload/f_auto/sources/r1/cms/prod/9188/1731497329188-i" className="mg3" style={{height: "49rem"}}/>
            <img src="https://img10.hotstar.com/image/upload/f_auto/sources/r1/cms/prod/8841/1428841-i-896a8a652f77" className="mg4" style={{height: "49rem" ,marginTop: "-1rem"}}/>\
            <img src="https://img10.hotstar.com/image/upload/f_auto/sources/r1/cms/prod/8721/1418721-i-07036a488f45" className="mg5" style={{height: "52rem", marginTop: "-4rem"}}/>
            <div className={`${video ? "open3" : ""}`}>
            <img src="https://img10.hotstar.com/image/upload/f_auto/sources/r1/cms/prod/4203/1729281284203-i"  onMouseEnter={handleImgH}/>
            </div>
        </main>
        </section>
        </>
    )
}