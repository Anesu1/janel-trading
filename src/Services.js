import React from 'react'
import styled, { css } from 'styled-components'
import Heading from './styled/Heading';
import OutterSection from './styled/OutterSection';

function Services() {
    return (
        <OutterSection >
            <DataCards>
                <DataCardsInner moveleft>
                    <DataCardNum>01</DataCardNum>
                    <DataCardP>Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt
                    ut labore et dolore magna
                    aliqua.</DataCardP>
                </DataCardsInner>
                <DataCardsInner move moveright>
                    <DataCardNum>02</DataCardNum>
                    <DataCardP>Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt
                    ut labore et dolore magna
                    aliqua.</DataCardP>
                </DataCardsInner>
                <DataCardsInner moveleft>
                    <DataCardNum>03</DataCardNum>
                    <DataCardP>Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt
                    ut labore et dolore magna
                    aliqua.</DataCardP>
                </DataCardsInner>
                <DataCardsInner move moveright>
                    <DataCardNum>04</DataCardNum>
                    <DataCardP>Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt
                    ut labore et dolore magna
                    aliqua.</DataCardP>
                </DataCardsInner>
            </DataCards>
            <DataText>
                <Heading>Services</Heading>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat.</p>
            </DataText>
        </OutterSection>
    )
}


const DataText = styled.div`
   margin:50px 0;
   color:${props => props.theme.color.blue};
    @media(min-width:992px){
        width:50%;
        margin:0;
        display:flex;
        flex-direction:column;
        justify-content:center;
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
`;

const DataCards = styled.div`
    display:flex;
    justify-content:space-evenly;
    flex-wrap:wrap;
    margin:50px 0;
    @media(min-width:992px){
        margin:100px 0;
        width:50%;
        
    }
`;




const DataCardsInner = styled.div`
    margin-bottom:30px;
    width:38%;
    min-width:200px;
    box-shadow:0px 3px 11px #253e8a44;
    padding:20px;
    border-radius:3px;
    max-width:220px;
    ${({moveleft}) => 
        moveleft && css`
            margin-right:auto;
        `}
        ${({moveright}) => 
        moveright && css`
            margin-left:auto;
        `}
        @media(min-width:768px){
            ${({moveleft}) => 
        moveleft && css`
            margin-right:unset;
        `}
        ${({moveright}) => 
        moveright && css`
            margin-left:unset;
        `}
        }
        @media(min-width:992px){
        min-width:140px;
        max-width:170px;
        ${({move}) => 
        move && css`
            transform:translateY(30px);
        `}
        
    }
    
`;

const DataCardNum = styled.h5`
    font-size:60px;
    line-height:106px;
    margin:0;
    opacity:25%;
    color:#253e8aba;
`;

const DataCardP = styled.p`
    font-size:10px;
    letter-spacing:1.3px;
    color:#253F8A;
    font-family:${props => props.theme.fam.muli};
`;

export default Services
