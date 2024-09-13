import React from 'react'
import { Form, InputGroup } from 'react-bootstrap'
import { BiLock, BiPhone, BiUser } from 'react-icons/bi'
import { FaIdCard } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import social24 from '../assets/img/social24.svg'
import line from '../assets/img/lineW.svg'
import tele from '../assets/img/telew.svg'
import viber from '../assets/img/viberw.svg'
const RegisterPage = () => {
  const socials=[
    {img:social24,link:'/'},{img:line,link:'/'},{img:tele,link:'/'},{img:viber,link:'/'}
  ]
  return (
       <div className='authBg py-4 mb-5'>
      <h1 className="fw-bold text-center mb-3">REGISTER</h1>
    
      <form action="" className="authForm mx-auto my-2">
      <InputGroup className='mb-3'>
      <InputGroup.Text className='formIcon' id="basic-addon1">
        <BiUser size={20} />
      </InputGroup.Text>
        <Form.Control
          placeholder="game account"
           aria-describedby="basic-addon1"
        />
      </InputGroup>
      <InputGroup className='mb-3'>
      <InputGroup.Text className='formIcon' id="basic-addon1">
        <FaIdCard size={20} />
      </InputGroup.Text>
        <Form.Control
          placeholder="username"
           aria-describedby="basic-addon1"
        />
      </InputGroup>
      <InputGroup className='mb-3'>
      <InputGroup.Text className='formIcon' id="basic-addon1">
        <BiPhone size={20} />
      </InputGroup.Text>
        <Form.Control
          placeholder="phone number"
           aria-describedby="basic-addon1"
        />
      </InputGroup>
      <InputGroup className='mb-3'>
      <InputGroup.Text className='formIcon' id="basic-addon1">
        <BiLock size={20} />
      </InputGroup.Text>
        <Form.Control
          placeholder="password"
        type='password'
        />
      </InputGroup>
      <InputGroup className='mb-3'>
      <InputGroup.Text className='formIcon' id="basic-addon1">
        <BiLock size={20} />
      </InputGroup.Text>
        <Form.Control
          placeholder="confirm password"
        type='password'
        />
      </InputGroup>
     
      <div className="authBtns ">
       
       <div className=" mb-3 rounded-4 bg-red button-bottom pb-2">
         <div className="text-center pt-1">
            <h4 className='m-0 pb-0'>REGISTER</h4>
         </div>
       </div>
        {/* <Link to={'/register'}>
       <div className=" mb-3 rounded-4 bg-black2 button-bottom pb-2">
         <div className="text-center pt-2">
            <h4 className="mb-0 pb-0">NEW MEMBER</h4>
         </div>
       </div>
       </Link> */}
    </div>
     </form>
     <div className="mt-4 d-flex align-items-center gap-3 justify-content-center">
                 {socials.map((item,index)=>{
                   return <Link key={index} to={item.link} >
                   <img src={item.img} className='sidebarSocialIcon' />
                 </Link>
                 })}
               </div>
    </div>
  )
}

export default RegisterPage
