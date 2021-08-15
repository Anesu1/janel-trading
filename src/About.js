import React from 'react'
import styled from 'styled-components'
import Heading from './styled/Heading';

function About() {
    return (
        <AboutSec>
            <div className="about-inner">
                <div className="about-text">
                    <Heading>It is simply a perfect place to get lost.</Heading>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti nihil quae quia dolorem quis? Fugiat nemo quo minima nulla delectus?</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente quaerat sed eius voluptas officia possimus distinctio dolores sunt vero. Dignissimos ipsam iste voluptas facere consectetur reiciendis laudantium perspiciatis quidem animi.  
                    </p>
                    </div>
                <img src="./imgs/sec2left.jpg" alt="" />
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
