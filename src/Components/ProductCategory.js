import React from "react";
import Styled from "styled-components";
import { BrowserRouter as Router, Link } from "react-router-dom";

export default function ProductCategory() {
  return (
    <Container>
      <Wrap>
        <h2>Top rated, premium quality | Amazon Brands</h2>
        <Link to="/shop">
          <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/CEPC/Clearance/May21/V238940049_IN_PC_BAU_Edit_Creation_Laptops1x._SY304_CB667377205_.jpg" />
        </Link>
        <a>See more</a>
      </Wrap>

      <Wrap>
        <h2>Home essentials | Amazon Brands & more</h2>
        <Link to="/shop">
          <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/AmazonBrands/GW/QC/Home/bedsheet_B06Y5GF9SF_Asins_186x116._SY116_CB409842842_.jpg" />
        </Link>
        <a>See more</a>
      </Wrap>
      <Wrap>
        <h2>Top rated, premium quality | Amazon Brands</h2>
        <Link to="/shop">
          <img src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08345R1ZW._SY116_CB667322346_.jpg" />
        </Link>
        <a>See more</a>
      </Wrap>
      <Wrap>
        <h2>Everyday essentials</h2>
        <Link to="/shop">
          <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img18/HPC/GW/Desktop-Qc-1x_4._SY116_CB431329535_.jpg" />
        </Link>
        <a>See more</a>
      </Wrap>

      <Wrap>
        <h2>Automotive essentials | Up to 60% off</h2>
        <Link to="/shop">
          <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Rim_tyrecare1x._SY116_CB410830552_.jpg" />
        </Link>
        <a>See more</a>
      </Wrap>
      <Wrap>
        <h2>Revamp your home in style</h2>
        <Link to="/shop">
          <img src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2021/GW/MSO/April/372x232_1_Low._SY116_CB670263840_.jpg" />
        </Link>
        <a>See more</a>
      </Wrap>
    </Container>
  );
}

const Wrap = Styled.div`
   background: #fff;
   padding: 20px;
   h2{
       color: black;
   }

   img{
       width: 100%;
       object-fit: cover;
       margin-top:10px;
       cursor: pointer;
   }
`;

const Container = Styled.div`
   display: grid;
   grid-gap: 25px;
   grid-template-columns: repeat(3, minmax(0,1fr));
   margin-top: 20px;

   /* Extra small devices (phones, 600px and down) */
   @media only screen and (max-width: 600px) {
    grid-template-columns: repeat(1, minmax(0,1fr));
      margin-top: 10px;
      ${Wrap}{
        h2{
          font-size: 15px;
        }
      }
    }

    /* Small devices (portrait tablets and large phones, 600px and up) */
    @media only screen and (min-width: 425px) {
      grid-template-columns: repeat(1, minmax(0,1fr));
      margin-top: 10px;
      ${Wrap}{
        h2{
          font-size: 20px;
        }
      }
    }

    /* Medium devices (landscape tablets, 768px and up) */
    @media only screen and (min-width: 768px) {
      grid-template-columns: repeat(2, minmax(0,1fr));
      margin-top: 10px;
      ${Wrap}{
        h2{
          font-size: 20px;
        }
      }
    }

    /* Large devices (laptops/desktops, 992px and up) */
    @media only screen and (min-width: 992px) {
      grid-template-columns: repeat(3, minmax(0,1fr));
      margin-top: 10px;
      ${Wrap}{
        h2{
          font-size: 20px;
        }
      }
    }

    /* Extra large devices (large laptops and desktops, 1200px and up) */
    @media only screen and (min-width: 1200px) {
      grid-template-columns: repeat(4, minmax(0,1fr));
      margin-top: 10px;
      ${Wrap}{
        h2{
          font-size: 20px;
        }
      }
    }
`;
