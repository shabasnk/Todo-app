import "../assets/styles/sidebar.css"

const Sidebar = () => {
    return(
        <>
        <div id="sidebar" >
            <div id="sidebar-top" >
                <h2 style={{color:'#748E78'}} >FocusList</h2>
                <p style={{color:'#A4ADAA'}} >Stay present.</p>
            </div>

            <div id="sidebar-menu" >
                <div id="menu-item" >Tasks</div>
                <div id="menu-item" >Focus Times</div>
                <div id="menu-item active" >settings</div>

            </div>

            <div id="sidebar-bottom" >
                <button>+ New Task</button>

            </div>


        </div>
        </>
    )
}

export default Sidebar;