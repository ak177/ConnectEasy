import React, { useState } from "react";
import "./SideBar.css";
import Avatar from "@mui/material/Avatar";
import LoginIcon from '@mui/icons-material/Login';

import ChatIcon from "@mui/icons-material/Chat";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import { SearchOutlined } from "@mui/icons-material";
import SideBarChat from "./SideBarChat";
import LoginForm from "../../LoginForm";
function SideBar({messages}) {
  // console.log(messages);


const key = 'name';

const room_name = [...new Map(messages.map(item =>
  [item[key], item])).values()];


  const [number,setNumber]= useState(1);




 
  // const handleClick=()=>{
  //   handleLoginClick();
   
  // }
// console.log(room_name);
//  console.log(room_name.length)
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar />
        <div className="sidebar__headerRight">
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <DonutLargeIcon />
          </IconButton>

          <IconButton>
          <LoginIcon />
         
          </IconButton>
        </div>
      </div>
      <div className="sidebar__search">
        <div className="sidebar__searchContainer">
          <SearchOutlined />
          <input placeholder="Search or start a new Chat" type="text"/>
        </div>
      </div>

      
      <div className="sidebar__chats">

        {room_name.map((name)=>{
          return (
            
            <SideBarChat naam={name.name} num={room_name.findIndex((obj)=>{
              return(obj.name===name.name)

            })} />
          )

        })}

        {/* <SideBarChat/>
        <SideBarChat/>
        <SideBarChat/>
        <SideBarChat/> */}

      </div>
    </div>
  );
}

export default SideBar;
