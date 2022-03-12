import styled from "styled-components";
import { __theme } from "../../../Share/style";

const CartItem = styled.div`
  display: flex;
  border: 1px solid white;
  display: flex;
  align-items: center;
  justify-content: start;
  border-radius: 15px;
  font-size: 1.1rem;
  width: 100%;
  font-size: 1.1rem;
  text-align: start;
  position: relative;
  box-sizing: border-box;
  padding: 10px;
  margin-bottom: 20px;
  color: ${__theme.primaryBlue};
  background-color: ${__theme.primaryWhite};
`;
const Image = styled.img`
  height: ${(props) => (props.PropsSize ? props.PropsSize : "60px")};
  width: ${(props) => (props.PropsSize ? props.PropsSize : "60px")};
  object-fit: cover;
  border-radius: 50%;
  margin-right: 20px;
`;

const Text = styled.p`
  font-size: ${({ FontSize }) => (FontSize ? FontSize : "16px")};
  font-weight: ${({ FontSize }) => (FontSize ? "bold" : "")};
  width: ${(props) => (props.PropsWidth ? props.PropsWidth : "100px")};
  white-space: nowrap;
  overflow: hidden;
  text-align: start;
  text-overflow: ellipsis;
  margin-right: 20px;
`;
const Icon = styled.div`
  svg {
    color: ${__theme.primaryBlue} !important;
  }
`;
export { CartItem, Image, Text, Icon };
