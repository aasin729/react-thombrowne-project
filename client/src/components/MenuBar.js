import React,{useState, useContext} from 'react';
import { GiHamburgerMenu} from 'react-icons/gi'
import { AiOutlineCloseSquare} from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { AllContext } from '../context/AllContext';
import styled from 'styled-components'

const SideMenuBar = styled.div`
  
.sideBtn{
  cursor:pointer;
  font-size:40px;
  margin-left:50px;
}

.show-menu{ 
  
  position: fixed;
  width: 100%;
  height: 100%;
  top:94px;
  left: 0px;
  transition: 1s;
  background:#000;

  li{
    cursor:pointer;
    margin-top:30px;
    text-align:center;
    color:#fff;
    font-size:16px;
    font-weight:bold;
    transition: all 0.3s;
    &:hover{color:grey;}
  }
} 
  
.hide-menu{ 
    position: fixed;
    width: 100%;
    height: 100%;
    top:94px;
    left: -100%;
    transition: 1s;
    background:#000;

    li{
      cursor:pointer;
      margin-top:40px;
      text-align:center;
      color:#fff;
      font-size:15px;
      font-weight:bold;
      transition: all 0.3s;
      &:hover{color:grey;}
    }

}
`
  
const MenuBar = () => {

const [isOpen, setMenu] = useState(false);  // 메뉴의 초기값을 false로 설정

const toggleMenu = () => {
      setMenu(isOpen => !isOpen); // on,off 개념 boolean
  }


  const {logged, setLogged} = useContext(AllContext)  

  return(
     <SideMenuBar>
        <div className="sidebar">

          <ul className="sideBtn">                 
              <li><GiHamburgerMenu onClick={()=>toggleMenu()}></GiHamburgerMenu></li>                     
          </ul>
              
          <ul className={isOpen ? "show-menu" : "hide-menu"}>
            <li onClick={() => setMenu(false) }><AiOutlineCloseSquare size='40'></AiOutlineCloseSquare></li>
            <li><Link to="/" onClick={() => setMenu(false) } ><img src="/images/logo4.png" alt="" /></Link></li>
            <li><Link to="/men"  onClick={() => setMenu(false) } >남자상품</Link></li>
            <li><Link to="/women" onClick={() => setMenu(false)}>여자상품</Link></li>
            <li><Link to="/kid" onClick={() => setMenu(false)}>아동상품</Link></li>
            <li><Link to="/accessory" onClick={() => setMenu(false)}>액세서리</Link></li>
            <li><Link to="/store" onClick={() => setMenu(false)}>매장찾기</Link></li>
            {/* <li><Link to="/auth/loginjoin" onClick={() => setMenu(false)}> 로그인/회원가입 </Link></li> */}
            { !logged ? <li><Link to="/auth/loginjoin" onClick={() => setMenu(false)}> 로그인/회원가입 </Link></li> : <li><Link onClick={()=>{sessionStorage.clear(); setLogged(false)}}>로그아웃( ID : {sessionStorage.getItem('id')} )</Link></li>
                      }
            <li><Link to="/order" onClick={() => setMenu(false)}>쇼핑백</Link></li>
          </ul>
        </div>
     </SideMenuBar>
  )
}

export default MenuBar;