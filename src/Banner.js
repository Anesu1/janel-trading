import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Header from './styled/Header';

function Banner() {
    return (
        <BannerSec img="./imgs/banner.jpg">
        <Header />
            <div className="banner-inner">
                <h1>Janel Trading Hardware Store</h1>
                <button><Link to="./products">Visit Products<img src="./imgs/right.png" alt="" /></Link></button>
            </div>
        </BannerSec>  
    )
}


const BannerSec = styled.section`
    height:100vh;
    width:100%;
    overflow-x: inherit;
    position:relative;
    background: linear-gradient(to bottom, rgba(18, 26, 52, 0.85),rgba(18, 26, 52, 0.85)),  url('${props => props.img}');
    background-size:cover;
    background-position:center center;
    display:flex;
    align-items:center;
    @media(min-width:768px){
        height:660px;
    }
    @media(min-width:1200px){
         height:100vh;
     }
    .banner-inner{
        margin:10% 10% 0;
        h1{
            font-size:50px;
            color:#fff;
            font-family:${props => props.theme.fam.hblack};
            line-height: 50px;
            margin-bottom:40px;
            @media(min-width:768px){
                width:80%;
            }
            @media(min-width:992px){
                width:60%;
            }
        }
        button{
            border:none;
            height:50px;
            width:200px;
            border-radius: 49px;
            font-size:18px;
            font-family:${props => props.theme.fam.hblack};
            @media(min-width:768px){
                
                font-size:22px;
            }
            a{
                text-decoration:none;
                color:#000000;
            }
            img{
                width:15px;
                margin-left:10px;
                @media(min-width:768px){
                width:18px;
            }
            }
            
        }
    }
`;

export default Banner
