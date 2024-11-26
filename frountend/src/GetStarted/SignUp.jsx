import "../../src/App.css"
import { useState } from "react"
import { useAuth } from "../store/ContextApi"
import { Navigate, NavLink, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"

export const SignUp = () =>{    
  const{storetokenInLs,isLogin}=useAuth()
  const navlink = useNavigate()
    const[user,setuser] = useState({
        username : "",
        email: "",
        password : "",
        phone: ""
    })
    const handleChange = (e) =>{
        const{name,value} = e.target;
        setuser(prev => ({...prev,[name]:value}))
    }
    const handleSubmit = async(e) =>{
        e.preventDefault();
       
        const response = await fetch("http://localhost:5000/api/auth/signUp",{
         method: "POST",
         headers:{
          "Content-Type" : "application/json"
         },
         body: JSON.stringify(user) 
        })
        const res_data = await response.json()
        console.log(res_data);
        
        if (response.ok) {
        navlink('/Home')
        storetokenInLs(res_data.token)
        toast.success("SignUp Successful")
        }else{
          toast.error(res_data.extraDetails ? res_data.extraDetails:res_data.msg);
          
        }
    }
    
  return(
    <section className="CategoriesS">
 {isLogin && <>
     <Navigate to={'/Home'}></Navigate>
     </>}

       <section className="SignImg">
        <img src="https://img.freepik.com/premium-photo/cybersecurity-concept-user-typing-login-password-smartphone-data-security-encryption-secure-access-user-personal-data_568137-2778.jpg?w=1060" alt="" />
       </section>

     <section className="signUp">
      <p>Sign.up</p>
      <NavLink to={'/login'}><pre>Login</pre></NavLink>
        <form onSubmit={handleSubmit}>
         <label htmlFor="username">Username</label>
         <input type="text" name="username" required value={user.username} onChange={handleChange} placeholder=" Enter Username"/>
         <label htmlFor="Email">Email</label>
         <input type="text" name="email" required value={user.email} onChange={handleChange} placeholder=" Enter Email"/>
         <label htmlFor="Password">Password</label>
         <input type="text" name="password" required value={user.password} onChange={handleChange} placeholder=" Enter Password"/>
         <label htmlFor="Phone">Phone</label>
         <input type="text" name="phone" required value={user.phone} onChange={handleChange} placeholder=" Enter Phone"/>
        <button type="Submit">Submit</button>
        </form>
     </section>
  
    </section>
  )  
}