import "./home.scss"
import homeNav from "../../images/homeNav.svg"
import emoji from "../../images/emoji.svg"
import media from "../../images/media.svg"
import poll from "../../images/poll.svg"
import schedule from "../../images/schedule.svg"
import gif from "../../images/gif.svg"
import Post from "../../components/post/Post"
import { useContext, useEffect, useState } from "react"
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined'
import { UserContext } from "../../userContext/userContext"
import {axiosInstance} from '../../requests'
const Home = () => {
    const [file, setFile] = useState("")
    const [desc, setDesc] = useState("")
    const [posts, setPosts] = useState([])
    const { user } = useContext(UserContext)
    const userId = user._id

    const handlePost = async (e)=>{
        e.preventDefault()
        const newPost = {
            userId: userId,
            postInfo: desc,
        }
        if(file){
            const data = new FormData()
            const filename = Date.now() + file.name
            data.append("name", filename)
            data.append("file", file)
            newPost.image = filename
            try{
                await axiosInstance.post("/upload", data)
            }catch(err){}
        }
        try{
            await axiosInstance.post("/posts", newPost, { headers:{
                token:`Bearer ${user.accessToken}`
            }})
        }catch(err){}
        setFile("")
        setDesc("")
    }
    useEffect(()=>{
        const getPosts = async()=>{
            try{
                const res = await axiosInstance.get("/posts", { headers:{
                    token:`Bearer ${user.accessToken}`
                }})
                setPosts(res.data)
            }catch(err){}
        }
        getPosts()
    },[user])

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
                        <textarea type="text" placeholder="What's happening?" onChange={e=>setDesc(e.target.value)}/>
                    </div>
                    {file && 
                        <>
                            <CloseOutlinedIcon className="closeIcon" onClick={()=>setFile("")}/>
                            <span className="remove">remove</span>
                            <img src={URL.createObjectURL(file)} alt="" className="toPostImg"/>
                        </>
                    }
                    <div className="home__header__bottom">
                        <div className="icons">
                            <div className="icon__container">
                                <label htmlFor="file">
                                    <img src={media} alt="" />
                                </label>
                                <input type="file" id="file" name="file" style={{display: "none"}} onChange={e=>setFile(e.target.files[0])}/>
                            </div>
                            <img src={gif} alt="" />
                            <img src={poll} alt="" />
                            <img src={emoji} alt="" />
                            <img src={schedule} alt="" />
                        </div>
                        <button onClick={handlePost}>Tweet</button>
                    </div>
                </div>
                {posts.map(post=>
                    <Post key={post._id} post={post}/>
                )}
            </div>
        </div>
    )
}

export default Home
