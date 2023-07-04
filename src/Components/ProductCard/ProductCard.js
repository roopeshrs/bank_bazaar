import React from 'react'

const ProductCard = ({product}) => {
  return (
    <div className='w-1/3 p-3 cursor-pointer'>
        <div className='overflow-hidden'>
            <img src={product.image} alt='product-image' className='w-full hover:scale-110 transition-all' />
        </div>
        <div>
            <h5 className='text-sm font-bold text-[#006a9e] py-1'>{product.title}</h5>
            <p className='text-sm text-[#858e99]'>{product.description}</p>
        </div>
    </div>
  )
}

export default ProductCard