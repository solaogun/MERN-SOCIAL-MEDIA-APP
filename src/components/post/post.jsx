import './post.css';
import { MoreVert, ThumbUpAlt, Favorite } from '@material-ui/icons';
import { Users } from '../../dummyData'
import { useEffect, useState, useContext } from "react";
import axios from 'axios'
import { format, render, cancel, register } from 'timeago.js';
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'


export default function Post({ post }) {
    const [like, setLike] = useState(post.likes.length)
    const [isLiked, setIsLiked] = useState(false)
    const [user, setUser] = useState({})
    console.log(process.env.REACT_APP_PUBLIC_FOLDER, 'hello')
    const PF = process.env.REACT_APP_PUBLIC_FOLDER
    const { user: currentUser } = useContext(AuthContext)

    useEffect(() => {
        setIsLiked(post.likes.includes(currentUser._id))
    }, [currentUser._id], post.likes)

    useEffect(() => {
        const fetchUser = async () => {
            console.log("page loading")
            const res = await axios.get(`/users?userId=${post.userId}`)
            setUser(res.data)

        }
        fetchUser()
        // console.log("feed rendered")
    }, [post.userId])


    const likeHandler = () => {
        try {
            axios.put("/posts/" + post._id + "/like", { userId: currentUser._id })
        } catch (err) {
            console.log(err)
        }
        setLike(isLiked ? like - 1 : like + 1)
        setIsLiked(!isLiked)
    }
    return (
        <div className='post'>
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <Link to={`profile/${user.username}`}>
                            <img className='postProfileImg' src={user.profilePicture ? PF + user.profilePicture : PF + "/person/noAvatar.png"}
                                // {Users.filter((u) => u.id === post?.userId)[0].profilePicture} 
                                alt="" />
                        </Link>
                        <span className='postUsername'>
                            {user.username}
                            {/* {Users.filter((u) => u.id === post?.userId)[0].username} */}
                        </span>
                        <span className='postDate'> {format(post.createdAt)}</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert className />
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText"> {post?.desc}</span>
                    <img className='postImg' src={PF + post.photo} alt="" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <ThumbUpAlt className='likeIcon' onClick={likeHandler} />
                        <Favorite className='likeIcon' onClick={likeHandler} />
                        <span className="postLikeCounter"> {like} people like it</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">{post.comment} Comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
