import styled from "styled-components";

const BacsicColor = "#1c658c;";

export const Carts = styled.div`
  flex-wrap: wrap;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding: 20px;
  position: absolute;
  height: 500px;
  width: 350px;
  border-radius: 2%;
  position: absolute;
  top: calc(100% + 10px);
  right: 0%;
  background-color: ${BacsicColor};
  z-index: 2;
  transform: scale(1);
  transition: ease 0.5s;
  transform-origin: 95% 0%;
  ::before {
    content: "";
    border-top: 10px solid transparent;
    border-bottom: 10px solid ${BacsicColor};
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    position: absolute;
    z-index: 4;
    top: -20px;
    right: 10px;
  }
`;
export const CartsButton = styled.div`
  height: 50px;
  width: 50px;
  border: 1px solid;
  position: absolute;
  top: 2%;
  right: 2%;
  background-color: ${BacsicColor};
  z-index: 2;
  border-radius: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    color: white;
    height: 30px;
    width: 30px;
  }
  :hover ${Carts} {
    transform: scale(1);
    transition: ease 0.5s;
  }
`;
export const CartItem = styled.div`
  border: 1px solid white;
  display: flex;
  align-items: center;
  border-radius: 15px;
  font-size: 1.1rem;
  color: initial;
  width: 100%;
  height: 70px;
  font-size: 1.1rem;
  margin-bottom: 20px;
  text-align: start;
  position: relative;
  box-sizing: border-box;
  padding: 10px;
`;
export const Image = styled.img`
  height: 60px;
  width: 60px;
  object-fit: cover;
  border-radius: 50%;
`;
export const Title = styled.div`
  width: 100px;
  white-space: nowrap;
  overflow: hidden;
  color: white;
  display: flex;
  text-align: start;
  text-overflow: ellipsis;
`;
export const LoadingImage = styled.img`
  height: 200px;
  width: 200px;
  border-radius: 20%;
  margin-bottom: 20px;
`;
export const Text = styled.div`
  color: white;
`;
