import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { useAuth } from "../store/ContextApi"
import { toast } from "react-toastify"

export const User_update = () =>{
    const{AuthToken } = useAuth()    
    const navigate = useNavigate()
const[User,setUser] = useState({
    username: "",
    email: "",
    phone: ""
})  

const params = useParams()

const getSingleUser = async() =>{
try {
  const response = await fetch(`http://localhost:5000/admin/user/${params.id}`,{
    method: "GET",
    headers:{
    Authorization:AuthToken   
    }
  })  
  const data = await response.json()
     console.log(data);
  setUser(data)
} catch (error) {
 console.log("getSingleUser",error);
    
}    
}

useEffect(()=>{
getSingleUser()
},[])




const handleChange = (e) =>{
const{name,value} = e.target;
setUser((prev  => ({...prev,[name]:value})))
}
const handeleSubmit = async(e) =>{
e.preventDefault()

const response = await fetch(`http://localhost:5000/admin/users/update/${params.id}`,{
  method: "PATCH",
  headers:{
    "Content-Type": "application/json",
   Authorization:AuthToken 
  },
  body:JSON.stringify(User)  
})
if (response.ok) {
   toast.success('Update Sucessfuly') 
   navigate('/Admin/users')
}else{
 toast.error('Not Update')   
}
}  
return(
    <>
    <section className="helpImg">
      <img src="https://itchronicles.com/wp-content/uploads/2020/09/software-changes-best-practices..jpg" alt="" />
    </section>
<section className="upDateuser">
    <form onSubmit={handeleSubmit}>
        <label htmlFor="username">Username</label>
        <input type="text" name="username" value={User.username} onChange={handleChange}/>
        <label htmlFor="email">Email</label>
        <input type="text" name="email" value={User.email} onChange={handleChange}/>
        <label htmlFor="phone">Phone</label>
        <input type="text" name="phone" value={User.phone} onChange={handleChange}/>

        <button type="Submit">Submit</button>
    </form>
</section>
    </>
)    
}