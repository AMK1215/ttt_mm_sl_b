import React, { useEffect, useRef } from 'react'
import { BsVolumeUp } from 'react-icons/bs'
import { FaPauseCircle, FaPlayCircle } from 'react-icons/fa'
 import bg from '../../assets/bg.mp3'

const Marquee = ({isSiteBgPlay,setIsSiteBgPlay}) => {
   const audioRef=useRef(null);
   useEffect(()=>{
      if(isSiteBgPlay) {
         audioRef.current.play();
      }
      else {
         audioRef.current.pause()
      }
   },[isSiteBgPlay])
  return (
   <div className='d-flex align-items-center gap-2 flex-nowrap'>
       <audio hidden  ref={audioRef} controls  >
                        <source src={'https://onlinetestcase.com/wp-content/uploads/2023/06/2-MB-MP3.mp3'} />
                    </audio>
         <div style={{width:'100px'}} className='cursor-pointer d-flex align-items-center justify-content-center'>
            {isSiteBgPlay ?  <FaPauseCircle onClick={()=>setIsSiteBgPlay(false)} size={25} className='ms-2 soundIcon marqueeText' /> :
            <FaPlayCircle onClick={()=>setIsSiteBgPlay(true)} size={25} className='ms-2 soundIcon marqueeText'  />
  }
          </div>
     <div className='shadow-lg  homeMarquee bg-black2  p-1  m-sm-2 '>
        <marquee className='marqueeText' behavior="" direction="left">
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt explicabo ut eaque, nostrum iusto voluptate dolor, animi harum alias accusantium facere quas aliquid. Aut cumque non autem laboriosam aperiam totam.
        </marquee>

    </div>
    </div>
    

   )
}

export default Marquee
