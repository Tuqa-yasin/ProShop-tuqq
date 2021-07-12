import { useState } from "react";
import {
  FlexBox,
  FlexRow,
  InnerSection,
  Typography,
} from "../../../App.Styles";
import SwipeableViews from "react-swipeable-views";
import {
  Divider,
  Dot,
  YellowDivider,
} from "./HomeScreen.Styles";
import slideImage from "../../../Assets/img1.PNG";
import ProductCard from "../../../Component/ProductCard/ProductCard";

const styles = {
  root: {
    position: "relative",
    width: "100%",
    height: 678,
  },
};
function FeaturedProductsSection({products}) {

  const [sliderIndex, setSliderIndex] = useState(0);
  const handleChangeIndex = () => {};
  const chunkSize =
  window.innerWidth > 1100 ? 3 : window.innerWidth > 1100 ? 2 : 1;
 
  const getSlides = () => {
   const chunks = [];

   products.map((i, idx) => {
     if (idx % chunkSize === 0) {
       chunks.push([]);
     }

     const firstArrayLength = chunks.length;
     const secondArrayLength = chunks[firstArrayLength - 1].length;

     chunks[firstArrayLength - 1][secondArrayLength] = i;

     return i;
   });

   return chunks.map((i, idx) => (
     <FlexRow key={idx}>
       {i.map((item) => (
         <ProductCard
           product={item}
           key={item._id}
           id={item._id}
           image={"https://proshop-ms.herokuapp.com/" + item.image}
           name={item.name}
           discount={0}
           price={item.price}
           rate={item.rating}
         />
       ))}
     </FlexRow>
   ));
 };

  return (
    <FlexBox color={"#F7F8FC"}>
      <InnerSection>
        <FlexRow style={{ marginTop: 32 }}>
          <Typography fontWeight={700} fontSize={32}>
            Featured Products
          </Typography>
        </FlexRow>
        <YellowDivider />
        <Divider />
        <SwipeableViews
          style={Object.assign({}, styles.root, styles.root)}
          index={sliderIndex}
          onChangeIndex={handleChangeIndex}
        >
          {getSlides()}

        </SwipeableViews>

        <FlexRow style={{ marginBottom: 40, marginTop: 40 }}>
        {getSlides().map((i, idx) => (
            <Dot
              size={14}
              key={idx}
              isGray={sliderIndex !== idx}
              onClick={() => {
                setSliderIndex(idx);
              }}
            />
          ))}
        </FlexRow>
      </InnerSection>
    </FlexBox>
  );
}

export default FeaturedProductsSection;
