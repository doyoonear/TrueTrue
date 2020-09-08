import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { cartInfo } from "../../../../../store/actions";
import { Link } from "react-router-dom";
import PackageList from "./PackageList";
import NumberOfUsers from "./NumberOfUsers";
import Requirements from "./Requirements";
import GlobalStyles, {
  theme,
  font,
  MoveCenter,
} from "../../../../../Styles/GlobalStyles";

function RightSection({ text }) {
  const [onList, setOnList] = useState(false);
  const [onUser, setOnUser] = useState(false);
  const [onRequire, setOnRequire] = useState(false);
  const [packageSelect, setPackage] = useState("Choose a Package");
  const [usersSelect, setUserSelect] = useState("Choose Numbers of Users");
  const [indexPackage, setIndexPackage] = useState(0);
  const [onChangeList, setChangeList] = useState(-1);
  const [onChangeUser, setChangeUser] = useState(-1);
  const [indexUsers, setIndexUsers] = useState(-1);
  const [multiply, setMultiply] = useState(1);
  const [compare, setCompare] = useState("price");
  // const [cartData, setCartData] = useState({});

  const userCount = useSelector((store) => store.userCountReducer);
  const packageId = useSelector((store) => store.productCountReducer);
  const productInfo = useSelector((store) => store.cartInfoReducer);

  const dispatch = useDispatch();

  const showList = () => {
    setOnList(!onList);
  };

  const showUser = () => {
    setOnUser(!onUser);
  };

  const showRequire = () => {
    setOnRequire(!onRequire);
  };

  const setOnText = (index) => {
    setPackage(text.package[index].name);
    setIndexPackage(index);
    setChangeList(index);
  };

  const setOnUsers = (index) => {
    setUserSelect(USER_COUNT[index]);
    setIndexUsers(index);
    setChangeUser(index);

    index === 0 ? setMultiply(1) : setMultiply(index + 1);
  };

  const save = () => {
    const price = text.package && text.package[0].price;
    const discount = text.package && text.package[0].discount_price;
    return price === discount ? "price" : "discount_price";
  };

  const createCart = () => {
    const token = localStorage.getItem("login_token");
    fetch("http://192.168.200.123:8000/user/cart", {
      method: "POST",
      headers: {
        Authorization: token,
      },
      body: JSON.stringify({
        package_id: packageId,
        product_count: userCount,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.message === "SUCCESS") {
          console.log("성공");
        } else {
          console.log(res.message);
          console.log("하이");
        }
      });
  };

  const openCart = () => {
    const token = localStorage.getItem("login_token");
    fetch("http://192.168.200.123:8000/user/cart", {
      method: "GET",
      headers: {
        Authorization: token,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        dispatch(cartInfo(res));
      });
  };

  const value = Object.values(text).slice(14, 31);
  return (
    <SideBar>
      <DotImg />
      <Sidebox>
        <SideTitle>Buying Choices</SideTitle>
        <Basket>
          <ChoosePackage onClick={showList} opacity={onList}>
            {packageSelect}
          </ChoosePackage>
          <PackageList
            list={text.package}
            onList={onList}
            change={setOnText}
            show={showList}
          />
          <NumberOfUser onClick={showUser} opacity={onUser}>
            {usersSelect}
          </NumberOfUser>
          <NumberOfUsers
            user={USER_COUNT}
            onUser={onUser}
            change={setOnUsers}
            show={showUser}
          />
        </Basket>
        <InfoText>License info</InfoText>
        <Submit
          submitPackage={onChangeList}
          submitUsers={onChangeUser}
          onClick={() => {
            createCart();
            openCart();
          }}
        >
          From
          <SubmitDollar>
            ${text.package && text.package[indexPackage].price * multiply}
          </SubmitDollar>
          &nbsp;&nbsp;
          <SaveDollar>
            {save() === "discount_price" &&
              `$${text.package[indexPackage][save()]}`}
          </SaveDollar>
          - Make A SELECTION
        </Submit>
      </Sidebox>
      <DotImg angle={180} top={-4}></DotImg>
      <ExtraOption>
        <Inner>
          {INFO_IMG.buyInfo.map((j, idx) => {
            return (
              <InnerConatainer key={idx} show={value[idx]}>
                <InnerImg img={j.url} />
                <InnerImgText>{j.name}</InnerImgText>
              </InnerConatainer>
            );
          })}
        </Inner>
        <MsgBox>
          <MsgBoxText>{text.detail_text}</MsgBoxText>
        </MsgBox>
        <MsgBox>
          <System onClick={showRequire}>System Requirements</System>
        </MsgBox>
        <Requirements show={onRequire} text={text.system_requirements} />
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
  height: 1006px;
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
  line-height: 25px;
  ${font("Spartan", 13, 600)};
  border: 1px solid ${theme.mediumGrey};
  opacity: ${({ opacity }) => (opacity ? 0.2 : "")};

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

const NumberOfUser = styled.div`
  position: absolute;
  width: 100%;
  height: 50px;
  top: 44%;
  padding: 15px;
  margin-bottom: 25px;
  line-height: 25px;
  ${font("Spartan", 13, 600)};
  border: 1px solid ${theme.mediumGrey};
  opacity: ${({ opacity }) => (opacity ? 0.2 : "")};

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
  background-color: ${({ submitPackage, submitUsers }) =>
    submitPackage >= 0 && submitUsers >= 0 ? theme.mediumGrey : "#b3afaa"};
  cursor: ${({ submitPackage, submitUsers }) =>
    submitPackage >= 0 && submitUsers >= 0 ? "pointer" : "no-drop"};
`;

const SubmitDollar = styled.span`
  ${font("Spartan", 18)};
  color: white;
`;

const SaveDollar = styled.span`
  ${font("Spartan", 18)};
  color: white;
  text-decoration: line-through;
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
  display: ${({ show }) => (show ? "block" : "none")};
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
  text-align: center;
`;

const MsgBoxText = styled.span`
  line-height: 52px;
  padding: 14px;
`;

const System = styled.span`
  line-height: 52px;
  padding: 14px;
  cursor: pointer;

  &::before {
    content: "";
    background-image: url("/Images/down.png");
    position: absolute;
    width: 10px;
    height: 9px;
    right: 30%;
    bottom: 34.4%;
    background-size: contain;
    transform: translateY(-50%);
  }
`;

const INFO_IMG = {
  buyInfo: [
    {
      name: "Photoshop",
      url: [
        "//cdn.shopify.com/s/files/1/0989/0116/files/Photoshop_ICON_2x_134x134_crop_center_2x_7ff3b338-01dd-4d68-b377-d5d3fdaf7295_200x200.png?v=1548238607",
      ],
    },
    {
      name: "Version",
      url:
        "//cdn.shopify.com/s/files/1/0989/0116/files/CS6_ICON_2x_134x134_crop_center_2x_5419d8c0-5d3e-4ca1-b39a-46ced2f4dbb2_200x200.png?v=1548238519",
    },
    {
      name: "Brush Set",
      url:
        "//cdn.shopify.com/s/files/1/0989/0116/files/Brush_set_ICON_2x_134x134_crop_center_2x_b5cc4c47-e7bc-4c82-af71-80729ed66b18_200x200.png?v=1548239238",
    },
    {
      name: "Vector",
      url: [
        "//cdn.shopify.com/s/files/1/0989/0116/files/Vector_ICON_2x_134x134_crop_center_2x_89e403c9-57f2-42e6-b6ea-63cb860e5ae7_200x200.png?v=1548239043",
      ],
    },
    {
      name: "PSD File",
      url:
        "//cdn.shopify.com/s/files/1/0989/0116/files/Layered_ICON_2x_134x134_crop_center_2x_81a1b0a3-0d63-47d8-9e27-d2a25d2ae78f_200x200.png?v=1548238675",
    },
    {
      name: "Raster",
      url: [
        "//cdn.shopify.com/s/files/1/0989/0116/files/Raster_ICON_2x_134x134_crop_center_2x_52b5d106-1a9b-4861-9af1-7f75e852b94c_200x200.png?v=1548238824",
      ],
    },
    {
      name: "Illustrator",
      url:
        "//cdn.shopify.com/s/files/1/0989/0116/files/Illustrato_ICON_2x_134x134_crop_center_2x_cdb387b0-5be4-429c-8928-dde6a2a54c23_200x200.png?v=1548239146",
    },
    {
      name: "Texture Set",
      url:
        "//cdn.shopify.com/s/files/1/0989/0116/files/Texture-Set_72a90e5c-f5c5-4ece-9c42-e51c69fdee5d_200x200.png?v=1550866127",
    },
    {
      name: "Texture",
      url:
        "//cdn.shopify.com/s/files/1/0989/0116/files/Texture-Set_874d34e0-bc6d-4fe5-83a5-054372e1a249_200x200.png?v=1552776803",
    },
    {
      name: "Action Set",
      url:
        "//cdn.shopify.com/s/files/1/0989/0116/files/Action_Set_ICON_2x_134x134_crop_center_2x_a103260d-5705-498b-8c02-87df29375e06_200x200.png?v=1548238745",
    },
    {
      name: "Bundle",
      url:
        "//cdn.shopify.com/s/files/1/0989/0116/files/Bundle-ICON_2x_5acd1f70-8b0b-4d0b-885f-bdfd1f7f887b_200x200.png?v=1552855308",
    },
    {
      name: "Seamless",
      url:
        "//cdn.shopify.com/s/files/1/0989/0116/files/Pattern_ICON_2x_ef21c2ff-4e32-41fe-9f4b-3d8934242537_200x200.png?v=1550866234",
    },
    {
      name: "Procreate",
      url:
        "//cdn.shopify.com/s/files/1/0989/0116/files/Procreate_ICON_2x_134x134_crop_center_2x_539bac83-84b7-4e8f-b0ad-f84757378765_200x200.png?v=1548239101",
    },
    {
      name: "",
      url:
        "//cdn.shopify.com/s/files/1/0989/0116/files/CC19-ICON_2X_202777f3-1c4c-48e9-87ab-a4b4ba74fc6a_200x200.png?v=1582851337",
    },
    {
      name: "Patterns",
      url:
        "//cdn.shopify.com/s/files/1/0989/0116/files/Pattern_ICON_2x_ef21c2ff-4e32-41fe-9f4b-3d8934242537_200x200.png?v=1550866234",
    },
    {
      name: "Affinity",
      url:
        "//cdn.shopify.com/s/files/1/0989/0116/files/Affinity_2x_cf63dcb2-1273-4d4e-b372-41fb9064a6ca_200x200.png?v=1588723916",
    },
  ],
};

const USER_COUNT = ["1 Users", "2 Users", "3 Users", "4 Users", "5 Users"];
