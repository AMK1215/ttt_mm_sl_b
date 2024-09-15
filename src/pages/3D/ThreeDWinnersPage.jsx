import prize from '../../assets/img/prize.png'
import LottoAppMenu from '../../components/2D/LottoAppMenu';
const ThreeDWinnersPage = () => {
    const winnerLists=[
       {id:1,name:'Shoon Thiri May ',img:'https://new-static-ui.vercel.app/assets/img/profile.png',bet:'30,000',win:'2,400,000'},
       {id:2,name:'Shoon Thiri May ',img:'https://new-static-ui.vercel.app/assets/img/profile.png',bet:'30,000',win:'2,400,000'},
       {id:3,name:'Shoon Thiri May ',img:'https://new-static-ui.vercel.app/assets/img/profile.png',bet:'30,000',win:'2,400,000'},
       {id:4,name:'Shoon Thiri May ',img:'https://new-static-ui.vercel.app/assets/img/profile.png',bet:'30,000',win:'2,400,000'},
       {id:5,name:'Shoon Thiri May ',img:'https://new-static-ui.vercel.app/assets/img/profile.png',bet:'30,000',win:'2,400,000'},
   ];
 return (
  <>
  <LottoAppMenu/>
    <div className='p-2 p-sm-3'>
           <h5 className="text-center fw-bold mt-3 mb-4 " >3D ကံထူးရှင်များ စာရင်း</h5>
           {/* <div style={{background:'#2c355d'}}  className=" p-3 d-flex align-items-center justify-content-between rounded-4">
       <div>
         <h6>Updated at:</h6>  
         <h6>Nov 17, 2023, 04:30 PM</h6>
       </div>
       <h3 className="fw-bold">87</h3>
     </div> */}
     <div className="my-4">
       {winnerLists.map((winner)=>{
           return <div style={{background:'#2c355d'}}   className='cursor-pointer mb-2 p-2 rounded-4 '>
                  <div className='d-flex justify-content-between flex-nowrap align-items-center '>
                  <p className='mb-2 d-block'>Player1</p>
                     <p className='mb-2 d-block'>123</p>
                 <img src={prize} style={{width:'20px',height:'20px'}} />
                  </div>
                  <marquee behavior="" direction="left">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur corporis quidem dolores asperiores quo culpa odit exercitationem ex nam impedit? Ipsum ut autem distinctio dolorem doloribus soluta debitis culpa error?
                  </marquee>
            </div>
       })}
     </div>

   </div>
   </>
 )
}

export default ThreeDWinnersPage