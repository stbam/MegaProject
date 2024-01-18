import './Navbar.css'
import BarsIcon from '../assets/bars.svg'
import {Link}  from 'react-router-dom'

const Navbar = () => {
    return ( 
    <div className='nav-bar'>
        <div className='left-nav-elements'>
                 <div>
                Menu
            </div>
            
            <div>
                <img  className='menu-img' src={BarsIcon} alt="" />
            </div>
           
        </div>
        <div className="title">
           
            <Link to="/"> Hunter College Resources</Link>
        </div>
        <div className="right-nav-elements">
        <Link to="/announcemnents">Announcements</Link>
            <Link to="/about">About</Link>
            <Link to="/wheretostart">Where to start</Link>
            
        </div>
    </div> 
    
    );
}
 
export default Navbar;