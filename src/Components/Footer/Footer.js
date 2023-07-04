import React from 'react'
import EmailIcon from '@mui/icons-material/Email';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    <div className='bg-[#424242]'>
        <div className='text-xs text-[#979797] flex flex-col gap-4 w-3/4 mx-auto'>
            <div className='flex py-6 justify-between'>
                <div className='flex flex-col gap-3'>
                    <h5 className='text-white font-bold'>Home Loan</h5>
                    <ul className='flex flex-col gap-2'>
                        <li className='cursor-pointer hover:text-white'>SBI Home Loan</li>
                        <li className='cursor-pointer hover:text-white'>HDFC Home Loan</li>
                        <li className='cursor-pointer hover:text-white'>Axis Home Loan</li>
                    </ul>
                </div>
                <div className='flex flex-col gap-3'>
                    <h5 className='text-white font-bold'>Personal Loan</h5>
                    <ul className='flex flex-col gap-2'>
                        <li className='cursor-pointer hover:text-white'>SBI Personal Loan</li>
                        <li className='cursor-pointer hover:text-white'>HDFC Personal Loan</li>
                        <li className='cursor-pointer hover:text-white'>Axis Personal Loan</li>
                        <li className='cursor-pointer hover:text-white'>Instant Loan</li>
                    </ul>
                </div>
                <div className='flex flex-col gap-3'>
                    <h5 className='text-white font-bold'>Car Loan</h5>
                    <ul className='flex flex-col gap-2'>
                        <li className='cursor-pointer hover:text-white'>SBI Car Loan</li>
                        <li className='cursor-pointer hover:text-white'>Axis  Car Loan</li>
                        <li className='cursor-pointer hover:text-white'>HDFC Car Loan</li>
                    </ul>
                </div>
                <div className='flex flex-col gap-3'>
                    <h5 className='text-white font-bold'>Credit Card</h5>
                    <ul className='flex flex-col gap-2'>
                        <li className='cursor-pointer hover:text-white'>HDFC Credit Card</li>
                        <li className='cursor-pointer hover:text-white'>SBI Credit Card</li>
                        <li className='cursor-pointer hover:text-white'>IndusInd Credit Card</li>
                    </ul>
                </div>
                <div className='flex flex-col gap-3'>
                    <h5 className='text-white font-bold'>Fixed Deposit</h5>
                    <ul className='flex flex-col gap-2'>
                        <li className='cursor-pointer hover:text-white'>SBI Fixed Deposit</li>
                        <li className='cursor-pointer hover:text-white'>HDFC Fixed Deposit</li>
                        <li className='cursor-pointer hover:text-white'>Axis Fixed Deposit</li>
                    </ul>
                </div>
                <div className='flex flex-col gap-3'>
                    <h5 className='text-white font-bold'>Calculator</h5>
                    <ul className='flex flex-col gap-2'>
                        <li className='cursor-pointer hover:text-white'>EMI Calculator</li>
                        <li className='cursor-pointer hover:text-white'>Home Loan Calculator</li>
                        <li className='cursor-pointer hover:text-white'>Personal Loan EMI Calculator</li>
                        <li className='cursor-pointer hover:text-white'>Car Loan EMI Calculator</li>
                    </ul>
                </div>
            </div>
            <div className='flex items-center border-y py-4 border-dotted border-[#777]'>
                Others:
                <ul className='flex'>
                    <li className='border-r border-[#979797] px-4 cursor-pointer hover:text-white'>CIBL</li>
                    <li className='border-r border-[#979797] px-4 cursor-pointer hover:text-white'>Tax</li>
                    <li className='border-r border-[#979797] px-4 cursor-pointer hover:text-white'>Bank IFSC Code</li>
                    <li className='border-r border-[#979797] px-4 cursor-pointer hover:text-white'>Indian Holidays</li>
                    <li className='border-r border-[#979797] px-4 cursor-pointer hover:text-white'>Saving Schemes</li>
                    <li className='px-4 cursor-pointer hover:text-white'>In The News</li>
                </ul>
            </div>
            <div className='flex items-center gap-8 mb-2'>
                <div className='flex flex-col gap-2'>
                    Mobile App
                    <span className='cursor-pointer bg-[url("https://static.bankbazaar.com/images/common/footer-sprite-v2.png")] w-[102px] h-[33px] inline-block' style={{backgroundPosition: '0px 0px'}}></span>
                </div>
                <div className='flex flex-col gap-2'>
                    Contact Us
                    <ul>
                        <li className='flex items-center gap-2 cursor-pointer hover:text-white'><div className='bg-white w-fit p-1 rounded-full'><EmailIcon style={{color: '#000'}}/></div> support@domain-name</li>
                    </ul>
                </div>
                <div className='flex flex-col gap-2'>
                    Follow Us
                    <ul className='flex gap-2'>
                        <li className='cursor-pointer'><div className='bg-white w-fit p-1 rounded-full'><TwitterIcon style={{color: '#000'}}/></div></li>
                        <li className='cursor-pointer'><div className='bg-white w-fit p-1 rounded-full'><LinkedInIcon style={{color: '#000'}}/></div></li>
                        <li className='cursor-pointer'><div className='bg-white w-fit p-1 rounded-full'><FacebookIcon style={{color: '#000'}}/></div></li>
                        <li className='cursor-pointer'><div className='bg-white w-fit p-1 rounded-full'><InstagramIcon style={{color: '#000'}}/></div></li>
                    </ul>
                </div>
            </div>
            <ul className='flex gap-8 justify-center'>
                <li className='cursor-pointer hover:text-white'>About</li>
                <li className='cursor-pointer hover:text-white'>Careers</li>
                <li className='cursor-pointer hover:text-white'>Contact Us</li>
                <li className='cursor-pointer hover:text-white'>Blog</li>
                <li className='cursor-pointer hover:text-white'>Terms</li>
                <li className='cursor-pointer hover:text-white'>Notice to customer</li>
            </ul>
            <p className='flex justify-center pb-6'>Copyright © 2023   Domain-name.  Privacy Policy</p>
        </div>
    </div>
  )
}

export default Footer