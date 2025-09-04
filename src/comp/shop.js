import React, {useState} from 'react'
import './shop.css'
import { FaHeart } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";


const Shop = ({shop,Filter,allcatefilter,addtocart}) => {
    //Toggle Product Detail
    const [showDetail,setShowDetail] = useState(false)
    //Detail page Data
    const [detail,setDetail] = useState([])
    //Showing Detail Box
    const detailpage = (product) =>
    {
        const detaildata =([{product}])
        const productdetail = detaildata[0]['product']
        //console.log(productdetail)
        setDetail(productdetail)
        setShowDetail(true)
    }
    const closedetail = () =>
    {
        setShowDetail(false)
    }
    return (
        <>
        {
            showDetail ?
            <>
                <div className='product_detail'>
                    <button className='close_btn' onClick={closedetail}><IoMdClose /></button>
                    <div className='container'>
                        <div className='img_box'>
                            <img src={detail.img} alt=''></img>
                        </div>
                        <div className='info'>
                            <h4>{detail.cat}</h4>
                            <h2>{detail.Name}</h2>
                            <p>A Screen Everyone Will Love: Whether your family is streaming or video</p>
                            <h3>${detail.price}</h3>
                            <button onClick={() => addtocart (detail)}>Add To Cart</button>
                        </div>
                    </div>
                </div>
            </>
            : null
        }

        <div className='shop'>
            <h2># shop</h2>
            <p>Home . shop</p>
            <div className='container'>
                <div className='left_box'>
                    <div className='category'>
                        <div className='header'>
                            <h3>all categories</h3>
                        </div>
                        <div className='box'>
                            <ul>
                                <li onClick={()=> allcatefilter ()}># All</li>
                                <li onClick={() => Filter ("tv")}># tv</li>
                                <li onClick={() => Filter ("laptop")}># laptop</li>
                                <li onClick={() => Filter ("watch")}># watch</li>
                                <li onClick={() => Filter ("speaker")}># speaker</li>
                                <li onClick={() => Filter ("electronic")}># electronic</li>
                                <li onClick={() => Filter ("headphones")}># headphones</li>
                                <li onClick={() => Filter ("phone")}># phone</li>
                            </ul>
                        </div>
                    </div>
                    <div className='banner'>
                        <div className='img_box'>
                           <img src={process.env.PUBLIC_URL +'/image/tst2.png'} alt='banner'></img>
                        </div>
                    </div>
                </div>
                <div className='right_box'>
                    <div className='banner'>
                        <div className='img_box'>
                          <img src={process.env.PUBLIC_URL +'/image/smartPhoneBanner.png'} alt='banner'></img>
                        </div>
                    </div>
                    <div className='product_box'>
                        <h2>Shop Product</h2>
                        <div className='product_container'>
                            {
                                shop.map((curElm,index) =>
                                {
                                    return (
                                        <>
                                        <div className='box' key={index}>
                                            <div className='img_box'>
                                                <img src={curElm.img} alt=''></img>
                                                  <div className='icon'>
                                                    <li><FaHeart /></li>
                                                   <li onClick={() => detailpage (curElm)}><FaEye /></li> 
                                                </div>
                                            </div>
                                            <div className='detail'>
                                                <h3>{curElm.Name}</h3>
                                                <p>${curElm.price}</p>
                                                <button onClick={() => addtocart (curElm)}>Add To Cart</button>
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
        </div>
        </>
    )
}

export default Shop