import React from 'react';
import styled from 'styled-components'
import {AiFillFacebook, AiFillInstagram, AiFillTwitterSquare, AiFillYoutube} from 'react-icons/ai'

const FooterBlock = styled.footer`

    text-align:center;
    background:#000;
    color:#fff;
    padding:30px 0;
    margin-top:50px; 
    .row {
        display:flex;
        justify-content:center; align-items:center; 
        gap:50px;
        @media screen and (max-width: 1200px) {
            display:inline-block;
          }
      p {
          font-size:13px;
          line-height:2;
          font-weight:bold;
          &::after { content:'ㆍ' }
          &:last-child::after { display:none }
          @media screen and (max-width: 1200px) {
            text-align:center;
            margin:0 30px;
            font-size:12px;
          }
        
      }
     .icons{
        margin-left:100px;
        font-size:50px;
        cursor:pointer;
        transform: translateY(10px);
        @media screen and (max-width: 1200px) {
            margin:0 auto;
          }
     } 


    }
`
const Footer = () => {
    return (
    <FooterBlock>
        <div className="row">
            <div className="footernav">
                  <p>&copy; 2023 THOM BROWNE, Inc.</p>
                  <p>‘THOM BROWNE’과 ‘THE THOM BROWNE’의 로고는 THOM BROWNE INC.의 상표이며 전 세계 다양한 지역에 법적으로 등록되어 있습니다.</p>
                  <p>※ 해당 사이트는 리액트 개인 프로젝트 포트폴리오 사이트입니다. THOM BROWNE 과는 무관함을 안내드립니다. ※</p>
            </div>
        
            <div className="icons">
                    <a href="https://www.facebook.com/THOMBROWNENY" target="_blank" rel="noreferrer"><AiFillFacebook></AiFillFacebook></a>
                    <a href="https://www.instagram.com/thombrowne" target="_blank"  rel="noreferrer"><AiFillInstagram></AiFillInstagram></a>
                    <a href="https://twitter.com/thombrowne" target="_blank"  rel="noreferrer"><AiFillTwitterSquare></AiFillTwitterSquare></a>
                    <a href="https://www.youtube.com/channel/UCY4S3FArtQondtEjyr53Wzw" target="_blank" rel="noreferrer"><AiFillYoutube></AiFillYoutube></a>
            </div>
        </div>
    </FooterBlock>
    );
};

export default Footer;