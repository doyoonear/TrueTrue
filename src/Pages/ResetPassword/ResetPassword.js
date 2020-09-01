import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Redirect } from "react-router";
import styled from "styled-components";
import GlobalStyles, {
  MoveCenter,
  Font,
  Theme,
} from "../../Styles/GlobalStyles.js";
import PasswordValCheck from "../NewAccount/PasswordValCheck/PasswordValCheck";

function ResetPassword() {
  const { password, setPassword } = useState({
    firstPassword: "",
    secondPassword: "",
  });

  const handleChange = (e) => {
    setPassword({ ...password, [e.target.name]: e.target.value });
  };

  var pwPattern = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,}$/;

  return (
    <ResetPasswordConatiner>
      <ResetPasswordBox>
        <Title>Reset account password</Title>
        <SubTitle>Enter a new password for lilyoh628@gmail.com</SubTitle>
        {PASSWORD_LABEL_OBJ.map((el, idx) => {
          return (
            <Label key={idx}>
              {el[0]}
              <Input
                type={el[1]}
                name={el[2]}
                onChange={handleChange}
                autofocus
              ></Input>
              {/* {idx === 0 &&
                password.firstPassword.length > 0 &&
                !pwPattern.test(password.firstPassword) && <PasswordValCheck />}
              {idx === 1 &&
                password.secondPassword.length > 0 &&
                password.firstPassword === password.secondPassword && (
                  <PasswordSameCheck>
                    The password does not match.
                  </PasswordSameCheck> */}
              {/* )} */}
            </Label>
          );
        })}
        <ResetPasswordBtn>RESET PASSWORD</ResetPasswordBtn>
      </ResetPasswordBox>
    </ResetPasswordConatiner>
  );
}

export default ResetPassword;

const PASSWORD_LABEL_OBJ = [
  ["Password", "password", "first_pw"],
  ["Confirm Password", "password", "second_pw"],
];

const ResetPasswordConatiner = styled.div`
  ${MoveCenter};
  background-color: green;
`;

const ResetPasswordBox = styled.div`
  background-color: yellowgreen;
  ${MoveCenter};
  flex-direction: column;
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 9px;
  margin-top: 82px;
  ${Font("Inconsolata", 28, 600)};
  color: ${Theme.mediumGrey};
  border-bottom: 1px solid ${Theme.mediumGrey};
`;

const SubTitle = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 9px;
  margin-top: 82px;
  ${Font("Inconsolata", 16, 600)};
  color: ${Theme.mediumGrey};
  border-bottom: 1px solid ${Theme.mediumGrey};
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  line-height: 29.6px;
  margin: 21px 0 3px;
  ${Font("Inconsolata", 15, 700)};
  color: ${Theme.mediumGrey};
`;

const Input = styled.input`
  padding: 6px 11px;
  font-size: 15px;
  color: ${Theme.mediumGrey};
  line-height: 30.62px;
  outline: none;
  border: 1px solid ${Theme.mediumGrey};
  border-radius: 0;
`;

const PasswordSameCheck = styled.div`
  font-size: 12px;
  color: red;
`;

const ResetPasswordBtn = styled.button`
  width: 162.45px;
  height: 41px;
  padding: 1px 6px;
  vertical-align: top;
  ${Font("Spartan", 16, 700)}
  line-height: 40px;
  letter-spacing: 0.8px;
  color: ${Theme.lightBeige};
  background-color: ${Theme.mediumGrey};

  &:hover {
    background-color: #333333;
  }
`;
