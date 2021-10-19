import './rightbar.css'
import { Users } from '../../dummyData'
import Online from '../online/online'

export default function rightbar({ user }) {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER
    const HomeRightbar = () => {
        return (
            <>
                <div className="birthdayContainer">
                    <img src="/assets/birthday/giftImg.jfif" alt="" className="birthdayImg" />
                    <span className="birthdayText"> <b> Azeez Adebule</b> and <b>3 others Fiends </b>have a birthday today</span>
                </div>
                <img src="/assets/birthday/advert.jpeg" alt="" className="rightbarAd" />
                <h4 className="rightbarTitle">Online Friends</h4>
                <ul className="rightbarFriendList">
                    {
                        Users.map((u) => (
                            <Online key={u.id} user={u} />
                        ))
                    }
                    {/* <li className="rightbarFriend">
                        <div className="rightbarProfileImgContainer">
                            <img src="/assets/birthday/azbirthday.jpeg" alt="" className="rightbarProfileImg" />
                            <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightbarUsername">Kolade Adebule</span>
                    </li> */}
                    {/* <li className="rightbarFriend">
                        <div className="rightbarProfileImgContainer">
                            <img src="/assets/birthday/azbirthday.jpeg" alt="" className="rightbarProfileImg" />
                            <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightbarUsername">Kolade Adebule</span>
                    </li>
                    <li className="rightbarFriend">
                        <div className="rightbarProfileImgContainer">
                            <img src="/assets/birthday/azbirthday.jpeg" alt="" className="rightbarProfileImg" />
                            <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightbarUsername">Kolade Adebule</span>
                    </li>
                    <li className="rightbarFriend">
                        <div className="rightbarProfileImgContainer">
                            <img src="/assets/birthday/azbirthday.jpeg" alt="" className="rightbarProfileImg" />
                            <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightbarUsername">Kolade Adebule</span>
                    </li>
                    <li className="rightbarFriend">
                        <div className="rightbarProfileImgContainer">
                            <img src="/assets/birthday/azbirthday.jpeg" alt="" className="rightbarProfileImg" />
                            <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightbarUsername">Kolade Adebule</span>
                    </li>
                    <li className="rightbarFriend">
                        <div className="rightbarProfileImgContainer">
                            <img src="/assets/birthday/azbirthday.jpeg" alt="" className="rightbarProfileImg" />
                            <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightbarUsername">Kolade Adebule</span>
                    </li> */}
                </ul>
            </>
        )
    }

    const ProfileRightbar = () => {
        return (
            <>
                <h4 className='rightbarTitle'>User Information</h4>
                <div className="rightbarInfo">
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">City:</span>
                        <span className="rightbarInfoValue">{user.city}</span>
                        {/* <span className="rightbarInfoValue">NewYork</span> */}
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">From:</span>
                        {/* <span className="rightbarInfoValue">Madrid</span> */}
                        <span className="rightbarInfoValue">{user.from}</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">Reationship:</span>
                        <span className="rightbarInfoValue">{user.relationship === 1 ? "Single" : user.relationship === 1 ? "Married" : "."}</span>
                    </div>

                </div>
                <h4 className='rightbarTitle'>User Friends</h4>
                <div className="rightbarFollowings">
                    <div className="rightbarFollowing">
                        <img src={`${PF}person/1p.jpeg`} alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">Tiana Anderson</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src={`${PF}person/2p.jpeg`} alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">Tiana Anderson</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src={`${PF}person/3p.jpeg`} alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">Tiana Anderson</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src={`${PF}person/5p.jpeg`} alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">Tiana Anderson</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src={`${PF}person/6p.jpeg`} alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">Tiana Anderson</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src={`${PF}person/7p.jpeg`} alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">Tiana Anderson</span>
                    </div>
                </div>
            </>
        )
    }
    return (
        <div className='rightbar'>
            <div className="rightbarWrapper">
                {/* {profile ? <ProfileRightbar /> : <HomeRightbar />} */}
                {user ? <ProfileRightbar /> : <HomeRightbar />}
            </div>
        </div>
    )
}
