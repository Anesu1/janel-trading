import React from 'react';
import styled from 'styled-components'

function Card({cardHeader, cardImg, cardText}) {
    return (
        <CardDiv>
            <div className="card-top">
                <img src={cardImg} alt="" />
            </div>
            <div className="card-body">
                <h3>{cardHeader}</h3>
                <p>{cardText}</p>
            </div>
        </CardDiv>
    )
}

const CardDiv = styled.div`
    box-shadow:0px 3px 11px #0000004b;
    height:320px;
    width:100%;
    margin:30px 10px;
    border-radius:3px;
    color:${props => props.theme.color.blue};
    padding:15px;
    @media(min-width:768px){
        width:40%;
    }
    @media(min-width:992px){
        width:27%;
    }
    .card-top{
        overflow: hidden;
        height:70%;
        width:100%;
        img{
            transform:scale(2);
            width:100%;
        }
    }
    .card-body{
        h3{
            font-family:${props => props.theme.fam.hblack};
            font-size:20px;
            margin:30px 0 10px;
        }
        p{
            font-family:${props => props.theme.fam.muli};
            font-size:15px;
        }
    }
`;



export default Card
