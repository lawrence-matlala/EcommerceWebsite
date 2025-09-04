import React, { useState, useEffect } from 'react'
import './home.css'
import {Link} from 'react-router-dom'
import Homeproduct from './home_product'
import { FaEye,FaHeart } from "react-icons/fa";
import { FaTwitter,FaFacebookF,FaInstagram,FaYoutube } from "react-icons/fa6";
import { IoCartOutline } from "react-icons/io5";


const Home = ({addtocart}) => {

    //Product category
    const [newProduct,setNewProduct] = useState([]);
    const [featuredProduct,setFeaturedProduct] = useState([]);
    const [topProduct,setTopProduct] = useState([]);

    //Trending Product
    const [trendingProduct,setTrendingProduct]= useState(Homeproduct)
    //Email input for newsletter
    const [email, setEmail] = useState("");

    const filtercate = (x) =>
    {
        const filterproduct = Homeproduct.filter((curElm) =>
        {
            return curElm.type === x 
        })
        setTrendingProduct(filterproduct)
    }
    //All Trending Products
    const allTrendingProduct = () =>
    {
        setTrendingProduct(Homeproduct)
    }
    //Product type
    useEffect(()=>
    {
        productcategory()
    },[])
    const productcategory = () =>
    {
        //New Product
        const newcategory = Homeproduct.filter((x) => 
        {
            return x.type === 'new'
        })
        setNewProduct(newcategory)

        //Featured Product
        const featuredcategory = Homeproduct.filter((x) => 
        {
            return x.type === 'featured'
        })
        setFeaturedProduct(featuredcategory)

        //Featured Product
        const topcategory = Homeproduct.filter((x) => 
        {
            return x.type === 'top'
        })
        setTopProduct(topcategory)
    }

    return(
        <>
        <div className='home'>
            <div className='top_banner'>
                <div className='contant'>
                    <h3>silver aluminum</h3>
                    <h2>Apple Watch</h2>
                    <p>30% off at your first order</p>
                    <Link to='/shop' className='link'>Shop Now</Link>
                </div>
            </div>

            <div className='trending'>
                <div className='container'>
                    <div className='left_box'>
                        <div className='header'>
                            <div className='heading'>
                                <h2 onClick={() => allTrendingProduct ()}>trending product</h2>
                            </div>
                            <div className='cate'>
                                <h3 onClick={() => filtercate ('new')}>New</h3>
                                <h3 onClick={() => filtercate ('featured')}>Featured</h3>
                                <h3 onClick={() => filtercate ('top')}>top selling</h3>
                              </div>
                        </div>

                        <div className='products'>
                            <div className='container'>
                                {
                                    trendingProduct.map((curElm)=>
                                    {
                                        return(
                                            <>
                                            <div className='box'>
                                                <div className='img_box'>
                                                    <img src={curElm.img} alt=''></img>
                                                    <div className='icon'>
                                                       <div className='icon_box'>
                                                        <FaEye />
                                                       </div>

                                                        <div className='icon_box'>
                                                        <FaHeart />
                                                       </div>
                                                    </div>
                                                 </div>
                                                 
                                                 <div className='info'>
                                                    <h3>{curElm.Name}</h3>
                                                    <p>${curElm.price}</p>
                                                    <button className='btn' onClick={() =>addtocart (curElm)}>Add To Cart</button>
                                                 </div>

                                            </div>
                                            </>
                                        )
                                    }) 
                                }
                            </div>
                            <button>Show More</button>
                        </div>

                    </div>
                    <div className='right_box'>
                     <div className='right_container'>
                        <div className='testimonial'>
                            <div className='head'>
                                <h3>our testimonial</h3>
                            </div>
                            <div className='detail'>
                                <div className='img_box'>
                                    <img src={process.env.PUBLIC_URL +'/image/ladyTestimonial1.jpeg'} alt='testimonial'/>
                                </div>
                                <div className='info'>
                                    <h3>stephan robot</h3>
                                    <h4>web designer</h4>
                                    <p>Duis faucibus enim vitae nunc molestie, nec facilisis arcu pulvinar nullam mattisr nullam mattis</p>
                                </div>
                            </div>
                        </div>
                        <div className='newsletter'>
                            <div className='head'>
                                <h3>newsletter</h3>
                            </div>
                            <div className='form'>
                                <p>join our mailing list</p>
                                <input type='email' placeholder='E-mail' autoComplete='off' value={email} onChange={(e)=> setEmail(e.target.value)}/>                                <button>subscribe</button>
                                <div className='icon_box'>
                                    <div className='icon'>
                                    <FaFacebookF />
                                    </div>
                                    <div className='icon'>
                                        <FaTwitter />
                                    </div>
                                    <div className='icon'>
                                        <FaInstagram />
                                    </div>
                                    <div className='icon'>
                                        <FaYoutube />
                                    </div>
                                </div>
                            </div>
                        </div>
                     </div>
                    </div>
                </div>
            </div>
           <div className='banners'>
            <div className='container'>
                <div className='left_box'>
                    <div className='box'>
                        <img src={process.env.PUBLIC_URL +'/image/SpeakerBanner.png'} alt='banner'></img>
                    </div>
                </div>

                <div className='right_box'>
                    <div className='top'>
                      <img src={process.env.PUBLIC_URL +'/image/SpeakerHorizBanner.png'} alt='banner'></img>
                     <img src={process.env.PUBLIC_URL +'/image/iphoneBanner.png'} alt='banner'></img>
                    </div>
                 <div className='bottom'>
                    <img src={process.env.PUBLIC_URL +'/image/HorizomBanner.png'} alt='banner'></img>
                </div>

                </div>

              </div>
            </div>    

            <div className='product_type'>
                <div className='container'>
                  <div className='box'>
                      <div className='header'>
                         <h2>New Product</h2>
                          </div>
                         {
                            newProduct.map((curElm) =>
                            {
                                return(
                                    <>
                                      <div className='productbox'>
                                        <div className='img-box'>
                                            <img src={curElm.img} alt=''></img>
                                          </div>
                                         <div className='detail'>
                                            <h3>{curElm.Name}</h3>
                                            <p>$ {curElm.price}</p>
                                            <div className='icon'>
                                                <button><FaEye /></button>
                                                <button><FaHeart /></button>
                                                <button onClick={() =>addtocart (curElm)}><IoCartOutline /></button>


                                            </div>
                                        </div>
                                    </div>
                                    </>
                                )
                            })
                        }
                   </div>

                    <div className='box'>
                      <div className='header'>
                         <h2>Featured Product</h2>
                        </div>
                         {
                            featuredProduct.map((curElm) =>
                            {
                                return(
                                    <>
                                      <div className='productbox'>
                                        <div className='img-box'>
                                            <img src={curElm.img} alt=''></img>
                                          </div>
                                         <div className='detail'>
                                            <h3>{curElm.Name}</h3>
                                            <p>$ {curElm.price}</p>
                                            <div className='icon'>
                                                <button><FaEye /></button>
                                                <button><FaHeart /></button>
                                                <button onClick={() =>addtocart (curElm)}><IoCartOutline /></button>


                                            </div>
                                        </div>
                                    </div>
                                    </>
                                )
                            })
                        }
                   </div>

                    <div className='box'>
                      <div className='header'>
                         <h2>Top Product</h2>
                          </div>
                         {
                            topProduct.map((curElm) =>
                            {
                                return(
                                    <>
                                      <div className='productbox'>
                                        <div className='img-box'>
                                            <img src={curElm.img} alt=''></img>
                                          </div>
                                         <div className='detail'>
                                            <h3>{curElm.Name}</h3>
                                            <p>$ {curElm.price}</p>
                                            <div className='icon'>
                                                <button><FaEye /></button>
                                                <button><FaHeart /></button>
                                                <button onClick={() =>addtocart (curElm)}><IoCartOutline /></button>


                                            </div>
                                        </div>
                                    </div>
                                    </>
                                )
                            })
                        }
                   </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Home