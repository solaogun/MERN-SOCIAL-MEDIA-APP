import './sidebar.css'
import { RssFeed, Chat, PlayCircleFilled, Group, Bookmark, HelpOutline, WorkOutline, Event, School } from '@material-ui/icons';
import { Users } from '../../dummyData'
import SidebarCloseFriend from '../sidebarCloseFriend/sidebarCloseFriend';

export default function sidebar() {
    return (
        <div className='sidebar'>
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <RssFeed className='sidebarIcon' />
                        <span className="sidebarListItemText">Feed</span>
                    </li>
                    <li className="sidebarListItem">
                        <Chat className='sidebarIcon' />
                        <span className="sidebarListItemText">Chats</span>
                    </li>
                    <li className="sidebarListItem">
                        <PlayCircleFilled className='sidebarIcon' />
                        <span className="sidebarListItemText">Video</span>
                    </li>
                    <li className="sidebarListItem">
                        <Group className='sidebarIcon' />
                        <span className="sidebarListItemText">Groups</span>
                    </li>
                    <li className="sidebarListItem">
                        <Bookmark className='sidebarIcon' />
                        <span className="sidebarListItemText">Bookmarks</span>
                    </li>
                    <li className="sidebarListItem">
                        <HelpOutline className='sidebarIcon' />
                        <span className="sidebarListItemText">Questions</span>
                    </li>
                    <li className="sidebarListItem">
                        <WorkOutline className='sidebarIcon' />
                        <span className="sidebarListItemText">Jobs</span>
                    </li>
                    <li className="sidebarListItem">
                        <Event className='sidebarIcon' />
                        <span className="sidebarListItemText">Events</span>
                    </li>
                    <li className="sidebarListItem">
                        <School className='sidebarIcon' />
                        <span className="sidebarListItemText">Courses</span>
                    </li>
                </ul>
                <button className="sidebarButton">Show more</button>
                <hr className='sidebarHr' />
                <ul className="sidebarFriendList">
                    {
                        Users.map(u => (
                            <SidebarCloseFriend key={u.id} user={u} />
                        ))
                    }
                    {/* <li className="sidebarFriend">
                        <img src="/assets/saidat.jpeg" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">Saidat</span>
                    </li> */}
                    {/* <li className="sidebarFriend">
                        <img src="/assets/saidat.jpeg" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">Saidat</span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="/assets/saidat.jpeg" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">Saidat</span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="/assets/saidat.jpeg" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">Saidat</span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="/assets/saidat.jpeg" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">Saidat</span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="/assets/saidat.jpeg" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">Saidat</span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="/assets/saidat.jpeg" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">Saidat</span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="/assets/saidat.jpeg" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">Saidat</span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="/assets/saidat.jpeg" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">Saidat</span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="/assets/saidat.jpeg" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">Saidat</span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="/assets/saidat.jpeg" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">Saidat</span>
                    </li> */}


                </ul>
            </div>
        </div>
    )
}
