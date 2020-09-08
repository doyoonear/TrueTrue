import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { plusUsers } from "../../store/actions";
import { cartInfo } from "../../store/actions";
import styled from "styled-components";
import GlobalStyles, { font, theme } from "../../Styles/GlobalStyles";

function CartModal() {
  const [cartList, setCartList] = useState([]);
  // const [cartInfo, setCartInfo] = useState({
  //   package_id: "",
  //   product_count: "",
  // });
  const [cartData, setCartData] = useState({});

  const userCount = useSelector((store) => store.userCountReducer);
  const packageId = useSelector((store) => store.productCountReducer);
  const productInfo = useSelector((store) => store.cartInfoReducer);
  const dispatch = useDispatch();

  // const deleteCart = () => {
  //   const token = localStorage.getItem("login_token");
  //   fetch("http://192.168.200.123:8000/user/cart", {
  //     method: "DELETE",
  //     headers: {
  //       Authorization: token,
  //     },
  //     body: JSON.stringify({
  //       cart_id: productInfo.cart.cart_id,
  //     }).then((res) => {
  //       console.log(res.message);
  //     }),
  //   });
  // };

  // body: JSON.stringify({
  //       package_id: packageId,
  //       product_count: userCount,
  //     }),

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

  // if (window.performance) {
  //   if (performance.navigation.type === 1) {
  //     openCart();
  //     window.onbeforeunload = () => {
  //       console.log("하이");
  //     };
  //   }
  // }

  console.log(productInfo);
  return (
    <>
      <Container>
        <CartContainer>
          <CartBox>
            <CartBoxHeader>
              <HeaderTitle>YOUR Cart</HeaderTitle>
              <ViewCart>
                <Link to="#">View cart</Link>
              </ViewCart>
            </CartBoxHeader>
            <EmptyCart>Your cart is currently empty</EmptyCart>
            {productInfo.cart?.map((v) => {
              return (
                <>
                  <ItemContainer>
                    <ItemImage src={v.product_image} />
                    <ItemBox>
                      <ItemTitle>{v.product_name}</ItemTitle>
                      <ItemOptionTitle>{v.package_name}</ItemOptionTitle>
                      <CartCount>
                        <AddMinor>-</AddMinor>
                        <CountInput>{v.count}</CountInput>
                        <AddMinor>+</AddMinor>
                      </CartCount>
                      <TotalPrice>$159.60</TotalPrice>
                    </ItemBox>
                    <Close />
                  </ItemContainer>
                </>
              );
            })}
          </CartBox>
          <CartFooter>
            <Total>
              <TotalName>Subtotal</TotalName>
              <Price>$19.00</Price>
            </Total>
            <AgreeBox>
              <CheckBox type="checkbox"></CheckBox>
              <TextAgree>
                I agree to the<Link to="#">End User License Agreement</Link>
              </TextAgree>
            </AgreeBox>
            <CheckOutBtn>go to checkout</CheckOutBtn>
          </CartFooter>
        </CartContainer>
      </Container>
    </>
  );
}

export default CartModal;

const Container = styled.div`
  position: fixed;
  width: 510px;
  height: calc(100vh - 100px);
  right: 0;
  padding: 30px 43px;
  background-color: #333;
  z-index: 2;
`;

const CartContainer = styled.div`
  position: relative;
  height: 100%;
`;

const CartBox = styled.div`
  height: calc(100vh - 370px);
  padding-bottom: 70px;
`;

const CartBoxHeader = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #a49c99;
`;

const HeaderTitle = styled.div`
  ${font("Spartan", 22)}
  margin-bottom: 15px;
  padding-top: 6px;
  color: #a49c99;
  letter-spacing: 0.6px;
`;

const ViewCart = styled.div`
  margin-top: 8px;
  letter-spacing: 0.4px;

  & :nth-child(1) {
    text-decoration: none;
    ${font("Spartan", 15)};
    color: #a49c99;
  }
`;

const EmptyCart = styled.p`
  margin-top: 20px;
  letter-spacing: 0.4px;
  ${font("Spartan", 17, 600)};
  display: none;
`;

const CartFooter = styled.footer`
  margin-top: 30px;
  width: 100%;
  background-color: #333;
`;

const Total = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 47px;
  border-top: 1px solid #a49c99;
  border-bottom: 1px solid #a49c99;
`;

const TotalName = styled.div`
  padding-top: 13px;
  ${font("Inconsolata", 15, 600)};
  letter-spacing: 0.4px;
  color: #a49c99;
`;

const Price = styled.div`
  margin-top: 13px;
  ${font("Spartan", 20)};
  color: #a49c99;
`;

const AgreeBox = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`;

const CheckBox = styled.input`
  width: 25px;
  height: 25px;
  color: #a49c99;
`;

const TextAgree = styled.div`
  margin-left: 10px;
  ${font("Inconsolata", 15)};
  color: #a49c99;

  a {
    text-decoration: none;
    border-bottom: 1px solid #eee9e3;
    margin-left: 10px;
    color: #a49c99;
  }
`;

const CheckOutBtn = styled.button`
  width: 100%;
  height: 45px;
  margin-top: 25px;
  padding: 10px;
  text-transform: uppercase;
  ${font("Spartan", 17, 600)}
  background-color: ${theme.mediumGrey};
`;

const ItemContainer = styled.div`
  display: flex;
  width: 100%;
  height: 113px;
  margin-top: 30px;
`;

const ImageContainer = styled.div`
  width: 90px;
`;

const ItemImage = styled.img.attrs((props) => ({
  src:
    props.src ||
    "//cdn.shopify.com/s/files/1/0989/0116/products/The-Rusty-Nib-Photoshop-1_90x60@2x.png?v=1569214875",
}))`
  width: 90px;
  height: 60px;
`;

const ItemBox = styled.div`
  height: 113px;
  width: calc(100% - 135px);
  margin-left: 28px;
`;

const ItemTitle = styled.div`
  margin-bottom: 2px;
  color: #a49c99;
`;

const ItemOptionTitle = styled.div`
  ${font("Inconsolata", 13)};
  color: #a49c99;
`;

const Close = styled.img.attrs((props) => ({
  src:
    props.src ||
    "//cdn.shopify.com/s/files/1/0107/5865/1963/t/1/assets/Close_Button_2x.png",
}))`
  max-width: 22px;
  height: 22px;
`;

const CartCount = styled.label`
  display: flex;
  text-align: left;
  margin-top: 5px;
`;

const AddMinor = styled.div`
  width: 25px;
  height: 31px;
  text-align: center;
  font-size: 17px;
  color: #a49c99;
  border: 1px solid #a49c99;
`;

const CountInput = styled.div`
  width: 35px;
  height: 31px;
  text-align: center;
  color: #a49c99;
  border-top: 1px solid #a49c99;
  border-bottom: 1px solid #a49c99;
`;

const TotalPrice = styled.div`
  margin-top: 10px;
  color: #a49c99;
  ${font("Inconsolata", 18)};
`;
