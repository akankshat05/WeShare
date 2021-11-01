
import React from 'react'
import '../Stylesheet/SideBarLayout.css'
const SideBarLayout = ({Icon, text}) => {
    return (
        <div className="SideBar_Layout">
            <Icon />
            <h4 className="SideBar_LayoutText">{text}</h4>
        </div>
    )
}

export default SideBarLayout
