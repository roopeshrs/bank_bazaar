import React from 'react'
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import HouseOutlinedIcon from '@mui/icons-material/HouseOutlined';
import DriveEtaOutlinedIcon from '@mui/icons-material/DriveEtaOutlined';
import CalculateOutlinedIcon from '@mui/icons-material/CalculateOutlined';

const Service = () => {
  return (
    <div>
        <ul className='flex items-center justify-between'>
            <li className='flex flex-col items-center gap-2 flex-1 shadow-lg h-28 justify-center cursor-pointer hover:bg-[#eee]'>
                <CreditCardOutlinedIcon style={{ fontSize: '3rem', color: '#116a9e' }}/>
                <span>Credit Card</span>
            </li>
            <li className='flex flex-col items-center gap-2 flex-1 shadow-lg h-28 justify-center cursor-pointer hover:bg-[#eee]'>
                <FavoriteBorderOutlinedIcon style={{ fontSize: '3rem', color: '#116a9e' }}/>
                <span>Personal Loan</span>
            </li>
            <li className='flex flex-col items-center gap-2 flex-1 shadow-lg h-28 justify-center cursor-pointer hover:bg-[#eee]'>
                <img src='https://static.bankbazaar.com/images/gateway/ct-icon-animation-desktop-v2.gif' alt='gif'/>
                <span>Credit Score</span>
            </li>
            <li className='flex flex-col items-center gap-2 flex-1 shadow-lg h-28 justify-center cursor-pointer hover:bg-[#eee]'>
                <HouseOutlinedIcon style={{ fontSize: '3rem', color: '#116a9e' }}/>
                <span>Home Loan</span>
            </li>
            <li className='flex flex-col items-center gap-2 flex-1 shadow-lg h-28 justify-center cursor-pointer hover:bg-[#eee]'>
                <DriveEtaOutlinedIcon style={{ fontSize: '3rem', color: '#116a9e' }}/>
                <span>Car Loan</span>
            </li>
            <li className='flex flex-col items-center gap-2 flex-1 shadow-lg h-28 justify-center cursor-pointer hover:bg-[#eee]'>
                <CalculateOutlinedIcon style={{ fontSize: '3rem', color: '#116a9e' }}/>
                <span>Calculators</span>
            </li>
        </ul>
    </div>
  )
}

export default Service