import React from 'react'

const About = () => {
  return (
    <div className='flex flex-col items-center relative bg-gradient-to-r from-[#3ab2ee] to-[#44c5ff] after:content-[""] after:w-full after:h-96 after:absolute after:bottom-0 after:bg-black after:opacity-10 pb-8 cursor-pointer'>
        <div className='flex flex-col items-center pt-8 text-white'>
            <h2 className='text-[26px]'>Why BankBazaar</h2>
            <p>There's more than one reason to sign up with confidence</p>
        </div>
        <div>
            <img src='https://static.bankbazaar.com/images/gateway/bg-why-bb-md-v4.png' alt='about'/>
        </div>
    </div>
  )
}

export default About