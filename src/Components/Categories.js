import React from "react";
import Styled from "styled-components";
import MenuIcon from "../Assets/images/menu.svg";

export default function Categories() {
  return (
    <Container>
      <ul>
        <li>
          <img style={{ marginRight: 5 }} src={MenuIcon} />
          All
        </li>
        <li>Electronincs</li>
        <li>Books</li>
        <li>Mens</li>
        <li>Womens</li>
        <li>Computers&Accessories</li>
        <li>Furnitures</li>
        <li>Dresses</li>
      </ul>
    </Container>
  );
}

const Container = Styled.div`
    height: 40px;
    background: #232F3E;
    display: flex;
    padding: 0px;
    align-items: center;
    display: flex;
 
    ul{
        list-style-type: none;
        display: flex;
        li{
            margin: 0px 10px;
            padding: 2px 10px;
            cursor: pointer;
            display: flex;
            
            &:hover{
                border: 1px solid white;
            }
        }
    }

    /* Extra small devices (phones, 600px and down) */
    @media only screen and (max-width: 600px) {
      display: none !important;
    }

    /* Small devices (portrait tablets and large phones, 600px and up) */
    @media only screen and (min-width: 425px) {
      display: none !important;
    }

    /* Medium devices (landscape tablets, 768px and up) */
    @media only screen and (min-width: 768px) {
      display: flex !important;
      ul{
        list-style-type: none;
        display: flex;
        align-items: center;
        font-size: 15px;
        li{
            margin-left: 2px;
            margin-right: 2px;
            width: 100%;
            cursor: pointer;

            &:hover{
                border: 1px solid white;
            }
        }
    }
    }

    /* Large devices (laptops/desktops, 992px and up) */
    @media only screen and (min-width: 992px) {
      display: flex !important;
    }

    /* Extra large devices (large laptops and desktops, 1200px and up) */
    @media only screen and (min-width: 1200px) {
      display: flex !important;
    }
`;
