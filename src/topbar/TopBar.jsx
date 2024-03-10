import "./topbar.css"

export default function topbar() {
  return (
    <div className="top">
        <div className="topLeft">
            <i class="topIcon ri-facebook-line"></i>
            <i class="topIcon ri-twitter-x-line"></i>
            <i class="topIcon ri-instagram-line"></i>
            <i class="topIcon ri-tiktok-line"></i>
        </div>
        <div className="topCenter">
            <ul className="topList">
                <li className="topListItem">HOME</li>
                <li className="topListItem">ABOUT</li>
                <li className="topListItem">CONTACT</li>
                <li className="topListItem">WRITE</li>
                <li className="topListItem">LOGOUT</li>
            </ul>
            
        </div>
        <div className="topRigth">
            <img className="topImg" src="https://images.pexels.com/photos/948873/pexels-photo-948873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
            <i class="topSearchIcon ri-search-line"></i>
        </div>
        
    </div>
  )
}
