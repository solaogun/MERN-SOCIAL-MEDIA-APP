import React, { useState, useEffect, useContext } from 'react'
import './feed.css'
import Share from '../share/share'
import Post from '../post/post'
import axios from 'axios'
import { AuthContext } from '../../context/AuthContext'
// import { Posts } from '../../dummyData'

function Feed({ username }) {
    const [posts, setPosts] = useState([])
    const { user } = useContext(AuthContext)
    // const [text, setText] = useState()
    useEffect(() => {
        const fetchPosts = async () => {
            const res = username
                ? await axios.get("http://localhost:8800/api/posts/profile/" + username)
                // : await axios.get("http://localhost:8800/api/posts/timeline/all?userId=614f6e505bbcb31e824519fe",
                : await axios.get("http://localhost:8800/api/posts/timeline/all?userId=" + user._id,
                    {
                        mode: "same-origin"
                    })
            setPosts(res.data.sort((p1, p2) => {
                return new Date(p2.createdAt) - new Date(p1.createdAt)
            }))
        }
        fetchPosts()
        // console.log("feed rendered")
    }, [username, user._id])

    return (
        <div className='feed'>
            {/* <input text="text" onChange={(e) => setText(e.target.value)} /> */}
            <div className="feedWrapper">
                <Share />
                {
                    posts.map((p) => (
                        <Post key={p.id} post={p} />
                    ))
                }
            </div>
        </div>
    )
}

export default Feed