import { useNavigate } from "react-router-dom";
import Header from "../../component/Carts/Item/Header";
import CartBody from "./CartBody";
import { ButtonRevert, CartStyled, EmptyCart } from "./style.js";

export default function Cart({ carts }) {
  const navigate = useNavigate();
  if (carts) {
    return (
      <CartStyled>
        <Header title="カートの詳細" />
        <CartBody carts={carts} />
        <ButtonRevert
          onClick={() => {
            navigate("/");
          }}
        >
          リストに戻る
        </ButtonRevert>
      </CartStyled>
    );
  }
  return <EmptyCart>Cart is empty</EmptyCart>;
}
