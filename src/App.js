import { MainContainer } from "./App.Styles";
import NavBar from "./Component/NavBar/NavBar";
import HomeScreen from "./Screens/Gust/HomeScreen/HomeScreen";
import { Route, Switch } from "react-router";
import Login from "./Screens/Auth/Login/Login";
import { useSelector } from "react-redux";
import ProductScreen from "./Screens/Gust/ProductScreen/ProductScreen";
import SearchScreen from "./Screens/Gust/SearchScreen/SearchScreen";

function App() {
  /*
  const userFromLocalStorage = JSON.parse(localStorage.getItem("user"));

  const [user, setUser] = useState(userFromLocalStorage);*/

  const state = useSelector((state) => state);

  console.log("store state", state);

  return (
    <MainContainer>
      <NavBar />
      <Switch>
        <Route path={"/"} exact={true} component={HomeScreen} />,
        <Route
          path={"/product/:id/:name"}
          exact={true}
          component={ProductScreen}
        />,
        <Route key={9874} path={"/search"} exact={true} component={SearchScreen} />,
        {state.userDetails.user._id ? null : (
          <Route
            path={"/login"}
            component={() => {
              return <Login />;
            }}
          />
        )}
        
      </Switch>
    </MainContainer>
  );
}

export default App;
