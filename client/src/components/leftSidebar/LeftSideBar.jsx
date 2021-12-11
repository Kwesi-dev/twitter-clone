import './leftSidebar.scss'
import logo from '../../images/twitter.png'
import home from '../../images/home.svg'
import explore from '../../images/explore.svg'
import message from '../../images/message.svg'
import list from '../../images/list.svg'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';import notification from '../../images/notification.svg'
import profile from '../../images/profile.svg'
import bookmark from '../../images/bookmark.svg'
import cirlceMore from '../../images/circleMore.svg'
import CheckIcon from '@mui/icons-material/Check'
import { useState } from 'react'
const LeftSideBar = () => {
    const [showPopup, setShowPopup] = useState(false)

    return (
        <div className='leftSideBar'>
            <div className="leftSidebarWrapper" >
                <div className="leftSideTop" onClick={()=>setShowPopup(false)}>
                    <div className="logoContainer">
                        <img src={logo} alt="" className="logo"/>
                    </div>
                    <div className="sidebarItems">
                        <div className="sidebarItem">
                            <img src={home} alt="" className="sidebarItemIcon" />
                            <span>Home</span>
                        </div>
                        <div className="sidebarItem">
                            <img src={explore} alt="" className="sidebarItemIcon" />
                            <span>Explore</span>
                        </div>
                        <div className="sidebarItem">
                            <img src={notification} alt="" className="sidebarItemIcon" />
                            <span>Notifications</span>
                        </div>
                        <div className="sidebarItem">
                            <img src={message} alt="" className="sidebarItemIcon" />
                            <span>Messages</span>
                        </div>
                        <div className="sidebarItem">
                            <img src={bookmark} alt="" className="sidebarItemIcon" />
                            <span>Bookmarks</span>
                        </div>
                        <div className="sidebarItem">
                            <img src={list} alt="" className="sidebarItemIcon" />
                            <span>Lists</span>
                        </div>
                        <div className="sidebarItem">
                            <img src={profile} alt="" className="sidebarItemIcon" />
                            <span>Profile</span>
                        </div>
                        <div className="sidebarItem">
                            <img src={cirlceMore} alt="" className="sidebarItemIcon" />
                            <span>More</span>
                        </div>
                        <button className="leftSidebarBtn">Tweet</button>
                    </div>
                </div>             
                <div className="leftSidebarBottom">
                    <div className="sidebarBottomProfile">
                        <img src="https://i.ibb.co/LZm6JQb/khalid.jpg" alt="" className="profileImg" />
                        <div className="profileUsernames">
                            <span>kwesi</span>
                            <span className="span2">kwesi</span>
                        </div>
                        <MoreHorizIcon className="sidebarbottomIcon" onClick={()=>setShowPopup(!showPopup)}/>
                    </div>
                    {showPopup && 
                        <div className="profilePopup">
                            <div className="popupProfile">
                                <div className="popupLeft">
                                    <img src="https://i.ibb.co/LZm6JQb/khalid.jpg" alt="" className="profileImg" />
                                    <div className="profileUsernames">
                                        <span>Kwesi Dev</span>
                                        <span className="span2">@KwesiDev</span>
                                    </div>
                                </div>
                                <CheckIcon className="checkIcon"/>
                            </div>
                            <div className="popupBottom">
                                <span>Add an existing document</span>
                                <span>Log out @KwesiDev</span>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default LeftSideBar
