import { AiFillPlusSquare, AiFillMinusSquare } from "react-icons/ai";
import "./index.scss";
export default function Amount({ cart, onHandlePlus, onHandleMinus }) {
  return (
    <div className="amount">
      <div onClick={() => onHandleMinus(cart)}>
        <AiFillMinusSquare />
      </div>
      <div>
        <span>{cart.amount}</span>
      </div>
      <div onClick={() => onHandlePlus(cart)}>
        <AiFillPlusSquare />
      </div>
    </div>
  );
}
