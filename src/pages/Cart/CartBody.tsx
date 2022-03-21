import { useEffect, useState } from "react";
import { cartType } from "Types/index.js";
import CartItem from "../../component/Carts/Item";
import "./CartBody.scss";
export default function CartBody({ carts }) {
  const [state, setState] = useState(carts);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setState(carts);
  }, [carts]);
  const sumWithInitial = state.reduce(
    (total, currentValue) => total + currentValue.price * currentValue.amount,
    0
  );
  useEffect(() => {
    setTotal(sumWithInitial);
  }, [state]);
  return (
    <div className="cart-list">
      <div className="carts-tab">
        {state.map((cart: cartType, index) => {
          // setTotal(total + cart.price * cart.amount);
          return <CartItem cart={cart} key={index} index={index} />;
        })}
      </div>
      <div className="total-tab">
        <span>{total}</span>
      </div>
    </div>
  );
}
