import React, { useState } from "react";
import { Link } from "react-router-dom";
import { config } from "../../config";
import { Redirect } from "react-router";
import styled from "styled-components";
import GlobalStyles, {
  MoveCenter,
  font,
  theme,
} from "../../Styles/GlobalStyles.js";
import EmailValCheck from "../NewAccount/EmailValCheck/EmailValCheck";
import PasswordValCheck from "../NewAccount/PasswordValCheck/PasswordValCheck";

function NewAccount() {
  const [register, setRegister] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setRegister({ ...register, [e.target.name]: e.target.value });
  };

  var pwPattern = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,}$/;

  const createAccount = (e) => {
    fetch(`${config.api}/user/signup`, {
      method: "POST",
      body: JSON.stringify({
        first_name: register.first_name,
        last_name: register.last_name,
        email: register.email,
        password: register.password,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.message === "SUCCESS") {
          return <Redirect to="/login" />;
        }
      });
  };

  return (
    <NewAccountContainer>
      <NewAccountBox>
        <Title>NEW ACCOUNT</Title>
        {LABEL_OBJ.map((el, idx) => {
          return (
            <Label key={idx}>
              {el[0]}
              <Input
                type={el[1]}
                onChange={handleChange}
                name={el[2]}
                autofocus
              ></Input>
              {idx === 2 &&
                register.email.length > 0 &&
                !register.email.includes("@") && <EmailValCheck />}
              {idx === 3 &&
                0 < register.password.length &&
                !pwPattern.test(register.password) && <PasswordValCheck />}
            </Label>
          );
        })}
        <ButtonContainer>
          <Button onClick={createAccount}>CREATE</Button>
        </ButtonContainer>
      </NewAccountBox>
    </NewAccountContainer>
  );
}

export default NewAccount;

const LABEL_OBJ = [
  ["First Name", "text", "first_name"],
  ["Last Name", "text", "last_name"],
  ["Email", "email", "email"],
  ["Password", "password", "password"],
];

const NewAccountContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  height: 738.6px;
  padding: 30px 30px 0;
  background-color: ${theme.lightBeige};
`;

const NewAccountBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 455.8px;
  height: 536.6px;
`;

const Title = styled.h1`
  display: flex;
  justify-content: center;
  padding-bottom: 9px;
  margin-top: 82px;
  ${font("Khand", 28, 600)};
  color: ${theme.mediumGrey};
  border-bottom: 1px solid ${theme.mediumGrey};
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  line-height: 29.6px;
  margin: 21px 0 3px;
  ${font("Spartan", 15, 700)};
  color: ${theme.mediumGrey};
`;

const Input = styled.input`
  padding: 6px 11px;
  font-size: 15px;
  color: ${theme.mediumGrey};
  line-height: 30.62px;
  outline: none;
  border: 1px solid ${theme.mediumGrey};
  border-radius: 0;
`;

const ButtonContainer = styled.div`
  ${MoveCenter};
  margin-top: 60px;
`;

const Button = styled.button`
  width: 162.45px;
  height: 41px;
  padding: 1px 6px;
  vertical-align: top;
  ${font("Spartan", 16, 700)}
  line-height: 40px;
  letter-spacing: 0.8px;
  color: ${theme.lightBeige};
  background-color: ${theme.mediumGrey};

  &:hover {
    background-color: #333333;
  }
`;
