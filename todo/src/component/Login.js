import { useEffect, useState } from 'react'
import '../styles/Login.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './Navbar';
import { useNavigate } from "react-router-dom";


const Login = () => {

    const navigate = useNavigate()
    const [user, setUser] = useState({
        email: "",
        password: ''
    })
    const [userInfo, setUserInfo] = useState({})

    useEffect(() => {
        const localStorage = window.localStorage
        const data = localStorage.getItem('RegisterData')
        const userInfo = JSON.parse(data)
        console.log(userInfo.email)
        setUserInfo(userInfo)
    }, [])

    const handleInput = (event) => {
        const { name, value } = event.target
        setUser({ ...user, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (user.email === "" && user.password === "") {
            toast.error('All fields are required', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        } else {
            if (user.email !== userInfo.email || user.password !== userInfo.password) {
                toast.error('Email or Password are not valid !!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            } else {
                toast.success('User logged in successfully', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });

                navigate("/")
            }
        }
    }
    
    return (
        <>
        <Navbar />
            <div className="login_continer">
            
                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                />
                <div className="form_container">
                    <form action="" onSubmit={handleSubmit}>
                    <i class="fa-solid fa-envelope"></i><input type="email" value={user.email} name="email" placeholder='Email' onChange={handleInput} />
                    <i class="fa-solid fa-key"></i><input type="password" value={user.password} name="password" placeholder='Password' onChange={handleInput} />
                        <input className="submit_btn"  type="submit" value={'Login'} />
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login