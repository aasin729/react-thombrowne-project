import React, { useState, useContext} from "react";
import { useParams, useNavigate } from "react-router-dom";
import products from "../components/Products.json";
import styled from "styled-components";
import { AllContext } from '../context/AllContext';
import { AiOutlinePlusSquare, AiOutlineMinusSquare } from "react-icons/ai";



const DetailBlock = styled.div`
@media screen and (max-width: 1200px) {
  margin-top:100px;
}

  margin-top: 150px;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 1200px) {
    display:inline-block;
  }
  .photo {
    max-width: 700px;
    @media screen and (max-width: 1200px) {
      width:100%; text-align:center;
    }
    
  }
  .info {
    padding: 10px 0;
    width: 20vw;
    margin-left: 50px;
    @media screen and (max-width: 1200px) {
      width:70vw;
      
    }
    p {
      font-size: 17px;
      padding-bottom: 30px;
      color: #969696;
      @media screen and (max-width: 1200px) {
        font-size:16px;
        text-align:center;
        padding-bottom: 20px;
      }
    }

    .sizes {
      @media screen and (max-width: 1200px) {
        font-size: 18px;
        text-align:center;
      }
      color: #969696;
      .select {
        input {
          display: none;
        }
        label {
          margin-top: 5px;
          text-align: center;
          font-size: 15px;
          display: inline-block;
          padding: 5px;
          border: 0.1rem solid #959595;
          width: 50px;
          height: 30px;
          margin-left: 5px;
          cursor: pointer;
          transition: all 0.3s;
          &:hover{
            color:#F50057;
            font-weight:bold;
          }

       
        }
        margin-bottom: 30px;
      }
    }

    .updown {
      display: flex;
      gap: 10px;
      @media screen and (max-width: 1200px) {
        margin-left:25%;
      }
      .udbtn {
        button {
          font-size: 25px;
          background: #fff;
          cursor: pointer;
          color: #969696;
        }
      }
      span.count {
        font-size: 15px;
        height: 25px;
        text-align: center;
      }
      span {
        font-size: 18px;
        color: #969696;
      }

    }

    .price {
      margin-top: 50px;
      text-align: center;
      strong {
        font-size: 20px;
        font-weight: 700;
        letter-spacing: 1px;
      }
    }

    .btn {
      margin-top: 20px;
      button {
        margin: 10px auto;
        width: 100%;
        margin-left: 20px;
        background: #5c5d5f;
        color: #fff;
        border-radius: 50px;
        font-size: 17px;
        font-weight: 500;
        padding: 15px 0px;
        transition: all 0.3s;
        &:hover {
          opacity: 0.8;
        }
      }
    }
  }
`;

const InfoBlock = styled.div`
  .coment {
    margin: 0 auto;
    max-width: 1000px;
    margin-top: 30px;
    line-height: 2;
    color: #969696;
    h2 {
      margin-bottom: 10px;
      @media screen and (max-width: 1200px) {
        margin-top:20px;
      }
    }
    h5 {
      font-size: 15px;
      line-height: 2;
      @media screen and (max-width: 1200px) {
        font-size:13px;
      }
    }
    @media screen and (max-width: 1200px) {
      margin:0 30px;
    }

  }
`;


const Cart = () => {
  const {bags, setBags, logged} = useContext(AllContext)
  let prdcode = useParams().code
  let pcode = prdcode.substr(0, 2);
  
  const navigate = useNavigate()
  
  
  let category = [];

  switch (pcode) {
    case "mj":
      category = products.men.jacket;
      break;
    case "mo":
      category = products.men.outer;
      break;
    case "ms":
      category = products.men.shirt;
      break;
    case "mp":
      category = products.men.pants;
      break;
    case "wj":
      category = products.women.jacket;
      break;
    case "wo":
      category = products.women.outer;
      break;
    case "wd":
      category = products.women.dress;
      break;
    case "wp":
      category = products.women.pants;
      break;
    case "ko":
      category = products.kid.outer;
      break;
    case "ks":
      category = products.kid.shirt;
      break;
    case "kp":
      category = products.kid.pants;
      break;
    case "kd":
      category = products.kid.dress;
      break;
    case "ap":
      category = products.accessory.perfume;
      break;
    case "ab":
      category = products.accessory.bag;
      break;
    case "aw":
      category = products.accessory.wallet;
      break;
    case "ae":
      category = products.accessory.eyewear;
      break;
    default:
      category = products.men.jacket;
  }

  const item = category.find((data) => data.code === prdcode);
  console.log(item);

  const [total, setTotal] = useState(item.price);
  const [count, setCount] = useState(1);
  const [size, setSize] = useState('');

  // 금액 화폐 단위 표시하기 (천단위)
  const cost = item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")  

  // 수량 증가
  const onPlus = () => {
    const newCount = count + 1;
    setTotal(item.price * newCount);
    setCount(newCount)
  };

  // 수량 감소 
  const onMinus = () => {
    const newCount = count - 1;

    if (count < 1) return;
    setCount(newCount);
    setTotal(item.price * newCount);
  };

  

  //상품 선택후 선택확인 버튼 클릭하면 alert창띄우기
  const choiceBtn = () => {
    alert(
      `\n 쇼핑백에 담기전, 선택하신 해당 품목 내역입니다, 확인해주세요! \n\n ※ 상품명 : [ ${item.name} ] \n ※ 사이즈 : [ ${size} ]  \n ※ 수량 : [ ${count} ] 개  \n ※ 총 가격 : [ ${total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} ] 원 `
    );
  };

  const onSubmit = (e) => {
    e.preventDefault()
    if (!logged) {
      alert("로그인 후에 이용가능합니다.")
      return false;
    }
    // let amount = item.price*count
    let bag = {code:item.code, name:item.name, price:item.price, size:size, count:count, subtotal:total, loginfo:logged, photo:item.photo}
    setBags(bags.concat(bag))
    navigate('/order')
 };

  // useEffect(() => {});


  return (
    <>
      <DetailBlock>
        <div className="photo">
          <img src={item.photo1} alt={item.name} />
        </div>

        <form className="info" onSubmit={onSubmit}>
          <p>제품명 : {item.name}</p>
          <p>가격 : {cost} 원</p>

          <div className="sizes">
            <span>사이즈선택</span>
            <div className="select">
              <label style={{background:size === 'S' ? '#000' : '#fff'}} onClick={()=>setSize('S')}>
                S
              </label>
              <label style={{background:size === 'M' ? '#000' : '#fff'}} onClick={()=>setSize('M')}>
                M
              </label>
              <label style={{background:size === 'L' ? '#000' : '#fff'}} onClick={()=>setSize('L')}>
                L
              </label>
              <label style={{background:size === 'XL' ? '#000' : '#fff'}} onClick={()=>setSize('XL')}>
                XL
              </label>
              <label style={{background:size === 'XXL' ? '#000' : '#fff'}} onClick={()=>setSize('XXL')}>
                XXL
              </label>
            </div>
          </div>

          <div className="updown">
            <span>수량: </span>
            <span className="count">{count}</span>
            <div className="udbtn">
              <button onClick={onPlus} type="button">
                <AiOutlinePlusSquare></AiOutlinePlusSquare>
              </button>
              <button onClick={onMinus} type="button">
                <AiOutlineMinusSquare></AiOutlineMinusSquare>
              </button>
            </div>
          </div>

          <div className="price">
            <strong>총결제금액 : {total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} 원</strong>
          </div>

          <div className="btn">
            <button onClick={choiceBtn} type="button">선택 확인</button>
            <button type="submit">쇼핑백에 담기</button>
          </div>
        </form>
      </DetailBlock>

      <InfoBlock>
        <div className="coment">
          <h2>디자인 & 핏</h2>
          <h5>{item.intro}</h5>
        </div>
      </InfoBlock>
    </>
  );
};

export default Cart;
