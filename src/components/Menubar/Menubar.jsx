import React from 'react'
import './Manubar.css'
import arrow from '../../assets/arrow.png'


const Menubar = () => {
  return (
    <div className="bannerParentDiv">
      <div className="bannerChildDiv">
        <div className="menuBar">
          <div className="categoryMenu flex">
            <span>ALL CATEGORIES</span>
            <img src={arrow} alt="" className='w-8 h-7'/>
            {/* <Arrow></Arrow>  */}
          </div>
          <div className="otherQuickOptions">
            <span>Cars</span>
            <span>Motorcy...</span>
            <span>Mobile Ph...</span>
            <span>For Sale:Houses & Apart...</span>
            <span>Scoot...</span>
            <span>Commercial & Other Ve...</span>
            <span>For Rent: House & Apart...</span>
          </div>
        </div>
        {/* <div className="banner">
          <img
            src="../../../Images/banner copy.png"
            alt=""
          />
        </div> */}
      </div>   
    </div>
  )
}

export default Menubar