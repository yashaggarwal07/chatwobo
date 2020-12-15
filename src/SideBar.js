import React from 'react';
import './SideBar.css';
import DonutLargeIcon  from "@material-ui/icons/DonutLarge";
import { Avatar, IconButton } from "@material-ui/core";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchOutlined from "@material-ui/icons/SearchOutlined";
import SideBarChat from './SideBarChat';

function SideBar(){
    return (
        <div className="sideBar">
            <div className="sidebar_header">
                <Avatar src=""/>
                <div className="sidebar_headerRight">
                    <IconButton>
                    <DonutLargeIcon />
                    </IconButton>
                    <IconButton>
                    <ChatIcon />
                    </IconButton>
                    <IconButton>
                    <MoreVertIcon />
                    </IconButton>
                </div>
            </div>
            <div className="sidebar_search">
               <div className="sidebar_searchContainer">
                   <SearchOutlined />
                   <input placeholder="Search or start new text" type="text" />
               </div>
            </div>
            <div className="sidebar_chats">
    <SideBarChat />
    <SideBarChat />
    <SideBarChat />
    <SideBarChat />               
            </div>
        </div>
    )
}

export default SideBar;