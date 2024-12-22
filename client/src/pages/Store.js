import React,{useEffect, useState } from 'react';
import styled from 'styled-components'
import shop from '../components/store.json'
import FindStore from '../components/FindStore';

const SearchBlock= styled.div`
    margin-top:100px;
    .row{
        .img{
            display:flex; width:100%;
            justify-content:center;
            align-items:center;
        }
        padding:30px 0;
        h1{text-align:center; margin:10px 0; font-size:50px;
            @media screen and (max-width: 1200px) {
                font-size:40px;
              }}
        h3{ text-align:center; margin:30px 0; font-size:20px; color:grey; font-weight:700; letter-spacing:2px;
            @media screen and (max-width: 1200px) {
                font-size:15px; margin:0 20px;
              }}
        form{   
            margin-top:40px;
            margin-left:100px;
            label{margin:0 20px; font-size:25px; 
                @media screen and (max-width: 1200px) {
                    font-size:20px;
                  }}
            display:flex; margin-bottom:20px;
            select{cursor:pointer; padding:10px; width:15%;  outline:none; border:2px solid #959595;
                @media screen and (max-width: 1200px) {
                    padding:5px; width:30%;
                  }
            }
            option{font-size:15px; font-weight:600;} 
        }
    }

`

const Store = () => {

    const [city, setCity] = useState('')
    
    const [shops, setShops] = useState(shop)

    const onChange = (e) => {
        console.log(e.target.value)
        setCity(e.target.value)
    }

    useEffect(()=>{
        if(!city){
            setShops(shop)
        }else{
            setShops(shop.filter(data => data.sido === city ))
        }
    },[city]) 
    
    return (
        <SearchBlock>
            <div className="row">
                <h1>Find Store's</h1>
                <h3>전국 17곳(서울,경기,부산)에서 톰브라운 오프라인 매장을 운영하고 있습니다.</h3>
                <form>
                    <label>매장 찾기</label>
                    <select onChange={onChange} value={city}>
                        <option value=''>-- 전체 --</option>
                        <option value='서울시'>서울시</option>
                        <option value='경기도'>경기도</option>
                        <option value='부산광역시'>부산광역시</option>
                    </select>
                </form>
                <FindStore shops={shops} />
            </div>
        </SearchBlock>
    );
};

export default Store;