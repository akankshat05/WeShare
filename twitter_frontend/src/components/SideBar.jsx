import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import ExplicitIcon from '@mui/icons-material/Explicit';
import NotificationsIcon from '@mui/icons-material/Notifications';
import EmailIcon from '@mui/icons-material/Email';
import HomeIcon from '@mui/icons-material/Home';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PersonIcon from '@mui/icons-material/Person';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import SideBarLayout from './SideBarLayout';
import '../Stylesheet/SideBar.css'
const SideBar = () => {
    return (
        <div className="SideBar_container">
            <div className="SideBar_HomeIcon">
            <TwitterIcon className="SideBar_Twiticon" />
            </div>
            <div className="SideBar">
                <SideBarLayout Icon={HomeIcon} text={`Home`}/>
                <SideBarLayout Icon={ExplicitIcon} text={`Explore`}/>
                <SideBarLayout Icon={NotificationsIcon} text={`Notifications`}/>
                <SideBarLayout Icon={EmailIcon} text={`Messages`}/>
                <SideBarLayout Icon={BookmarksIcon} text={`Bookmark`}/>
                <SideBarLayout Icon={ListAltIcon} text={`List`}/>
                <SideBarLayout Icon={PersonIcon} text={`Profile`}/>
                <SideBarLayout Icon={MoreHorizIcon} text={`More`}/>

            </div>
        </div>
    )
}

export default SideBar
