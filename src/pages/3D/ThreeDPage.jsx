import React from 'react'
 import list from '../../assets/img/list.png';
import winner from '../../assets/img/winner.png';
import holiday from '../../assets/img/holiday.png';
import { Link, NavLink } from 'react-router-dom';
  



const ThreeDPage = () => {
     const lottoHome = [
        { id: 1, title: 'မှတ်တမ်း', img: list, link: '/3d/history' },
        { id: 2, title: 'ကံထူးရှင်များ', img: winner, link: '/3d/winners' },
        { id: 3, title: 'ပိတ်ရက်', img: holiday, link: '/3d/holiday' },
    ];
  return (
    <div className='p-2 p-sm-3'>
       <div className="lottoHomeContainer p-2 my-4 d-flex align-items-center justify-content-between ">
                    {lottoHome.map((item) => {
                        return <NavLink to={item.link} key={item.id}>
                            <div className='d-flex flex-column align-items-center'>
                                <img src={item.img} />
                                <p >{item.title}</p>
                            </div>
                        </NavLink>
                    })}
     </div>
     <div className="rounded-4 my-3 bg-red2 py-2 px-3">
        <div className="d-flex align-items-center justify-content-between">
            <p className='fw-semibold'>Date</p>
            <p  className='fw-semibold'>3D</p>
        </div>
        <div className="d-flex align-items-center justify-content-between">
            <p  className='fw-semibold'>16.5.2024</p>
            <p  className='fw-semibold'>111</p>
        </div>
     </div>
     <div className="rounded-4 my-3 bg-red2 py-2 px-3">
        <div className="d-flex align-items-center justify-content-between">
            <p className='fw-semibold'>Date</p>
            <p  className='fw-semibold'>3D</p>
        </div>
        <div className="d-flex align-items-center justify-content-between">
            <p  className='fw-semibold'>16.5.2024</p>
            <p  className='fw-semibold'>111</p>
        </div>
     </div>
     <div className="rounded-4 my-3 bg-red2 py-2 px-3">
        <div className="d-flex align-items-center justify-content-between">
            <p className='fw-bold'>Date</p>
            <p  className='fw-bold'>3D</p>
        </div>
        <div className="d-flex align-items-center justify-content-between">
            <p  className='fw-semibold'>16.5.2024</p>
            <p  className='fw-semibold'>111</p>
        </div>
     </div>
     <button  className='border twoDBetBtn bg-main border mt-2 py-2 px-4 rounded-3 text-white fw-bold'>
                <Link to={'/3d/bet'}>ထိုးမည်</Link>
        </button>
    </div>
  )
}

export default ThreeDPage