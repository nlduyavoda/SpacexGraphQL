import styled from "styled-components";

export const ButtonCart = styled.button`
  cursor: pointer;
  display: flex;
  color: #fdeff4;
  border: none;
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  background-color: #92a9bd;
  top: 2vh;
  right: 2vh;
  z-index: 2;
  position: absolute;
  transition: ease 0.25s;
  svg {
    height: 40px;
    width: 40px;
    transition: ease-in 0.1s;
  }
`;
export const Carts = styled.div`
  height: 0;
  width: 0;
  position: absolute;
  background-color: white;
  z-index: 3;
  top: 110%;
  right: 0;
  transition: ease 0.25s;
`;
