import React from "react";
import Styled from "styled-components";
import logoImg from "../Assets/images/logo-black.svg";
import { BrowserRouter as Router, Link } from "react-router-dom";

export default function Signup() {
  return (
    <Container>
      <Link to="/">
        <img src={logoImg} />
      </Link>
      <Content>
        <h2>Create Account</h2>
        <label>Your name</label>
        <input maxLength="50" autoComplete="tel" type="text" />
        <label>Mobile number</label>
        <input maxLength="50" type="tel" autoComplete="tel" />
        <label>Email(optional)</label>
        <input maxLength="50" type="email" autoComplete="email" />
        <label>Password</label>
        <input
          maxLength="50"
          type="password"
          autoComplete="password"
          placeholder="At least 6 charecters"
        />
        <Button>Continue</Button>
        <p>Already have an account?</p>
        <Link
          style={{ display: "contents", textDecoration: "none" }}
          to="/signin"
        >
          <SignUp>Sign In</SignUp>
        </Link>
      </Content>
    </Container>
  );
}

const Content = Styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 4px;
    border: 1px #ddd solid;
    background-color: #fff;
    width: 310px;
    margin-top: 20px;
    padding: 20px 40px;
    
    h2{
        font-weight: 500;
        margin-bottom: 15px;
    }


    label{
        font-weight: 700;
        font-size: 14px;
    }

    input{
        height: 24px;
        margin-top: 3px;
        border: 1px solid #a6a6a6;
        border-radius: 3px;
        padding: 3px 7px;
        line-height: normal;
        box-shadow: 0 1px 0 rgb(255 255 255 / 50%), 0 1px 0 rgb(0 0 0 / 7%) inset;
        outline: 0;
        &:focus{
            border: 1px solid #E77600;
            box-shadow: 1px 1px 1px 1px #E77600;
            -webkit-box-shadow: 0px 0px 6px 1px #E77600;
            -moz-box-shadow: 0px 0px 6px 1px #E77600;
        }
    }

    a{
        color: #0081bd;
        font-weight: 500;
        margin-top: 5px;
    }
    p{
        line-height: 1;
        font-size: 13px;
        color: #767676;
        font-weight: 400;
        z-index: 2;
        position: relative;
        display: inline-block;
        background-color: #fff;
        padding: 10px 8px 0 7px;
        align-self: center;
        }
    }
`;

const Button = Styled.button`
   height: 35px;
   margin-top: 15px;
   background: #f0c14b;
   border-radius: 3px;
   outline: 0;
   border-color: #adb1b8 #a2a6ac #8d9096;
   border-width: 1px;
   border-style: solid;
   text-decoration: none!important;
   cursor: pointer;

   &:hover{
       background: #ffb224;
   }
`;

const SignUp = Styled(Button)`
   background: #E8F0F2;

   &:hover{
       background: #E1E5EA;
   }
`;

const Container = Styled.div`
    min-height: calc(100vh - 70px);
    *{
        color: black;
    }

    display: flex;
    flex-direction: column;
    place-items: center;
    padding: 30px 30px;
    background: #fff;
    
    img{
        width: 103px;
        cursor: pointer;
    }
    /* Extra small devices (phones, 600px and down) */
    @media only screen and (max-width: 600px) {
      ${Content}{
        width: 240px;
        margin-top: 20px;
        padding: 20px 20px;
        }
      }
      
    }
`;
