import React, { useState } from 'react'
import './Chat.css';
import { Avatar, IconButton } from "@material-ui/core";
import { AttachFile,SearchOutlined,MoreVert } from '@material-ui/icons';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import MicIcon from '@material-ui/icons/Mic';
import RoomIcon from '@material-ui/icons/Room';
import { GoogleComponent } from 'react-google-location' 

const API_KEY = "AIzaSyB2il7Erv3XfJuLfROmhYwFrKin6jPnj_0";
function Chat() {
     const [show, showmileage] = useState(false);
     const [showform,setform] = useState(false);
     const [place,setState] = useState(null);
     function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
        var R = 6371; // Radius of the earth in km
        var dLat = deg2rad(lat2-lat1);  // deg2rad below
        var dLon = deg2rad(lon2-lon1); 
        var a = 
          Math.sin(dLat/2) * Math.sin(dLat/2) +
          Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
          Math.sin(dLon/2) * Math.sin(dLon/2)
          ; 
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
        var d = R * c; // Distance in km
        return d;
      }
      
      function deg2rad(deg) {
        return deg * (Math.PI/180)
      }
   
    return (
        <div className="chat">
          <div className="chat_Header">
              <Avatar />
              <div className="chat_headerInfo">
                  <h3>Room Name</h3>
                  <p>Last seen at...</p>
              </div>
              <div className="chat_headerRight">
                  <IconButton>
                      <SearchOutlined />
                  </IconButton>
                  <IconButton>
                      <AttachFile />
                  </IconButton>
                  <IconButton>
                      <MoreVert />
                  </IconButton>
              </div>
          </div>
          <div className="chat_body">
           
              <p 
              className="chat_message"
              >
                  <span className="chat_name">Yash
                  </span>
                  hello 
  
              </p>

                 
         
              <p 
              className="chat_message chat_reciever"
              >
                  <span className="chat_name">Yash
                  </span>
                  hello 
   
              </p>
  {
      showform?
      <div className="displayform">
      <form>
          <div className="displayform_heading">
          <RoomIcon/> 
           <h3>Mileage</h3>
          </div>
          <div className="displayform_input">
           <input type="text" placeholder="Enter Your Name" required/>
           <GoogleComponent
         
         apiKey={API_KEY}
         language={'en'}
         country={'country:in|country:us'}
         coordinates={true}
         onChange={(e) =>  setState(place) }/>
           <GoogleComponent
         
         apiKey={API_KEY}
         language={'en'}
         country={'country:in|country:us'}
         coordinates={true}
         onChange={(e) => setState(place) } />
         <span className="result">Mileage</span>
          </div>
     <div className="form_button">
          <button type="submit" onClick={()=> setform(false)}>Cancel</button>
          <button type="submit" onClick={()=> getDistanceFromLatLonInKm(-25.363,131.044,131.044,-25.363)}>Submit</button>
     </div>
      </form>
      </div>
      :null
  }
                
       
   </div>
   {
       show?
<div className="mileage">
         
         <button type="submit" onClick={()=> setform(!showform)}>
         <RoomIcon/>  
             <span>Mileage</span></button>
   </div>  
       :null
   }
   
          <div className="chat_footer">
              <AddCircleOutlineIcon onClick={()=> showmileage(!show)}/>
              <form>
                  <input
                  placeholder="Type a message"
                  type="text" />
                  <button  type="submit">Send a message</button>
              </form>
              <MicIcon/>
          </div>
                    </div>
                  
    )
}

export default Chat;
