import { React } from 'react';
import { Link } from "react-router-dom";
import { UserAuth } from '../context/UserAuthContext';
import { useNavigate } from 'react-router-dom';
import './navfeedS.css';
import IconM from "../assets/IconM.png";
import { Logout, LocalLibrary,Forum, NotificationsActive, Search, Home, SubscriptionsOutlined, TravelExplore, Diversity2 } from "@mui/icons-material";
import {Avatar, IconButton} from '@mui/material';
import { purple } from '@mui/material/colors';


const Navfeed = () => {

  const { user, logout } = UserAuth();

  const navigate = useNavigate();

  function handleLogOut() {
    try {
      logout()
      navigate("/")
    } catch (e) {
      console.log(e)
    }
  };


  return (
    <div className='header'>
      <div className='header_left'>
        <Link to={"/"}>
          <img src={IconM} alt='physics' height={ 40 } />
        </Link>
        
        <div className="header_input">
          <Search sx={{ color: purple[500], marginLeft: 2 }} />
          <input placeholder='Search' type="text" style={{textAlign: 'justify'}}/>
        </div>
      </div>
      <div className='header_center'>
        <div className="header_option header_option-active">
            <Home />
          </div>
          <div className="header_option">
            <TravelExplore />
          </div>
          <div className="header_option">
            <SubscriptionsOutlined />
          </div>
          <div className="header_option">
            <LocalLibrary />
          </div>
          <div className="header_option">
            <Diversity2 />
          </div>
      </div>
      <div className='header_right'>
        
        <div className="header_info">
          <Avatar  src={user.photoURL}/>
          <p style={{paddingLeft:'10px'}}>{user.displayName && user.email}</p>
        </div>
        <IconButton>
          <Forum />
        </IconButton>
        <IconButton>
          <NotificationsActive />
        </IconButton>
        <IconButton>
          <Logout onClick={handleLogOut} />
        </IconButton>
      </div>
    </div>
  );
}

export default Navfeed;
