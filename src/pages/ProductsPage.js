import React from 'react'
import Header from '../styled/Header';
import styled from 'styled-components';
import Footer from '../Footer';
import Card from '../styled/Card';

function ProductsPage() {

    const cards = [
        {
            img:"./imgs/gu.jpg",
            head:"Nails",
            text: "$15/kg"
        },
        {
            img:"./imgs/gu.jpg",
            head:"Nails",
            text: "$15/kg"
        },
        {
            img:"./imgs/gu.jpg",
            head:"Nails",
            text: "$15/kg"
        },
        {
            img:"./imgs/gu.jpg",
            head:"Nails",
            text: "$15/kg"
        },
        {
            img:"./imgs/gu.jpg",
            head:"Nails",
            text: "$15/kg"
        },
        
    ]

    return (
        <>
            <Header />
            <Products img="./imgs/bannerp.jpg">
                <h1>Products</h1>
            </Products>
            <CardsBody>
                {cards.map((card, i) =>{
                    return <Card key={i} cardImg={card.img} cardHeader={card.head} cardText={card.text}/>
                })}
            </CardsBody>
            <Footer />
        </>
    )
}


const Products = styled.section`
    height:500px;
    width:100%;
    display:flex;
    align-items:flex-end;
    background:linear-gradient(to bottom, rgba(18, 26, 52, 0.85),rgba(18, 26, 52, 0.85)),  url('${props => props.img}');
    background-size:cover;
    h1{
        color:#fff;
        font-size:50px;
        font-family:${props => props.theme.fam.hblack};
        margin:10%;
    }
`;

const CardsBody = styled.section`
        margin:10% 5% 0;
        display:flex;
        justify-content:space-between;
        flex-wrap:wrap;
        @media(min-width:768px){
        margin:10% 10% 0;
    }
`;




export default ProductsPage
