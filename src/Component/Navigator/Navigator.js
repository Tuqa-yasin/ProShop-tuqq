
import { useHistory } from "react-router";
import { Title } from "../../Screens/Gust/ProductScreen/Product.Style";

function Navigator(props) {
  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };
  return (
    <Title>
      <span
        style={{ color: "#707070", marginRight: 5, cursor: "pointer" }}
        onClick={goBack}
      >
        Back
      </span>
      /{props.name}
    </Title>
  );
}

export default Navigator;