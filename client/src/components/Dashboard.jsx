import "../assets/styles/dashboard.css"
import UserProfile from "../assets/User profile.png"
const Dashboard = () => {
    return (
        <>
        <div  >
            <div id="second-container" >
                <div id="image-container" >
                    <img src={UserProfile} alt="User Profile" />
                    <div>
                        <h1 style={{color:'#ADCFB1', paddingLeft:'20px'}} >Julianne Doe</h1>
                        <p style={{color:'#A4ADAA', paddingTop:'-30px'}} >julianne.doe@mindfulcanvas.com</p>
                    </div>

                </div>

                <div id="sectionTwo" >
                    <div id="first-card" >
                        <p>FOCUS SCORE</p>
                        <h1>42</h1>
                        <p>Tasks Completed</p>
    
                    </div>

                    <div id="second-card" >
                        ldkdkl

                    </div>

                </div>

            </div>
            

        </div>
        </>
    )
}
export default Dashboard;