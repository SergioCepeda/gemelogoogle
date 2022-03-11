import React from 'react';
import './Home.css';
import AppsIcon from '@material-ui/icons/Apps';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import {Link} from "react-router-dom"
import Search from '../Components/Search';

const Home = () => {
  return (
    <div className={"home"}>
      <div className="home__header">
        <div className="home__headerLeft">
           <Link to="/about"><p>Sobre google</p></Link>
           <Link to="/store" ><p>Tienda</p></Link>
        </div> 
        <div className="home_headerRight">
            <Link to="/gmail" ><p>Gmail</p></Link>
            <Link to="/images"><p>Imagenes</p> </Link>
            <IconButton>
            <AppsIcon/>
            </IconButton>
            <Avatar/>
        </div>
       </div>
       <div className="Home__body">
       <img
            src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
            alt=""
          />
          <Search />
       </div>
     </div>
  )
}

export default Home