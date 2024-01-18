import './Slider.css' 
import logo from '../assets/1.png'
import logo2 from '../assets/2.png'
import logo3 from '../assets/3.svg'
import logo4 from '../assets/4.jpeg'
import logo5 from '../assets/5.png'
import logo6 from '../assets/6.png'
import logo7 from '../assets/7.svg'
import logo8 from '../assets/8.png'

const Slider = () => {
  document.querySelectorAll('.slider').forEach(function (slider) {
    slider.addEventListener('click', function () {
      this.classList.toggle('is-paused');
    });
  });

  
    return ( 
    <div>


    <div className="slider">
        <div className="slide-track">
            <div className="slideName">
                <img className='image' src={logo}  alt="" />
            </div>
            <div className="slideName">
                <img className='image' src={logo2}  alt="" />
            </div>
            <div className="slide">
                <img className='image' src={logo3}   alt="" />
            </div>
            <div className="slide">
                <img className='image' src={logo4}   alt="" />
            </div>
            <div className="slide">
                <img className='image' src={logo5}   alt="" />
            </div>
            <div className="slide">
                <img className='image' src={logo6}   alt="" />
            </div>
            <div className="slide">
                <img className='image' src={logo7}   alt="" />
            </div>
            <div className="slide">
                <img className='image' src={logo8}  alt="" />
            </div>
            <div className="slide">
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png" height="100" width="250" alt="" />
            </div>
            <div className="slide">
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png" height="100" width="250" alt="" />
            </div>
            <div className="slide">
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png" height="100" width="250" alt="" />
            </div>
            <div className="slide">
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png" height="100" width="250" alt="" />
            </div>
            <div className="slide">
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png" height="100" width="250" alt="" />
            </div>
            <div className="slide">
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png" height="100" width="250" alt="" />
            </div>
        </div>
    </div>
    <div className="slider">
    <div className="slide-track" id="slider2">
            
             <div className="slideName">
                <img src={logo} height="100" width="250" alt="" />
            </div>
            <div className="slideName">
                <img src={logo2} height="100" width="250" alt="" />
            </div>
            <div className="slide">
                <img src={logo3} height="100" width="250" alt="" />
            </div>
            <div className="slide">
                <img src={logo4} height="100" width="250" alt="" />
            </div>
            <div className="slide">
                <img src={logo5} height="100" width="250" alt="" />
            </div>
            <div className="slide">
                <img src={logo6} height="100" width="250" alt="" />
            </div>
            <div className="slide">
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png" height="100" width="250" alt="" />
            </div>
            <div className="slideName">
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png" height="100" width="250" alt="" />
            </div>
            <div className="slideName">
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png" height="100" width="250" alt="" />
            </div>
            <div className="slideName">
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png" height="100" width="250" alt="" />
            </div>
            <div className="slideName">
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png" height="100" width="250" alt="" />
            </div>
            <div className="slideName">
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png" height="100" width="250" alt="" />
            </div>
            <div className="slideName">
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png" height="100" width="250" alt="" />
            </div>
            <div className="slideName">
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png" height="100" width="250" alt="" />
            </div>
        
    </div>
</div>

 

    </div> 
    );
}
 
export default Slider;