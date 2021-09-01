import React from 'react';
import styled from 'styled-components';

function Pics() {
    return (
        <PicsDiv>
            <div className="pics-inner">
                <img src="./imgs/tool1.jpg" alt="" />
            </div>
            <div className="pics-inner">
                <img src="./imgs/wire.jpg" alt="" />
            </div>
            <div className="pics-inner">
                <img src="./imgs/tol.jpg" alt="" />
            </div>
            <div className="pics-inner">
                <img src="./imgs/tool4.jpg" alt="" />
            </div>
            <div className="pics-inner">
                <img src="./imgs/tool5.jpg" alt="" />
            </div>
            
          </PicsDiv>
    )
}

const PicsDiv = styled.section`
    
    margin-top:30px;
    @media(min-width:768px){
        display:flex;
    justify-content: space-between;
    }
    .pics-inner{
        width:90%;
        margin:0 auto;
        height:250px;
        overflow: hidden;
        max-width:400px;
        @media(min-width:768px){
        height:130px;
        width:20%;
        }
        @media(min-width:992px){
        height:175px;
        }
        img{
            width:100%;
            transform:scale(1.8);
        }
        &:nth-child(1),
        &:nth-child(2){
            img{
                transform:scale(1.3);
            }
        }
        &:nth-child(3),
        &:last-child{
            img{
                transform: scale(2.1);
            }
        }
    }
`;

export default Pics
