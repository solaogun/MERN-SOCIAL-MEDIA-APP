import './profile.css'
import React from 'react'
import Topbar from './../../components/topbar/topbar';
import Sidebar from './../../components/sidebar/sidebar'
import Feed from './../../components/feed/feed'
import Rightbar from './../../components/rightbar/rightbar'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router'

export default function Profile() {
    const [user, setUser] = useState({})
    const PF = process.env.REACT_APP_PUBLIC_FOLDER
    const username = useParams().username
    // console.log(params.username)

    useEffect(() => {
        const fetchUser = async () => {
            const res = await axios.get(`/users?username=${username}`)
            setUser(res.data)
        }
        fetchUser()
    }, [username])
    return (
        <>
            <Topbar />

            <div className='profile'>
                <Sidebar />
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
                            <img src={user.coverPicture ? PF + user.coverPicture : PF + "person/noCover.png"} alt="" className="profileCoverImg" />
                            <img src={user.profilePicture !== "" ? PF + user.profilePicture : PF + "person/noAvatar.png"} alt="" className="profileUserImg" />
                        </div>
                        <div className="profileInfo">
                            <h4 className='profileInfoName'>{user.username}</h4>
                            <span className="profileInfoDesc">{user.desc}</span>
                        </div>
                    </div>
                    <div className="profileRightBottom">
                        <Feed username={username} />
                        {/* <Feed username="datong" /> */}
                        <Rightbar user={user} />
                        {/* <Rightbar profile /> */}
                    </div>
                </div>
            </div>

        </>
    )
}
