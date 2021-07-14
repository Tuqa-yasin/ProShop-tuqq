import { FlexColumn } from "../../App.Styles";
import {
  RateBox,
  ReviewTitle,
  TextReviewDate,
  TextReviewDescription,
} from "./Review.Styles";
import Rating from "@material-ui/lab/Rating";

export default function Review({ title, text, rate, icon, date }) {
  return (
    <FlexColumn
      style={{
        justifyContent: "space-between",
        alignItems: "flex-start",
      }}
    >
      <ReviewTitle>{title}</ReviewTitle>
      <RateBox>
        <Rating name="simple-controlled" value={rate} />
        <TextReviewDate>{date}</TextReviewDate>
      </RateBox>
      <TextReviewDescription>{text}</TextReviewDescription>
    </FlexColumn>
  );
}