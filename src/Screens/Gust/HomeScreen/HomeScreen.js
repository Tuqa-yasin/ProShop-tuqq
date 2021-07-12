import { FlexColumn , SpinnerContainer } from "../../../App.Styles";
import HeroSection from "./HeroSection";
import FeaturedProductsSection from "./FeaturedProductsSection";
import TopRatedSection from "./TopRatedSection";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getFeaturedProducts,
  getSliderImages,
} from "../../../Redux/Guest/guestActions";


const HomeScreen = () => {
 
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const guest = state.guestState;

  useEffect(() => {
    {/*fetchData();*/}
    dispatch(getSliderImages());
    dispatch(getFeaturedProducts());
  }, [dispatch]);

  return guest.isLoading ? (
    <SpinnerContainer />
  ) : (
    <FlexColumn>
      <HeroSection sliderProducts= {guest.sliderImages} />
      <FeaturedProductsSection products={guest.products} />
      <TopRatedSection topRatedProducts= {guest.sliderImages} />
    </FlexColumn>
  );
};

export default HomeScreen;
