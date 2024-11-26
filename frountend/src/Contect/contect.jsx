import { useState } from "react"
import { useAuth } from "../store/ContextApi"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"

export const Contect = () =>{
  const navigator = useNavigate()
    
const[User,setUser] = useState({
username: "",
email: "",
message: "", 
}) 

const[UserData,setUserData] = useState(true)
const {user} = useAuth()
if (UserData && user ) {       
setUser({
    username: user.username,
    email:user.email,
    message:""
})    
setUserData(false)
}


const handleChange = (e) =>{
const{name,value} = e.target;
setUser((prev) => ({...prev,[name]:value}))    
}

const handleSubmit = async(e) =>{
 e.preventDefault();

const response = await fetch("http://localhost:5000/api/form/contect",{
 method:"POST",
 headers:{
 "Content-Type":"application/json"   
 },   

 body: JSON.stringify(User)
}) 

if (response.ok) {
navigator('/Home')    
toast.success("Message Send Successful")  
}


}

return(
    <section className="CategoriesS">
    <section className="SecImg">
      <img src="https://img.freepik.com/premium-vector/businessman-touching-virtual-icons-doing-customer-service-call-center_235461-514.jpg?w=900" alt="" />
    </section>
    <section className="ContectFR">
   <form onSubmit={handleSubmit}>
   <label htmlFor="username">Username</label>
    <input type="text" name="username" value={User.username} onChange={handleChange}/>
    <label htmlFor="email">Email</label>
    <input type="text" name="email" value={User.email}  onChange={handleChange}/>
    <label htmlFor="message">Message</label>
    <input type="text" name="message" value={User.message} onChange={handleChange} placeholder=" Enter Some Complement" required/>

    <button type="Submit">Submit</button>  
    </form> 
    </section>
    </section>
)    
}