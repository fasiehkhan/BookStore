import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/ToolBar';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom'
import logo from '../logo.png'

//this function makes use of the materialUI library
//the <Link> tags are used to direct to the HomePage or ShoppingCart page

const NavBar = () => {
return(
    <div> <AppBar style={{backgroundColor: '#2c8bdc'}}>
        
        <div className="NAVBAR">
        <Toolbar>
        <div className="storeName">
            <img src={logo}/>
            <Link to='/' className="navName">
            Books4You
            </Link>
        </div>   
        
        <Link to='/bestseller'className="bestSellers">
                 Best Sellers
            </Link>  

            <Link to='/newreleases'className="newR">
                 New Releases
            </Link>  

            <Link to='/shop'className="ShopButton">
                 Cart
            </Link>
           
           <Link to='/' className="HomeButton">
                Home
            </Link>
        </Toolbar>
        </div>

    </AppBar>
    </div>
)
}
export default NavBar;


