import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import back_arrow_icon from '../../assets/back_arrow_icon.png'
import './Details.css'


const Details = () => {

  const navigate = useNavigate()

    const location = useLocation()
  return (
    <div >
       <div className='nav-of'>
            <img src={back_arrow_icon} alt="" onClick={()=>{navigate(-1)}} className='w-12 h-12 cursor-pointer ml-12'/>
        </div>
      <div className="viewParentDiv">
      <div className="imageShowDiv">
      <img src={location.state.data.imageUrl} alt="" className='productImage' />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p className='PriceText'>₹ {location.state.data.price}</p>
          <h1 className='mt-5'><span className='font-semibold'>Category </span>: {location.state.data.category}</h1>
          <h1 className='mt-3'><span className='font-semibold'>Title </span>: {location.state.data.title}</h1>
          <h1 className='mt-3'><span className='font-semibold'>Description</span>: {location.state.data.description}</h1>
        </div>
        <div className="contactDetails">
          <p>Seller details</p>
          <p>{location.state.data.userName}</p>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Details