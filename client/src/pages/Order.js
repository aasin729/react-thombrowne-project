import React, { useContext, useState } from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import {FaShoppingBag} from 'react-icons/fa';
import {RiChatDeleteLine} from 'react-icons/ri';
import { AllContext } from '../context/AllContext';


const OrderBlock = styled.div`
    max-width:1200px;
    margin:150px auto;
    @media screen and (max-width: 1200px) {
        margin:130px auto;
      }
    h1{text-align:center; margin-top:50px; font-size:50px;
        @media screen and (max-width: 1200px) {
            font-size:40px;
          }}
    h4{text-align:center; margin-top:20px; font-size:18px; color:#959595;
        @media screen and (max-width: 1200px) {
            font-size:15px;
          }}
    .orderlist{
        overflow: scroll;
        padding:20px 20px;
        height:600px;
        border: 2px solid #000;
        margin-top:30px;
        text-align:center;
        gap:250px;
        @media screen and (max-width: 1200px) {
            gap:80px;
            margin:0 20px;
            margin-top:20px;
        }
        .emptylist{
            margin:100px;
        p{font-size:20px; line-height:2; font-weight:600; color:#D81B60;    
            letter-spacing: 2px;
            @media screen and (max-width: 1200px) {
                font-size:16px; 
              }
         }
        } 
        
        table{ 
            thead{
                th{
                    font-size:20px;
                    padding-bottom:30px;
                    @media screen and (max-width: 1200px) {
                        font-size:13px;        
                      }
                }
            }
            tbody{
                img{
                    width:6vw;
                    height:8vh;   
                }
                td{
                    padding:10px;
                    font-size:15px;
                    font-weight:bold;
                    color:#959595;
                    @media screen and (max-width: 1200px) {
                        font-size:12px;
                      }
                    button{
                        background:#fff; 
                        color:#959595;
                        
                    }
                }
            
            }
        }

    }

    .img{margin-top:5px;
        @media screen and (max-width: 1200px) {
            margin:0 20px;
          }
    }

    .total{
        margin-top:50px;
        font-size:25px; font-weight:700; 
        margin-left:800px;
        color:#D81B60;
        @media screen and (max-width: 1200px) {
            margin-left:100px;
            font-size:20px;
          }
    }
    .btn{
        margin-top:30px;
        margin-left:900px;
        @media screen and (max-width: 1200px) {
            margin-left:120px;
            font-size:15px;
            margin-top:50px;
          }
        button{
            margin:10px auto;
            width:100px;
            margin-left:10px; background:#000; color:#fff; border-radius:10px; 
            font-size:16px; font-weight:700; padding:10px 0px;
            transition:all 0.3s;
            &:hover{ opacity:0.8;}
        }

    }

`
const Order = () => {                    
    const {bags, setBags, logged} = useContext(AllContext)

    const [ result, setResult ] = useState(bags.filter(bag => bag.loginfo === logged))
   
    
    console.log(result)

    const total = result.reduce((prev, data)=>{return prev += data.subtotal}, 0)
    const payBtn = () => {
        alert('결제가 완료 되었습니다! 해당 상품은 영업일 기준 2~3일 내에 배송됩니다. 문의사항은 0000-0000 으로 전화 주시면 빠른 답변드리겠습니다. THOM BROWNE을 이용해 주셔서 감사합니다. ')
    }

    // 장바구니 삭제 버튼 기능 
    const OnRemove = (code) =>{   
        setResult(result.filter((data)=>data.code !==  code))
        setBags(result.filter((data)=>data.code !==  code))
    }
   

    return (
        <OrderBlock>
            <h1>Order List</h1>
          
            <h4>'{logged}'님 쇼핑백에 담은 품목 내역입니다.</h4>

            <div className="orderlist">
               { !result.length ? 
                <div className="emptylist">
                    <p><FaShoppingBag size="30"></FaShoppingBag></p>
                    <p>쇼핑백이 비었습니다.</p>
                    <p>선택상품을 쇼핑백에 담아주세요.</p>
               </div>

                :   
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>상품명</th>
                        <th>사이즈</th>
                        <th>수량</th>
                        <th>합계금액</th>              
                    </tr>
                </thead>
                <tbody>
                    {result.map(data=>(
                        <tr key={data.code}>
                           <td><img src={data.photo}></img></td> 
                           <td>{data.name}</td>
                           <td>{data.size}</td> 
                           <td>{data.count}</td> 
                           <td>{data.subtotal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</td> 
                           <td>
                                <button onClick={()=>{OnRemove(data.code)}} type="button">
                                   <RiChatDeleteLine size="30"></RiChatDeleteLine>
                                </button>
                           </td>
                        </tr>
                    ))}
                </tbody>
            </table>

               }

                
            </div>

            <div className="img">
                <img src="/images/logo3.png" alt="" />
            </div>
            
            <div className="total">
                <p>최종 결제 금액  :  { total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") } 원 </p>
            </div>

            <div className="btn">
                    <button><Link to="/">뒤로가기</Link></button>
                    <button onClick={payBtn}>결제하기</button>
            </div>
             
        </OrderBlock>
    );
};

export default Order;