import React from 'react'
import ProductCard from '../ProductCard/ProductCard'
import { PRODUCTS } from '../../utils/constants'

const Product = () => {
  return (
    <div className='flex flex-col items-center gap-6 pb-3'>
        <div className='flex flex-col items-center pt-8'>
            <h2 className='text-[26px] text-[#34495e]'>Trending Products</h2>
            <p className='text-[#858e99]'>Our picks for the hottest offers and coolest deals all in one place</p>
        </div>
        <div className='flex flex-wrap mx-auto w-2/3'>
            {
                PRODUCTS.map((product, index) => <ProductCard key={index} product={product}/>)
            }
        </div>
    </div>
  )
}

export default Product