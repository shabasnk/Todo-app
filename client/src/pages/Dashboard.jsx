import "../assets/styles/dashboard.css"
import UserProfile from "../assets/User profile.png"
const Dashboard = () => {
    return (
        <>
        <div  >
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
                    <div><p style={{color:'#A4ADAA'}} >PREFERENCES</p></div>
                    <div></div>

                </div>

            </div>
            

        </div>
        </>
    )
}
export default Dashboard;