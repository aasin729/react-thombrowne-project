import React ,{useContext, useEffect}from 'react';
import styled from 'styled-components';
import products from '../components/Products.json'
import {Link} from 'react-router-dom'
import { AllContext } from '../context/AllContext';
import AOS from 'aos'
import 'aos/dist/aos.css'

const AccessorySection = styled.div`
    .video { display:flex;
        justify-content:center; width:100%;
        @media screen and (max-width: 1200px) {
            margin-top:90px;
          }
        
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


    #vid{ 
        margin:0 auto;
       text-align:center;
       @media screen and (max-width: 1200px) {
        width:100vw;
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
    {id:0, title:'가방', category:products.accessory.bag },
    {id:1, title:'향수', category:products.accessory.perfume },
    {id:2, title:'지갑', category:products.accessory.wallet },
    {id:3, title:'아이웨어', category:products.accessory.eyewear },
]

const Accessory = () => {

    const{active, setActive} = useContext(AllContext)

    const onSelect = (id) => {
        setActive(id)
    }
    
    useEffect(()=>{
        AOS.init({duration:600})
    },[])

    return (
        <AccessorySection>
            <div className="row">
               
                <div className="video">
                    <video id="vid" muted autoPlay loop src="/images/video3.mp4" type="video/mp4"/>
                </div>
               
                <h1>Accessory's</h1>
                <p>톰브라운의 다양한 액세서리를 구경하세요.</p>
                
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
        </AccessorySection>
    );
   
};

export default Accessory;