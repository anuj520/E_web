import "../../src/App.css"
import { toast } from "react-toastify"
import { useState } from "react"
import { useAuth } from "../store/ContextApi"
import { Navigate, NavLink, useNavigate } from "react-router-dom"

export const Login = () =>{
    const{storetokenInLs,isLogin}=useAuth()
    const navigator = useNavigate()
    const[User,setUser] = useState({
  email : "",
  password: "",
    })
    const handleChange = (e) =>{
        const{name,value} = e.target;
         setUser(prev => ({...prev,[name]:value}))
    }
    const handleSubmit = async(e) =>{
        e.preventDefault()
       const response = await fetch('http://localhost:5000/api/auth/login',{
        method: "POST",
        headers:{
            "Content-Type": "application/json"
        },
        body:JSON.stringify(User)
       })
       const res_data = await response.json()
        console.log(res_data);

        if (response.ok) {
            navigator('/Home')
            
            storetokenInLs(res_data.token)
            toast.success("Login Successful")
        }else{
            toast.error(res_data.extraDetails ? res_data.extraDetails:res_data.msg);
          
        }
    }
    return(
        <section className="CategoriesS">
         {isLogin && <>
     <Navigate to={'/Home'}></Navigate>
     </>}

     <section className="SignImg" style={{marginTop: "-4rem"}}>
        <img src="https://img.freepik.com/premium-photo/cybersecurity-concept-user-typing-login-password-smartphone-data-security-encryption-secure-access-user-personal-data_568137-2778.jpg?w=1060" alt="" />
       </section>

     <section className="signUp2">
      <p>Login</p>
      <NavLink to={'/signUp'}><pre>Sign.up</pre></NavLink>
        <form onSubmit={handleSubmit}>
         <label htmlFor="Email">Email</label>
         <input type="text" name="email" required value={User.email} onChange={handleChange} placeholder=" Enter Email"/>
         <label htmlFor="Password">Password</label>
         <input type="text" name="password" required value={User.password} onChange={handleChange} placeholder=" Enter Password"/>
        <button type="Submit">Submit</button>
        </form>
     </section>
        </section>
    )
}