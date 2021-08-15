import React from 'react';
import styled from 'styled-components'
import CountUp, { useCountUp } from 'react-countup';


function Number({number, text}) {
    useCountUp({ ref: "counter", startOnMount: true });
    return (
        <NumberDiv>
            
          <span id={number}><CountUp  start={0} duration={3} end={number}  />+</span>
          <p>{text}</p>  
        </NumberDiv>
    )
}

const NumberDiv = styled.div`
    color:${props => props.theme.color.darkblue};
    font-family: ${props => props.theme.fam.hblack};
    width:200px;
    margin-right:30px;
    margin: 0 auto;;
    text-align:center;
    margin-bottom: 30px;
    
    span{
        font-size:70px;
    }
    p{
        font-size:22px;
        margin-top:10px;
    }
`;

export default Number
