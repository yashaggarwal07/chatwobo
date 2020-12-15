import React from 'react'
import "./SideBarChat.css";
import { Avatar } from '@material-ui/core';

function SideBarChat() {
    return (
        <div className="sidebarChat">
            <Avatar />
            <div className="sidebarChat_Info">
                <h2>Room Name</h2>
                <p>this is the last message</p>
            </div>
        </div>
    )
}

export default SideBarChat
