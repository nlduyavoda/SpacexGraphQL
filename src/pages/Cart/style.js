import styled from "styled-components";
import { __theme } from "../../Share/style";
const { primaryBlue, primaryWhite } = __theme;
const BasicColorTheme = () => {
  return "color: ${primaryWhite} ;background-color:${primaryBlue};";
};
export const CartStyled = styled.div`
  height: 100%;
  width: 100%;
  padding: 5%;
`;
export const CartItemPage = styled.div`
  background-color: ${primaryBlue};
  border: 1px solid ${primaryWhite};
  width: 100%;
  margin-bottom: 20px;
  color: ${primaryWhite};
  font-family: "JP_bold";
  font-size: 20px;
`;
export const ButtonRevert = styled.button`
  cursor: pointer;
  position: fixed;
  bottom: 5%;
  right: 5%;
  border: none;
  border-radius: 5px;
  height: 20px;
  width: max-content;
  background-color: ${primaryBlue};
  color: ${primaryWhite};
  font-size: 20px;
  padding: 10px;
  box-sizing: content-box;
  transform: scale(1);
  transition: ease 0.3s;
  display: flex;
  align-items: center;
  :hover {
    transform: scale(1.2);
    transition: ease 0.3s;
    font-family: JP_bold;
  }
`;
export const EmptyCart = styled.div``;
