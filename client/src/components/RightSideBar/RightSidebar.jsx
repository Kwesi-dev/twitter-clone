import './rightSidebar.scss'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined'
const RightSidebar = () => {
    return (
        <div className="rightSidebar">
            <div className="searchBar">
                <SearchOutlinedIcon className="searchIcon"/>
                <input type="text" placeholder="search Twitter"/>
            </div>
            <div className="trendsWidget">
                <div className="widgetItemHeader">
                    <span className="widgetHeader">
                        Trends for you
                    </span>
                    <SettingsOutlinedIcon className="widgetIcon"/>
                </div>
                <div className="widgetItemItem">
                    <div className="widgetTitle">
                        <span>Treding in ghana</span>
                        <span className="span2">Yaw Tog</span>
                        <span>2,344 Tweets</span>
                    </div>
                    <MoreHorizOutlinedIcon className="widgetIcon"/>
                </div>
                <div className="widgetItemItem">
                    <div className="widgetTitle">
                        <span>Treding in ghana</span>
                        <span className="span2">Yaw Tog</span>
                        <span>2,344 Tweets</span>
                    </div>
                    <MoreHorizOutlinedIcon className="widgetIcon"/>
                </div>
                <div className="widgetItemItem">
                    <div className="widgetTitle">
                        <span>Treding in ghana</span>
                        <span className="span2">Yaw Tog</span>
                        <span>2,344 Tweets</span>
                    </div>
                    <MoreHorizOutlinedIcon className="widgetIcon"/>
                </div>
                <div className="widgetItemItem">
                    <div className="widgetTitle">
                        <span>Treding in ghana</span>
                        <span className="span2">Yaw Tog</span>
                        <span>2,344 Tweets</span>
                    </div>
                    <MoreHorizOutlinedIcon className="widgetIcon"/>
                </div>
                <div className="widgetItemItem">
                    <div className="widgetTitle">
                        <span>Treding in ghana</span>
                        <span className="span2">Yaw Tog</span>
                        <span>2,344 Tweets</span>
                    </div>
                    <MoreHorizOutlinedIcon className="widgetIcon"/>
                </div>
                <div className="widgetItemItem">
                    <div className="widgetTitle">
                        <span>Treding in ghana</span>
                        <span className="span2">Yaw Tog</span>
                        <span>2,344 Tweets</span>
                    </div>
                    <MoreHorizOutlinedIcon className="widgetIcon"/>
                </div>
                <div className="widgetItemItem">
                    <div className="widgetTitle">
                        <span>Treding in ghana</span>
                        <span className="span2">Yaw Tog</span>
                        <span>2,344 Tweets</span>
                    </div>
                    <MoreHorizOutlinedIcon className="widgetIcon"/>
                </div>
                <div className="widgetItemItem">
                    <span className="more">See more</span>
                </div>
            </div>
            <div className="followWidget">
                <span className="followWidgetHeader">Who to follow</span>
                <div className="followWidgetItem">
                    <img src="https://i.ibb.co/YPVYBGZ/fcb.png" alt="" className="widgetProfilePic" />
                    <div className="widgetProfileNames">
                        <span className="supName">Fc Barcelona</span>
                        <span className="subName">@FCB</span>
                    </div>
                    <button className="followbtn">follow</button>
                    <div className="followWidgetPopup">
                    <div className="popupTop">
                        <div className="fwpProfile">
                            <img src="https://i.ibb.co/YPVYBGZ/fcb.png" alt="" />
                            <span className="pSupName">Fc Barcelona</span>
                            <span className="pSubName">@FCB</span>
                        </div>
                        <button className="popupfollowbtn">follow</button>
                    </div>
                    <p className="popupInfo">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi, amet dolore. Fugit quod aspernatur itaque repudiandae tempora vitae et sapiente.</p>
                    <div className="followingContainer">
                        <div className="followingItem">
                            <span style={{fontWeight: "bold"}}>1.8M</span>
                            <span className="following">following</span>
                        </div>
                        <div className="followingItem">
                            <span style={{fontWeight: "bold"}}>10.8M</span>
                            <span className="following">followers</span>
                        </div>
                    </div>
                    <span className="popupfooter">Not followed by anyone you are following</span>
                </div>
                </div>
                <div className="followWidgetItem">
                    <img src="https://i.ibb.co/YPVYBGZ/fcb.png" alt="" className="widgetProfilePic" />
                    <div className="widgetProfileNames">
                        <span className="supName">Fc Barcelona</span>
                        <span className="subName">@FCB</span>
                    </div>
                    <button className="followbtn">follow</button>
                    <div className="followWidgetPopup">
                    <div className="popupTop">
                        <div className="fwpProfile">
                            <img src="https://i.ibb.co/YPVYBGZ/fcb.png" alt="" />
                            <span className="pSupName">Fc Barcelona</span>
                            <span className="pSubName">@FCB</span>
                        </div>
                        <button className="popupfollowbtn">follow</button>
                    </div>
                    <p className="popupInfo">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi, amet dolore. Fugit quod aspernatur itaque repudiandae tempora vitae et sapiente.</p>
                    <div className="followingContainer">
                        <div className="followingItem">
                            <span style={{fontWeight: "bold"}}>1.8M</span>
                            <span className="following">following</span>
                        </div>
                        <div className="followingItem">
                            <span style={{fontWeight: "bold"}}>10.8M</span>
                            <span className="following">followers</span>
                        </div>
                    </div>
                    <span className="popupfooter">Not followed by anyone you are following</span>
                </div>
                </div>
                <div className="followWidgetItem">
                    <img src="https://i.ibb.co/YPVYBGZ/fcb.png" alt="" className="widgetProfilePic" />
                    <div className="widgetProfileNames">
                        <span className="supName">Fc Barcelona</span>
                        <span className="subName">@FCB</span>
                    </div>
                    <button className="followbtn">follow</button>
                    <div className="followWidgetPopup">
                    <div className="popupTop">
                        <div className="fwpProfile">
                            <img src="https://i.ibb.co/YPVYBGZ/fcb.png" alt="" />
                            <span className="pSupName">Fc Barcelona</span>
                            <span className="pSubName">@FCB</span>
                        </div>
                        <button className="popupfollowbtn">follow</button>
                    </div>
                    <p className="popupInfo">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi, amet dolore. Fugit quod aspernatur itaque repudiandae tempora vitae et sapiente.</p>
                    <div className="followingContainer">
                        <div className="followingItem">
                            <span style={{fontWeight: "bold"}}>1.8M</span>
                            <span className="following">following</span>
                        </div>
                        <div className="followingItem">
                            <span style={{fontWeight: "bold"}}>10.8M</span>
                            <span className="following">followers</span>
                        </div>
                    </div>
                    <span className="popupfooter">Not followed by anyone you are following</span>
                </div>
                </div>
                <div className="followWidgetItem">
                    <span className="more">See more</span>
                </div>
            </div>
           
                <div className="rightFooter">
                    <ul>
                        <li>Terms of Service</li>
                        <li>Privacy Policy</li>
                        <li>Cookie Policy</li>
                        <li>Adds info</li>
                        <li>more ... </li>
                        <li>&copy; 2021 Twitter, Inc</li>
                    </ul>
                </div>
        </div>
    )
}

export default RightSidebar
