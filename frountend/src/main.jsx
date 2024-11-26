import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {App} from './App.jsx'
import { Authprovider } from './store/ContextApi.jsx'
import {ToastContainer} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
createRoot(document.getElementById('root')).render(
  <Authprovider>
  <StrictMode>
    <App />
    <ToastContainer
position="top-right"
autoClose={3000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"
  bodyClassName="toastBody"
/>
  </StrictMode>
  </Authprovider>
)