import React, { useState } from "react";
import Styled from "styled-components";
import logoImg from "../Assets/images/logo.svg";
import locationLogo from "../Assets/images/location.svg";
import searchLogo from "../Assets/images/search.svg";
import dropDownLogo from "../Assets/images/dropdown.svg";
import menuLogo from "../Assets/images/menu.svg";
import catLogo from "../Assets/images/menuLogo.png";
import CartLogo from "../Assets/images/cart.svg";
import userLogo from "../Assets/images/userlogo.png";
import { BrowserRouter as Router, Link } from "react-router-dom";

export default function Header() {
  const [menu, setMenu] = useState("-200px");
  const menuList = {
    left: menu,
  };

  return (
    <Container>
      <MenuBtn
        onClick={() => {
          setMenu("0px");
        }}
        src={menuLogo}
      />
      <MenuList style={menuList}>
        <ul>
          <Link to="/signin">
            <li>
              <img src={userLogo} />
              <p>Hello, Sign in</p>
            </li>
          </Link>

          <hr />
          <Link to="/">
            <li>Home</li>
          </Link>
          <li>Account</li>
          <li>Orders</li>
          <li>Customer Service</li>
          <li>
            <img src={catLogo} />
            <p>Categories</p>
          </li>
          <hr />
          <li>Electronincs</li>
          <li>Books</li>
          <li>Mens</li>
          <li>Womens</li>
          <li>Computers & Accessories</li>
          <li>Furnitures</li>
          <li>Dresses</li>
          <li>Kids</li>
          <li>Toys</li>
          <li>Home & Kitchen</li>
        </ul>
        <span
          onClick={() => {
            setMenu("-200px");
          }}
        >
          ✕
        </span>
      </MenuList>
      <Links to="/">
        <Logo src={logoImg} />
      </Links>
      <Location>
        <p>Hello,</p>
        <div style={{ display: "flex" }}>
          <img src={locationLogo} />
          <span>Select your address</span>
        </div>
      </Location>
      <SearchContainer>
        <Category>
          <option selected value="all">
            All
          </option>
          <option value="electronincs">Electronincs</option>
          <option value="books">Books</option>
          <option value="electronincs">Mens</option>
          <option value="books">Womens</option>
          <option value="electronincs">Computers & Accessories</option>
          <option value="books">Furnitures</option>
          <option value="electronincs">Dresses</option>
          <option value="books">Kids</option>
          <option value="electronincs">Toys</option>
          <option value="books">Home & Kitchen</option>
        </Category>
        <SearchBox />
        <Search>
          <img style={{ width: 20 }} src={searchLogo} />
        </Search>
      </SearchContainer>
      <Links to="/signin">
        <SignIn>
          <p>Hello, Sign in</p>
          <div style={{ display: "flex" }}>
            <span>Account</span>
            <img style={{ width: 20 }} src={dropDownLogo} />
          </div>
        </SignIn>
      </Links>
      <Links to="/cart">
        <Cart>
          <Count>
            <span>12</span>
          </Count>
          <img style={{ width: 35 }} src={CartLogo} />
          <span>Cart</span>
        </Cart>
      </Links>
    </Container>
  );
}

const Logo = Styled.img`
   height: 29px;
   padding: 10px 5px;
   cursor: pointer;
   &:hover{
     border: 1px solid white;
   }
`;

const Location = Styled.div`
   width: 200px;
   padding: 5px;
   cursor: pointer;
  
   img{
     width: 20px;
   }

   span{
     font-weight: 500;
   }

   p{
     font-size: 13px;
     margin-left: 20px;
   }

   &:hover{
    border: 1px solid white;
    border-radius: 2px;
   }

`;

const MenuBtn = Styled.img`
   display: none; 
   cursor: pointer;
`;

const MenuList = Styled.div`
   position: absolute;
   height: 100vh;
   width: 200px;
   background: #fff;
   top: 0;
   text-align: left;
   z-index: 2;
   transition: 1s;
   overflow-y: scroll;

   span{
     display: flex;
     width: 30px;
     height: 30px;
     background: #DDDDDD;
     border-radius: 50%;
     align-items: center;
     justify-content: center;
     color: black;
     position: absolute;
     cursor: pointer;
     left: 80%;
     top: 5px;
     right: 0;
     &:hover{
       background: #D8E3E7;
     }
   }
   *{
     color: black;
     padding: 0;
   }
   ul{
     list-style: none;
     li{
       padding: 10px;
       font-size: 13px;
       font-weight: 500;
   
       display: flex;
       align-items: center;
       &:hover{
         background: #EDEDED;
       }

       p{
         font-size: 15px;
         font-weight: bold;
         margin-left: 10px;
         margin-bottom: 0px;
       }
       img{
         width: 20px;
       }
     }
   }
`;

const SearchContainer = Styled.div`
   display: flex;
   border-radius: 6px;
   border: ${(props) => props.theme.border}
`;

const SearchBox = Styled.input`
   width: 600px;
   height: 35px;
   color: black;
   border: none;
   padding: 0 10px;
   font-size: 15px;
   
   &:focus{
     outline: none;
     border: 2px solid #FF9900;
   }
`;

const Category = Styled.select`
   width: 50px;
   border: none;
   background: #DADADA;
   color: black;
   border-top-left-radius: 4px;
   border-bottom-left-radius: 4px;
   padding: 5px;
   cursor: pointer;

   &:hover{
     background: #BBBBBB;
   }

   option{
     color: black;
     background: white;
   }
   
   span{
    color: black;
   }
`;

const Search = Styled.button`
   width: 50px;
   border: none;
   border-top-right-radius: 4px;
   border-bottom-right-radius: 4px;
   background: #FEBD69;
   cursor: pointer;

   &:hover{
     background: #F3A847;
   }
`;

const SignIn = Styled.div`
   padding: 5px;
   margin-left: 10px;
   cursor: pointer;
   p{
     font-size: 13px;
   }

   div{
     span{
       font-weight: 500;
     }
   }

   &:hover{
    border: 1px solid white;
    border-radius: 2px;
   }

`;

const Cart = Styled.div`
   display: flex;
   align-items: center;
   padding: 5px;
   cursor: pointer;
   position: relative;
   img{
     color: "red"
   }

   span{
     font-weight: 500;
   }

   &:hover{
     border: 1px solid white;
     border-radius: 2px;
   }
`;

const Count = Styled.div`
   width: 16px;
   height: 16px;
   background: #F08804;
   border-radius: 50%;
   display: flex;
   align-items: center;
   justify-content: center;
   position: absolute;
   left: 15px;
   bottom: 27px;

   span{
     font-weight: 100;
     font-size: 10px;
     font-weight: bold;
   }
`;

const MenuContainer = Styled.div`

`;

const Menu = Styled.div`
    position: absolute;
    rigth: 0px;
    top: 90px;
    left: 80%;
    bottom: 0px;
    background: white;
    width: 200px;
    height: 200px;
    color: black;
`;

const Links = Styled(Link)`
   text-decoration: none;
   &:hover{
    text-decoration: none;
   }
`;

const Container = Styled.div`
   height: 60px;
   background-color: #131921;
   display: flex;
   align-items: center;
   justify-content: space-evenly;
   padding: 0 16px;
   *{
     a{
       all: none;
       text-decoration: none;
     }
   }

      /* Extra small devices (phones, 600px and down) */
    @media only screen and (max-width: 600px) { 
      ${SearchBox}{
        padding: 0;
      }
      ${MenuBtn}{
        margin-left: 5px;
        display: block;
      }
      ${Cart}{
        transform: scale(0.8);
        padding: 2px; 
      }
      ${SearchContainer}{
        transform: scale(0.8);
      }
      ${Logo}{
        height: 20px;
        margin-left: 5px;
      }
      ${Location}{
        display: none;
      }
      ${SignIn}{
        display: none;
      }
    }

    /* Small devices (portrait tablets and large phones, 600px and up) */
    @media only screen and (min-width: 425px) {
      ${SearchBox}{
        width: 0px;
        ${Logo}{
          width: 1px;
        }
      }
    }

    /* Medium devices (landscape tablets, 768px and up) */
    @media only screen and (max-width: 768px) {
      ${SearchBox}{
        width: 100px;
      }
    }

    /* Large devices (laptops/desktops, 992px and up) */
    @media only screen and (min-width: 992px) {
      ${SearchBox}{
        width: 350px;
      }
    }

    /* Extra large devices (large laptops and desktops, 1200px and up) */
    @media only screen and (min-width: 1200px) {
      ${SearchBox}{
        width: 600px;
      }
    }
`;
