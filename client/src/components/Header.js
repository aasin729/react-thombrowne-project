import React, {useContext} from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { AllContext } from '../context/AllContext';
import {FaShoppingBag} from 'react-icons/fa';
import MenuBar from './MenuBar';



const HeaderBlock = styled.header`
display:flex;
box-shadow:0px 2px 2px #999;
background:#fff;
padding:20px 0; 
position:fixed; width:100%; top:0; left:0; z-index:99999; 

h1{ display:none; margin-left:10%; font-size:30px;
    @media screen and (max-width: 1200px) {
        display:block;
      }
}
.row { display:flex; justify-content:center; align-items:center; 
    @media screen and (max-width: 1200px) {
        display:none;
      }
    nav { 
        margin-right: 80px;
        .depth1 { display:flex;
           span{ margin:0 100px; 
            @media screen and (max-width: 1500px) {
              margin:0 30px; 
            }
            @media screen and (max-width: 1200px) {
                display:none;
              }} 
          li{ 
            &:hover{ color:grey; }
            @media screen and (max-width: 1500px) {
              margin:0 20px; 
            }
            @media screen and (max-width: 1200px) {
                display:none;
              }
            margin:0 35px; font-size:16px; position:relative; 
            padding:10px 0; font-weight:600; transition: all 0.5s
        }
             
          }
        } 
    }

    .sidebar{
        display:none;
        @media screen and (max-width: 1200px) {
            display:block;
          }
    }
`
const Header = () => {

  
  const {setActive, logged, setLogged} = useContext(AllContext)

  const onSelect = (id) => {
    setActive(id)
    }

    return (
        <HeaderBlock>
            <MenuBar className="sidebar" />
            
            <h1><Link to="/">THOM BROWNE</Link></h1>

            <div className="row">
                <nav>
                    <ul className="depth1">
                        <li><Link to="/men" onClick={ ()=>onSelect(0) }>남자상품</Link></li>
                        <li><Link to="/women">여자상품</Link></li>
                        <li><Link to="/kid">아동상품</Link></li>
                        <li><Link to="/accessory">액세서리</Link></li>
                        <span><Link to="/"> <img src="/images/logo.png" alt="" /></Link></span>
                        <li><Link to="/store">매장찾기</Link></li>
                        { !logged ? <li><Link to="/auth/loginjoin"> 로그인/회원가입 </Link></li> : <li><Link onClick={()=>{sessionStorage.clear(); setLogged(false)}}>로그아웃( ID : {sessionStorage.getItem('id')} )</Link></li>
                        
                        }
                        <li><Link to="/order">쇼핑백<FaShoppingBag size="14"></FaShoppingBag></Link></li>
                    </ul>
                </nav>
            </div>
        </HeaderBlock>
    );
};

export default Header;