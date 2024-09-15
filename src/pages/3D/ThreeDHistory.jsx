import React, { useEffect, useState } from "react";
import ThreeDHistoryDetail from "../../components/3D/ThreeDHistoryDetail";
import LottoAppMenu from "../../components/2D/LottoAppMenu";
  
const ThreeDHistory = () => {
 
  const [show, setShow] = useState(false);
  const [slip, setSlip] = useState(null);
  const [number, setNumber] = useState(0);
 const records=[
    {slip_no:'000001-shwebo-3d-2024-08-20-06:45:42'},
    {slip_no:'000001-shwebo-3d-2024-08-20-06:45:42'},
 ]
   

  const detail = (slip, no) => {
    setShow(!show);
    setSlip(slip);
    setNumber(no);
    console.log('slip',slip)
  }

  return (<>
    <LottoAppMenu/>
    <div className="pt-4 pb-5 container">
      <h5 className="text-center fw-bold">3Dထီထိုးမှတ်တမ်း</h5>
      {/* <span className="d-block text-center fw-bold mb-4">{today}</span> */}
      <div className="my-4 px-2">
        {!show && (
            <div>
                {records &&
                records.map((history, index) => (
                    <button key={index} className="mb-3 btn btn btn-outline-light w-100 text-start" onClick={() => detail(history.slip_no, index)}>
                        <span className="d-block">Slip #{++index}</span>
                        <small className="text-start d-block">{history.slip_no}</small>
                    </button>
                ))}
            </div>
        )}
        {show && (
            <ThreeDHistoryDetail show={detail} slip={slip}   no={number} />
        )}
      </div>
    </div>
    </>
  );
};

export default ThreeDHistory;