import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import GlobalStyles, {
  MoveCenter,
  Font,
  Theme,
} from "../../../../Styles/GlobalStyles";

function RecoverPassword({ recoverToggle }) {
  return (
    <>
      <TextCenter>Reset your password</TextCenter>
      <FormBox display="flex" justifyContent="center">
        <Input
          type="email"
          placeholder="Enter Email + Hit Return"
          marginBottom="25.2px"
        />
        <ButtonContainer>
          <Button type="submit" buttonHeight="44px">
            SUBMIT
          </Button>
          <button className="cancelBtn" type="button" onClick={recoverToggle}>
            Cancel
          </button>
        </ButtonContainer>
      </FormBox>
    </>
  );
}

export default RecoverPassword;

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

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  .cancelBtn {
    margin-top: 7px;
    ${Font("Inconsolata", 16, 400)}
    color: #a49c99;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }
`;
