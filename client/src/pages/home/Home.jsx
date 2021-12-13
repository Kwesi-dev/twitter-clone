import "./home.scss"
import homeNav from "../../images/homeNav.svg"
import emoji from "../../images/emoji.svg"
import media from "../../images/media.svg"
import poll from "../../images/poll.svg"
import schedule from "../../images/schedule.svg"
import gif from "../../images/gif.svg"
import Post from "../../components/post/Post"
import {posts} from '../../dummyData'
const Home = () => {
    return (
        <div className="home"> 
            <div className="wrapper">
                <div className="home__nav">
                    <span>Home</span>
                    <img src={homeNav} alt="" />
                </div>
                <div className="home__header">
                    <div className="home__header__top">
                        <img src="https://i.ibb.co/LZm6JQb/khalid.jpg" alt="" />
                        <input type="text" placeholder="What's happening"/>
                    </div>
                    <div className="home__header__bottom">
                        <div className="icons">
                            <img src={media} alt="" />
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
