import React from "react";
 

export default function ThreeDHistoryDetail({ show, slip, no }) {
 
  let records =[
    {win_lose:0,bet_digit:303,sub_amount:3000}
  ];
  console.log(records);
  // return;

  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <div>
          <button
            className="btn btn-sm btn-outline-light mb-3"
            onClick={() => show(slip)}
          >
            <i className="fas fa-arrow-left"></i> ရှေ့သို့
          </button>
        </div>
        <div>
            <h5 className="fw-bold">Slip: {no}</h5>
        </div>
      </div>

      {records &&
        records.map((record, index) => (
          <div
            className="d-flex align-items-center justify-content-between my-3"
            key={index}
          >
            <div>
              <p className="fw-bold d-block mb-2">နိုင်/ရှုံး</p>
              {record.win_lose === 0 && (
                <p className="d-block fw-bold text-warning">
                  စောင့်ဆိုင်း
                </p>
              )}
              {record.win_lose === 1 && (
                <p
                  className={`d-block fw-bold text-${
                    record.prize_sent === 1 ? "success" : "danger"
                  }`}
                >
                  {record.prize_sent === 1 ? "နိုင်" : "ရှုံး"}
                </p>
              )}
            </div>
            <div>
              <p className="fw-bold d-block mb-2">3D</p>
              <p className="d-block" style={{ color: "#FF1267" }}>
                {record.bet_digit}
              </p>
            </div>
            <div>
              <p className="fw-bold d-block mb-2">Bet (MMK)</p>
              <p className="d-block text-warning">
                {record.sub_amount}
              </p>
            </div>
          </div>
        ))}
    </>
  );
}