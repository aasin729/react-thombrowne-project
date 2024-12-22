import React,{useEffect} from 'react';
import styled from 'styled-components'
import AOS from 'aos'
import 'aos/dist/aos.css'

const ShopBlock = styled.div`
    ul{
        display:flex;
        flex-wrap:wrap; 
        justify-content:space-between;
        @media screen and (max-width: 1200px) {
            display:inline-block;
          }
        li{
            color:#000;
            width:43%; 
            margin:40px;
            @media screen and (max-width: 1200px) {
                width:80%; 
              }
            .store{
             img{width:100%;}
            }
            p{margin-top:10px; font-size:15px; padding:10px 20px; color:grey; font-weight:500
            }
            a{  transition: all 0.4s;
                &:hover{color:blue; font-weight:bold; text-decoration:underline;}
            }
        }
    }
`

const FindStore = ({shops}) => {

    useEffect(()=>{
        AOS.init({duration:600})
    },[])

    return (
        <ShopBlock>
            <ul data-aos="fade-up"  data-aos-delay="1000">
                {
                shops.map((data, index)=>
                    <li key={index}>
                        <div className="store">
                            <img src={data.img} alt=''/>
                        </div>
                        <p><strong>매장명</strong> : {data.name}</p>
                        <p><strong>매장주소</strong> : {data.address}</p>
                        <p><a href={data.location} target='_blank' rel="noreferrer"> 위치찾기 (클릭하세요.)</a></p>
                        <p><strong>운영시간</strong> : {data.time}</p>
                        <p><strong>취급상품</strong> : {data.products}</p>
                    </li>
                )
                 
                }
                
            </ul>
        </ShopBlock>
    );
};

export default FindStore;