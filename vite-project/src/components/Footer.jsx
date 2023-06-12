import React from 'react'
import "./Footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faLinkedinIn} from '@fortawesome/free-brands-svg-icons'
function Footer() {
  return (
    <div className='footer'>
      <img src="./img/Frame6.svg" alt="" />
      <p className='vl'></p>
      <div>
      <div id="span_box_footer">
            <span>Home</span>
            <span>About Product</span>
            <span>About Us</span>
            <span>Contact</span>
        </div>
        <div className='copyright'>
                <span>Copyright</span>
                <span>c</span>
                <span>Privacy and Policy</span>
                <span>Talent Score</span>
        </div>
        </div>
        <div style={{width: "122px", height: "30px", display: "flex", justifyContent:"space-between"}}>
        <FontAwesomeIcon icon={faFacebookF} style={{color: "#9da2aa", fontSize: "24px"}} />
        <FontAwesomeIcon icon={faInstagram} style={{color: "#9da2aa", fontSize: "24px"}} />
        <FontAwesomeIcon icon={faLinkedinIn} style={{color: "#9da2aa", fontSize: "24px"}} />
        </div>
       
    </div>
  )
}

export default Footer
