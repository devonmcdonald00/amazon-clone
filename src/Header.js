import React, {useState, useEffect} from 'react'
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket"
import Product from './Product'
import { Link } from 'react-router-dom'
import './Header.css'
import { useStateValue } from './StateProvider'
import { auth } from './firebase'


function Header(){
    const [{ basket, user }, dispatch] = useStateValue()

    const handleAuthentication = () =>{
        if(user) {
            auth.signOut();
        }
    } 
    return(
        <div className = "header">
            <Link to="/">
                <img
                    className="header_logo"
                    src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                />
            </Link>
            <div className="header_search">
                <input
                    className="header_searchInput"
                    type="text"
                />
                <SearchIcon className="header_searchIcon"/>
            </div>

            <div className = "header_nav">
                <Link to={!user && '/login'}>
                    <div onClick={handleAuthentication} className='header_option'>
                        <span className='header_optionLineOne'>
                            Hello {user ? user?.email : 'Guest'}
                        </span>
                        <span className='header_optionLineTwo'>
                            {user ? 'Sign Out' : 'Sign In'}
                        </span>
                    </div>
                </Link> 
                <div className='header_option'>
                    <span className='header_optionLineOne'>
                        Return
                    </span>
                    <span className='header_optionLineTwo'>
                        & Orders
                    </span>
                </div>
                <div className='header_option'>
                    <span className='header_optionLineOne'>
                        Your
                    </span>
                    <span className='header_optionLineTwo'>
                        Prime
                    </span>
                </div>
            </div>
            <Link to='/checkout'>
                <div className='header_optionBasket'>
                    <ShoppingBasketIcon/>
                    <span className = "header_optionLineTwo header_basketCount">{basket?.length}</span>
                </div>
            </Link>
        </div>
    )
}

export default Header;