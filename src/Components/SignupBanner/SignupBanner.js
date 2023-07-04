import React from 'react'

const SignupBanner = () => {
  return (
    <div className='flex flex-col items-center gap-6 bg-[#f3f5f5] border-b-4 border-[#eee]'>
        <div className='flex flex-col items-center pt-8'>
            <h2 className='text-[26px] text-[#34495e]'>Get your latest Credit Score, FREE</h2>
            <p className='text-[#858e99]'>One powerful number that puts you in control</p>
        </div>
        <div className='flex items-center gap-12'>
            <div>
                <img src='https://static.bankbazaar.com/images/gateway/bb-gateway-cs-v3.png' alt='banner'/>
            </div>
            <div className='flex flex-col gap-4'>
                <div className='flex gap-2'>
                    <div>
                        <img src='https://static.bankbazaar.com/images/gateway/bb-gateway-feature-icon-v1.png' alt='image'/>
                    </div>
                    <p className='text-[#34495e] text-sm'>
                        <span className='font-bold'>Increase chances of application approval</span><br/>
                        A score of 750+ boosts your chances of getting a loan/Credit Card
                    </p>
                </div>
                <div className='flex gap-2'>
                    <div>
                        <img src='https://static.bankbazaar.com/images/gateway/bb-gateway-feature-icon-v1.png' alt='image'/>
                    </div>
                    <p className='text-[#34495e] text-sm'>
                        <span className='font-bold'>Better offers</span><br/>
                        The better your score, the more offers you'll be eligible for
                    </p>
                </div>
                <div className='flex gap-2'>
                    <div>
                        <img src='https://static.bankbazaar.com/images/gateway/bb-gateway-feature-icon-v1.png' alt='image'/>
                    </div>
                    <p className='text-[#34495e] text-sm'>
                        <span className='font-bold'>Take charge of your finances</span><br/>
                        Understanding your score helps you take the right next steps
                    </p>
                </div>
                <button className='bg-[#ff5a5f] text-xl text-white w-[300px] rounded-sm px-4 py-2 hover:bg-[#f76d71]'>Get your FREE Credit Score</button>
            </div>
        </div>
    </div>
  )
}

export default SignupBanner