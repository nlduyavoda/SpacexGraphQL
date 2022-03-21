import { useEffect } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { IMAGE } from "../../../Share/mock.js";
import {
  removeLauches,
  addLauches,
  reduceLauches,
} from "../../../Slices/Rocket";
import Amount from "../../Amount";
import { CartItem, Icon, Image, Title, Price } from "./style.js";
export default function Item({ cart, index }) {
  const dispatch = useDispatch();
  const handleRemoveCartItem = (cart) => {
    dispatch(removeLauches(cart));
  };
  const onCheckImage = (image) => {
    if (image) {
      return image;
    }
    return IMAGE;
  };
  const handlePlus = (cart) => {
    dispatch(addLauches(cart));
  };
  const handleMinus = (cart) => {
    dispatch(reduceLauches(cart));
  };
  const HandlePrice = (amount: number, price: number) => {
    if (amount >= 1) {
      if (amount > 1) {
        const totalValue = amount * price;
        return totalValue;
      }
      return price;
    }
    return;
  };
  return (
    <CartItem key={index}>
      <Image src={onCheckImage(cart.image.flickr_images[0])} />
      <Title>{cart.name}</Title>
      <Price>{HandlePrice(cart.amount, cart.price)}</Price>
      <Amount
        cart={cart}
        onHandlePlus={handlePlus}
        onHandleMinus={handleMinus}
      />
      <Icon onClick={() => handleRemoveCartItem(cart)}>
        <AiOutlineDelete />
      </Icon>
    </CartItem>
  );
}
