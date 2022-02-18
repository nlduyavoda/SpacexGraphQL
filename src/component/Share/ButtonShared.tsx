import styled from "styled-components";

export const ButtonCart = styled.button`
  cursor: pointer;
  display: flex;
  color: #92a9bd;
  border: none;
  width: 4rem;
  height: 4rem;
  border-radius: 20%;
  align-items: center;
  justify-content: center;
  background-color: #1c658c;
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
export const CardinalNumber = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const LoadingImage = styled.img`
  height: 200px;
  width: 200px;
  border-radius: 20%;
`;
