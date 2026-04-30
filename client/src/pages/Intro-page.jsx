import "../assets/styles/intro-page.css"
import image1 from "../assets/Icon.png"
const IntroPage = () => {

    return(
        <>
        <div style={{height:'720px'}} >
            <header id="header" ></header>

              <div id="image-container" >
                 <div id="image-div" >
                    <img id="intro-img" src={image1} alt="" />
                </div>
                </div>

                <div id="text-container" >
                    <h1 style={{color:'#DEE7E4'}} >FocusList</h1>
                    <p style={{color:'#A4ADAA'}} >Stay focused. Get things done</p>
                </div>

                <div id="last-section" >
                    <button id="lastSection-button" >Get Started</button>
                    <a href="" style={{color:'#DEE7E4'}} >Login</a>
                </div>

        </div>
        
        </>
    )
}

export default IntroPage