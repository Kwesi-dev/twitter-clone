import "./home.scss"
import homeNav from "../../images/homeNav.svg"
import emoji from "../../images/emoji.svg"
import media from "../../images/media.svg"
import poll from "../../images/poll.svg"
import schedule from "../../images/schedule.svg"
import gif from "../../images/gif.svg"
import Post from "../../components/post/Post"
import {posts} from '../../dummyData'
import { useContext, useState } from "react"
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined'
import { UserContext } from "../../userContext/userContext"
const Home = () => {
    const [toPostImg, setToPostImg] = useState("")
    const { user } = useContext(UserContext)
    return (
        <div className="home"> 
            <div className="wrapper">
                <div className="home__nav">
                    <span>Home</span>
                    <img src={homeNav} alt="" />
                </div>
                <div className="home__header">
                    <div className="home__header__top">
                        <img src={user.profilePic} alt="" />
                        <input type="text" placeholder="What's happening?"/>
                    </div>
                    {toPostImg && 
                        <>
                            <CloseOutlinedIcon className="closeIcon" onClick={()=>setToPostImg("")}/>
                            <span className="remove">remove</span>
                            <img src="https://i.ibb.co/kcpbcqd/goalIcon.jpg" alt="" className="toPostImg"/>
                        </>
                    }
                    <div className="home__header__bottom">
                        <div className="icons">
                            <div className="icon__container">
                                <label htmlFor="file">
                                    <img src={media} alt="" />
                                </label>
                                <input type="file" id="file" style={{display: "none"}} onChange={e=>setToPostImg(e.target.files[0])}/>
                            </div>
                            <img src={gif} alt="" />
                            <img src={poll} alt="" />
                            <img src={emoji} alt="" />
                            <img src={schedule} alt="" />
                        </div>
                        <button>Tweet</button>
                    </div>
                </div>
                {posts.map(post=>
                    <Post key={post.id} post={post}/>
                )}
            </div>
        </div>
    )
}

export default Home
