import React, { useState } from "react";
import Styled from "styled-components";
import starIcon from "../Assets/images/ratings.svg";
import starIconBlack from "../Assets/images/ratings_black.svg";

const ProductDetails = () => {
  const images = [
    {
      image:
        "https://images-na.ssl-images-amazon.com/images/I/81QYOBwTINL._SX569_.jpg",
    },
    {
      image:
        "https://images-na.ssl-images-amazon.com/images/I/61wU4Y4tfLL._SX569_.jpg",
    },
    {
      image:
        "https://images-na.ssl-images-amazon.com/images/I/8190S8IPRTL._SX569_.jpg",
    },
    {
      image:
        "https://images-na.ssl-images-amazon.com/images/I/81NPXBf54SL._SX569_.jpg",
    },
  ];
  const [image, setImage] = useState(images[0].image);

  return (
    <Container>
      <Grid>
        <Productpreview>
          {images.map((data) => {
            return (
              <img
                onMouseOver={() => {
                  setImage(data.image);
                  console.log(image);
                }}
                src={data.image}
              />
            );
          })}
        </Productpreview>
        <Productimage>
          <img src={image} />
        </Productimage>
        <Productdetails>
          <h1>
            Lenovo IdeaCentre AIO 330 19.5-inch All-in-One Desktop (Intel
            Celeron J4025/4GB/1TB HDD/DOS (Doesn't Come with Microsoft Windows
            OS)/Integrated Intel UHD Graphics/HD 720p Camera), Black
            (F0D7008DIN)
          </h1>
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
              <img src={starIconBlack} />
            </span>
            <a>300 ratings</a>
          </Ratings>
          <Availability>In Stock</Availability>
          <Brand>
            Solld by <a>Appario Retail Private Ltd</a>
          </Brand>
          <Description>
            <h4>About this item</h4>
            <p>
              Processor: 10th Gen Intel Core i3-10110U | Speed: 2.1 GHz (Base) -
              4.1 GHz (Max) | 2 Cores | 4MB Cache OS: Pre-Loaded Windows 10 Home
              with Lifetime Validity Pre-Installed: MS Office Home and Student
              2019 Memory and Storage: 8GB DDR4-2666 RAM | Storage: 1TB HDD
              Graphics: Integrated Intel UHD Graphics Display: 21.5 inch Full HD
              (1920 X 1080) | Anti Glare Technology | Borderless Display | 2
              Side Narrow Bezel Camera: HD 720p Camera | Autofocus
            </p>
          </Description>
          <SizeContainer>
            <span>SIZE: </span>
            <Size>S</Size>
            <Size>S</Size>
            <Size>S</Size>
            <Size>S</Size>
          </SizeContainer>
          <ColorContainer>
            <span>COLOR: </span>
            <Color style={{ background: "#5D8233" }} />
            <Color style={{ background: "#284E78" }} />
            <Color style={{ background: "#D62AD0" }} />
            <Color style={{ background: "#5D534A" }} />
          </ColorContainer>
          <QuantityContainer>
            <span>QTY: </span>
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
          </QuantityContainer>
          <Addtocart>Add to cart</Addtocart>
        </Productdetails>
      </Grid>
    </Container>
  );
};

export default ProductDetails;

const Container = Styled.div`
   overflow-x: hidden;
   min-height: calc(100vh - 70px);
   position: relative;
   padding: 20px;
   background: #fff;
   *{
       color: black;
   }
`;

const Grid = Styled.div`
   display: grid;
   grid-template-columns: 5vw 42.5vw 42.5vw repeat(3,minmax(0,1fr));
`;

const Productpreview = Styled.div`
   display: flex;
   flex-direction: column;
   img{
       width: 50px;
       margin: 5px;
       border: 2px solid #E6E6E6;
       border-radius: 3px;
       cursor: pointer;
       &:hover{
        border: 2px solid #f98404;
       }
   }
`;

const Productimage = Styled.div`
   img{
    height: auto;
    width: 100%;
   }
`;

const Productdetails = Styled.div`
   display: flex;
   flex-direction: column;
   padding: 20px;
   h1{
     font-size: 20px;
     letter-spacing: 1px;
     overflow: hidden;
     text-overflow: ellipsis;
     display: -webkit-box;
     -webkit-line-clamp: 5; /* number of lines to show */
     -webkit-box-orient: vertical;
     font-weight: 500;
   }
`;

const Price = Styled.div`
   margin-top: 10px;
`;

const Salesprice = Styled.span`
   font-size: 23px;
   font-weight: bold; 
   color: #B12704;
   font-weight: 500;
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
       margin-left: 5px;
     }
   }
   a{
     margin-left: 5px;
   }
`;

const Availability = Styled.span`
   font-weight: 500;
   color: #058552;
   font-size: 18px;
   margin-top: 10px;
`;

const Brand = Styled.span`
   font-size: 15px;
   font-weight: 400;
   margin-top: 10px;
`;

const Description = Styled.div`
   margin-top: 10px;
`;

const SizeContainer = Styled.div`
   display: flex;
   align-itesm: center;
   margin-top: 10px;
`;

const Size = Styled.div`
   width: 25px;
   height: 25px;
   border: 1px solid #DADADA;
   display: flex;
   align-items: center;
   justify-content: center;
   margin-left: 5px;
   cursor: pointer;
   font-weight: 500;
   &:hover{
     color: #f98404;
   }
`;

const ColorContainer = Styled.div`
   display: flex;
   align-items: center;
   margin-top: 10px;
`;

const Color = Styled.div`
   width: 25px;
   height: 25px;
   display: flex;
   align-items: center;
   justify-content: center;
   margin-left: 5px;
   cursor: pointer;
   &:hover{
    border: 2px solid #f98404;
   }
`;

const Quantity = Styled.select`
   width: 50px;
   height: 30px;
   box-shadow: 0 2px 5px 0 rgb(213 217 217 / 50%);
   border: 1px solid #D5D9D9;
   border-radius: 8px;
   background: #F0F2F2;
   margin-top: 10px;
`;

const QuantityContainer = Styled.div``;

const Addtocart = Styled.button`
   height: 35px;
   width: 100px;
   margin-top: 15px;
   background: #F7CA00;
   border-radius: 10px;
   outline: 0;
   border: none;
   text-decoration: none!important;
   cursor: pointer;

   &:hover{
       background: #ffb224;
   }
`;
