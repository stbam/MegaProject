import './Navbar.css'
import BarsIcon from '../assets/bars.svg'
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
            Hunter College Resources
        </div>
        <div className="right-nav-elements">
            <div>Annoucements</div>
            <div>About</div>
            <div>Where to start</div>
        </div>
    </div> 
    
    );
}
 
export default Navbar;