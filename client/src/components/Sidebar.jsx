import "../assets/styles/sidebar.css"
import { MdOutlineTaskAlt } from "react-icons/md";
import { MdOutlineTimer } from "react-icons/md";
import { IoIosSettings } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";





const Sidebar = () => {
    return(
        <>
        <div id="sidebar" >
            <div id="sidebar-top" >
                <h2 style={{color:'#748E78',}} >FocusList</h2>
                <p style={{color:'#A4ADAA'}} >Stay present.</p>
            </div>

            <div id="sidebar-menu" >
                <div id="menu-item" style={{color:'#ADB3B2', paddingRight:'50px'}} > {<MdOutlineTaskAlt />} Tasks</div>
                <div id="menu-item" style={{color:'#ADB3B2'}} > {<MdOutlineTimer />} Focus Times</div>
                <div id="menu-item active" style={{color:'#ADB3B2', paddingRight:'40px'}} >  {<IoIosSettings/>} settings</div>

            </div>

            <div id="sidebar-bottom" >
                <button> {<FaPlus />} New Task</button>

            </div>


        </div>
        </>
    )
}

export default Sidebar;