import { Typography } from "../../App.Styles";
import { useState } from "react";
import {
  NavbarContainer,
  InnerNav,
  NavBox,
  InputText,
  ButtonNav,
  SpanNav,
  Icon,
  SearchIconNav,
  StyledLink,
} from "./NavBar.Styles";
import PersonIcon from "@material-ui/icons/Person";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";

export default function Navbar() {
  const Style = {
    fontSize: 25,
    color: "#FFF",
    fill: "#FFF",
    margin: "auto 0 10px 0",
  };
  const [value, setValue] = useState("");
  const history = useHistory();

  const state = useSelector((state) => state);

  return (
    <NavbarContainer>
      <InnerNav>
        <NavBox>
          <StyledLink to={"/"}>
            <SpanNav>Pro</SpanNav>Shop
          </StyledLink>
        </NavBox>
        <NavBox style={{ background: "#FFF", borderRadius: 6 }}>
          <InputText
            type="text"
            value={value}
            placeholder="Search"
            onChange={(e) => setValue(e.target.value)}
          />
          <ButtonNav   onClick={() => {
                history.push(`/search${value ? `?keyword=${value}` : ""}`);
              }}>
            <SearchIconNav />
            search
          </ButtonNav>
        </NavBox>
        <NavBox>
          <Icon to={state.userDetails.user._id ? "/profile" : "/login"}>
            <PersonIcon style={Style} />
            {state.userDetails.user._id ? (
              <Typography fontSize={"13px"} color={"#fff"}>
                Profile
              </Typography>
            ) : (
              <Typography fontSize={"13px"} color={"#fff"}>
                Login / Sign up
              </Typography>
            )}
          </Icon>

          <Icon to={"/cart"}>
            <span>0</span>
            <ShoppingCartIcon style={Style} />
            <Typography fontSize={"13px"} color={"#fff"}>
              Cart
            </Typography>
          </Icon>
          {state.userDetails.user._id && (
            <Icon
              onClick={() => {
                // setUser(null);
                localStorage.removeItem("user");
              }}
            >
              <ExitToAppIcon style={Style} />
              <Typography fontSize={"13px"} color={"#fff"}>
                Logout
              </Typography>
            </Icon>
          )}
        </NavBox>
      </InnerNav>
    </NavbarContainer>
  );
}
