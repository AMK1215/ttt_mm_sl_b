import React from 'react'
import { Carousel } from 'react-bootstrap'
import b1 from '../../assets/img/b1.png'
import b2 from '../../assets/img/b2.png'
import b3 from '../../assets/img/b3.png'
import b4 from '../../assets/img/b4.png'
import b5 from '../../assets/img/b5.png'

const Carousels = () => {
  const imgs=[b1,b2,b3,b4,b5]
  return (
    <Carousel>
      {imgs.map((img,index)=>{
        return  <Carousel.Item key={index}>
          <img src={img} className='bannerImg' />
        </Carousel.Item>
      })}
   
    </Carousel>
  )
}

export default Carousels
