import React from 'react'
import SideBar from './SideBar'
import HomeFeed from './HomeFeed'
import Trends from './Trends'
import '../Stylesheet/Home.css'
const Home = () => {
    return (
        <div className="Home_container">
            <SideBar />
            <HomeFeed />
            <Trends />     
        </div>
    )
}

export default Home
