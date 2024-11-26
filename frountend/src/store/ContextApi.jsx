import { useRef } from "react";
import { createContext, useContext, useEffect, useReducer, useState} from "react";

export const  AuthContext  = createContext()

export const Authprovider = ({children}) =>{
const [token,settoken] = useState(localStorage.getItem('token'))
const[user,setuser] = useState()
const[loading,setloading] = useState(true) 

const AuthToken = `Bearer ${token}`
const storetokenInLs = (serverToken) =>{
settoken(serverToken)
return localStorage.setItem('token',serverToken)
}

let isLogin = !!token;
//logOutuser

const logOutuser = () =>{
  settoken("")
return localStorage.removeItem('token')
}

const userAuthentication = async() =>{
try {
  const response = await fetch("http://localhost:5000/api/auth/user",{
   method: "GET",
   headers:{
    Authorization:AuthToken
   } 
  })
  if (response.ok) {
    const data = await response.json();
    console.log("data",data);
    
    setuser(data.userData)
    setloading(false)  
  }else{
    setloading(false)
  }
} catch (error) {
  console.log("userAuthentication",error);
}
}


useEffect(()=>{
    userAuthentication()  
},[])


  const[text, settext] = useState()
  const[text2, settext2] = useState()
  const[con, setcon] = useState(false)
  const[text3, setparea3]= useState()
  const handletext = () =>{
let count = 6
const time = setInterval(()=>{
  count -= 1; 
if (count == 5) {
settext("hey fill the Input properli") 
setparea3("welcome to login") 
}
if (count == 3) {

  settext2("hey fill")  
}
if (count == 1) {
  setcon(true)
  clearInterval(time)
}
},2800)
  }

  const scrollRef = useRef(null);
  const scrollRef2 = useRef(null);
  const scrollRef3 = useRef(null);
  const scrollRef4 = useRef(null);
  const scrollRef5 = useRef(null);
  const scrollRef6 = useRef(null);
  const handleLeftRef = () =>{
    if (scrollRef.current) {
      scrollRef.current.scrollLeft +=1223
    }
  }
    const handleRightRef = () =>{
    if (scrollRef.current) {
      scrollRef.current.scrollLeft -=1223
    }
  }
  //part2:
  const handleLeftRef2 = () =>{
    if (scrollRef2.current) {
      scrollRef2.current.scrollLeft +=1223
    }
  }
    const handleRightRef2 = () =>{
    if (scrollRef2.current) {
      scrollRef2.current.scrollLeft -=1223
    }
  }
   //part3:
   const handleLeftRef3 = () =>{
    if (scrollRef3.current) {
      scrollRef3.current.scrollLeft +=1223
    }
  }
    const handleRightRef3 = () =>{
    if (scrollRef3.current) {
      scrollRef3.current.scrollLeft -=1223
    }
  }
   //part4:
   const handleLeftRef4 = () =>{
    if (scrollRef4.current) {
      scrollRef4.current.scrollLeft +=1223
    }
  }
    const handleRightRef4 = () =>{
    if (scrollRef4.current) {
      scrollRef4.current.scrollLeft -=1223
    }
  }
    //part5:
    const handleLeftRef5 = () =>{
      if (scrollRef5.current) {
        scrollRef5.current.scrollLeft +=1223
      }
    }
      const handleRightRef5 = () =>{
      if (scrollRef5.current) {
        scrollRef5.current.scrollLeft -=1223
      }
    }
      //part4:
   const handleLeftRef6 = () =>{
    if (scrollRef6.current) {
      scrollRef6.current.scrollLeft +=1223
    }
  }
    const handleRightRef6 = () =>{
    if (scrollRef6.current) {
      scrollRef6.current.scrollLeft -=1223
    }
  }
  const[big,setbig] = useState(false)
  const handleClick = () =>{
setbig(!big)
}

const[img , setId] = useState()
const[date , setdate] = useState()
const[tex , settex] = useState()
const[satificate , setsatificate] = useState()
const[genra , setgenra] = useState()
const[img3,setumg3] = useState()
const[pic , setpic] = useState(false)
const[pic2 , setpic2] = useState(false)
const handleDel = (img,date,tex,satificate,genra,img3) =>{
  setId(img)
  setdate(date)
  settex(tex)
  setsatificate(satificate)  
  setgenra(genra) 
  setumg3(img3)
  setpic(!pic)
  setpic2(!pic2)
  }
const[Released , setReleased] = useState()
const[imdbRating , setimdbRating] = useState()
const[Runtime , setRuntime] = useState()
const[Language ,setlanguage] = useState()
const[Title , setTitle] = useState()
const[Wirter , setWriter] = useState()
const[item , setitem] = useState(false)
const[item2 , setitem2] = useState(false)
  const handleDel2 = (Poster,Genre,Plot,Title,Awards,
Released,BoxOffice,Language,Runtime,imdbRating,Year,Writer) =>{
    setId(Poster)
    setdate(Genre)
    settex(Plot)
    setsatificate(Awards)  
    setgenra(Year) 
    setTitle(Title)
    setumg3(BoxOffice)
    setReleased(Released)
    setimdbRating(imdbRating)
    setRuntime(Runtime)
    setlanguage(Language)
    setWriter(Writer)
    setitem(!item)
    setitem2(!item2)
    }
    const[on , seton] = useState(false)
    const handleOver = () =>{
        seton(!on)
    }

    const handleimg = (img) =>{
      if (img == "M8") {
      window.location.reload()
      console.log("hello")
    }
    }

  return  <AuthContext.Provider value={{text,text2,con,text3 ,
     handletext, scrollRef,handleLeftRef,handleRightRef,
handleClick,big,img,date,tex,satificate,genra,img3,pic,handleDel,pic2,
handleDel2,Released,imdbRating,item,Runtime,Language,Title,
Wirter,handleOver,on,scrollRef2,handleLeftRef2,handleRightRef2,
scrollRef3,handleLeftRef3,handleRightRef3,scrollRef4,handleLeftRef4,handleRightRef4,
scrollRef5,handleLeftRef5,handleRightRef5,scrollRef6,handleLeftRef6,handleRightRef6,

isLogin,storetokenInLs,AuthToken,user,loading,logOutuser,handleimg
}}>{children}</AuthContext.Provider>
}

export const useAuth  = () =>{
    const AuthContextValue = useContext(AuthContext)
    if (!AuthContextValue) {
         throw new Error('Contex Api fail')
    }
    return AuthContextValue;
}