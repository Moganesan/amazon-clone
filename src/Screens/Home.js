import React from "react";
import Styled from "styled-components";
import Header from "../Components/Header";
import Categories from "../Components/Categories";
import Slider from "../Components/Slider";
import ProductCategory from "../Components/ProductCategory";

export default function Home() {
  return (
    <Container>
      <Slider />
      <Content>
        <ProductCategory />
        <TopDealsContainer>
          <h2>Today's Deales</h2>
          <TopDeals>
            <Product>
              <img src="https://m.media-amazon.com/images/I/511LiGzVAFL.__AC_SY200_.jpg" />
              <p>₹ 40,000</p>
            </Product>
            <Product>
              <img src="https://m.media-amazon.com/images/I/31oTI44Ja3S.__AC_SY200_.jpg" />
              <p>₹ 399</p>
            </Product>
            <Product>
              <img src="https://m.media-amazon.com/images/I/4162n4P0KVL.__AC_SY200_.jpg" />
              <p>₹ 14,000</p>
            </Product>

            <Product>
              <img src="https://m.media-amazon.com/images/I/41oSa4ZSOuS.__AC_SY200_.jpg" />
              <p>₹ 12,000</p>
            </Product>
            <Product>
              <img src="https://m.media-amazon.com/images/I/41grOPcN3WL.__AC_SY200_.jpg" />
              <p>₹ 18,000</p>
            </Product>

            <Product>
              <img src="https://m.media-amazon.com/images/I/51sP-9z9rgL.__AC_SY200_.jpg" />
              <p>₹ 14,000</p>
            </Product>

            <Product>
              <img src="https://m.media-amazon.com/images/I/41lm08AiBXL.__AC_SY200_.jpg" />
              <p>₹ 150</p>
            </Product>
            <Product>
              <img src="https://m.media-amazon.com/images/I/5197XzzTkqL.__AC_SY200_.jpg" />
              <p>₹ 20,000</p>
            </Product>
          </TopDeals>
        </TopDealsContainer>
        <ProductCategory />
      </Content>
    </Container>
  );
}

const Content = Styled.div`
   padding: 0px 50px;
`;

const TopDealsContainer = Styled.div`
    background: white;
    margin: 20px 0px;
    padding: 0 20px;
    h2{
      color: black;
      padding: 10px;
    }
`;

const TopDeals = Styled.div`
   display: flex;
   overflow-x: scroll;
`;

const Product = Styled.div`
   height: 300px;
   display: flex;
   flex-direction: column;
   text-align: center;
   justify-content: center;
   margin-left: 20px;
   p{
     font-size: 20px;
     color: black;
     font-weight: 500;
   }
   img{
   }
`;

const Container = Styled.div`
   overflow-x: hidden;
   min-height: calc(100vh - 70px);
   position: relative;

     /* Extra small devices (phones, 600px and down) */
     @media only screen and (max-width: 600px) {
       ${Content}{
         padding: 0px;
       }

    }

    /* Small devices (portrait tablets and large phones, 600px and up) */
    @media only screen and (min-width: 425px) {

    }

    /* Medium devices (landscape tablets, 768px and up) */
    @media only screen and (min-width: 768px) {

    }

    /* Large devices (laptops/desktops, 992px and up) */
    @media only screen and (min-width: 992px) {
    }

    /* Extra large devices (large laptops and desktops, 1200px and up) */
    @media only screen and (min-width: 1200px) {

    }
`;
