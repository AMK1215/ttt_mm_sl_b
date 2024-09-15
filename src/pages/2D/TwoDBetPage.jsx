import React, { useState } from 'react'
import TwoDChooseOption from '../../components/2D/TwoDChooseOption'
 import { Form, Modal } from 'react-bootstrap'
import info from '../../assets/img/info.png';
import info2 from '../../assets/img/info2.png';
  import '../../assets/css/chooseNumber.css';
import LottoAppMenu from '../../components/2D/LottoAppMenu';
import { useNavigate } from 'react-router-dom';
import UserWallet from '../../components/2D/UserWallet';

const TwoDBetPage = () => {
    const navigate= useNavigate()
    const getActiveBarColor = (percent) => {
        return percent === 100 ? '#00CD15' : percent >= 90 ? '#FF0000' : percent > 50 ? '#FF7A00' : percent < 50 && percent > 0 ? '#00CD15' : ''
    }
    const numbers = [
        { number: '00', percent: 0 },
        { number: '01', percent: 30, },
        { number: '02', percent: 80, },
        { number: '03', percent: 90 },
        { number: '04', percent: 100, },
        { number: '05', percent: 80, },
        { number: '06', percent: 40, },
        { number: '07', percent: 100, },
        { number: '08', percent: 0, },
        { number: '09', percent: 0, },
    ]
    const numbers2 = Array.from({ length: 90 }, (_, index) => index + 10);
    const colorOptions = [
        { id: 1, color: '#00CD15', text: '၅၀% အောက်' },
        { id: 2, color: '#FF7A00', text: '၅၀% မှ ၉၀% ကြား' },
        { id: 3, color: '#FF0000', text: '၉၀% အထက်' },
        { id: 4, color: '#AE9F9E', text: 'ထိုးငွေပြည့်သွားပါပြီ' },
    ]
    const times=['10:30 AM','12:00 AM','02:30 AM','04:30 AM']
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [selectedNumbers,setSelectedNumbers]=useState([]);
    const addSelectedNumbers=(num)=>{
        if(selectedNumbers.includes(num)){
          return  setSelectedNumbers(selectedNumbers.filter((n)=>n!=num))
        }else{
            setSelectedNumbers([...selectedNumbers,num])
        }
     }
  return (<>
  <LottoAppMenu/>
  <div className="mt-3">
  <UserWallet/>
  </div>
    <div className='px-2 pt-2 p-sm-3'>
       <TwoDChooseOption/>
      <div className=" ">
      <div className=" ">
        <div className="d-flex align-items-center justify-content-between  mb-2">
            <div className="d-flex align-items-center gap-2">
             <small className='text-center p-0 m-0 mb-1 '>ပိတ်ရန်ကျန်ချိန် <small className="fw-bold">12:01 PM</small></small>
            </div>
            <select name="" id="">
                {times.map((time)=>{
                    return <option key={time} value={time}>{time}</option>
                })}
             </select>
        </div>
        <Form>
            <small className='fw-semibold'>လောင်းကြေးထည့်ပါ။</small>
                    <Form.Group className="mb-3 mt-1" controlId="exampleForm.ControlInput1">
                        <Form.Control type="number" placeholder="အနည်းဆုံး ၁၀၀ကျပ်" />
                    </Form.Group>
                </Form>

                        <div onClick={handleShow} className="cursorPointer d-flex align-items-center">
                            <img src={info} />
                            <small>အရောင်ရှင်းလင်းချက်</small>
                        </div>

                        <Modal className='lottoModal' show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>
                                <img src={info2} />
                                    <small>အရောင်ရှင်းလင်းချက်</small>
                                </Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <small  >ထီထိုးငွေ ၁၀၀% ပြည့်ပါက ဂဏန်းပိတ်ပါမည်။</small>
                                <div className="my-3">
                                    {colorOptions.map((item) => {
                                        return <div key={item.id} className=" mb-3 d-flex align-items-center gap-2">
                                            <div style={{ background: item.color, width: '15px', height: '15px', borderRadius: '100%' }}></div>
                                            <small>{item.text}</small>
                                        </div>
                                    })}
                                </div>
                            </Modal.Body>

                        </Modal>
                    </div>
                       <div className="twoDNumbers   py-3 px-2  ">
                        <div className="d-flex align-items-center justify-content-between flex-wrap gap-3">
                            {numbers.map((item) => {
                                return <div onClick={()=>addSelectedNumbers(item.number)} className={`cursorPointer rounded-3 text-center numberContainer ${selectedNumbers.includes(item.number) ? "bg-red2" : "bg-stone"}`}>
                                    <p className='number'>{item.number}</p>
                                    <div className="bar" >
                                        <div className="activeBar" style={{ width: item.percent + '%', background: getActiveBarColor(item.percent) }}>
                                        </div>
                                    </div>
                                </div>
                            })}{numbers2.map((item) => {
                                return <div onClick={()=>addSelectedNumbers(Number(item))} className={`cursorPointer rounded-3 text-center numberContainer ${selectedNumbers.includes(item) ? "bg-red2" : "bg-stone"}`}>
                                    <p className='number'>{item}</p>
                                    <div className="bar" >
                                        <div className="activeBar" style={{ width: '0%', background: '' }}>
                                        </div>
                                    </div>
                                </div>
                            })}
                        </div>
                    </div>

             </div>
     </div>
     <div className="betBtns  bg-main ">
       <div className="py-2 mx-auto d-flex gap-2 justify-content-center">
       <button className=" chooseNumDelBtn  py-2 px-4 rounded-3">ဖျက်မည်</button>
       <button onClick={()=>navigate('/2d/confirm')} className=" bg-main border text-white py-2 px-4 rounded-3">
        <small>ထိုးမည်</small>
       </button>
   </div>
   </div>
   </>
  )
}

export default TwoDBetPage