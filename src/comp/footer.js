import React from 'react'
import './footer.css'
import { FaPiggyBank } from "react-icons/fa6";
import { FaShippingFast } from "react-icons/fa";
import { FaHeadphonesSimple } from "react-icons/fa6";
import { FaWallet } from "react-icons/fa";


const Footer = () => {
    return(
        <>
        <div className='footer'>
            <div className='container'>
                <div className='left-box'>
                    <div className='box'>
                        <div className='icon_box'>
                            <FaPiggyBank />
                        </div>
                        <div className='detail'>
                            <h3>Great saving</h3>
                            <p>Lorem ipsum dolor sit amet,</p>
                        </div>
                    </div>

                        <div className='box'>
                        <div className='icon_box'>
                          <FaShippingFast />
                        </div>
                        <div className='detail'>
                            <h3>Free delivery</h3>
                            <p>Lorem ipsum dolor sit amet,</p>
                        </div>
                    </div>

                        <div className='box'>
                        <div className='icon_box'>
                            <FaHeadphonesSimple />
                        </div>
                        <div className='detail'>
                            <h3>24X7 support</h3>
                            <p>Lorem ipsum dolor sit amet,</p>
                        </div>
                    </div>

                       <div className='box'>
                        <div className='icon_box'>
                            <FaWallet />
                        </div>
                        <div className='detail'>
                            <h3>Free delivery</h3>
                            <p>Lorem ipsum dolor sit amet,</p>
                        </div>
                    </div>

                </div>
                <div className='right_box'>
                    <div className='header'>
                       <div className='logo'>
                       <img src={process.env.PUBLIC_URL +'/image/logo.webp'} alt='logo'></img>
                       </div>
                       <p>Duis faucibus enim vitae nunc molestie, nec facilisis arcu pulvinar nullam mattisr nullam mattis</p>
                    </div>
                    <div className='bottom'>
                        <div className='box'>
                            <h3>Your Account</h3>
                            <ul>
                                <li>About us</li>
                                <li>Account</li>
                                <li>Payment</li>
                                <li>Sales</li>
                            </ul>
                        </div>

                        <div className='box'>
                            <h3>products</h3>
                            <ul>
                                <li>Delivery</li>
                                <li>Track Order</li>
                                <li>New product</li>
                                <li>old product</li>
                            </ul>
                        </div>

                        <div className='box'>
                            <h3>Contact us</h3>
                            <ul>
                                <li>4005, Silver Business PointIndia</li>
                                <li>+(012)99999999</li>
                                <li>info@gmail.com</li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        </>
    )

}

export default Footer