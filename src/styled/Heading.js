import React from 'react';
import styled from 'styled-components';

function Heading({children, color}) {
    return (
        <HeadingText color={color}>
            {children}
        </HeadingText>
    )
}

const HeadingText = styled.h2`
    color:${props => props.color};
    font-family:${props => props.theme.fam.hblack};
    font-size:32px;
    margin-bottom:30px;
`;



export default Heading
