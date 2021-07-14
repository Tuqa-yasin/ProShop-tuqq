import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  InnerSection,
  SpinnerContainer,
  Typography,
} from "../../../App.Styles";
import ProductCard from "../../../Component/ProductCard/ProductCard";
import { search } from "../../../Redux/Guest/guestActions";
import { useLocationWithQuery } from "react-router-query-hooks";
import { CardsBox, LoadMore } from "../ProductScreen/Product.Style";


function SearchScreen() {
  const {
    guestState: {
      searchResults: { isLoading, products, pages },
    },
  } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const locationQuery = useLocationWithQuery();
  const {
    query: { keyword },
  } = locationQuery;

  useEffect(() => {
    dispatch(search(keyword, page));
  }, [dispatch, keyword, page]);

  return isLoading && page === 1 ? (
    <SpinnerContainer />
  ) : (
    <InnerSection style={{ margin: "44px 0 60px", alignItems: "flex-start" }}>
      <Typography
        style={{ justifyContent: "start" }}
        fontSize="32"
        color="#242424"
        fontWeight="700"
      >
        Search Results...
      </Typography>
      <CardsBox>
        {products.length > 0 ? (
          products.map((item) => (
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
          ))
        ) : (
          <Typography
            style={{ justifyContent: "start", marginTop: 60 }}
            fontSize="20"
            color="#242424"
            fontWeight="500"
          >
            No Results...
          </Typography>
        )}
      </CardsBox>
      {pages > 1 && page < pages && (
        <LoadMore
          isLoading={isLoading}
          onClick={() => setPage((prevPage) => prevPage + 1)}
        >
          Load More
        </LoadMore>
      )}
    </InnerSection>
  )
}

export default SearchScreen;