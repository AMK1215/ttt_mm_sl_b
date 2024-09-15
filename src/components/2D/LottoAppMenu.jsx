import React from 'react'
import { BiRepeat } from 'react-icons/bi'
import { GrPowerCycle } from 'react-icons/gr'
import { IoMdArrowRoundBack } from 'react-icons/io'
import { MdOutlineKeyboardBackspace } from 'react-icons/md'
import { PiRepeatOnce } from 'react-icons/pi'
import { Link } from 'react-router-dom'

const LottoAppMenu = () => {

  return (
    <div className='cursor-pointer bg-red2 py-2 px-3 d-flex align-items-center justify-content-between gap-4'>
        <IoMdArrowRoundBack onClick={()=>history.back()} size={30} />
        <Link to={'/'}>
        <h2 className='mt-1'>TTT 2D</h2>
        </Link>
        <GrPowerCycle  size={25}/>
    </div>
  )
}

export default LottoAppMenu
