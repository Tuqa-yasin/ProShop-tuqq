import styled from "styled-components";
import { InnerSection, FlexRow } from "../../App.Styles";
import SearchIcon from "@material-ui/icons/Search";
import { Link } from "react-router-dom";

export const NavbarContainer = styled("nav")`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 85px;
  background: #242424 0% 0% no-repeat padding-box;
  opacity: 1;
  width: 100%;
`;
export const InnerNav = styled(InnerSection)`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  /* border:2px solid red; */
`;
export const NavBox = styled(FlexRow)`
  /* border : 2px solid yellow; */
  width: auto;
  /* width:30%;
    :nth-child(2)
    {
        width:40%;
    } */
`;
export const StyledLink = styled(Link)`
  color: #fff;
  font-size: 40px;
  text-decoration: none;
`;
export const SpanNav = styled("span")`
  color: #fcdd06;
`;
export const InputText = styled("input")`
  height: 40px;
  width: 550px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 6px;
  opacity: 1;
  border: none;
  padding: 12px 26px;

  :focus {
    outline: none;
    border: none;
  }
  ::placeholder {
    font-size: 13px;
    color: #000;
    font-weight: 700;
  }
`;
export const ButtonNav = styled("button")`
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: capitalize;
  width: 152px;
  height: 40px;
  font-size: 18px;
  font-weight: 500;
  background: #fcdd06 0% 0% no-repeat padding-box;
  border-radius: 6px;

  opacity: 1;
  cursor: pointer;
  border: none;
`;
export const Icon = styled(Link)`
  display: flex;
  text-decoration: none;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 40px;
  width: auto;
  margin: auto 0 auto 32px;
  span {
    color: #000;
    background: #fcdd06;
    font-size: 8px;
    font-weight: 700;
    border-radius: 50%;
    width: 13px;
    height: 13px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    left: 8px;
    top: 10px;
    z-index: 1;
  }
`;
export const SearchIconNav = styled(SearchIcon)`
  font-size: 18px;
  margin-right: 10px;
`;
