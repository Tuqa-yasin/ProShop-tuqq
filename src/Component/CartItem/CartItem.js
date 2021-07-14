import propTypes from "prop-types";

import { CardBox, CardImage, ContentBox } from "./CartItem.Styles";
import { FlexRow, Typography } from "../../App.Styles";
import { RIcon } from "../../Screens/Gust/ProductScreen/Product.Style";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";

function CartItem({ counter, setCounter, price, image, name, handleDelete }) {
  return (
    <CardBox>
      <CardImage src={"https://proshop-ms.herokuapp.com/" + image} alt={name} />
      <ContentBox>
        <FlexRow style={{ justifyContent: "flex-end" }}>
          <span style={{ fontSize: 14, padding: 10 }} onClick={handleDelete}>
            x
          </span>
        </FlexRow>
        <Typography
          fontSize={24}
          fontWeight={700}
          style={{ justifyContent: "start", maxWidth: "50%" }}
        >
          {name}
        </Typography>
        <FlexRow style={{ justifyContent: "flex-end" }}>
          <FlexRow
            style={{
              height: 40,
              width: 204,
              border: "1px solid #F2F2F2",
              background: "#FFFFFF",
            }}
          >
            <RIcon
              onClick={() => {
                if (counter > 1) setCounter(counter - 1);
              }}
            >
              <RemoveIcon />
            </RIcon>
            <Typography
              width={"108px"}
              align="center"
              justify="center"
              fontWeight="700"
              fontSize="24px"
            >
              {counter}
            </Typography>
            <RIcon
              onClick={() => {
                if (counter >= 1) setCounter(counter + 1);
              }}
            >
              <AddIcon />
            </RIcon>
          </FlexRow>
          <Typography
            fontSize={30}
            fontWeight={700}
            style={{
              justifyContent: "flex-end",
              marginLeft: "10%",
              width: "auto",
            }}
          >
            ${price}
          </Typography>
        </FlexRow>
      </ContentBox>
    </CardBox>
  );
}

CartItem.defaultProps = {
  handleDelete: () => {},
  setCounter: () => {},
  counter: 1,
};

CartItem.propTypes = {
  name: propTypes.string.isRequired,
  image: propTypes.string.isRequired,
  counter: propTypes.number.isRequired,
  price: propTypes.number.isRequired,
  setCounter: propTypes.func.isRequired,
  handleDelete: propTypes.func.isRequired,
};

export default CartItem;