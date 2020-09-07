import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import GlobalStyles, {
  MoveCenter,
  Font,
  Theme,
} from "../../../../Styles/GlobalStyles";
import KaKaoLogin from "react-kakao-login";

function CustomerLogin({ recoverToggle }) {
  const { Kakao } = window;

  const kakaoLoginClickHandler = () => {
    Kakao.Auth.login({
      success: function (authObj) {
        fetch(`http://18.222.175.48:8000/user/kakaosignin`, {
          method: "POST",
          headers: {
            Authorization: authObj.access_token,
          },
        })
          .then((res) => res.json())
          .then((res) =>
            localStorage.setItem("access_token", res.access_token)
          );
      },
      fail: function (err) {
        alert(JSON.stringify(err));
      },
    });
  };

  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    fetch("http://18.222.175.48:8000/user/signin", {
      method: "POST",
      body: JSON.stringify({
        email: login.email,
        password: login.password,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        setLogin(res);
      });
  };

  const [data, setData] = useState({});

  return (
    <>
      <TextCenter>Sign into Your Account</TextCenter>
      <FormBox>
        <FormInput>
          <Input
            type="email"
            placeholder="Enter Email"
            name="email"
            onChange={handleChange}
          />
          <Input
            type="password"
            placeholder="Enter password"
            name="password"
            onChange={handleChange}
          />
          <Button type="submit" onClick={handleLogin}>
            SIGN IN
          </Button>
        </FormInput>
        <SocialLogin>
          <SocialLoginText>Sign in with your SNS account</SocialLoginText>
          <SnsIcon
            jsKey={"9c52c7310c18355d6fe64f3077e62a45"}
            onClick={kakaoLoginClickHandler}
          >
            <img
              alt="kakao login"
              src="/Image/CustomerLogin/kakao_login_medium_narrow.png"
            />
          </SnsIcon>
        </SocialLogin>
        <RecoverCreate>
          <Span>
            <button onClick={recoverToggle}>FORGOT PASSWORD</button>
          </Span>
          <Span>
            <Link to="/login/register">NEW ACCOUNT</Link>
          </Span>
        </RecoverCreate>
      </FormBox>
    </>
  );
}

export default CustomerLogin;

const TextCenter = styled.div`
  width: 100%;
  margin-bottom: 42px;
  ${Font("", 24.04, 600)};
  color: #a49c99;
  text-align: center;
`;

const FormBox = styled.div`
  display: ${(props) => props.display || ""};
  justify-content: ${(props) => props.justifyContent || ""};
`;

const FormInput = styled.div`
  text-align: center;
`;

const Input = styled.input`
  display: inline-block;
  width: 250px;
  padding: 10px 18px;
  margin-right: 19px;
  margin-bottom: ${(props) => props.marginBottom || "14px"};
  font-size: 14.02px;
  line-height: 18px;
  color: #858585;
  border: 1px solid #a49c99;
  border-radius: 0;
`;

const Button = styled.button`
  width: 152px;
  height: 39.2px;
  vertical-align: top;
  font-size: 16px;
  letter-spacing: 0.8px;
  line-height: 40px;
  color: #333333;
  background-color: #a49c99;

  &:hover {
    background-color: ${Theme.darkBeige};
  }
`;

const SocialLogin = styled.div`
  ${MoveCenter};
  margin: 20px 0;
`;

const SocialLoginText = styled.div`
  margin-right: 20px;
  font-size: 12px;
  color: #a49c99;
`;

const SnsIcon = styled.div`
  cursor: pointer;

  img {
    width: 120px;
  }
`;

const RecoverCreate = styled.div`
  ${MoveCenter};
  margin-top: 12px;
`;

const Span = styled.span`
  font-size: 12px;
  color: #a49c99;

  &:first-child::after {
    content: "|";
    margin: 0 7px 0 3px;
  }

  * {
    font-size: 12px;
    letter-spacing: 0.2px;
    color: #a49c99;

    &:hover {
      color: ${Theme.darkBeige};
    }
  }
`;
