import './post.scss'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined'
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined'
import RepeatOutlinedIcon from '@mui/icons-material/RepeatOutlined'
const Post = ({post})=>{
    return(
        <div className="post">
            <div className="post__head">
                <img src={post.profileImg} alt="" />
                <span>GOAL.com</span>
                <span>@goal.com .</span>
                <span>18h</span>
            </div>
            <div className="post__body">
                <p>{post.postDesc}</p>
                <img src={post.postImg}alt="" />
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

