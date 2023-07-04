import React from 'react'

const Banner = () => {
  return (
    <div className='h-96 flex'>
        <div className='w-96 bg-[#2F4858]'>
            <img src='https://static.bankbazaar.com/images/gateway/rbl-card-desktop-v4.png' alt='banner' className='cursor-pointer'/>
        </div>
        <div className='bg-[url("https://static.bankbazaar.com/images/gateway/gateway-banner-cs-animated-gray-bg-desktop-v4.gif")] bg-no-repeat bg-bottom flex-1 flex justify-end px-6 items-center cursor-pointer'>
            <div className='w-[362px] flex flex-col text-center'>
                <p className='text-2xl pb-5 text-[#34495d]'>Get your latest Experian credit report for free here</p>
                <img src='https://static.bankbazaar.com/images/gateway/CT_CTA_animation-v1.gif' alt='button'/>
                <p className='pt-3 text-[#34495d] flex'>
                    <div>
                        <img src='https://static.bankbazaar.com/images/gateway/laurel.png'/>
                    </div>
                    <p className='text-md'>
                        <span className='font-bold text-xl'>2,00,00,000+</span> people have got their Credit Scores for FREE!
                    </p>
                </p>
            </div>
        </div>
    </div>
  )
}

export default Banner