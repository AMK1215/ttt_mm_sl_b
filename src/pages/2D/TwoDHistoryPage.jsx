import { useState } from "react";
import calendar from '../../assets/img/calendar.png'

const TwoDHistory = () => {
    const [session, setSession] = useState("morning");
    const [detail, setDetail] = useState(false);
    const [slip, setSlip] = useState(null);
  
     
  
    const date = new Date();
    const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
    const month =
      date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
    const year = date.getFullYear();
    const today = `${day}-${month}-${year}`;
  
    const showDetail = () => {
      setDetail(!detail);
    }
  
    return (
      <div className="pt-4 pb-5 container">
        {!detail && (
          <>
            <h5 className="text-center fw-bold">2D တစ်နေ့တာ မှတ်တမ်း</h5>
            <h5 className="d-block text-center fw-semibold mb-4">{today}</h5>
            <div className="d-flex align-items-center justify-content-center gap-3">
              <div
                onClick={() => setSession("morning")}
                className={`text-center rounded-4 py-3 px-1 w-100 ${
                  session == "morning" ? "activeBtn" : ""
                }`}
                style={{
                  background:
                    "linear-gradient(104.11deg, #212D77 8.54%, #0788FF 92.1%)",
                  cursor: "pointer",
                }}
              >
                <img src={calendar} style={{ width: "20px", height: "20px" }} />
                <p>Morning</p>
                <small>ထီထိုးမှတ်တမ်း</small>
              </div>
              <div
                onClick={() => setSession("evening")}
                className={`text-center rounded-4 py-3 px-1 w-100 ${
                  session == "evening" ? "activeBtn" : ""
                }`}
                style={{
                  background:
                    "linear-gradient(104.11deg, #212D77 8.54%, #0788FF 92.1%)",
                  cursor: "pointer",
                }}
              >
                <img src={calendar} style={{ width: "20px", height: "20px" }} />
                <p>Evening</p>
                <small>ထီထိုးမှတ်တမ်း</small>
              </div>
            </div>
            <div className="my-4 px-2">
              {session === "morning" && (
                <div>
                        <div className="mb-3 text-center">
                        <div>
                          <div className="d-flex align-items-center justify-content-between">
                            <div>
                              <p className="fw-bold ">စလစ်</p>
                              <parseInt className="d-block">
                                456
                              </parseInt>
                            </div>
                            <div>
                              <p className="fw-bold d-block">Session</p>
                              <p className="d-block">Morning</p>
                            </div>
                            <div>
                              <p className="fw-bold d-block">ထိုးကြေး</p>
                              <p className="d-block text-warning">
                                3000
                              </p>
                            </div>
                          </div>
                        </div>
                        <hr />
                      </div>
                  </div>
              )}
              {session === "evening" && (
                <div>
                <div className="mb-3 text-center">
                <div>
                  <div className="d-flex align-items-center justify-content-between">
                    <div>
                      <p className="fw-bold d-block">စလစ်</p>
                      <p className="d-block">
                        123
                      </p>
                    </div>
                    <div>
                      <p className="fw-bold d-block">Session</p>
                      <p className="d-block">Evening</p>
                    </div>
                    <div>
                      <p className="fw-bold d-block">ထိုးကြေး</p>
                      <p className="d-block text-warning">
                        5000
                      </p>
                    </div>
                  </div>
                </div>
                <hr />
              </div>
          </div>
              )}
            </div>
          </>
        )}
        {/* {detail && <TwoDSlip slip={slip} show={showDetail} />} */}
      </div>
    );
  };
  
  export default TwoDHistory;