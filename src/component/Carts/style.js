import styled from "styled-components";
import { __theme } from "../../Share/style";
const Carts = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  position: absolute;
  height: max-content;
  max-height: 400px;
  width: 350px;
  border-radius: 2%;
  position: absolute;
  top: calc(100% + 10px);
  right: 0%;
  background-color: ${__theme.primaryBlue};
  z-index: 2;
  transform: scale(1);
  transition: ease 0.5s;
  transform-origin: 95% 0%;
  color: white;
  overflow: scroll;
  ::before {
    content: "";
    border-top: 10px solid transparent;
    border-bottom: 10px solid ${__theme.primaryBlue};
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    position: absolute;
    z-index: 4;
    top: -20px;
    right: 10px;
  }
`;
const CartsButton = styled.button`
  height: 50px;
  width: 50px;
  border: 1px solid;
  position: fixed;
  top: 2%;
  right: 2%;
  background-color: ${__theme.primaryBlue};
  z-index: 2;
  border-radius: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    color: ${__theme.primaryWhite};
    height: 30px;
    width: 30px;
  }
  :focus ${Carts} {
    transform: scale(1);
    transition: ease 0.5s;
  }
`;
const LoadingImage = styled.img`
  height: 200px;
  width: 200px;
  border-radius: 20%;
  margin-bottom: 20px;
`;
const Text = styled.div`
  color: white;
`;
const Header = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  font-family: "JP_bold";
`;
const Footer = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  text-underline-offset: 7px;
  text-decoration: underline 0.15em rgba(0, 0, 0, 0);
  transition: text-decoration-color 0.3s;

  :hover {
    font-family: "JP_bold";
    text-decoration-color: white;
  }
`;
export { Carts, CartsButton, LoadingImage, Text, Header, Footer };
