import React from 'react';
import styled from 'styled-components';
import Heading from './styled/Heading';

function Products() {
    return (
        <ProductsSec>
            <Heading>
                Best Sellers
            </Heading>
            <p className="top-p">Our premium products got the finest quality that create an exquisite lightweight textile that’s boths of tand crisp–guaranteed to give you a wonderful work experience.</p>
        <div className="sellers-inner">
            <div className="card">
            <img src="imgs/coner.jpg" alt="" />
                <h3>Household Renovations</h3>
                <p> Look no further!!!</p>
                <span>Available </span>
            </div>
            <div className="card">
                <img src="imgs/poster.jpg" alt="" />
                {/* <h3>Product Name</h3>
                <p> AED XXX</p>
                <span>Available in 5colours</span> */}
            </div>
            <div className="card">
                <img src="imgs/timber.jpg" alt="" />
                <h3>Timber</h3>
                <p> Product ranging from poles to boards </p>
                <span>Available </span>
            </div>
        </div>
        </ProductsSec>
    )
}

const ProductsSec = styled.section`
    margin:0 7%;
    color:${props => props.theme.color.blue};
    font-family:${props => props.theme.fam.muli};
    @media(min-width:768px){
           margin:0 10%; 
        }
    h2{
       
        @media(min-width:768px){
           text-align:center;  
        }
    }
    .top-p{
                font-family:${props => props.theme.fam.muli};
                font-size:15px;
                font-weight:100;
                margin:0 auto;
                margin-bottom:25px;
                line-height:23px;
                @media(min-width:768px){
                    width:50%;
                }
                @media(min-width:1200px){
                    font-size:12px;
                }
            }
   .sellers-inner{
        .card{
            margin-bottom:2rem;
            img{
                width:100%;
            }
            h3{
                padding: 5% 0 5% 5%;
                font-size:20px;
            }
            p{
                font-size:15px;
                padding:3% 0 5% 5%;
            }
            span{
                font-size:13px;
                padding:0 0 5% 5%
            }
        }
    }
@media(min-width:768px){
    .sellers-inner{display: flex;justify-content:space-between;flex-wrap:wrap;margin:0 auto;width:70%;
            .card{width:32.5%;
            }
        }
}
`;



export default Products
