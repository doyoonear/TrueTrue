import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import PackageList from "./PackageList";
import NumberOfUsers from "./NumberOfUsers";
import GlobalStyles, {
  theme,
  font,
  MoveCenter,
} from "../../../../../Styles/GlobalStyles";

function RightSection({ text }) {
  const [onList, setOnList] = useState(false);
  const [onUser, setOnUser] = useState(false);
  const [packageSelect, setPackage] = useState("Choose a Package");
  const [usersSelect, setUserSelect] = useState("Choose Numbers of Users");

  const showList = () => {
    setOnList(!onList);
  };

  const showUser = () => {
    setOnUser(!onUser);
  };

  const setOnText = (index) => {
    setPackage(text.buy[index]);
  };

  const setOnUsers = (index) => {
    setUserSelect(text.users[index]);
  };

  return (
    <SideBar>
      <DotImg></DotImg>
      <Sidebox>
        <SideTitle>Buying Choices</SideTitle>
        <Basket>
          <ChoosePackage onClick={showList}>{packageSelect}</ChoosePackage>
          <PackageList
            list={text.buy}
            onList={onList}
            change={setOnText}
            show={showList}
          />
          <NumberOfUser onClick={showUser}>{usersSelect}</NumberOfUser>
          <NumberOfUsers
            user={text.users}
            onUser={onUser}
            change={setOnUsers}
            show={showUser}
          />
        </Basket>
        <InfoText>License info</InfoText>
        <Submit>
          From <SubmitDollar>$19.00</SubmitDollar> _ Make A SELECTION
        </Submit>
      </Sidebox>
      <DotImg angle={180} top={-4}></DotImg>
      <ExtraOption>
        <Inner>
          {text.buyInfo &&
            text.buyInfo.map((v, idx) => {
              return (
                <InnerConatainer>
                  <InnerImg img={v.url} />
                  <InnerImgText>{v.name}</InnerImgText>
                </InnerConatainer>
              );
            })}
        </Inner>
        <MsgBox>
          <MsgBoxText>
            Save 30~40% with an Everything photoshop or BYO Bundle
          </MsgBoxText>
        </MsgBox>
        <MsgBox>
          <System>System Requirements</System>
        </MsgBox>
      </ExtraOption>
    </SideBar>
  );
}

export default RightSection;

const SideBar = styled.section`
  position: sticky;
  top: 174px;
  right: 10%;
  width: 576px;
  height: 681.55px;
`;

const Sidebox = styled.div`
  position: relative;
  width: 100%;
  height: 347.5px;
  padding: 31px 31px 41px;
  background-color: ${theme.darkBeige};
`;

const DotImg = styled.div`
  position: relative;
  background-image: url(/Images/dot_bg.png);
  background-repeat: repeat-x;
  background-position: 0 -5px;
  top: ${({ top }) => top || 2}px;
  z-index: 1;
  height: 4px;
  transform: rotate(${({ angle }) => angle || 0}deg);
`;

const SideTitle = styled.h3`
  text-align: center;
  font-size: 20px;
  margin-top: 5px;
  margin-bottom: 12.5px;
  color: ${theme.mediumGrey};
`;

const Basket = styled.form`
  position: relative;
  height: 150px;
  width: 100%;
`;

const ChoosePackage = styled.div`
  width: 100%;
  height: 50px;
  padding: 15px;
  margin-bottom: 25px;
  font-size: 16px;
  border: 1px solid ${theme.mediumGrey};

  &::before {
    content: "";
    background-image: url("/Images/down.png");
    position: absolute;
    width: 10px;
    height: 9px;
    right: 5.5%;
    top: 17%;
    background-size: contain;
    transform: translateY(-50%);
  }
`;

const ChoosePackageDefault = styled.span.attrs((select) => ({
  value: select || "Choose a Package",
}))``;

const NumberOfUser = styled.div`
  position: absolute;
  width: 100%;
  height: 50px;
  top: 44%;
  padding: 15px;
  margin-bottom: 25px;
  font-size: 16px;
  border: 1px solid ${theme.mediumGrey};

  &::before {
    content: "";
    background-image: url("/Images/down.png");
    position: absolute;
    width: 10px;
    height: 9px;
    right: 5%;
    top: 48%;
    background-size: contain;
    transform: translateY(-50%);
  }
`;

const InfoText = styled.p`
  position: relative;
  top: -10%;
  margin-top: 10px;
  margin-bottom: 20px;
`;

const Submit = styled.button`
  position: relative;
  width: 100%;
  height: 45px;
  bottom: 20px;
  ${font("Spartan", 14)};
  color: white;
  background-color: #b3afaa;
`;

const SubmitDollar = styled.span`
  ${font("Spartan", 18)};
  color: white;
`;

const ExtraOption = styled.div`
  width: 100%;
  height: 236.81px;
  margin-top: 80px;
`;

const Inner = styled.div`
  ${MoveCenter}
  width: 100%;
  height: 129.81px;
  padding-bottom: 24px;
`;

const InnerImg = styled.img.attrs((props) => ({
  src:
    props.img ||
    "//cdn.shopify.com/s/files/1/0989/0116/files/Photoshop_ICON_2x_134x134_crop_center_2x_7ff3b338-01dd-4d68-b377-d5d3fdaf7295_200x200.png?v=1548238607",
}))`
  width: 79.19px;
  height: 79.19px;
`;

const InnerConatainer = styled.div`
  width: 79.19px;
  margin-left: 30px;
  text-align: center;
`;

const InnerImgText = styled.span`
  ${font("Spartan", 14)}
  font-size: 14px;
`;

const MsgBox = styled.div`
  width: 100%;
  height: 57px;
  border-top: 1px solid #b3afaa;
  border-bottom: 1px solid #b3afaa;
`;

const MsgBoxText = styled.span`
  line-height: 52px;
  padding: 14px;
`;

const System = styled.span`
  line-height: 52px;
  padding: 14px;

  &::before {
    content: "";
    background-image: url("/Images/down.png");
    position: absolute;
    width: 10px;
    height: 9px;
    left: 37%;
    bottom: 3.1%;
    background-size: contain;
    transform: translateY(-50%);
  }
`;
