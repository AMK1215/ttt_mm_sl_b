import React, {  useState } from "react";
import { BiEdit } from "react-icons/bi";
 import { MdDelete } from "react-icons/md";
import dashed from "../../assets/img/dashed.png";
import { useNavigate } from "react-router-dom";
 import { Modal, Spinner } from "react-bootstrap";
 

const TwoDConfirmPage = () => {
     const navigate = useNavigate();
     const [total, setTotal] = useState(1000);
     const [smShow, setSmShow] = useState(false);
    const [betAmount, setBetAmount] = useState(0);
    const [num, setNum] = useState("");
    const betData=[{
        num:16,amount:1000
    }]
    //edit code start
    const popUpModal = (num, amount) => {
        setSmShow(true);
        setBetAmount(amount);
        setNum(num);
    }
    const editBet = (num, amount) => {
         setSmShow(false);
    }
     //confirm bet start
    const confirm = (e) => {
      e.preventDefault();
      navigate('/2d')
     };
    //confirm bet end

  return (
    <>
      <div className="p-2 px-sm-3">
        <div
          style={{
            background: "#333c74",
             height: "400px",
            overflowY: "scroll",
          }}
          className="p-3 rounded-3  "
        >
          <h4 className="fw-bold text-center">ထိုးမည့် ဂဏန်းများ </h4>
          <div className="row mt-4 mb-3 mx-auto">
            <div className="col-3">
              <small>စဉ်</small>
            </div>
            <div className="col-3">
              <small>ဂဏန်း</small>
            </div>
            <div className="col-3">
              <small>ပမာဏ</small>
            </div>
            <div className="col-3">
              <small>ပြင်/ဖျက်</small>
            </div>
          </div>
          {betData &&
            betData.map((amount, index) => (
              <div className="row mb-2" key={index}>
                <div className="col-3">
                  <small>{++index}</small>
                </div>
                <div className="col-3">
                  <small>{amount.num}</small>
                </div>
                <div className="col-3">
                  <small>{amount.amount.toLocaleString()}</small>
                </div>
                <div className="col-3">
                  <div className="d-flex align-items-center gap-1">
                    <BiEdit size={25} onClick={() => popUpModal(amount.num, amount.amount)} />
                    <MdDelete
                      color="red"
                      size={25}
                      onClick={() => deleteBet(amount.num)}
                    />
                  </div>
                </div>
              </div>
            ))}
        </div>
        <div className="mx-auto text-center" style={{ width: "98%" }}>
          <img
            src={dashed}
            style={{ width: "100%", height: "auto", marginTop: "-26px" }}
          />
        </div>
        <div
          className="p-3 rounded-3 mb-5"
          style={{   marginTop: "-20px" }}
        >
          <div
            className="p-3 text-center rounded-3"
            style={{ background: "#333c74" }}
          >
            <h5 className="fw-bold">
              {total.toLocaleString()}
              <small style={{ color: "gainsboro" }}>MMK</small>
            </h5>
          </div>
        </div>
      </div>
      <div className="py-2 twoDBetBtns  bg-main mx-auto w-full d-flex gap-2 justify-content-center">
        <button
          className=" chooseNumDelBtn  py-2 px-4 rounded-3"
          onClick={() => removeAll()}
        >
          ဖျက်မည်
        </button>
           <button type="submit" className="bg-main border text-white py-2 px-4 rounded-3" onClick={confirm}>
            <small>
            ထိုးမည်
            </small>
          </button>
       </div>

      <Modal
        size="sm"
        show={smShow}
        onHide={() => setSmShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton className="bg-blue text-white">
          <Modal.Title id="example-modal-sizes-title-sm">
            <small>({num}) ထိုးကြေးပြင်ရန် </small>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-blue text-white">
          <input type="number" 
          className="form-control bg-blue betAmount text-white"
          onChange={e => setBetAmount(e.target.value)}
          value={betAmount}
          />
          <div className="d-flex justify-content-end mt-3">
            <button className="btn btn-sm btn-success" onClick={() => editBet(num, betAmount)}>ပြင်မည်</button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default TwoDConfirmPage;