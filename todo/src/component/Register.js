import { useState } from 'react'
import '../styles/Register.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './Navbar';
import { useNavigate } from "react-router-dom";

const Register = () => {
    const navigate = useNavigate();

    const [userDetails, setUserDetails] = useState({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const handleInput = (event) => {
        const { name, value } = event.target
        setUserDetails({ ...userDetails, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const localStorage = window.localStorage

        if (userDetails.fullName === "" && userDetails.email === "" && userDetails.password === "" && userDetails.confirmPassword === "") {
            toast.error('All fileds are required', {
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
            if (userDetails.password === userDetails.confirmPassword) {
                toast.success('User registered successfully !', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                localStorage.setItem('RegisterData', JSON.stringify(userDetails))
                setUserDetails({
                    fullName: '',
                    email: '',
                    password: '',
                    confirmPassword: ''
                })
                navigate("/loginUser");
            } else {
                toast.error('Password does not match', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            }
        }
    }

    return (
        <>
        <Navbar />
            <div className="register_conatiner">
            
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
                <div className="form2_container">
                    <form onSubmit={handleSubmit}>
                    <i class="fa-solid fa-user"></i><input value={userDetails.fullName} type="text" name="fullName" placeholder='Full Name' onChange={handleInput} />
                    <i class="fa-solid fa-envelope"></i><input value={userDetails.email} type="email" name="email" placeholder='Email' onChange={handleInput} />
                    <i class="fa-sharp fa-solid fa-lock"></i><input value={userDetails.password} type="password" name="password" placeholder='Password' onChange={handleInput} />
                    <i class="fa-solid fa-key"></i><input value={userDetails.confirmPassword} type="password" name="confirmPassword" placeholder='Confirm Password' onChange={handleInput} />
                        <input type="submit" value={'Sign UP'} />
                    </form>
                </div>
            </div>
        </>
    )
}

export default Register

