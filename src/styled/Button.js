import React from 'react';
import styled from 'styled-components';

function Button({ text }) {
    return (
        <MainButton>
            {text}
            <img src="./imgs/rightw.png" alt="" />
        </MainButton>
    )
}

const MainButton = styled.button`
    width:210px;
    height:40px;
    background:${props => props.theme.color.lightblue};
    color:#fff;
    display: flex;
    align-items: center;
    justify-content: center;
    border:none;
    border-radius:40px;
    font-family:${props => props.theme.fam.hblack};
    font-size:15px;
    margin-top:30px;
    img{
        width:18px;
        object-fit:contain;
        margin-left:10px;
    }
`;

export default Button
