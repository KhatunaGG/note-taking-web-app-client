import React from 'react'
import { InfoCircle } from '../../__atoms'

const PasswordInput = () => {
  return (
    <div className="w-full flex flex-col gap-[6px]">
    <label className="text-sm font-medium text-darkest">Email Address</label>
    <input
      type="text"
      className="border border-[#CACFD8] rounded-lg p-3 outline-none text-neutral"
      placeholder=""
    />
    <div className='flex items-center gap-2'>

    <InfoCircle />
    <p className='text-dark font-normal text-xs'>At least 8 characters</p>
    </div>
  </div>
  )
}

export default PasswordInput