import React ,{useContext, useEffect}from 'react';
import styled from 'styled-components';
import products from '../components/Products.json'
import {Link} from 'react-router-dom'
import { AllContext } from '../context/AllContext';
import AOS from 'aos'
import 'aos/dist/aos.css'


const MenSection = styled.div`
@media screen and (max-width: 1200px) {
    margin-top:90px;
  }
    .img { display:flex; width:100%;
        justify-content:center;
        img{ text-align:center; }
    }
    h1{text-align:center; margin-top:50px; font-size:50px; 
        @media screen and (max-width: 1200px) {
            font-size:40px;
          }
    }
    p{text-align:center; margin:30px 0; font-size:20px; color:grey; font-weight:700; letter-spacing:2px;
        @media screen and (max-width: 1200px) {
            font-size:15px;
          }
    }
`

const ListBlock = styled.div`
    display:flex; justify-content:center;
    div{ padding:10px 20px; 
    margin:30px 10px;
    cursor:pointer;
    @media screen and (max-width: 1200px) { 
        padding:10px 10px; 
      }
`

const ContentBlock = styled.div`
    cursor:pointer;
    margin:0 50px;
    display:flex;
    flex-wrap:wrap;
    justify-content:space-between;
    align-items:flex-start;
    .product {margin:20px 0;  
        width: 21%;
        .photo{ overflow:hidden; 
        img{ width:100%; transition:all 0.3s;
        &:hover{ transform: scale(1.1); opacity:0.8;}
        }  
    }
    .info { 
        margin-top:20px;
        text-align:center;
        color:#959595;
        strong {line-height:2}
        span { display:block;} 
    }

    @media screen and (max-width: 1200px) {
        width:45%
    }
`


const tabTit = [
    {id:0, title:'자켓', category:products.men.jacket },
    {id:1, title:'아우터', category:products.men.outer },
    {id:2, title:'셔츠', category:products.men.shirt },
    {id:3, title:'팬츠', category:products.men.pants },
]

const Men = () => {

    const{active, setActive} = useContext(AllContext)

    const onSelect = (id) => {
        setActive(id)
    }

    useEffect(()=>{
        AOS.init({duration:600})
    },[])
    
    return (
        <MenSection>
            <div className="row">
                <div className="img">
                    <img src="/images/men.jpg" alt="" />
                </div>
                <h1>Men's</h1>
                <p>톰브라운의 다양한 남자상품을 구경하세요.</p>
                <ListBlock>
                    { tabTit.map(data => <div key={data.id} onClick={()=>{onSelect(data.id)}} style={{ background:active === data.id ? '#000' : '#fff', color:active === data.id ? '#fff' : '#000' }} >{data.title}</div>) }
                </ListBlock>
                <ContentBlock>
                    {
                        tabTit[active].category.map((data, index) => (
                            <div data-aos="fade-up"  data-aos-delay="1000" className="product" key={index}>
                               <div className="photo"> 
                                    <Link to={`/cart/${data.code}`}><img src={data.photo} alt={data.name}/></Link>
                                </div>
                                <div className="info">
                                    <strong>{data.name}</strong>
                                    <span>{data.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} 원</span>
                                </div>
                            </div>
                        ))
                    }
                </ContentBlock>
            </div>
        </MenSection>
    );
   
};

export default Men;