import React from 'react'
import './Home.css'
import {Link } from 'react-router-dom'
import AppsIcon from '@material-ui/icons/Apps'
import { Avatar } from '@material-ui/core'
import Search from './Search'

function Home() {
    return (
        <div className="home">
            <div className="home__header">
               <div className="hoem__headerLeft">
                   <Link to="/about">About</Link>
                   <Link to="/store">Store</Link>
                    
               </div>
               <div className="home__headerRight">
               <Link to="/gmail">About</Link>
               <Link to="/images">Images</Link>
               <AppsIcon/>
               <Avatar src="https://lh3.googleusercontent.com/ogw/ADGmqu9ZYM15nYn99DzkLUIXT8Y6SJlBIHErIuVAiR5N=s32-c-mo"/>
                   
               </div>
            </div>
            <div className="home__body">
               <img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"/>
              <div className="home__inputContainer">
                  <Search hideButtons/>
              </div>
            </div>
        </div>
    )
}

export default Home
