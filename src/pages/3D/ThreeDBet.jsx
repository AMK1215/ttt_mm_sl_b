import React, { useEffect, useState } from "react";
 import { Form, Modal } from "react-bootstrap";
 import "../../assets/css/threed.css";
import maze from "../../assets/img/maze.png";
import flash from "../../assets/img/flash.png";
import repeat from "../../assets/img/repeat.png";
 import { Link, useNavigate } from "react-router-dom";
 import info from '../../assets/img/info.png';
 import info2 from '../../assets/img/info2.png';
import ThreeDAMyanChoosePage from "../../components/3D/ThreeDAMyanChoose";
import LottoAppMenu from "../../components/2D/LottoAppMenu";
import UserWallet from "../../components/2D/UserWallet";
const ThreeDBetPage = () => {
    const [selectedNumRange,setSelectedNumRange]=useState('000-099');
    const [selectedRangeNumbers,setSelectedRangeNumbers]=useState([]);
   const [amount, setAmount] = useState(100);
  const [inputs, setInputs] = useState([]);
   const [digit, setDigit] = useState("");
  const [digits, setDigits] = useState([]);
  const navigate = useNavigate();

  const [quickSelect, setQuickSelect] = useState(false);
  const [kwat, setKwat] = useState([]);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleKwat = () => {
    
  }

  const handleQuick = () => setQuickSelect(!quickSelect);

  const chooseNumber = (e) => {
    e.preventDefault();
    if (digit.length === 3) {
      if (!digits.includes(digit)) {
        setDigits([...digits, digit]);
      } else {
        toast.error("နံပါတ် ထပ်နေပါသည်။", {
          position: "top-right",
          theme: "dark",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
        });
      }
    } else {
      toast.error("ဂဏန်းသုံးလုံး ပြည့်အောင် ရေးပေးပါ။", {
        position: "top-right",
        theme: "dark",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
      });
    }
    setDigit("");
  };

  const addNumber = (num) => {
    if(!digits.includes(num)){
      setDigits([...digits, num]);
    }else{
      toast.error("နံပါတ် ထပ်နေပါသည်။", {
        position: "top-right",
        theme: "dark",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
      });
    }
  };
  console.log(digits);

  const remove = (num) => {
    setDigits(digits.filter((item) => item !== num));
  };

  const removeAll = () => {
    setDigits([]);
  };

  useEffect(() => {
    setInputs(digits.map((item) => ({ num: item, amount: amount })));
  }, [digits]);

  //bet start
  const bet = (e) => {
    e.preventDefault();
    let betData = {
      totalAmount: amount * inputs.length,
      amounts: inputs,
    };
    console.log(betData);
     navigate("/3d/confirm");
  };
  //bet end
  //   console.log(inputs);
  const colorOptions = [
    { id: 1, color: '#00CD15', text: '၅၀% အောက်' },
    { id: 2, color: '#FF7A00', text: '၅၀% မှ ၉၀% ကြား' },
    { id: 3, color: '#FF0000', text: '၉၀% အထက်' },
    { id: 4, color: '#AE9F9E', text: 'ထိုးငွေပြည့်သွားပါပြီ' },
]
const getActiveBarColor = (percent) => {
    return percent === 100 ? '#00CD15' : percent >= 90 ? '#FF0000' : percent > 50 ? '#FF7A00' : percent < 50 && percent > 0 ? '#00CD15' : ''
}
const numbers3D=[
    {name:'000-099',
    value: [{ number: '000', percent: 40 },
            { number: '001', percent: 0 },
            { number: '002', percent: 80 },
            { number: '003', percent: 20 },
            { number: '004', percent: 50 },
            { number: '005', percent: 0 },
            { number: '006', percent: 20 },
            { number: '007', percent: 80 },
            { number: '008', percent: 50 },
            { number: '009', percent: 40 },
            { number: '010', percent: 0 },
            { number: '011', percent: 80 },
            { number: '012', percent: 20 },
            { number: '013', percent: 0 },
            { number: '014', percent: 50 },
            { number: '015', percent: 40 },
            { number: '016', percent: 20 },
            { number: '017', percent: 0 },
            { number: '018', percent: 80 },
            { number: '019', percent: 50 },
            { number: '020', percent: 40 },
            { number: '021', percent: 0 },
            { number: '022', percent: 20 },
            { number: '023', percent: 50 },
            { number: '024', percent: 80 },
            { number: '025', percent: 40 },
            { number: '026', percent: 0 },
            { number: '027', percent: 80 },
            { number: '028', percent: 50 },
            { number: '029', percent: 20 },
            { number: '030', percent: 0 },
            { number: '031', percent: 50 },
            { number: '032', percent: 40 },
            { number: '033', percent: 80 },
            { number: '034', percent: 20 },
            { number: '035', percent: 0 },
            { number: '036', percent: 50 },
            { number: '037', percent: 40 },
            { number: '038', percent: 80 },
            { number: '039', percent: 20 },
            { number: '040', percent: 0 },
            { number: '041', percent: 50 },
            { number: '042', percent: 40 },
            { number: '043', percent: 80 },
            { number: '044', percent: 0 },
            { number: '045', percent: 20 },
            { number: '046', percent: 50 },
            { number: '047', percent: 40 },
            { number: '048', percent: 80 },
            { number: '049', percent: 20 },
            { number: '050', percent: 0 },
            { number: '051', percent: 40 },
            { number: '052', percent: 50 },
            { number: '053', percent: 20 },
            { number: '054', percent: 80 },
            { number: '055', percent: 40 },
            { number: '056', percent: 0 },
            { number: '057', percent: 50 },
            { number: '058', percent: 80 },
            { number: '059', percent: 20 },
            { number: '060', percent: 0 },
            { number: '061', percent: 40 },
            { number: '062', percent: 50 },
            { number: '063', percent: 20 },
            { number: '064', percent: 0 },
            { number: '065', percent: 80 },
            { number: '066', percent: 40 },
            { number: '067', percent: 50 },
            { number: '068', percent: 0 },
            { number: '069', percent: 20 },
            { number: '070', percent: 80 },
            { number: '071', percent: 40 },
            { number: '072', percent: 50 },
            { number: '073', percent: 0 },
            { number: '074', percent: 80 },
            { number: '075', percent: 20 },
            { number: '076', percent: 40 },
            { number: '077', percent: 0 },
            { number: '078', percent: 50 },
            { number: '079', percent: 80 },
            { number: '080', percent: 20 },
            { number: '081', percent: 40 },
            { number: '082', percent: 0 },
            { number: '083', percent: 80 },
            { number: '084', percent: 50 },
            { number: '085', percent: 20 },
            { number: '086', percent: 40 },
            { number: '087', percent: 0 },
            { number: '088', percent: 80 },
            { number: '089', percent: 50 },
            { number: '090', percent: 0 },
            { number: '091', percent: 40 },
            { number: '092', percent: 20 },
            { number: '093', percent: 50 },
            { number: '094', percent: 80 },
            { number: '095', percent: 0 },
            { number: '096', percent: 40 },
            { number: '097', percent: 20 },
            { number: '098', percent: 50 },
            { number: '099', percent: 80 }
            ]},
    {name:'100-199',value:[
        { number: '100', percent: 40 },
        { number: '101', percent: 0 },
        { number: '102', percent: 80 },
        { number: '103', percent: 20 },
        { number: '104', percent: 50 },
        { number: '105', percent: 0 },
        { number: '106', percent: 20 },
        { number: '107', percent: 80 },
        { number: '108', percent: 50 },
        { number: '109', percent: 40 },
        { number: '110', percent: 0 },
        { number: '111', percent: 80 },
        { number: '112', percent: 20 },
        { number: '113', percent: 0 },
        { number: '114', percent: 50 },
        { number: '115', percent: 40 },
        { number: '116', percent: 20 },
        { number: '117', percent: 0 },
        { number: '118', percent: 80 },
        { number: '119', percent: 50 },
        { number: '120', percent: 40 },
        { number: '121', percent: 0 },
        { number: '122', percent: 20 },
        { number: '123', percent: 50 },
        { number: '124', percent: 80 },
        { number: '125', percent: 40 },
        { number: '126', percent: 0 },
        { number: '127', percent: 80 },
        { number: '128', percent: 50 },
        { number: '129', percent: 20 },
        { number: '130', percent: 0 },
        { number: '131', percent: 50 },
        { number: '132', percent: 40 },
        { number: '133', percent: 80 },
        { number: '134', percent: 20 },
        { number: '135', percent: 0 },
        { number: '136', percent: 50 },
        { number: '137', percent: 40 },
        { number: '138', percent: 80 },
        { number: '139', percent: 20 },
        { number: '140', percent: 0 },
        { number: '141', percent: 50 },
        { number: '142', percent: 40 },
        { number: '143', percent: 80 },
        { number: '144', percent: 0 },
        { number: '145', percent: 20 },
        { number: '146', percent: 50 },
        { number: '147', percent: 40 },
        { number: '148', percent: 80 },
        { number: '149', percent: 20 },
        { number: '150', percent: 0 },
        { number: '151', percent: 40 },
        { number: '152', percent: 50 },
        { number: '153', percent: 20 },
        { number: '154', percent: 80 },
        { number: '155', percent: 40 },
        { number: '156', percent: 0 },
        { number: '157', percent: 50 },
        { number: '158', percent: 80 },
        { number: '159', percent: 20 },
        { number: '160', percent: 0 },
        { number: '161', percent: 40 },
        { number: '162', percent: 50 },
        { number: '163', percent: 20 },
        { number: '164', percent: 0 },
        { number: '165', percent: 80 },
        { number: '166', percent: 40 },
        { number: '167', percent: 50 },
        { number: '168', percent: 0 },
        { number: '169', percent: 20 },
        { number: '170', percent: 80 },
        { number: '171', percent: 40 },
        { number: '172', percent: 50 },
        { number: '173', percent: 0 },
        { number: '174', percent: 80 },
        { number: '175', percent: 20 },
        { number: '176', percent: 40 },
        { number: '177', percent: 0 },
        { number: '178', percent: 50 },
        { number: '179', percent: 80 },
        { number: '180', percent: 20 },
        { number: '181', percent: 40 },
        { number: '182', percent: 0 },
        { number: '183', percent: 80 },
        { number: '184', percent: 50 },
        { number: '185', percent: 20 },
        { number: '186', percent: 40 },
        { number: '187', percent: 0 },
        { number: '188', percent: 80 },
        { number: '189', percent: 50 },
        { number: '190', percent: 0 },
        { number: '191', percent: 40 },
        { number: '192', percent: 20 },
        { number: '193', percent: 50 },
        { number: '194', percent: 80 },
        { number: '195', percent: 0 },
        { number: '196', percent: 40 },
        { number: '197', percent: 20 },
        { number: '198', percent: 50 },
        { number: '199', percent: 80 }
    ]
    },
    {name:'200-299',value:[
        { number: '200', percent: 40 },
        { number: '201', percent: 0 },
        { number: '202', percent: 80 },
        { number: '203', percent: 20 },
        { number: '204', percent: 50 },
        { number: '205', percent: 0 },
        { number: '206', percent: 20 },
        { number: '207', percent: 80 },
        { number: '208', percent: 50 },
        { number: '209', percent: 40 },
        { number: '210', percent: 0 },
        { number: '211', percent: 80 },
        { number: '212', percent: 20 },
        { number: '213', percent: 0 },
        { number: '214', percent: 50 },
        { number: '215', percent: 40 },
        { number: '216', percent: 20 },
        { number: '217', percent: 0 },
        { number: '218', percent: 80 },
        { number: '219', percent: 50 },
        { number: '220', percent: 40 },
        { number: '221', percent: 0 },
        { number: '222', percent: 20 },
        { number: '223', percent: 50 },
        { number: '224', percent: 80 },
        { number: '225', percent: 40 },
        { number: '226', percent: 0 },
        { number: '227', percent: 80 },
        { number: '228', percent: 50 },
        { number: '229', percent: 20 },
        { number: '230', percent: 0 },
        { number: '231', percent: 50 },
        { number: '232', percent: 40 },
        { number: '233', percent: 80 },
        { number: '234', percent: 20 },
        { number: '235', percent: 0 },
        { number: '236', percent: 50 },
        { number: '237', percent: 40 },
        { number: '238', percent: 80 },
        { number: '239', percent: 20 },
        { number: '240', percent: 0 },
        { number: '241', percent: 50 },
        { number: '242', percent: 40 },
        { number: '243', percent: 80 },
        { number: '244', percent: 0 },
        { number: '245', percent: 20 },
        { number: '246', percent: 50 },
        { number: '247', percent: 40 },
        { number: '248', percent: 80 },
        { number: '249', percent: 20 },
        { number: '250', percent: 0 },
        { number: '251', percent: 40 },
        { number: '252', percent: 50 },
        { number: '253', percent: 20 },
        { number: '254', percent: 80 },
        { number: '255', percent: 40 },
        { number: '256', percent: 0 },
        { number: '257', percent: 50 },
        { number: '258', percent: 80 },
        { number: '259', percent: 20 },
        { number: '260', percent: 0 },
        { number: '261', percent: 40 },
        { number: '262', percent: 50 },
        { number: '263', percent: 20 },
        { number: '264', percent: 0 },
        { number: '265', percent: 80 },
        { number: '266', percent: 40 },
        { number: '267', percent: 50 },
        { number: '268', percent: 0 },
        { number: '269', percent: 20 },
        { number: '270', percent: 80 },
        { number: '271', percent: 40 },
        { number: '272', percent: 50 },
        { number: '273', percent: 0 },
        { number: '274', percent: 80 },
        { number: '275', percent: 20 },
        { number: '276', percent: 40 },
        { number: '277', percent: 0 },
        { number: '278', percent: 50 },
        { number: '279', percent: 80 },
        { number: '280', percent: 20 },
        { number: '281', percent: 40 },
        { number: '282', percent: 0 },
        { number: '283', percent: 80 },
        { number: '284', percent: 50 },
        { number: '285', percent: 20 },
        { number: '286', percent: 40 },
        { number: '287', percent: 0 },
        { number: '288', percent: 80 },
        { number: '289', percent: 50 },
        { number: '290', percent: 0 },
        { number: '291', percent: 40 },
        { number: '292', percent: 20 },
        { number: '293', percent: 50 },
        { number: '294', percent: 80 },
        { number: '295', percent: 0 },
        { number: '296', percent: 40 },
        { number: '297', percent: 20 },
        { number: '298', percent: 50 },
        { number: '299', percent: 80 }
    ]
    },
    {name:'300-399',value: [
        { number: '300', percent: 40 },
        { number: '301', percent: 0 },
        { number: '302', percent: 75 },
        { number: '303', percent: 20 },
        { number: '304', percent: 50 },
        { number: '305', percent: 85 },
        { number: '306', percent: 10 },
        { number: '307', percent: 60 },
        { number: '308', percent: 30 },
        { number: '309', percent: 90 },
        { number: '310', percent: 45 },
        { number: '311', percent: 25 },
        { number: '312', percent: 55 },
        { number: '313', percent: 70 },
        { number: '314', percent: 95 },
        { number: '315', percent: 80 },
        { number: '316', percent: 35 },
        { number: '317', percent: 65 },
        { number: '318', percent: 50 },
        { number: '319', percent: 40 },
        { number: '320', percent: 85 },
        { number: '321', percent: 15 },
        { number: '322', percent: 90 },
        { number: '323', percent: 25 },
        { number: '324', percent: 60 },
        { number: '325', percent: 70 },
        { number: '326', percent: 10 },
        { number: '327', percent: 55 },
        { number: '328', percent: 75 },
        { number: '329', percent: 80 },
        { number: '330', percent: 30 },
        { number: '331', percent: 45 },
        { number: '332', percent: 95 },
        { number: '333', percent: 20 },
        { number: '334', percent: 85 },
        { number: '335', percent: 65 },
        { number: '336', percent: 50 },
        { number: '337', percent: 75 },
        { number: '338', percent: 90 },
        { number: '339', percent: 30 },
        { number: '340', percent: 60 },
        { number: '341', percent: 40 },
        { number: '342', percent: 20 },
        { number: '343', percent: 70 },
        { number: '344', percent: 95 },
        { number: '345', percent: 55 },
        { number: '346', percent: 85 },
        { number: '347', percent: 50 },
        { number: '348', percent: 90 },
        { number: '349', percent: 60 },
        { number: '350', percent: 45 },
        { number: '351', percent: 30 },
        { number: '352', percent: 75 },
        { number: '353', percent: 20 },
        { number: '354', percent: 85 },
        { number: '355', percent: 70 },
        { number: '356', percent: 50 },
        { number: '357', percent: 30 },
        { number: '358', percent: 90 },
        { number: '359', percent: 60 },
        { number: '360', percent: 40 },
        { number: '361', percent: 25 },
        { number: '362', percent: 75 },
        { number: '363', percent: 10 },
        { number: '364', percent: 65 },
        { number: '365', percent: 55 },
        { number: '366', percent: 80 },
        { number: '367', percent: 95 },
        { number: '368', percent: 50 },
        { number: '369', percent: 20 },
        { number: '370', percent: 70 },
        { number: '371', percent: 90 },
        { number: '372', percent: 35 },
        { number: '373', percent: 60 },
        { number: '374', percent: 45 },
        { number: '375', percent: 25 },
        { number: '376', percent: 85 },
        { number: '377', percent: 50 },
        { number: '378', percent: 95 },
        { number: '379', percent: 30 },
        { number: '380', percent: 65 },
        { number: '381', percent: 20 },
        { number: '382', percent: 80 },
        { number: '383', percent: 55 },
        { number: '384', percent: 70 },
        { number: '385', percent: 45 },
        { number: '386', percent: 90 },
        { number: '387', percent: 50 },
        { number: '388', percent: 85 },
        { number: '389', percent: 60 },
        { number: '390', percent: 30 },
        { number: '391', percent: 70 },
        { number: '392', percent: 45 },
        { number: '393', percent: 90 },
        { number: '394', percent: 25 },
        { number: '395', percent: 55 },
        { number: '396', percent: 75 },
        { number: '397', percent: 60 },
        { number: '398', percent: 40 },
        { number: '399', percent: 85 }
      ]
      },
    {name:'400-499',value:[
        { number: '400', percent: 40 },
        { number: '401', percent: 0 },
        { number: '402', percent: 75 },
        { number: '403', percent: 20 },
        { number: '404', percent: 50 },
        { number: '405', percent: 85 },
        { number: '406', percent: 10 },
        { number: '407', percent: 60 },
        { number: '408', percent: 30 },
        { number: '409', percent: 90 },
        { number: '410', percent: 45 },
        { number: '411', percent: 25 },
        { number: '412', percent: 55 },
        { number: '413', percent: 70 },
        { number: '414', percent: 95 },
        { number: '415', percent: 80 },
        { number: '416', percent: 35 },
        { number: '417', percent: 65 },
        { number: '418', percent: 50 },
        { number: '419', percent: 40 },
        { number: '420', percent: 85 },
        { number: '421', percent: 15 },
        { number: '422', percent: 90 },
        { number: '423', percent: 25 },
        { number: '424', percent: 60 },
        { number: '425', percent: 70 },
        { number: '426', percent: 10 },
        { number: '427', percent: 55 },
        { number: '428', percent: 75 },
        { number: '429', percent: 80 },
        { number: '430', percent: 30 },
        { number: '431', percent: 45 },
        { number: '432', percent: 95 },
        { number: '433', percent: 20 },
        { number: '434', percent: 85 },
        { number: '435', percent: 65 },
        { number: '436', percent: 50 },
        { number: '437', percent: 75 },
        { number: '438', percent: 90 },
        { number: '439', percent: 30 },
        { number: '440', percent: 60 },
        { number: '441', percent: 40 },
        { number: '442', percent: 20 },
        { number: '443', percent: 70 },
        { number: '444', percent: 95 },
        { number: '445', percent: 55 },
        { number: '446', percent: 85 },
        { number: '447', percent: 50 },
        { number: '448', percent: 90 },
        { number: '449', percent: 60 },
        { number: '450', percent: 45 },
        { number: '451', percent: 30 },
        { number: '452', percent: 75 },
        { number: '453', percent: 20 },
        { number: '454', percent: 85 },
        { number: '455', percent: 70 },
        { number: '456', percent: 50 },
        { number: '457', percent: 30 },
        { number: '458', percent: 90 },
        { number: '459', percent: 60 },
        { number: '460', percent: 40 },
        { number: '461', percent: 25 },
        { number: '462', percent: 75 },
        { number: '463', percent: 10 },
        { number: '464', percent: 65 },
        { number: '465', percent: 55 },
        { number: '466', percent: 80 },
        { number: '467', percent: 95 },
        { number: '468', percent: 50 },
        { number: '469', percent: 20 },
        { number: '470', percent: 70 },
        { number: '471', percent: 90 },
        { number: '472', percent: 35 },
        { number: '473', percent: 60 },
        { number: '474', percent: 45 },
        { number: '475', percent: 25 },
        { number: '476', percent: 85 },
        { number: '477', percent: 50 },
        { number: '478', percent: 95 },
        { number: '479', percent: 30 },
        { number: '480', percent: 65 },
        { number: '481', percent: 20 },
        { number: '482', percent: 80 },
        { number: '483', percent: 55 },
        { number: '484', percent: 70 },
        { number: '485', percent: 45 },
        { number: '486', percent: 90 },
        { number: '487', percent: 50 },
        { number: '488', percent: 85 },
        { number: '489', percent: 60 },
        { number: '490', percent: 30 },
        { number: '491', percent: 70 },
        { number: '492', percent: 45 },
        { number: '493', percent: 90 },
        { number: '494', percent: 25 },
        { number: '495', percent: 55 },
        { number: '496', percent: 75 },
        { number: '497', percent: 60 },
        { number: '498', percent: 40 },
        { number: '499', percent: 85 }
      ]
      },
    {name:'500-599',value:[
        { number: '500', percent: 40 },
        { number: '501', percent: 0 },
        { number: '502', percent: 75 },
        { number: '503', percent: 20 },
        { number: '504', percent: 50 },
        { number: '505', percent: 85 },
        { number: '506', percent: 10 },
        { number: '507', percent: 60 },
        { number: '508', percent: 30 },
        { number: '509', percent: 90 },
        { number: '510', percent: 45 },
        { number: '511', percent: 25 },
        { number: '512', percent: 55 },
        { number: '513', percent: 70 },
        { number: '514', percent: 95 },
        { number: '515', percent: 80 },
        { number: '516', percent: 35 },
        { number: '517', percent: 65 },
        { number: '518', percent: 50 },
        { number: '519', percent: 40 },
        { number: '520', percent: 85 },
        { number: '521', percent: 15 },
        { number: '522', percent: 90 },
        { number: '523', percent: 25 },
        { number: '524', percent: 60 },
        { number: '525', percent: 70 },
        { number: '526', percent: 10 },
        { number: '527', percent: 55 },
        { number: '528', percent: 75 },
        { number: '529', percent: 80 },
        { number: '530', percent: 30 },
        { number: '531', percent: 45 },
        { number: '532', percent: 95 },
        { number: '533', percent: 20 },
        { number: '534', percent: 85 },
        { number: '535', percent: 65 },
        { number: '536', percent: 50 },
        { number: '537', percent: 75 },
        { number: '538', percent: 90 },
        { number: '539', percent: 30 },
        { number: '540', percent: 60 },
        { number: '541', percent: 40 },
        { number: '542', percent: 20 },
        { number: '543', percent: 70 },
        { number: '544', percent: 95 },
        { number: '545', percent: 55 },
        { number: '546', percent: 85 },
        { number: '547', percent: 50 },
        { number: '548', percent: 90 },
        { number: '549', percent: 60 },
        { number: '550', percent: 45 },
        { number: '551', percent: 30 },
        { number: '552', percent: 75 },
        { number: '553', percent: 20 },
        { number: '554', percent: 85 },
        { number: '555', percent: 70 },
        { number: '556', percent: 50 },
        { number: '557', percent: 30 },
        { number: '558', percent: 90 },
        { number: '559', percent: 60 },
        { number: '560', percent: 40 },
        { number: '561', percent: 25 },
        { number: '562', percent: 75 },
        { number: '563', percent: 10 },
        { number: '564', percent: 65 },
        { number: '565', percent: 55 },
        { number: '566', percent: 80 },
        { number: '567', percent: 95 },
        { number: '568', percent: 50 },
        { number: '569', percent: 20 },
        { number: '570', percent: 70 },
        { number: '571', percent: 90 },
        { number: '572', percent: 35 },
        { number: '573', percent: 60 },
        { number: '574', percent: 45 },
        { number: '575', percent: 25 },
        { number: '576', percent: 85 },
        { number: '577', percent: 50 },
        { number: '578', percent: 95 },
        { number: '579', percent: 30 },
        { number: '580', percent: 65 },
        { number: '581', percent: 20 },
        { number: '582', percent: 80 },
        { number: '583', percent: 55 },
        { number: '584', percent: 70 },
        { number: '585', percent: 45 },
        { number: '586', percent: 90 },
        { number: '587', percent: 50 },
        { number: '588', percent: 85 },
        { number: '589', percent: 60 },
        { number: '590', percent: 30 },
        { number: '591', percent: 70 },
        { number: '592', percent: 45 },
        { number: '593', percent: 90 },
        { number: '594', percent: 25 },
        { number: '595', percent: 55 },
        { number: '596', percent: 75 },
        { number: '597', percent: 60 },
        { number: '598', percent: 40 },
        { number: '599', percent: 85 }
      ]
      },
    {name:'600-699',value:[
        { number: '600', percent: 40 },
        { number: '601', percent: 0 },
        { number: '602', percent: 75 },
        { number: '603', percent: 20 },
        { number: '604', percent: 50 },
        { number: '605', percent: 85 },
        { number: '606', percent: 10 },
        { number: '607', percent: 60 },
        { number: '608', percent: 30 },
        { number: '609', percent: 90 },
        { number: '610', percent: 45 },
        { number: '611', percent: 25 },
        { number: '612', percent: 55 },
        { number: '613', percent: 70 },
        { number: '614', percent: 95 },
        { number: '615', percent: 80 },
        { number: '616', percent: 35 },
        { number: '617', percent: 65 },
        { number: '618', percent: 50 },
        { number: '619', percent: 40 },
        { number: '620', percent: 85 },
        { number: '621', percent: 15 },
        { number: '622', percent: 90 },
        { number: '623', percent: 25 },
        { number: '624', percent: 60 },
        { number: '625', percent: 70 },
        { number: '626', percent: 10 },
        { number: '627', percent: 55 },
        { number: '628', percent: 75 },
        { number: '629', percent: 80 },
        { number: '630', percent: 30 },
        { number: '631', percent: 45 },
        { number: '632', percent: 95 },
        { number: '633', percent: 20 },
        { number: '634', percent: 85 },
        { number: '635', percent: 65 },
        { number: '636', percent: 50 },
        { number: '637', percent: 75 },
        { number: '638', percent: 90 },
        { number: '639', percent: 30 },
        { number: '640', percent: 60 },
        { number: '641', percent: 40 },
        { number: '642', percent: 20 },
        { number: '643', percent: 70 },
        { number: '644', percent: 95 },
        { number: '645', percent: 55 },
        { number: '646', percent: 85 },
        { number: '647', percent: 50 },
        { number: '648', percent: 90 },
        { number: '649', percent: 60 },
        { number: '650', percent: 45 },
        { number: '651', percent: 30 },
        { number: '652', percent: 75 },
        { number: '653', percent: 20 },
        { number: '654', percent: 85 },
        { number: '655', percent: 70 },
        { number: '656', percent: 50 },
        { number: '657', percent: 30 },
        { number: '658', percent: 90 },
        { number: '659', percent: 60 },
        { number: '660', percent: 40 },
        { number: '661', percent: 25 },
        { number: '662', percent: 75 },
        { number: '663', percent: 10 },
        { number: '664', percent: 65 },
        { number: '665', percent: 55 },
        { number: '666', percent: 80 },
        { number: '667', percent: 95 },
        { number: '668', percent: 50 },
        { number: '669', percent: 20 },
        { number: '670', percent: 70 },
        { number: '671', percent: 90 },
        { number: '672', percent: 35 },
        { number: '673', percent: 60 },
        { number: '674', percent: 45 },
        { number: '675', percent: 25 },
        { number: '676', percent: 85 },
        { number: '677', percent: 50 },
        { number: '678', percent: 95 },
        { number: '679', percent: 30 },
        { number: '680', percent: 65 },
        { number: '681', percent: 20 },
        { number: '682', percent: 80 },
        { number: '683', percent: 55 },
        { number: '684', percent: 70 },
        { number: '685', percent: 45 },
        { number: '686', percent: 90 },
        { number: '687', percent: 50 },
        { number: '688', percent: 85 },
        { number: '689', percent: 60 },
        { number: '690', percent: 30 },
        { number: '691', percent: 70 },
        { number: '692', percent: 45 },
        { number: '693', percent: 90 },
        { number: '694', percent: 25 },
        { number: '695', percent: 55 },
        { number: '696', percent: 75 },
        { number: '697', percent: 60 },
        { number: '698', percent: 40 },
        { number: '699', percent: 85 }
      ]
      },
    {name:'700-799',value:[
        { number: '700', percent: 40 },
        { number: '701', percent: 0 },
        { number: '702', percent: 75 },
        { number: '703', percent: 20 },
        { number: '704', percent: 50 },
        { number: '705', percent: 85 },
        { number: '706', percent: 10 },
        { number: '707', percent: 60 },
        { number: '708', percent: 30 },
        { number: '709', percent: 90 },
        { number: '710', percent: 45 },
        { number: '711', percent: 25 },
        { number: '712', percent: 55 },
        { number: '713', percent: 70 },
        { number: '714', percent: 95 },
        { number: '715', percent: 80 },
        { number: '716', percent: 35 },
        { number: '717', percent: 65 },
        { number: '718', percent: 50 },
        { number: '719', percent: 40 },
        { number: '720', percent: 85 },
        { number: '721', percent: 15 },
        { number: '722', percent: 90 },
        { number: '723', percent: 25 },
        { number: '724', percent: 60 },
        { number: '725', percent: 70 },
        { number: '726', percent: 10 },
        { number: '727', percent: 55 },
        { number: '728', percent: 75 },
        { number: '729', percent: 80 },
        { number: '730', percent: 30 },
        { number: '731', percent: 45 },
        { number: '732', percent: 95 },
        { number: '733', percent: 20 },
        { number: '734', percent: 85 },
        { number: '735', percent: 65 },
        { number: '736', percent: 50 },
        { number: '737', percent: 75 },
        { number: '738', percent: 90 },
        { number: '739', percent: 30 },
        { number: '740', percent: 60 },
        { number: '741', percent: 40 },
        { number: '742', percent: 20 },
        { number: '743', percent: 70 },
        { number: '744', percent: 95 },
        { number: '745', percent: 55 },
        { number: '746', percent: 85 },
        { number: '747', percent: 50 },
        { number: '748', percent: 90 },
        { number: '749', percent: 60 },
        { number: '750', percent: 45 },
        { number: '751', percent: 30 },
        { number: '752', percent: 75 },
        { number: '753', percent: 20 },
        { number: '754', percent: 85 },
        { number: '755', percent: 70 },
        { number: '756', percent: 50 },
        { number: '757', percent: 30 },
        { number: '758', percent: 90 },
        { number: '759', percent: 60 },
        { number: '760', percent: 40 },
        { number: '761', percent: 25 },
        { number: '762', percent: 75 },
        { number: '763', percent: 10 },
        { number: '764', percent: 65 },
        { number: '765', percent: 55 },
        { number: '766', percent: 80 },
        { number: '767', percent: 95 },
        { number: '768', percent: 50 },
        { number: '769', percent: 20 },
        { number: '770', percent: 70 },
        { number: '771', percent: 90 },
        { number: '772', percent: 35 },
        { number: '773', percent: 60 },
        { number: '774', percent: 45 },
        { number: '775', percent: 25 },
        { number: '776', percent: 85 },
        { number: '777', percent: 50 },
        { number: '778', percent: 95 },
        { number: '779', percent: 30 },
        { number: '780', percent: 65 },
        { number: '781', percent: 20 },
        { number: '782', percent: 80 },
        { number: '783', percent: 55 },
        { number: '784', percent: 70 },
        { number: '785', percent: 45 },
        { number: '786', percent: 90 },
        { number: '787', percent: 50 },
        { number: '788', percent: 85 },
        { number: '789', percent: 60 },
        { number: '790', percent: 30 },
        { number: '791', percent: 70 },
        { number: '792', percent: 45 },
        { number: '793', percent: 90 },
        { number: '794', percent: 25 },
        { number: '795', percent: 55 },
        { number: '796', percent: 75 },
        { number: '797', percent: 60 },
        { number: '798', percent: 40 },
        { number: '799', percent: 85 }
      ]
      },
    {name:'800-899',value:  [
        { number: '800', percent: 40 },
        { number: '801', percent: 0 },
        { number: '802', percent: 75 },
        { number: '803', percent: 20 },
        { number: '804', percent: 50 },
        { number: '805', percent: 85 },
        { number: '806', percent: 10 },
        { number: '807', percent: 60 },
        { number: '808', percent: 30 },
        { number: '809', percent: 90 },
        { number: '810', percent: 45 },
        { number: '811', percent: 25 },
        { number: '812', percent: 55 },
        { number: '813', percent: 70 },
        { number: '814', percent: 95 },
        { number: '815', percent: 80 },
        { number: '816', percent: 35 },
        { number: '817', percent: 65 },
        { number: '818', percent: 50 },
        { number: '819', percent: 40 },
        { number: '820', percent: 85 },
        { number: '821', percent: 15 },
        { number: '822', percent: 90 },
        { number: '823', percent: 25 },
        { number: '824', percent: 60 },
        { number: '825', percent: 70 },
        { number: '826', percent: 10 },
        { number: '827', percent: 55 },
        { number: '828', percent: 75 },
        { number: '829', percent: 80 },
        { number: '830', percent: 30 },
        { number: '831', percent: 45 },
        { number: '832', percent: 95 },
        { number: '833', percent: 20 },
        { number: '834', percent: 85 },
        { number: '835', percent: 65 },
        { number: '836', percent: 50 },
        { number: '837', percent: 75 },
        { number: '838', percent: 90 },
        { number: '839', percent: 30 },
        { number: '840', percent: 60 },
        { number: '841', percent: 40 },
        { number: '842', percent: 20 },
        { number: '843', percent: 70 },
        { number: '844', percent: 95 },
        { number: '845', percent: 55 },
        { number: '846', percent: 85 },
        { number: '847', percent: 50 },
        { number: '848', percent: 90 },
        { number: '849', percent: 60 },
        { number: '850', percent: 45 },
        { number: '851', percent: 30 },
        { number: '852', percent: 75 },
        { number: '853', percent: 20 },
        { number: '854', percent: 85 },
        { number: '855', percent: 70 },
        { number: '856', percent: 50 },
        { number: '857', percent: 30 },
        { number: '858', percent: 90 },
        { number: '859', percent: 60 },
        { number: '860', percent: 40 },
        { number: '861', percent: 25 },
        { number: '862', percent: 75 },
        { number: '863', percent: 10 },
        { number: '864', percent: 65 },
        { number: '865', percent: 55 },
        { number: '866', percent: 80 },
        { number: '867', percent: 95 },
        { number: '868', percent: 50 },
        { number: '869', percent: 20 },
        { number: '870', percent: 70 },
        { number: '871', percent: 90 },
        { number: '872', percent: 35 },
        { number: '873', percent: 60 },
        { number: '874', percent: 45 },
        { number: '875', percent: 25 },
        { number: '876', percent: 85 },
        { number: '877', percent: 50 },
        { number: '878', percent: 95 },
        { number: '879', percent: 30 },
        { number: '880', percent: 65 },
        { number: '881', percent: 20 },
        { number: '882', percent: 80 },
        { number: '883', percent: 55 },
        { number: '884', percent: 70 },
        { number: '885', percent: 45 },
        { number: '886', percent: 90 },
        { number: '887', percent: 50 },
        { number: '888', percent: 85 },
        { number: '889', percent: 60 },
        { number: '890', percent: 30 },
        { number: '891', percent: 70 },
        { number: '892', percent: 45 },
        { number: '893', percent: 90 },
        { number: '894', percent: 25 },
        { number: '895', percent: 55 },
        { number: '896', percent: 75 },
        { number: '897', percent: 60 },
        { number: '898', percent: 40 },
        { number: '899', percent: 85 }
      ]
      },
    {name:'900-999',value: [
        { number: '900', percent: 40 },
        { number: '901', percent: 0 },
        { number: '902', percent: 75 },
        { number: '903', percent: 20 },
        { number: '904', percent: 50 },
        { number: '905', percent: 85 },
        { number: '906', percent: 10 },
        { number: '907', percent: 60 },
        { number: '908', percent: 30 },
        { number: '909', percent: 90 },
        { number: '910', percent: 45 },
        { number: '911', percent: 25 },
        { number: '912', percent: 55 },
        { number: '913', percent: 70 },
        { number: '914', percent: 95 },
        { number: '915', percent: 80 },
        { number: '916', percent: 35 },
        { number: '917', percent: 65 },
        { number: '918', percent: 50 },
        { number: '919', percent: 40 },
        { number: '920', percent: 85 },
        { number: '921', percent: 15 },
        { number: '922', percent: 90 },
        { number: '923', percent: 25 },
        { number: '924', percent: 60 },
        { number: '925', percent: 70 },
        { number: '926', percent: 10 },
        { number: '927', percent: 55 },
        { number: '928', percent: 75 },
        { number: '929', percent: 80 },
        { number: '930', percent: 30 },
        { number: '931', percent: 45 },
        { number: '932', percent: 95 },
        { number: '933', percent: 20 },
        { number: '934', percent: 85 },
        { number: '935', percent: 65 },
        { number: '936', percent: 50 },
        { number: '937', percent: 75 },
        { number: '938', percent: 90 },
        { number: '939', percent: 30 },
        { number: '940', percent: 60 },
        { number: '941', percent: 40 },
        { number: '942', percent: 20 },
        { number: '943', percent: 70 },
        { number: '944', percent: 95 },
        { number: '945', percent: 55 },
        { number: '946', percent: 85 },
        { number: '947', percent: 50 },
        { number: '948', percent: 90 },
        { number: '949', percent: 60 },
        { number: '950', percent: 45 },
        { number: '951', percent: 30 },
        { number: '952', percent: 75 },
        { number: '953', percent: 20 },
        { number: '954', percent: 85 },
        { number: '955', percent: 70 },
        { number: '956', percent: 50 },
        { number: '957', percent: 30 },
        { number: '958', percent: 90 },
        { number: '959', percent: 60 },
        { number: '960', percent: 40 },
        { number: '961', percent: 25 },
        { number: '962', percent: 75 },
        { number: '963', percent: 10 },
        { number: '964', percent: 65 },
        { number: '965', percent: 55 },
        { number: '966', percent: 80 },
        { number: '967', percent: 95 },
        { number: '968', percent: 50 },
        { number: '969', percent: 20 },
        { number: '970', percent: 70 },
        { number: '971', percent: 90 },
        { number: '972', percent: 35 },
        { number: '973', percent: 60 },
        { number: '974', percent: 45 },
        { number: '975', percent: 25 },
        { number: '976', percent: 85 },
        { number: '977', percent: 50 },
        { number: '978', percent: 95 },
        { number: '979', percent: 30 },
        { number: '980', percent: 65 },
        { number: '981', percent: 20 },
        { number: '982', percent: 80 },
        { number: '983', percent: 55 },
        { number: '984', percent: 70 },
        { number: '985', percent: 45 },
        { number: '986', percent: 90 },
        { number: '987', percent: 50 },
        { number: '988', percent: 85 },
        { number: '989', percent: 60 },
        { number: '990', percent: 30 },
        { number: '991', percent: 70 },
        { number: '992', percent: 45 },
        { number: '993', percent: 90 },
        { number: '994', percent: 25 },
        { number: '995', percent: 55 },
        { number: '996', percent: 75 },
        { number: '997', percent: 60 },
        { number: '998', percent: 40 },
        { number: '999', percent: 85 }
      ]
      },
 ]
 useEffect(()=>{
    setSelectedRangeNumbers(numbers3D.filter((item)=>item.name===selectedNumRange)[0].value)
 },[selectedNumRange])
 const [selectedNumbers,setSelectedNumbers]=useState([]);
 const addSelectedNumbers=(num)=>{
     if(selectedNumbers.includes(num)){
       return  setSelectedNumbers(selectedNumbers.filter((n)=>n!=num))
     }else{
         setSelectedNumbers([...selectedNumbers,num])
     }
  }
  const removeSelectedNumber=(num)=>{
     setSelectedNumbers(selectedNumbers.filter((n)=>n!=num))
  }
  return (
    <>
    <LottoAppMenu/>
    <div className="mt-3 px-2">
    <UserWallet/>
    </div>
      <div className="p-2 p-sm-3 pb-5">
          {!quickSelect && (
          <>
            <div className="  d-flex align-items-center justify-content-center gap-2 gap-sm-4">
              {/* <div className="text-center">
            <img src={maze} style={{ width: "30px", height: "30px" }} />
            <div>
              <small>အခွေ</small>
            </div>
          </div> */}
              <div className="text-center">
                <Link onClick={() => setQuickSelect(true)}>
                  <img src={flash} style={{ width: "30px", height: "30px" }} />
                  <div>
                    <small style={{fontSize:'13px'}}>အမြန်ရွေး</small>
                  </div>
                </Link>
              </div>

              <div className="text-center">
            <img src={repeat} style={{ width: "30px", height: "30px" }} />
            <div>
              <small style={{fontSize:'13px'}}>ပတ်လည်</small>
            </div>
          </div>
          <div className="pt-4">
          <small className="fw-semibold">လောင်းကြေးထည့်ပါ။</small>
            <Form.Group
              className="mb-3 mt-1"
              controlId="exampleForm.ControlInput1"
            >
              <Form.Control
                className="form-control-sm"
                type="number"
                placeholder="အနည်းဆုံး ၁၀၀ကျပ်"
                onChange={(e) => setAmount(e.target.value)}
                value={amount}
              />
            </Form.Group>
          </div>
              {/* <div className="text-center">
            <img src={dream} style={{ width: "30px", height: "30px" }} />
            <div>
              <small>အိပ်မက်</small>
            </div>
          </div> */}
            </div>
             {/* <Form onSubmit={chooseNumber}> */}
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
             <div className="border my-3 p-2 rounded-3 d-flex flex-wrap align-items-center gap-2">
                {numbers3D.map((item,index)=>{
                    return <p 
                    onClick={()=>setSelectedNumRange(item.name)} 
                    className={`${selectedNumRange===item.name ? 'text-danger' : 'text-white'} my-0 py-0 me-1 me-sm-2 num3d cursor-pointer`} key={index} >
                        {item.name}
                    </p>
                })}
             </div>
             {/* Number grid */}
             <div className="twoDNumbers   py-3 px-2  ">
                        <div className="d-flex align-items-center justify-content-between flex-wrap gap-3">
                            {selectedRangeNumbers.map((item) => {
                                return <div onClick={()=>addSelectedNumbers(item)} className={`cursorPointer rounded-3 text-center number3dContainer ${selectedNumbers.includes(item) ? "bg-red2" : 'bg-stone'} `}>
                                    <p className={`number3d ${selectedNumbers.includes(item) ? "text-white" : 'text-danger'} `}>{item.number}</p>
                                    <div className="bar" >
                                        <div className="activeBar" style={{ width: item.percent + '%', background: getActiveBarColor(item.percent) }}>
                                        </div>
                                    </div>
                                </div>
                            })} 
                        </div>
                    </div>
            {/* <button
              className="chooseBtn3d btn btn-sm text-white"
              onClick={chooseNumber}
            >
              ရွေးမည်{" "}
            </button> */}
            {/* </Form> */}
            <div className="mt-4 mb-5 container">
              <small className="text-white fw-bold">
                ရွေးချယ်ထားသောဂဏန်းများ - {selectedNumbers.length}
              </small>
              <div className="mt-2 border rounded-3 p-3 row align-items-center gap-3">
                {selectedNumbers.map((number, index) => {
                    return (
                      <div
                        key={index}
                        className="chosenNumber3d fw-semibold py-1 px-2 rounded-3 bg-red2 col-2"
                      >
                        {number.number}
                        <div
                          className="chosenNumberDelBtn bg-red2 text-white cursorPointer"
                          onClick={() => removeSelectedNumber(number)}
                        >
                          -
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </>
        )}
        {
          quickSelect && (
            <ThreeDAMyanChoosePage quickSelect={handleQuick} addNumber={addNumber} digits={digits} />
          )
        }
      </div>
      <div className="py-2 twoDBetBtns bg-main w-full mx-auto d-flex gap-2 justify-content-center">
        <button
          className="chooseNumDelBtn  py-2 px-4 rounded-3"
           
        >
          ဖျက်မည်
        </button>
        <button
          className=" bg-main border text-white py-2 px-4 rounded-3"
          onClick={bet}
        >
          <small>ထိုးမည်</small>
        </button>
      </div>
    </>
  );
};

export default ThreeDBetPage;