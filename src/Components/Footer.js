import React from "react";
import Styled from "styled-components";

export default function Footer() {
  return (
    <Container>
      <Top>
        <span>Back to top</span>
      </Top>
      <Content>
        <ul>
          <span>Get to Know Us</span>
          <li>About Us</li>
          <li>Careers</li>
          <li>Press Release</li>
          <li>Amazon Cares</li>
          <li>Gift a Smile</li>
        </ul>
        <ul>
          <span>Connect with Us</span>
          <li>Facebook</li>
          <li>Twitter</li>
          <li>Instagram</li>
        </ul>
        <ul>
          <span>Make Money with Us</span>
          <li>Sell on Amazon</li>
          <li>Sell under Amazon Accelerator</li>
          <li>Amazon Global Selling</li>
          <li>Become an Affiliate</li>
          <li>Fulfilment by Amazon</li>
          <li>Advertise Your Products</li>
          <li>Amazon Pay on Merchants</li>
        </ul>
        <ul>
          <span>Let Us Help You</span>
          <li>COVID-19 and Amazon</li>
          <li>Your Account</li>
          <li>Returns Center</li>
          <li>100% Purchase Protection</li>
          <li>Amazon App Download</li>
          <li>Help</li>
        </ul>
      </Content>
      <MobileContent>
        <ul>
          <li>About Us</li>
          <li>Careers</li>
          <li>Press Release</li>
          <li>Amazon Cares</li>
          <li>Gift a Smile</li>
        </ul>
        <ul>
          <li>Facebook</li>
          <li>Twitter</li>
          <li>Instagram</li>
        </ul>
      </MobileContent>
      <Credits>
        <span>
          &copy; 1996-2021, Amazon.com, Inc. ❤️ Developed By{" "}
          <a href="https://www.instagram.com/moganesan_/">Moganesan</a>
        </span>
      </Credits>
    </Container>
  );
}

const Content = Styled.div`
   display: flex;
   justify-content: space-evenly;
   padding: 40px 0px;
   
   ul{
     list-style:none;
     li{
       padding: 3px 0px;
       font-size: 14px;
       color: #DDD;
       cursor: pointer;

       &:hover{
         text-decoration: underline;
       }
     }
     span{
       font-weight: bold;
     }
   } 
   
 
`;

const Credits = Styled.div`
   background: #131A22;
   padding: 10px;
   display: flex;
   align-items: center;
   justify-content: center;
   span{
     font-size: 13px;
     color: #DDD;
     font-weight: 500;
     letter-spacing: 0.3px;
   }
`;

const Top = Styled.div`
  display: flex;
  height: 50px;
  background: #37475A;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  
  &:hover{
      background: #485769;
  }

  span{
      font-weight: 400;
  }
`;

const MobileContent = Styled.div`
   display: none !important;
   padding: 20px 0px;
   justify-content: space-evenly;
   ul{
     list-style:none;
     padding: 0;
     li{
       padding: 3px 0px;
       font-size: 14px;
       color: #DDD;
       cursor: pointer;

       &:hover{
         text-decoration: underline;
       }
     }
     span{
       font-weight: bold;
     }
   }
`;

const Container = Styled.footer`
   background: #232F3E;
   margin-top: 20px;

      /* Extra small devices (phones, 600px and down) */
    @media only screen and (max-width: 600px) {
      ${Content}{
        display: none !important;
      }
      ${MobileContent}{
        display: flex !important;
      }
    }

    /* Small devices (portrait tablets and large phones, 600px and up) */
    @media only screen and (min-width: 425px) {
      ${Content}{
        display: none !important;
      }
      ${MobileContent}{
        display: flex !important;
      }
    }

    /* Medium devices (landscape tablets, 768px and up) */
    @media only screen and (min-width: 768px) {
      ${Content}{
        display: flex !important;
      }
      ${MobileContent}{
        display: none !important;
      }
    }

    /* Large devices (laptops/desktops, 992px and up) */
    @media only screen and (min-width: 992px) {
      ${Content}{
        display: flex !important;
      }
      ${MobileContent}{
        display: none !important;
      }
    }

    /* Extra large devices (large laptops and desktops, 1200px and up) */
    @media only screen and (min-width: 1200px) {
      ${Content}{
        display: flex !important;
      }
      ${MobileContent}{
        display: none !important;
      }
    }
`;
