import React,{useEffect} from 'react';
import styled from 'styled-components'
import AOS from 'aos'
import 'aos/dist/aos.css'


const HomeSectionBlock = styled.div`
    .article1{ 
        margin-top: 80px;
         padding:50px 0; 
        ul{ display:flex; text-align:center;
            gap:50px;
            justify-content:center; align-items:center; 
            @media screen and (max-width: 1200px) {
                margin:0 10px; gap:20px; 
              }
            li{
                img{width:45vw;
                }
            }
        }
    }

    .article3{ 
        padding:50px 0; 
        ul{ display:flex; text-align:center;
            gap:50px;
            justify-content:center; align-items:center; 
            @media screen and (max-width: 1200px) {
                margin:0 10px; gap:20px; 
              }
            li{
                img{width:45vw;}
            }
        }
    }
    .video{ 
        margin:0 auto;
       text-align:center;
      
        #vid{
            width:92vw;
        }
    }
`

const Home = () => {

    useEffect(()=>{
        AOS.init({duration:600})
    },[])
    

    return (
        <HomeSectionBlock>
            <div data-aos="fade-up"  data-aos-delay="700" className='article1 main1'>
                <ul>    
                    <li>
                        <img src="/images/main1.png" alt="" />
                    </li>
                    <li>
                        <img src="/images/main2.png" alt="" />
                    </li>
                </ul>
            </div>

            <div data-aos="fade-up"  data-aos-delay="800" className='article2 video'>
                <video id="vid" muted autoPlay controls  loop src="/images/video1.mp4" type="video/mp4"/>
            </div>


            <div data-aos="fade-up"  data-aos-delay="800" className='article3 main1'>
                <ul>    
                    <li>
                        <img src="/images/main3.png" alt="" />
                    </li>
                    <li>
                        <img src="/images/main4.png" alt="" />
                    </li>
                </ul>

            </div>

            <div data-aos="fade-up"  data-aos-delay="800" className='article4 video'>      
                <video id="vid" muted autoPlay controls loop src="/images/video2.mp4" type="video/mp4"/>
            </div>

        </HomeSectionBlock>
    );
};

export default Home;