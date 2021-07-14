import {
    FlexRow,
    Hr,
    InnerSection,
    SpinnerContainer,
    Typography,
  } from "../../../App.Styles";
  import Navigator from "../../../Component/Navigator/Navigator";
  import { CartList, ProceedBox } from "./CartScreen.Styles";
  import { useSelector } from "react-redux";
  import { useState } from "react";
  import CartItem from "../../../Component/CartItem/CartItem";
  import Button from "../../../Component/Button/Button";
  
  function CartScreen(props) {
    const [counter, setCounter] = useState(1);
    const state = useSelector((state) => state);
  
    return (
      <InnerSection style={{ marginTop: 32 }}>
        <Navigator name={"Shopping Cart"} />
        <FlexRow style={{ justifyContent: "start", alignItems: "start" }}>
          <CartList>
            {state.cart.cart.map((item) => (
              <CartItem
                key={item._id}
                name={item.name}
                price={item.price}
                image={item.image}
                counter={item.quantity}
                setCounter={setCounter}
                handleDelete={() => {}}
              />
            ))}
          </CartList>
          <ProceedBox>
            <Typography
              fontSize={32}
              fontWeight={700}
              style={{ marginBottom: 80 }}
            >
              Subtotal ({state.cart.cart.length}) items
            </Typography>
            <Typography
              fontSize={32}
              fontWeight={700}
              style={{ marginBottom: 80 }}
            >
              Total ({state.cart.cart.length}) items
            </Typography>
            <Typography
              fontSize={38}
              fontWeight={700}
              style={{ marginBottom: 30, justifyContent: "start" }}
            >
              Total Price $
              {state.cart.cart
                .reduce((acc, item) => {
                  return acc + item.price * item.quantity;
                }, 0)
                .toFixed(2)}
            </Typography>
            <Hr />
  
            <Button
              text={"Proceed to checkout"}
              link={"/proceed-checkout"}
              borderRadius={10}
              width={"100%"}
            />
          </ProceedBox>
        </FlexRow>
      </InnerSection>
    );
  }
  
  export default CartScreen;