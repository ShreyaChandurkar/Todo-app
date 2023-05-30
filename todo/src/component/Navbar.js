import { Link } from 'react-router-dom'
import '../styles/Navbar.scss'
const Navbar = () => {
    return (
        <nav>
            <h1 className='nav-logo'><i class="fa-solid fa-laptop-code"></i> React js </h1>
            <ul>
                <li><i class="fas fa-home"></i><Link to={'/'}>Home</Link></li>
                <li><i class="fas fa-sign-in-alt"></i><Link to={'/loginUser'}>Login</Link></li>
                <li ><i class="fas fa-user-plus"></i><Link to={'/registerUser'}>Register</Link></li>
                <li ><Link to={'/todoform'}>Todos</Link></li>

            </ul>
        </nav>

        // <nav className='NavbarItems'>
        //     <h1 className='navbar-logo'> React js</h1>

        //     <ul className='nav-menu'>
        //         <li>
        //             <link>
        //            <i class="fa-solid fa-house"></i>Home
        //             </link>
        //         </li>
        //     </ul>
        // </nav>
    )
}

export default Navbar