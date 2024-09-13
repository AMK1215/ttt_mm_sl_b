import { useDebugValue, useEffect, useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import '../../assets/css/navbar.css'
import { IoMdClose, IoMdRefreshCircle } from "react-icons/io";
import home from '../../assets/img/home.svg';
import logo from '../../assets/img/logo.png';
import money from '../../assets/img/money.png';
import register from '../../assets/img/register.svg';
import promotion from '../../assets/img/promotion.svg';
import trophy from '../../assets/img/trophy.svg';
import profile from '../../assets/img/profile.svg';
import contact from '../../assets/img/contact.svg';
import deposit from '../../assets/img/deposit.svg';
import about from '../../assets/img/about.svg';
import { Link, useNavigate } from 'react-router-dom';
import { FaViber } from 'react-icons/fa';
import { HiOutlineMenuAlt2 } from 'react-icons/hi';
import useFetch from "../../hooks/useFetch";
import BASE_URL from "../../hooks/baseURL";
import { BsArrowRepeat } from 'react-icons/bs';
import { FaRepeat } from 'react-icons/fa6';
import { Button } from 'react-bootstrap';
import LanguageDropdown from '../LanguageDropdown';
import social24 from '../../assets/img/social24.svg'
import line from '../../assets/img/lineW.svg'
import tele from '../../assets/img/telew.svg'
import viber from '../../assets/img/viberw.svg'
import { FiToggleLeft, FiToggleRight } from 'react-icons/fi';
 
function Navbar() {
  const navigate=useNavigate();
     const navLinks=[
        { img:home,name:'Home',link:'/'},
         {img:profile,name:'My Information',link:'/information?tab=profile'},
        {img:money,name:'Deposit/WithDraw',link:'/information?tab=transfer'},
        {img:promotion,name:'Promotion',link:'/promotion'},
        // {img:promotion,name:'Ranking',link:'/ranking'},
         {img:contact,name:'Contact Us',link:'/contact'},
        {img:about,name:'About Us',link:'/about'},
     ];
  const [show, setShow] = useState(false);
  const socials=[
    {img:social24,link:'/'},{img:line,link:'/'},{img:tele,link:'/'},{img:viber,link:'/'}
  ]
  const savedBgStatus=localStorage.getItem('bg-status')
  const [bgPlayStatus,setBgPlayStatus]=useState(null);
  useEffect(()=>{
    if(savedBgStatus) setBgPlayStatus(savedBgStatus)
      else setBgPlayStatus('play')
  },[])
  const bgStatusToggle=()=>{
    const newStatus=bgPlayStatus==='play' ? 'not-play' : 'play'
    if(bgPlayStatus==='play') {
      setBgPlayStatus('not-play')
    }else setBgPlayStatus('play')
    localStorage.setItem('bg-status',newStatus)
    navigate('/')
   }
  
  return (
    <>
        <div className='navbar app-gradient py-0 px-2 shadow-lg '> 
          <div className="d-flex align-items-center gap-1 gap-sm-2">
               <div onClick={()=>setShow(true)} className=" cursor-pointer py-1 px-2 rounded   text-white" style={{background:'#00000042'}}>
                <HiOutlineMenuAlt2 size={25}   />
              </div>
             <Link to={'/'}>
              <img src={logo} className="navLogo" />
            </Link>
          </div>
             <div className="d-flex align-items-center gap-1 gap-sm-2">
              {/* <Link to={'/information?tab=transfer'} >
                <img src={deposit} className='navDepositImg' />
              </Link> */}
              <div>
                <Link to={'/information?tab=profile'} >
                   <div className="d-flex align-items-center ">
                    <div>
                      <small className="d-block  py-0 my-0">user@123</small>
                      <div className="d-flex   py-0 my-0">
                        <small  >10000Ks</small>
                        
                        <IoMdRefreshCircle color='#00EF2C'  size={22} />
                       </div>
                    </div>
                    <div>
                    <img src={profile} className='navProfileImg' />
                     </div>
                  </div>
                   
                </Link>
              </div>
            </div>
         </div>
        <Offcanvas className='sidebar text-white ' show={show}  onHide={()=>setShow(false)}>
          <div className=" px-sm-2">
            <Offcanvas.Header className=' w-100'>
              <Offcanvas.Title className='w-100 d-flex align-items-center justify-content-between'>
                <p> </p>
                <IoMdClose onClick={()=>setShow(false)} className='cursor-pointer' size={30} color='#fff'  />
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className='w-100'>
              {navLinks.map((item,index)=>{
                  return  <div onClick={()=>{
                    navigate(item.link)
                    setShow(false)
                  }} key={index} className="cursor-pointer  mb-3 d-flex align-items-center gap-2 gap-sm-3">
                      <img src={item.img} className='sideBarImg' />
                        <p className='  sidebarTitle'>{item.name}</p>
                      </div>
               })}
                <div onClick={bgStatusToggle} className="d-flex align-items-center gap-2">
              {bgPlayStatus==='play' ? <FiToggleRight  size={35} />  :
                <FiToggleLeft size={35} /> }
                <p>Background Music Open</p>
               </div>
               <div className="text-center mt-4">
               <div className="bg-red mb-3 button-bottom rounded-4">
          <div className="text-center py-2 ">
            <h5 className="fw-semibold mb-0 pb-0">Logout</h5>
          </div>
        </div>
                  </div>
                  <div className="d-flex align-items-center gap-3 justify-content-center">
                  {socials.map((item,index)=>{
                    return <Link key={index} to={item.link} >
                    <img src={item.img} className='sidebarSocialIcon' />
                  </Link>
                  })}
                </div>
                <h5 className=' sidebarTeleText text-center fw-semibold mt-4 mb-3'>
                    Telegram
                <span className="mx-1 mx-sm-3">|</span>
                0912346590</h5>
                <h5 className='sidebarViberText text-center fw-semibold'>Viber  
                <span className="mx-1 mx-sm-3">|</span>
                  0912346590</h5>
                 
            </Offcanvas.Body>
          </div>
        </Offcanvas>
    </>
  );
}

export default Navbar;