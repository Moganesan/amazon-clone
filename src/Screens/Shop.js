import React from "react";
import Styled from "styled-components";
import starIcon from "../Assets/images/ratings.svg";

export default function Shop() {
  return (
    <Container>
      <Grid>
        <Sidebar>
          <h3>Filter By</h3>
          <Filter>
            <select>
              <option>Price</option>
              <option>Ratings</option>
            </select>
          </Filter>
          <h3>Filter By Price</h3>
          <Pricefilters>
            <input placeholder="₹" type="number" maxLength={5}></input>
            <spana>-</spana>
            <input placeholder="₹" type="number" />
          </Pricefilters>
          <h3>Filter By Color</h3>
          <Colorfilters>
            <div style={{ background: "#8cd147" }} data-hex="#e1e851"></div>
            <div style={{ background: "#8cd147" }} data-hex="#8cd147"></div>
            <div style={{ background: "#4a9ccf" }} data-hex="#4a9ccf"></div>
            <div style={{ background: "#661f45" }} data-hex="#661f45"></div>
            <div style={{ background: "#1e2024" }} data-hex="#1e2024"></div>
          </Colorfilters>
          <h3>Filter By Size</h3>
          <Sizefilters>
            <div>S</div>
            <div>XL</div>
            <div>SL</div>
          </Sizefilters>
          <h3>Filter By Brand</h3>
          <Brandfilters>
            <ul>
              <li>
                <span>Nike</span>
              </li>
              <li>
                <span>Adidas</span>
              </li>
              <li>
                <span>Polo</span>
              </li>
              <li>
                <span>Lacost</span>
              </li>
            </ul>
          </Brandfilters>
        </Sidebar>
        <Products>
          <Product>
            <img src="https://m.media-amazon.com/images/I/61QwMfrVbaL._AC_UL320_.jpg" />
            <Details>
              <Price>
                <Salesprice>₹ 300</Salesprice>
                <Regularprice>₹ 400</Regularprice>
              </Price>
              <Ratings>
                <span>
                  <img src={starIcon} />
                </span>
                <span>
                  <img src={starIcon} />
                </span>
                <span>
                  <img src={starIcon} />
                </span>
                <span>
                  <img src={starIcon} />
                </span>
                <span>
                  <img src={starIcon} />
                </span>
              </Ratings>
              <Producttitle>Product Name Goes Here</Producttitle>
            </Details>
          </Product>
          <Product>
            <img src="https://m.media-amazon.com/images/I/61QwMfrVbaL._AC_UL320_.jpg" />
            <Details>
              <Price>
                <Salesprice>₹ 300</Salesprice>
                <Regularprice>₹ 400</Regularprice>
              </Price>
              <Ratings>
                <span>
                  <img src={starIcon} />
                </span>
                <span>
                  <img src={starIcon} />
                </span>
                <span>
                  <img src={starIcon} />
                </span>
                <span>
                  <img src={starIcon} />
                </span>
                <span>
                  <img src={starIcon} />
                </span>
              </Ratings>
              <Producttitle>Product Name Goes Here</Producttitle>
            </Details>
          </Product>
          <Product>
            <img src="https://m.media-amazon.com/images/I/61QwMfrVbaL._AC_UL320_.jpg" />
            <Details>
              <Price>
                <Salesprice>₹ 300</Salesprice>
                <Regularprice>₹ 400</Regularprice>
              </Price>
              <Ratings>
                <span>
                  <img src={starIcon} />
                </span>
                <span>
                  <img src={starIcon} />
                </span>
                <span>
                  <img src={starIcon} />
                </span>
                <span>
                  <img src={starIcon} />
                </span>
                <span>
                  <img src={starIcon} />
                </span>
              </Ratings>
              <Producttitle>Product Name Goes Here</Producttitle>
            </Details>
          </Product>
          <Product>
            <img src="https://m.media-amazon.com/images/I/61QwMfrVbaL._AC_UL320_.jpg" />
            <Details>
              <Price>
                <Salesprice>₹ 300</Salesprice>
                <Regularprice>₹ 400</Regularprice>
              </Price>
              <Ratings>
                <span>
                  <img src={starIcon} />
                </span>
                <span>
                  <img src={starIcon} />
                </span>
                <span>
                  <img src={starIcon} />
                </span>
                <span>
                  <img src={starIcon} />
                </span>
                <span>
                  <img src={starIcon} />
                </span>
              </Ratings>
              <Producttitle>Product Name Goes Here</Producttitle>
            </Details>
          </Product>
          <Product>
            <img src="https://m.media-amazon.com/images/I/61QwMfrVbaL._AC_UL320_.jpg" />
            <Details>
              <Price>
                <Salesprice>₹ 300</Salesprice>
                <Regularprice>₹ 400</Regularprice>
              </Price>
              <Ratings>
                <span>
                  <img src={starIcon} />
                </span>
                <span>
                  <img src={starIcon} />
                </span>
                <span>
                  <img src={starIcon} />
                </span>
                <span>
                  <img src={starIcon} />
                </span>
                <span>
                  <img src={starIcon} />
                </span>
              </Ratings>
              <Producttitle>
                Culpa deserunt proident dolore labore tempor magna cupidatat
                pariatur nulla pariatur reprehenderit magna aliquip laboris.
                Cillum cillum minim deserunt sunt anim velit. Aliquip officia
                aliquip mollit mollit reprehenderit duis ex irure esse proident
                eiusmod quis. Nulla minim enim esse est qui veniam cillum sint
                elit ullamco eu mollit elit in. Elit nostrud enim irure culpa.
                Sunt labore adipisicing do fugiat aute dolore deserunt eiusmod
                et enim ullamco. Ad do ullamco cillum est nulla ad laboris
                reprehenderit deserunt dolor amet sunt. Veniam exercitation enim
                do eiusmod esse eiusmod nulla aliqua id pariatur cillum.
              </Producttitle>
            </Details>
          </Product>
        </Products>
      </Grid>
    </Container>
  );
}

const Grid = Styled.div`
   display: grid;
   grid-template-columns: 140px 80vw repeat(2,minmax(0,1fr));
   grid-gap: 20px;
   *{
       color: black;
   }
`;

const Sidebar = Styled.div`
border-right: 2px solid #BBBBBB;
   h3{
     margin-bottom: 10px;
     margin-top: 10px;
     font-size: 15px;
   }
`;

const Filter = Styled.div`
   select{
     height: 30px;
     border: none;
     outline: none;
     border: 1px solid #aaa;
     &:hover{
      border: 1px solid #F08804;
     }
   }
`;

const Pricefilters = Styled.div`
   display: flex;
   align-items: center;
   input{
     width: 50px;
     height: 30px;
     outline: none;
     -moz-appearance: textfield;
   }
   input::-webkit-outer-spin-button,
   input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

const Colorfilters = Styled.div`
display: flex;
   div{
    height: 15px;
    width: 15px;
    border: 2px solid #aaa;
    cursor: pointer;
    margin-right: 5px;
    &:hover{
      border: 2px solid #F08804;
    }
   }
`;

const Sizefilters = Styled.div`
   display: flex;
   div{
     height: 20px;
     font-weight: 500;
     padding: 0px 5px;
     display: flex;
     align-items: center;
     justify-content: center;
     margin-right: 10px;
     border: 2px solid #aaa;
     cursor: pointer;
     &:hover{
      border: 2px solid #F08804;
     }
   }
`;

const Brandfilters = Styled.div`
 ul{
   list-style: none;
   margin: 0;
   padding: 0;
   li{
    font-size: 15px;
    margin-top: 4px;
    span{
      cursor: pointer;
      &:hover{
        color: #F08804;
      }
    }
   }
 }
`;

const Products = Styled.div`
   display: grid;
   grid-template-columns: repeat(4,minmax(0,1fr));
   grid-gap: 20px;
`;

const Product = Styled.div`
   padding: 10px;
   background: #E8F0F2;
   img{
    display:block;
    margin:auto;
   }
   cursor: pointer;
`;

const Details = Styled.div`
   margin: 10px;
`;

const Price = Styled.div`
   
`;

const Salesprice = Styled.span`
   font-size: 23px;
   font-weight: bold; 
`;

const Regularprice = Styled.span`
   text-decoration: line-through;
   font-size: 15px;
   margin-left: 5px;
   color: #f98404;
   font-weight: bold;
`;

const Ratings = Styled.div`
   display: flex;
   span{
     img{
       width: 15px;
       height: 15px;
     }
   }
`;

const Producttitle = Styled.a`
   overflow: hidden;
   text-overflow: ellipsis;
   display: -webkit-box;
   -webkit-line-clamp: 2; /* number of lines to show */
   -webkit-box-orient: vertical;
`;

const Container = Styled.div`
  min-height: calc(100vh - 70px);
  padding: 20px;
  background: #fff;

    /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {
    padding: 0px;
    ${Grid}{
      grid-template-columns: repeat(1,minmax(0,1fr));
      grid-gap: 0px;
    }
    ${Products}{
      grid-template-columns: repeat(2, minmax(0,1fr));
      grid-gap: 3px;
    }
    ${Product}{
      img{
        width: 100px;
      }
    }
    ${Ratings}{
     span{
       img{
         width: 15px;
       }
     }
    }
  }

  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 600px) {
    ${Grid}{
      grid-template-columns: repeat(1,minmax(0,1fr));
      grid-gap: 0px;
    }
    ${Products}{
      grid-template-columns: repeat(3, minmax(0,1fr));
      grid-gap: 5px;
    }
  
  }

  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {
    ${Grid}{
      grid-template-columns: 130px 80vw repeat(2,minmax(0,1fr));
      grid-gap: 0px;
    }
    ${Products}{
      grid-template-columns: repeat(3, minmax(0,1fr));
      grid-gap: 5px;
    }
  }

  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) {
    padding: 20px;
    ${Grid}{
      grid-template-columns: 140px 80vw repeat(2,minmax(0,1fr));
      grid-gap: 20px;
    }
    ${Products}{
      grid-template-columns: repeat(4, minmax(0,1fr));
      grid-gap: 20px;
    }
    ${Ratings}{
     span{
       img{
         width: 20px;
       }
     }
    }
  }

  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1200px) {
    padding: 20px;
    ${Grid}{
      grid-template-columns: 140px 80vw repeat(2,minmax(0,1fr));
      grid-gap: 20px;
    }
    ${Products}{
      grid-template-columns: repeat(5, minmax(0,1fr));
      grid-gap: 20px;
    }
    ${Ratings}{
     span{
       img{
         width: 20px;
       }
     }
    }
  }
`;
