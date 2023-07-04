import React, {useState} from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const MenuItem = ({text, options}) => {
    const [isHovered, setIsHovered] = useState(false);
    const handleHover = () => {
        setIsHovered(!isHovered);
    }
  return (
    <li
        className='relative px-4 h-full flex items-center cursor-pointer'
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}
    >
        {text}
        <KeyboardArrowDownIcon className={`${isHovered ? 'rotate-180': ''}`} />
        {isHovered && (
            <ul className='absolute left-0 top-full bg-white w-52 p-5 text-[#116a9e] text-sm flex flex-col gap-3 shadow-lg'>
                {options.map((option, index)=>(
                    <li key={index} className='cursor-pointer hover:underline'>{option}</li>
                ))}
            </ul>
        )}
    </li>
  )
}

export default MenuItem