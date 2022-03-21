import { AiOutlineShoppingCart } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import CartBody from "../../pages/Cart/CartBody";
import Header from "../../component/Carts/Item/Header";
import {
  Carts_Styled,
  CartsButton,
  Footer,
  LoadingImage,
  Text,
} from "./style.js";
export default function Index({ carts }) {
  const navigate = useNavigate();
  return (
    <CartsButton>
      <AiOutlineShoppingCart />
      <Carts_Styled>
        {carts.length > 0 ? (
          <>
            <Header title="ショッピングカート"></Header>
            <CartBody carts={carts} />
            <Footer
              onClick={() => {
                navigate("./cart");
              }}
            >
              すべてのアイテムを見る
            </Footer>
          </>
        ) : (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <LoadingImage src="https://i.pinimg.com/originals/1c/88/83/1c8883a1768f2f77caf0371d49a68dc2.gif" />
            <Text> カートは空です</Text>
          </div>
        )}
      </Carts_Styled>
    </CartsButton>
  );
}
