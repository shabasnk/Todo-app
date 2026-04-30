import '../assets/styles/login.css';
const Login = () => {

  return (
    <div style={{backgroundColor:'#0B0F0E'}} >
      <div id="navbar" style={{backgroundColor:'#0B0F0E'}} >
        <h2 style={{color:'#ADCFB1'}} >FocusList</h2>
        <h1 style={{color:'#DEE7E4', paddingRight:'80px', paddingTop:'20px'}} >Welcome back.</h1>
        <p style={{color:'#AECFB3'}} >Support</p>
      </div>

      <div style={{display:'flex', justifyContent:'center'}} ><p style={{color:'#AECFB3', margin:'0'}} >Enter the space of intentional productivity.</p></div>

      <div style={{display:'flex', height:'600px', justifyContent:'center' }} >
        <div id='login-container' >
          <input type="text" style={{width:'350px', height:'39px', backgroundColor:'#0F1413'}} />
          <input type="text" style={{width:'350px', height:'39px', backgroundColor:'#0F1413'}} />
          <button style={{width:'350px', height:'53px', backgroundColor:'#435C48', borderRadius:'30px'}} >Login</button>
          <div id="divider">
          <span></span>
          <p>OR</p>
          <span></span>
        </div>

          {/* <input type="text" style={{width:'350px', height:'45px', backgroundColor:'#0F1413', borderRadius:'30px'}} /> */}
          <button style={{width:'350px', height:'45px', backgroundColor:'#0F1413', color:'#DEE7E4' , borderRadius:'30px'}} >Continue with Google</button>


          


        </div>
      </div>

      <div>
        <div>


        </div>
      </div>
    </div>
  )
}
export default Login;