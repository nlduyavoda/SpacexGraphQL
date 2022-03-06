import styled from "styled-components";
import { __theme } from "../../../Share/style";

export const CartItem = styled.div`
  display: flex;
  border: 1px solid white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 15px;
  font-size: 1.1rem;
  color: initial;
  width: 100%;
  height: 70px;
  font-size: 1.1rem;
  text-align: start;
  position: relative;
  box-sizing: border-box;
  padding: 10px;
  margin-bottom: 20px;
  color: ${__theme.primaryBlue};
  background-color: ${__theme.primaryWhite};
`;
export const Image = styled.img`
  height: 60px;
  width: 60px;
  object-fit: cover;
  border-radius: 50%;
  margin-right: 20px;
`;

export const Text = styled.p`
  font-size: 16px;
  width: 100px;
  white-space: nowrap;
  overflow: hidden;
  text-align: start;
  text-overflow: ellipsis;
  margin-right: 20px;
`;
export const Icon = styled.div`
  svg {
    color: ${__theme.primaryBlue} !important;
  }
`;
