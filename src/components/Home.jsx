import React from 'react'
import { Link } from 'react-router-dom'

const Home = ({products}) => {
  return (
    <div className='grid grid-cols-4 p-10'>
        {products.map((data, index)=>{
            return(
                <Link to='/details' state={{data}}>
                <div  key={index} className='border border-spacing-1 p-2 ml-3 mt-3'>
                <img src={data?.imageUrl} alt="" className='w-60 h-48' />
                <h1 className='font-bold text-xl'>₹ {data.price}</h1>
                <h1>{data.title}</h1>
                <h1>{data.category}</h1>
                </div>
                </Link>
            )
        })}
    </div>
  )
}

export default Home