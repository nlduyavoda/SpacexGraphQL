import { AiOutlineShoppingCart } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { cartType } from "Types/index.js";
import CartItem from "./Item";
import {
  Carts,
  CartsButton,
  LoadingImage,
  Text,
  Footer,
  Header,
} from "./style.js";
export default function Index({ res }) {
  const navigate = useNavigate();
  return (
    <CartsButton>
      <AiOutlineShoppingCart />
      <Carts>
        {res.length > 0 ? (
          <>
            <Header>ショッピングカート</Header>
            {res.map((cart: cartType, index) => {
              return <CartItem cart={cart} key={index} index={index} />;
            })}
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
      </Carts>
    </CartsButton>
  );
}
