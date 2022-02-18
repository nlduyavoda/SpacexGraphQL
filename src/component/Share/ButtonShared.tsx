import styled from "styled-components";

export const ButtonCart = styled.div`
  cursor: pointer;
  display: flex;
  color: #92a9bd;
  border: none;
  width: 4rem;
  height: 4rem;
  border-radius: 20%;
  align-items: center;
  justify-content: center;
  background-color: #008e89;
  left: 96%;
  z-index: 3;
  position: fixed;
  transition: ease-in 0.25s;
  svg {
    color: white;
    height: 30px;
    width: 30px;
    transition: ease-in 0.25s;
  }
  :hover,
  :focus {
    width: 4.5rem;
    height: 4.5rem;
  }
`;
export const Carts = styled.div``;
