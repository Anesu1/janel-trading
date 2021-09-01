import React from 'react'
import styled from 'styled-components'
import Heading from './styled/Heading';

function About() {
    return (
        <AboutSec>
            <div className="about-inner">
                <div className="about-text">
                <Heading>About JanelTrading.</Heading>
                    <p>Janel Trading PVT Ltd (JT) is a wholly Zimbabwean owned company that deals with
                    construction and hardware products and services. JT is strategically positioned at 65-4th street , in Mutare. Strategically because it is one of the 2 hardware shops uptown.
                     Strategically because Mutare city is growing rapidly. Currently, the business enjoys 
                     a 10% market share in Mutare regards construction. </p>
                     <p>
                     JT is operational 9 hours for five days a week. (Monday to Friday) and 4 hours on Sundays
                      (0900 hours to 1300 hours). We shall be closed on Saturdays (Exodus 20:8). When it comes 
                      to construction section, we are operational 10 hours every day except Saturdays.
                     </p>
                    
                    <Heading>Mission.</Heading>
                    <p>To provide quality workmanship and to build quality, eco-friendly houses and buildings through innovative technologies and excellent craftsmanship so that our customers can enjoy a lasting experience in accordance with their expectations.</p>
                    
                    </div>
                <img src="./imgs/shower.jpg" alt="" />
            </div>
            <div className="about-inner">
                <img src="./imgs/sec2right.jpg" alt="" />
            </div>
        </AboutSec>

        
    )
}

const AboutSec = styled.section`
    padding:10% 5% 0;
    color:${props => props.theme.color.blue};
    @media(min-width:768px){
        display:flex;
        justify-content:space-between;
        align-items:start;
    }
    @media(min-width:1200px){
        padding:10% 10% 0%;
    }
    .about-inner{
        &:first-child{
            display:flex;
            flex-direction:column-reverse;
            @media(min-width:768px){
                display:unset;
            }
        }
        &:last-child{
            margin-top:30px;
            @media(min-width:768px){
                margin-top:0;
            }
        }
        @media(min-width:768px){
            width:47%;
        }
        img{width:100%;
        
        }
        .about-text{
            margin:40px 0 0px;
            @media(min-width:992px){
                margin:50px 0 80px;
            }
            @media(min-width:1200px){
                margin:150px 0 80px;
            }
            p{
                font-family:${props => props.theme.fam.muli};
                font-size:15px;
                font-weight:100;
                margin-bottom:25px;
                line-height:23px;
                @media(min-width:1200px){
                    font-size:12px;
                }
            }
        }
    }
`;

export default About
