import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from "react-router-dom"
import { useStateValue } from './StateProvider';
import { auth } from './firebase'

function Header() {
    const [{ basket, user }, dispatch] = useStateValue();
    const handleAuthentication = () => {
        if(user) {
            auth.signOut();
        }
    }

    return (
        <div className='header'>
            <Link to="/">
                <img
                    src='https://www.nicepng.com/png/full/16-167642_amazon-logo-amazon-logo-white-text.png'
                    className='header_logo'>
                </img>
            </Link>

            <div className='header_search'>
                <input
                    className='header_searchInput'
                />
                <SearchIcon className='header_searchIcon'></SearchIcon>
            </div>

            <div className='header_nav'>
                //if no user push to login
                <Link to={!user && '/login'}>
                    <div onClick={handleAuthentication} className='header_option'>
                            <span className='header_optionLineOnce'>Hello, {user?.email}</span>
                            <span className='header_optionLineTwo'>{user ? 'Sign Out' : 'Sign In'}</span>                 
                    </div>
                </Link>
                <Link to="/orders">
                    <div className='header_option'>
                        <span className='header_optionLineOnce'>Returns</span>
                        <span className='header_optionLineTwo'>& Orders</span>
                    </div>
                </Link>
                <div className='header_option'>
                    <span className='header_optionLineOnce'>Your</span>
                    <span className='header_optionLineTwo'>Prime</span>
                </div>
            </div>
            <Link to="/checkout">
                <div className='optionBasket'>
                    <ShoppingBasketIcon />
                    <span className='header_optionLineTwo header_basketCount'>{basket?.length}</span>
                </div>
            </Link>

        </div>
    )
}

export default Header