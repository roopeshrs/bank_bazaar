import React from 'react'
import CachedOutlinedIcon from '@mui/icons-material/CachedOutlined';
import TimerOutlinedIcon from '@mui/icons-material/TimerOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import CardGiftcardOutlinedIcon from '@mui/icons-material/CardGiftcardOutlined';

const Achievement = () => {
  return (
    <div className='bg-[#116a9e] text-white h-14'>
        <ul className='flex items-center justify-center h-full gap-6'>
            <li className='flex items-center justify-center gap-2'>
                <CachedOutlinedIcon style={{ fontSize: '2.5rem' }} />
                50+ Banks
            </li>
            <li className='flex items-center justify-center gap-2'>
                <TimerOutlinedIcon style={{ fontSize: '2.5rem' }} />
                Contactless KYC & Paperless Approval
            </li>
            <li className='flex items-center justify-center gap-2'>
                <AccountCircleOutlinedIcon style={{ fontSize: '2.5rem' }} />
                5,00,00,000+ Happy Customers
            </li>
            <li className='flex items-center justify-center gap-2'>
                <CardGiftcardOutlinedIcon style={{ fontSize: '2.5rem' }} />
                Exclusive Offers & Rates
            </li>
        </ul>
    </div>
  )
}

export default Achievement