import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoH from '../../assets/images/logo-h.png'
import { faCertificate, faEnvelope, faFileAlt, faHome, faSuitcase, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () =>(
    <div className='nav-bar'>
        <Link className='logo' to = '/'>
            <img className='logoh' src={LogoH} alt="logo"/>
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e"/>
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color="#4d4d4e"/>
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="certificate-link" to="/certificate">
                <FontAwesomeIcon icon={faCertificate} color="#4d4d4e"/>
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="project-link" to="/project">
                <FontAwesomeIcon icon={faFileAlt} color="#4d4d4e"/>
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"/>
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/harshithdshetty/'>
                    <FontAwesomeIcon icon={faLinkedinIn} color="#4d4d4e"/>
                </a>
            </li>
            <li>
                <a target="_blank" rel='noreferrer' href='https://github.com/Harshith-Shetty'>
                    <FontAwesomeIcon icon={faGithub} color="#4d4d4e"/>
                </a>
            </li>
        </ul>
    </div>
)

export default Sidebar