import React,{useState} from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom'

function Header(props) {
    const [click, setClick] = useState(false);

    // $('header ul li').on('click', function () {
  
    //     $('header ul li').removeClass('active');
    //     var $this = $(this);
    //     if (!$this.hasClass('active')) {
    //         $this.addClass('active');   
    //     }
        
    //   });
    
    return (
        <HeaderSec>
           <Link to="/"><img src="./imgs/logo.png" alt="" /></Link> 
            <div className={click ? "hamburger transform" : "hamburger"} onClick={() => setClick(!click)}>
                <span></span>
            </div>
            <ul className={click ? "menu change" : "menu"}>
                <li className="active">
                <Link to="/">Home</Link> 
                </li>
                <li>
                    <a href="#">About Us</a>
                </li>
                <li>
                    <a href="#">Services</a>
                </li>
                <li>
                    <a href="#">Machinery</a>
                </li>
                <li>
                    <a href="#">Gallery</a>
                </li>
                
                <li>
                    <img src="./imgs/search.png" alt="" />
                </li>
            </ul>
        </HeaderSec>
    )
}

const HeaderSec = styled.header`
    position:absolute;
    left:50%;
    transform:translateX(-50%);
    width:100%;
    top:5%;
    display:flex;
    z-index:99;
    padding-left:10%;
    justify-content: space-between;
    img{
        width:180px;
        object-fit: contain;
        margin-left:10%;
    }
    .hamburger{
        padding:20px 43px 20px 6px;
        position:absolute;
        right:7%;
        top:16%;
        z-index:99;
        @media(min-width:992px){
            display:none;
        }
        span{
            background:#fff;
            height:3px;
            width:35px;
            position:absolute;
            border-radius:10px;
            transition:0.7s;
            &:before{
                content:"";
                width:100%;
                height:100%;
                background:#fff;
                position:absolute;
                top:-11px;
                border-radius:10px;
                transition:0.7s;
            }
            &:after{
                content:"";
                width:100%;
                height:100%;
                background:#fff;
                position:absolute;
                top:11px;
                border-radius:10px;
                transition:0.7s;
            }
        }
        
    }
    .transform{
            span{
                transform:rotate(360deg);
                background:transparent;
            &:before{
                transform:rotate(495deg);
                top:0;
            }
            &:after{
                transform:rotate(-495deg);
                top:0;
            }
            }
        }
    ul{
        align-items: center;
        height:100vh;
        position:absolute;
        transition:0.7s;
        left:100%;
        width:100%;
        max-width:0;
        overflow:hidden;
        top:-25%;
        background:${props => props.theme.color.blue};
        display:flex;
        justify-content: center;
        align-items: center;
        flex-direction:column;
        @media(min-width:768px){
            height:660px;
        }
        @media(min-width:992px){
            flex-direction:inherit;
            left:0;
            padding-right:5%;
            overflow:unset;
            background:transparent;
            position: relative;
            height:unset;
            justify-content: flex-end;
            margin-right:100px;
        }
        li{
            a{
                display:block;
                font-size:18px;
                width: max-content;
                font-weight:100;
                font-family:${props => props.theme.fam.hblack};
                padding:20px;
                text-decoration: none;
                color:white;
                position:relative;
                @media(min-width:992px){
                    padding:20px 10px 7px;
                }
            }
            img{
                width:17px;
                transform:translate(0px,7px);
                @media(min-width:992px){
                    transform:translate(15px,7px);
                }
            }
        }
        .active{
           a{
            &:before{
                    width:70%;
                    height:4px;
                    content: "";
                    position:absolute;
                    bottom:0;
                    z-index:5;
                    @media(min-width:992px){
                        background:#fff;
                    }
                }
           }
        }

    }
    .change{
        left:0;
        max-width:100%;
    }
`;

export default Header
