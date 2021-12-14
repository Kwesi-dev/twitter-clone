import "./profile.scss"
import KeyboardBackspaceOutlinedIcon from '@mui/icons-material/KeyboardBackspaceOutlined'
import DateRangeOutlinedIcon from '@mui/icons-material/DateRangeOutlined'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined'
import AddOutlinedIcon from '@mui/icons-material/AddOutlined'
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined'
const Profile = () => {
    return (
        <div className="profile">
            <div className="profile__nav">
                <KeyboardBackspaceOutlinedIcon className="profile__nav__icon"/>
                <div className="profile__nav__item">
                    <span>KwesiDev</span>
                    <span>0 tweet</span>
                </div>
            </div>
            <div className="profile__header">
                <img src="https://i.ibb.co/LZm6JQb/khalid.jpg" alt="" className="profile__header__coverImg"/>
                <img src="https://i.ibb.co/LZm6JQb/khalid.jpg" alt="" className="profile__header__img" />
                <button>Edit profile</button>
            </div>
            <div className="profile__body">
                <div className="profile__body__userInfo">
                    <div className="profile__body__username">
                        <span>KwesiDev</span>
                        <span>@KwesiDev</span>
                    </div>
                    <div className="profile__body__about">
                        <span>I am a software developer. I am into web development</span>
                    </div>
                    <div className="profile__body__location">
                        <div className="profile__body__location__Item">
                            <DateRangeOutlinedIcon className="icon"/>
                            <span>Accra, Ghana</span>
                        </div>
                        <div className="profile__body__location__Item">
                            <LocationOnOutlinedIcon className="icon"/>
                            <span>Joined November 2021</span>
                        </div>
                    </div>
                    <div className="profile__body__followers">
                        <div className="profile__body__followers__item">
                            <span>50</span>
                            <span>Following</span>
                        </div>
                        <div className="profile__body__followers__item">
                            <span>5k</span>
                            <span>Followers</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="profile__bottom">
                <div className="profile__bottom__header">
                    <span>Topics to follow</span>
                    <span>Tweets about the Topics you follow show up in your timeline</span>
                </div>
                <div className="profile__bottom__body">
                    <div className="topics__container">
                        <div className="topic">
                            <span>Rap</span>
                            <AddOutlinedIcon className="icon"/>
                        </div>
                        <CloseOutlinedIcon className="close_icon"/>
                    </div>
                    <div className="topics__container">
                        <div className="topic">
                            <span>Hipop</span>
                            <AddOutlinedIcon className="icon"/>
                        </div>
                        <CloseOutlinedIcon className="close_icon"/>
                    </div>
                    <div className="topics__container">
                        <div className="topic">
                            <span>Afro-beat</span>
                            <AddOutlinedIcon className="icon"/>
                        </div>
                        <CloseOutlinedIcon className="close_icon"/>
                    </div>
                    <div className="topics__container">
                        <div className="topic">
                            <span>Entertainment</span>
                            <AddOutlinedIcon className="icon"/>
                        </div>
                        <CloseOutlinedIcon className="close_icon"/>
                    </div>
                    <div className="topics__container">
                        <div className="topic">
                            <span>Music</span>
                            <AddOutlinedIcon className="icon"/>
                        </div>
                        <CloseOutlinedIcon className="close_icon"/>
                    </div>
                    <div className="topics__container">
                        <div className="topic">
                            <span>Football</span>
                            <AddOutlinedIcon className="icon"/>
                        </div>
                        <CloseOutlinedIcon className="close_icon"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
