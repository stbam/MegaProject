import './Card.css'
import logo from '../assets/6.png'
const Card = () => {
    return ( 
    <div>
            <div className="card">
               <img src={logo} alt="placeholder" />
               <div>
                    <h3>Title</h3>
                    <h3>Full Stack Web Development</h3>
                    <h3>Type: Project Based</h3>

               </div>
            </div>
    </div> 
    
    );
}
 
export default Card;