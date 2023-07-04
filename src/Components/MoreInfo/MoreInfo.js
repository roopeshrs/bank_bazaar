import React from 'react'

const MoreInfo = () => {
  return (
    <div className='bg-[#3c3b3b] py-[18px] flex items-center justify-center gap-5 text-sm text-[#aaa9a9]'>
        LEARN MORE :
        <ul className='flex gap-5 text-[#888]'>
            <li className='cursor-pointer hover:text-white'>Credit Cards</li>
            <li className='cursor-pointer hover:text-white'>Personal Loan</li>
            <li className='cursor-pointer hover:text-white'>Investments</li>
            <li className='cursor-pointer hover:text-white'>Savings Account</li>
            <li className='cursor-pointer hover:text-white'>Saving Schemes</li>
            <li className='cursor-pointer hover:text-white'>Life Insurance</li>
            <li className='cursor-pointer hover:text-white'>Health Insurance</li>
        </ul>
    </div>
  )
}

export default MoreInfo