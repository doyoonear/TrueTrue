import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import GlobalStyles, {
  MoveCenter,
  font,
  theme,
} from "../../../Styles/GlobalStyles.js";
import CustomerLogin from "./CustomerLogin/CustomerLogin";
import RecoverPassword from "./RecoverPassword/RecoverPassword";

function Login() {
  const [recover, setRecover] = useState(false);
  const [hide, setHide] = useState(false);

  const recoverToggle = () => {
    setRecover(!recover);
  };

  const hideLogin = () => {
    setHide(!hide);
  };

  return (
    <LoginBox hide={hide}>
      <LoginContainer>
        <LoginForm>
          {!recover && <CustomerLogin recoverToggle={recoverToggle} />}
          {recover && <RecoverPassword recoverToggle={recoverToggle} />}
        </LoginForm>
        <CloseBtn onClick={hideLogin}>
          <img
            alt="close"
            src="//cdn.shopify.com/s/files/1/0989/0116/t/21/assets/Close_Button_2x.png?v=9904816089437141646"
          />
        </CloseBtn>
      </LoginContainer>
    </LoginBox>
  );
}

export default Login;

const LoginBox = styled.div`
  position: relative;
  padding: 55px 30px 52px;
  background-color: ${theme.darkGrey};
  top: ${(props) => (props.hide ? "-361.3px" : "0px")};
  transition-duration: 1s;

  * {
    ${font("Spartan", "", 700)};
  }
`;

const LoginContainer = styled.div`
  ${MoveCenter};
  margin: 0 auto;
`;

const LoginForm = styled.form`
  width: 850px;
  margin: 0 auto;
`;

const CloseBtn = styled.button`
  position: absolute;
  top: 55px;
  right: 55px;
  width: 15px;
  height: 15px;
  padding: 0;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
  }
`;
