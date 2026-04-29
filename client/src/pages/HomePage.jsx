import "../assets/styles/homePage.css"
import UserProfile from "../assets/User profile.png"
import { MdOutlineDarkMode } from "react-icons/md";
import { LuBellRing } from "react-icons/lu";
import { FaToggleOff } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { FiLogOut } from "react-icons/fi";







const HomePage = () => {

    return (
        <>
        <div style={{backgroundColor:'#0B0F0E'}} >
            <div id="second-container" style={{backgroundColor:'#0B0F0E'}} >
                <div id="image-container" >
                    <img src={UserProfile} alt="User Profile" />
                    <div>
                        <h1 style={{color:'#ADCFB1', paddingLeft:'20px'}} >Julianne Doe</h1>
                        <p style={{color:'#A4ADAA', paddingTop:'-30px'}} >julianne.doe@mindfulcanvas.com</p>
                    </div>

                </div>

                <div id="sectionTwo" >
                    <div id="first-card" >
                        < p style={{margin:'0',color:'#A4ADAA'}} >FOCUS SCORE</p>
                        <div id="fristCard-section" >
                        <h1 style={{margin:'15px', marginRight:'6px',marginLeft:'0px', color:'#ADCFB1' }} >42</h1>
                        <p style={{paddingTop:'29px',margin:'0', color:'#A4ADAA' }} >Tasks Completed</p>
                        </div>
    
                    </div>

                    <div id="second-card" >
                        <p style={{color:'#294730', margin:'12px', marginLeft:'0'}} >ACTIVE STREAK</p>
                        <div id="secondCard-section" >
                            <h1 style={{margin:'0'}} >12</h1>
                            <p style={{color:'#294730', paddingTop:'15px', margin:'0'}} >Days in Focus</p>
                        </div>

                    </div>

                </div>

                <div id="sectionThree" >
                    <div id="sectionThree-preference" ><p style={{color:'#A4ADAA', paddingTop:'10px', paddingLeft:'30px'}} >PREFERENCES</p></div>
                    <div>
                        <div id="sectionThree-firstToggle" >
                            <div style={{color:'#DEE7E4', paddingLeft:'25px',width:'900px', display:'flex', gap:'10px' }} > <p>{<MdOutlineDarkMode />}</p> <p>Dark Mode</p></div>
                            <div style={{ color:'white', width:'100px', marginRight:'20px'}} ><p>{<FaToggleOff/>}</p></div>
                        </div>

                        <div id="sectionThree-secondToggle" >
                            <div style={{color:'#DEE7E4', paddingLeft:'25px',width:'900px', display:'flex', gap:'10px' }} > <p>{<LuBellRing />}</p> <p>Focus Reminders</p></div>
                            <div style={{ color:'white', width:'100px', marginRight:'20px'}} >{<FaToggleOff/>}</div>
                        </div>

                        {/* <div>;<p style={{color:'#DEE7E4'}} > {<LuBellRing />} Focus Reminders</p></div> */}
                    </div>

                </div>

                <div id="sectionFour" >
                    <div id="sectionFour-preference" ><p style={{color:'#A4ADAA', paddingTop:'10px', paddingLeft:'30px'}} >ACCOUNT</p></div>
                    <div>
                        <div id="sectionFour-arrow" >
                            <div style={{color:'#DEE7E4', paddingLeft:'25px',width:'1000px', display:'flex', gap:'10px' }} > <p>{<MdEmail />}</p> <p  >Change Email</p></div>
                            <div style={{ color:'white', width:'100px', marginRight:'80px'}} ><p>{<IoIosArrowForward/>}</p></div>
                        </div>

                        <div id="sectionFour-arrow" >
                            <div style={{color:'#DEE7E4', paddingLeft:'25px',width:'900px', display:'flex', gap:'10px' }} > <p>{<FaLock />}</p> <p>Security</p></div>
                            <div style={{ color:'white', width:'100px', marginRight:'80px'}} >{<IoIosArrowForward/>}</div>
                        </div>

                        <div id="sectionFour-Logout" >
                            <div style={{color:'#FA746F', paddingLeft:'25px',width:'900px', display:'flex', gap:'10px' }} > <p>{<FiLogOut/>}</p> <p>Logout</p></div>
                        </div>

                        {/* <div>;<p style={{color:'#DEE7E4'}} > {<LuBellRing />} Focus Reminders</p></div> */}
                    </div>

                </div>

            </div>
            

        </div>
        </>
    )
}
export default HomePage;