import "./sidebar.css"

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src="https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="" className="imageAbout"
        />
        <p>
          Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit
          amet ex esse.Sunt eu ut nostrud id quis proident.
        </p>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">CATEGORIES</span>
            <ul className="sidebarList">
                <li className="sidebarListItem">
                    Life
                </li>
                <li className="sidebarListItem">
                    Music          
                </li>
                <li className="sidebarListItem">
                    Sport          
                </li>
                <li className="sidebarListItem">
                    Style
            
                </li>
                <li className="sidebarListItem">
                    Tech           
                </li>
                <li className="sidebarListItem">
                    Cinema           
                </li>
            </ul>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">FOLLOW US</span>
            <div className="sidebarSocial">
            <i class="sidebarIcon ri-facebook-line"></i>
            <i class="sidebarIcon ri-twitter-x-line"></i>
            <i class="sidebarIcon ri-instagram-line"></i>
            <i class="sidebarIcon ri-tiktok-line"></i>
            </div>
        </div>
    </div>
  )
}
