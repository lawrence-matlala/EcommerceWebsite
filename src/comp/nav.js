import React from 'react'
//import { FaBeer } from "react-icons/fa";
import { MdLocalShipping } from "react-icons/md";
import './nav.css'
import { AiOutlineSearch } from "react-icons/ai";
import { FiLogIn } from "react-icons/fi";
import { CiLogout } from "react-icons/ci"; //This is the logout icon

import { useAuth0 } from "@auth0/auth0-react";
import { CiUser } from "react-icons/ci";
import {Link} from 'react-router-dom';



const Nav = ({search, setSearch,searchproduct})=>{
      const {loginWithRedirect, logout, user, isAuthenticated} = useAuth0();
    return(
        <>
         <div className='header'>
            <div className='top_header'>
                <div className='icon'>
                    <MdLocalShipping/>
                </div>
                <div className='info'>
                    <p>Free Shipping When Shopping upto R1000</p>
                </div>
            </div>
            <div className='mid_header'>
                {/*adding a logo*/}
                <div className='logo'>
                    <img src={process.env.PUBLIC_URL +'/image/logo.webp'} alt='logo'></img>
                </div>
                {/*End*/}

                {/*Adding search bars*/}
                <div className='search_box'>
                   <input type='text' value={search} placeholder='Search' onChange={(e) => setSearch(e.target.value)}></input>
                   <button onClick={searchproduct}>
                     <AiOutlineSearch />
                  </button>
                </div>
                {/*End*/}

                {
                    isAuthenticated ?
                 <div className='user'>
                    <div className='icon'>
                   <CiLogout />
                    </div>

                <div className='btn'>
                  <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Logout</button>
                </div>
                </div>
            
                :
                <div className='user'>
                    <div className='icon'>
                        <FiLogIn />
                    </div>

               
                <div className='btn'>
                  <button onClick={()=>loginWithRedirect()}>Login</button>
                </div>
                </div>

                }
            </div>

            <div className='last_header'>
                <div className='user_profile'>
                    {
                        isAuthenticated ?
                        <>
                         <div className='icon'>
                            <CiUser />
                         </div>
                         <div className='info'>
                          <h2>{user.name}</h2>
                          <p>{user.email}</p>
                         </div>

                        </>
                         :
                         <>
                        <div className='icon'>
                            <CiUser/>
                         </div>

                        <div className='info'>
                            <p>Please Login</p>
                         </div>
                         </>
        
                    }
                </div>

                    <div className='nav'>
                     <ul>
                        <li><Link to ='/' className='link'>Home</Link></li>
                        <li><Link to ='/shop' className='link'>Shop</Link></li>
                        <li><Link to ='/cart' className='link'>Cart</Link></li>
                        <li><Link to ='/about' className='link'>About</Link></li>
                        <li><Link to ='/contact' className='link'>Contact</Link></li>
                     </ul>
                    </div>

                    <div className='offer'>
                        <p>flat 10% over all iphone</p>
                    </div>

            </div>

         </div>
        </>
    )
}

export default Nav