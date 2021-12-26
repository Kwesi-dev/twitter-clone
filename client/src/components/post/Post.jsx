import './post.scss'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined'
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined'
import RepeatOutlinedIcon from '@mui/icons-material/RepeatOutlined'
import { useEffect, useState } from 'react'
import { axiosInstance } from '../../requests'
const Post = ({post})=>{
    const [postUser, setPostUser] = useState("")
    useEffect(()=>{
        const fetchUser = async()=>{
            try{
                const res = await axiosInstance.get(`/users/${post.userId}`)
                setPostUser(res.data)
            }catch(err){}
        }
        fetchUser()
    })
    const PF = "http://localhost:5000/images/"
    return(
        <div className="post">
            <div className="post__head">
                <img src={postUser.profilePic} alt="" />
                <span>{postUser.username}</span>
                <span>{postUser.username}</span>
                <span>18h</span>
            </div>
            <div className="post__body">
                <p>{post.postInfo}</p>
                <img src={PF + post.image}alt="" />
            </div>
            <div className="post__footer">
                <div className="post__footer__item">
                    <ModeCommentOutlinedIcon className="post__footer__icon"/>
                    <span>163</span>
                </div>
                <div className="post__footer__item">
                    <RepeatOutlinedIcon className="post__footer__icon"/>
                    <span>16k</span>
                </div>
                <div className="post__footer__item">
                    <FavoriteBorderIcon className="post__footer__icon"/>
                    <span>1k</span>
                </div>
                <div className="post__footer__item">
                    <FileUploadOutlinedIcon className="post__footer__icon"/>
                </div>
            </div>
        </div>
    )
}

export default Post

