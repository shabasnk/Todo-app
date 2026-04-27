import "../assets/styles/intro-page.css"
import image1 from "../assets/Icon.png"
const IntroPage = () => {

    return(
        <>
        <div>
            <header id="header" ></header>

              <div id="image-container" >
                 <div id="image-div" >
                    <img id="intro-img" src={image1} alt="" />
                </div>
                </div>

                <div id="text-container" >
                    <h1>FocusList</h1>
                    <p>Stay focused. Get things done</p>
                </div>

        </div>
        
        </>
    )
}

export default IntroPage