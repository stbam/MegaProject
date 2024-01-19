import Navbar  from "../Navbar/NavBar";
import Search from './SearchBar'
import Card from "./Card";
import './Resources.css'
const ResourcePage = () => {
    return ( 
        <div>
            <Navbar/>
            <Search/>
            <h1>
                 This will be the scroll page
               
            </h1>
            <div className="container">
                 <div className="left-half">
                    <Card/>
                    <Card/>
                    <Card/>
                    
                    </div>
                 
                 <div className="right-half">y</div>
            </div>
       
        </div>
   
   );
}
 
export default ResourcePage;