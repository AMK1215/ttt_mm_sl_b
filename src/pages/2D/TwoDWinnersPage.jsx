const TwoDWinnersPage = () => {
       const winnerLists=[
          {id:1,name:'Shoon Thiri May ',img:'https://new-static-ui.vercel.app/assets/img/profile.png',bet:'30,000',win:'2,400,000'},
          {id:2,name:'Shoon Thiri May ',img:'https://new-static-ui.vercel.app/assets/img/profile.png',bet:'30,000',win:'2,400,000'},
          {id:3,name:'Shoon Thiri May ',img:'https://new-static-ui.vercel.app/assets/img/profile.png',bet:'30,000',win:'2,400,000'},
          {id:4,name:'Shoon Thiri May ',img:'https://new-static-ui.vercel.app/assets/img/profile.png',bet:'30,000',win:'2,400,000'},
          {id:5,name:'Shoon Thiri May ',img:'https://new-static-ui.vercel.app/assets/img/profile.png',bet:'30,000',win:'2,400,000'},
      ];
    return (
      <div className='p-2 p-sm-3'>
              <h5 className="text-center fw-bold mt-3 mb-4 " style={{color:'#ABB1CC'}}>2D ကံထူးရှင်များ စာရင်း</h5>
              {/* <div style={{background:'#2c355d'}}  className=" p-3 d-flex align-items-center justify-content-between rounded-4">
          <div>
            <h6>Updated at:</h6>  
            <h6>Nov 17, 2023, 04:30 PM</h6>
          </div>
          <h3 className="fw-bold">87</h3>
        </div> */}
        <div className="my-4">
          {winnerLists.map((winner)=>{
              return <div style={{background:'#2c355d'}}   className='cursor-pointer mb-2 p-2 rounded-4 d-flex justify-content-between flex-nowrap align-items-center  gap-2 gap-sm-2'>
                  <div className="d-flex align-items-center gap-2">
                  <img style={{width:'40px',height:'40px',borderRadius:'100%'}} src={winner.img} />
                  <div className=" gap-2">
                  <small className='mb-2 d-block'>အမည်</small>
                  <small className='mb-0'>{winner.name}</small>
                   </div>
                  </div>
                  <div>
                      <small className='mb-2 d-block'>အချိန်</small>
                      <small>Evening</small>
                  </div>
                  {/* <div>
                      <small className='mb-2 d-block'>ထိုးငွေ</small>
                      <small>{winner.bet}</small>
                  </div> */}
                  <div>
                      <small className='mb-2 d-block'>ထီပေါက်ငွေ</small>
                      <small>{winner.win}</small>
                  </div>
              </div>
          })}
        </div>
  
      </div>
    )
  }
  
  export default TwoDWinnersPage