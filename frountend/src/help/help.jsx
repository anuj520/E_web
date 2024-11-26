import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify"
export const Help = () => {
  const navigator = useNavigate()

  const [file, setFile] = useState(null);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [problem, setProblem] = useState('');

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("username", username);
    formData.append("email", email);
    formData.append("problem", problem);
    
     await axios.post("http://localhost:5000/blog", formData)
      .then((res) => {
        toast.success("Problem submit Sucessfilly")
      navigator('/Home')
        console.log("res", res)})
      .catch((err) => {
        toast.error("email already Submited use another email")
        console.log("err", err)});
   
  };

  return (
    <section className="CategoriesS">
    <section className="helpImg">
      <img src="https://www.faithcallcenter.com/blog/wp-content/uploads/2023/11/Helpdesk-and-Technical-Support.jpg" alt="" />
    </section>
    <section className="helpFrom">
      <label htmlFor="file">Enter Problem Image</label>
      <input type="file" onChange={e => setFile(e.target.files[0])} className="Maininput" required/>

      <label htmlFor="username">Enter Username</label>
      <input type="text" name="username" value={username} onChange={e => setUsername(e.target.value)} placeholder=" Enter Username" required />
      <label htmlFor="email">Enter Email</label>
      <input type="text" name="email" value={email} onChange={e => setEmail(e.target.value)} placeholder=" Enter Email" required/>
      <label htmlFor="problem">Enter Problem</label>
      <input type="text" name="problem" value={problem} onChange={e => setProblem(e.target.value)} placeholder=" Enter Problem" required/>
      <button type="button" onClick={handleUpload}>Upload</button>
      </section>
    </section>
  );
};
