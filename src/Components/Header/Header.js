import React from 'react'
import { LEFT_MENU } from '../../utils/constants'
import MenuItem from '../MenuItem/MenuItem'
import MenuIcon from '@mui/icons-material/Menu';
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';

const Header = () => {
  return (
    <div className='flex justify-between items-center px-2 bg-[#116a9e] h-14'>
        <div className='flex h-full items-center'>
            <div className='border-r border-[#4188b1] pr-2'>
                <img src='https://static.bankbazaar.com/images/bankbazaar-logo.svg' alt='logo' width={152} height={42} className='cursor-pointer'/>
            </div>
            <div className='flex items-center h-full'>
                <ul className='flex text-white uppercase h-full items-center pr-8'>
                    {
                        LEFT_MENU.map((item, index) => (
                            <MenuItem key={index} text={item.text} options={item.options}/>
                        ))
                    }
                </ul>
                <div>
                    <img src='https://static.bankbazaar.com/images/common/ct-navbar-link-img-v2.gif' alt='Free Credit Score'/>
                </div>
            </div>
        </div>
        <div>
            <ul className='flex text-white'>
                <li className='cursor-pointer px-2 flex items-center'><RoomOutlinedIcon /> Track Application</li>
                <li className='cursor-pointer px-2'>Login</li>
                <li className='cursor-pointer px-2'><MenuIcon className='text-white'/></li>
            </ul>
        </div>
    </div>
  )
}

export default Header