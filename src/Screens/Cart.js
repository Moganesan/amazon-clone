import React from "react";
import Styled from "styled-components";
import amazonBadge from "../Assets/images/amazon_fulfilled_badge.png";

export default function Cart() {
  return (
    <Container>
      <Content>
        <h1>Shopping Cart</h1>
        <hr />
        <Products>
          <input type="checkbox" />
          <img src="https://m.media-amazon.com/images/I/51C2YyW3TWL._AC_AA180_.jpg" />
          <Details>
            <ul>
              <li>
                <a>Basic Computation and Programming with C by Subrata Saha</a>
              </li>
              <li>
                <Caption>Paperback</Caption>
              </li>
              <li>
                <StockStatus>In stock</StockStatus>
              </li>
              <li>
                <DeliveryStatus>Eligible for FREE Shipping</DeliveryStatus>
              </li>
              <li>
                <Badge src={amazonBadge} />
              </li>
              <li>
                <Buttons>
                  <ul>
                    <li>
                      <Quantity>
                        <option value="0" selected>
                          0
                        </option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                      </Quantity>
                    </li>
                    <li>
                      <a>delete</a>
                    </li>
                  </ul>
                </Buttons>
              </li>
            </ul>
          </Details>
          <Price>
            <span>₹</span>
            <span>300</span>
          </Price>
        </Products>
        <hr />
        <Products>
          <input type="checkbox" />
          <img src="https://m.media-amazon.com/images/I/51C2YyW3TWL._AC_AA180_.jpg" />
          <Details>
            <ul>
              <li>
                <a>Basic Computation and Programming with C by Subrata Saha</a>
              </li>
              <li>
                <Caption>Paperback</Caption>
              </li>
              <li>
                <StockStatus>In stock</StockStatus>
              </li>
              <li>
                <DeliveryStatus>Eligible for FREE Shipping</DeliveryStatus>
              </li>
              <li>
                <Badge src={amazonBadge} />
              </li>
              <li>
                <Buttons>
                  <ul>
                    <li>
                      <Quantity>
                        <option value="0" selected>
                          0
                        </option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                      </Quantity>
                    </li>
                    <li>
                      <a>delete</a>
                    </li>
                  </ul>
                </Buttons>
              </li>
            </ul>
          </Details>
          <Price>
            <span>₹</span>
            <span>300</span>
          </Price>
        </Products>
        <hr />
        <Products>
          <input type="checkbox" />
          <img src="https://m.media-amazon.com/images/I/51C2YyW3TWL._AC_AA180_.jpg" />
          <Details>
            <ul>
              <li>
                <a>Basic Computation and Programming with C by Subrata Saha</a>
              </li>
              <li>
                <Caption>Paperback</Caption>
              </li>
              <li>
                <StockStatus>In stock</StockStatus>
              </li>
              <li>
                <DeliveryStatus>Eligible for FREE Shipping</DeliveryStatus>
              </li>
              <li>
                <Badge src={amazonBadge} />
              </li>
              <li>
                <Buttons>
                  <ul>
                    <li>
                      <Quantity>
                        <option value="0" selected>
                          0
                        </option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                      </Quantity>
                    </li>
                    <li>
                      <a>delete</a>
                    </li>
                  </ul>
                </Buttons>
              </li>
            </ul>
          </Details>
          <Price>
            <span>₹</span>
            <span>300</span>
          </Price>
        </Products>
        <hr />
      </Content>
      <Sidebar>
        <SubTotal>
          <h5>Subtotal (3 items): ₹900</h5>
          <Checkout>
            <span>Checkout</span>
          </Checkout>
        </SubTotal>
      </Sidebar>
    </Container>
  );
}

const Content = Styled.div`
   background: #fff;
   padding: 20px;
   h1{
       font-weight: 500;
       margin: 0px 0px 20px 0px;
   }
`;

const Sidebar = Styled.div`
`;

const SubTotal = Styled.div`
   display: flex;
   flex-direction: column;
   background: #fff;
   padding: 20px;
   h5{
       font-size: 20px;
       font-weight: 500;
       margin-bottom: 20px;
   }
`;

const Products = Styled.div`
   display: flex;
   align-items: center;
   justify-content: space-evenly;
   padding: 20px 0px;
`;

const Details = Styled.div`
   display: flex;
   flex-direction: column;
   a{
       font-size: 20px;
   }
   ul{
       padding: 0px;
       margin: 0px;   
       li{
           list-style: none;
           margin: 3px 0px;
       }
   }
`;

const Price = Styled.div`
   display: flex;
   flex-direction: row;
   span{
    font-size: 25px;
    font-weight: 500;
   }
`;

const Caption = Styled.span`
   font-weight: bold;
   font-size: 13px;
`;

const StockStatus = Styled.span`
   font-size: 13px;
   color: #01937C;
`;

const DeliveryStatus = Styled.span`
   font-size: 13px;
   color: #757575;
`;

const Badge = Styled.img`
    display: block;
    width: 60px;
`;

const Buttons = Styled.div`
   display: flex;
   a{
       font-size: 13px;
       color: #0081bd;
   }
   ul{
      display: flex;
      padding: 0px; 
   }
   ul li{
       list-style: none;
       margin: 0 10px;
   }
`;

const Quantity = Styled.select`
   width: 50px;
   height: 30px;
   box-shadow: 0 2px 5px 0 rgb(213 217 217 / 50%);
   border: 1px solid #D5D9D9;
   border-radius: 8px;
   background: #F0F2F2;
`;

const Checkout = Styled.button`
   height: 35px;
   border-radius: 8px;
   border: none;
   box-shadow: 0 2px 5px 0 rgb(213 217 217 / 50%);
   background: #FFD814;
   cursor: pointer;
   &:hover{
       background: #ffcc14;
   }
`;

const Container = Styled.div`
   min-height: calc(100vh - 70px);
   display: grid;
   grid-gap: 20px;
   grid-template-columns: 72vw 23vw repeat(2, minmax(0,1fr));
   grid-gap: 20px;
   margin: 20px;
   *{
       color: black;
   }

   
    /* Extra small devices (phones, 600px and down) */
    @media only screen and (max-width: 600px) {
        margin: 0px;
        ${Content}{
            padding: 5px 5px;
            h1{
                font-size: 18px;
                margin-bottom: 10px;
            }
        }

        ${Products}{
            img{
                width: 100px;
            }
        }

        ${Price}{
            span{
             font-size: 18px;
            }
        }
        ${Details}{
            a{
                font-size: 13px;
            }
            ul{
                padding: 0px;
                margin: 0px;   
                li{
                    list-style: none;
                    margin: 3px 0px;
                }
            }
        }
    }

    /* Small devices (portrait tablets and large phones, 600px and up) */
    @media only screen and (min-width: 425px) {
        margin: 0px;
        ${Content}{
            padding: 5px 5px;
            h1{
                font-size: 18px;
                margin-bottom: 10px;
            }
        }

        ${Products}{
            img{
                width: 100px;
            }
        }

        ${Price}{
            span{
             font-size: 18px;
            }
        }
        ${Details}{
            a{
                font-size: 13px;
            }
            ul{
                padding: 0px;
                margin: 0px;   
                li{
                    list-style: none;
                    margin: 3px 0px;
                }
            }
        }
    }

    /* Medium devices (landscape tablets, 768px and up) */
    @media only screen and (max-width: 768px) {
        grid-template-columns: repeat(1, minmax(0,1fr));
    }

    /* Large devices (laptops/desktops, 992px and up) */
    @media only screen and (min-width: 992px) {
        margin: 20px;
        ${Content}{
            padding: 20px;
            h1{
                font-size: 25px;
                font-weight: 500;
                margin: 0px 0px 20px 0px;
            }
        }

        ${Products}{
            img{
                width: 200px;
            }
            ${Badge}{
                width: 60px;
            }
        }

        ${Price}{
            span{
             font-size: 25px;
            }
        }
        ${Details}{
            a{
                font-size: 20px;
            }
            ul{
                padding: 0px;
                margin: 0px;   
                li{
                    list-style: none;
                    margin: 3px 0px;
                }
            }
            ${Buttons}{
                display: flex;
                a{
                    font-size: 13px;
                    color: #0081bd;
                }
                ul{
                    display: flex;
                    padding: 0px; 
                }
                ul li{
                    list-style: none;
                    margin: 0 10px;
                }
            }
        }
    }

    /* Extra large devices (large laptops and desktops, 1200px and up) */
    @media only screen and (min-width: 1200px) {

    }
`;
