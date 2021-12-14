import "./profile.scss"
import KeyboardBackspaceOutlinedIcon from '@mui/icons-material/KeyboardBackspaceOutlined'
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
        </div>
    )
}

export default Profile
