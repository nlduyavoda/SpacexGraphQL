import { CartItem, Image, Text, Icon } from "./style.js";
import { AiOutlineDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { removeLauches } from "../../../Slices/Rocket";

export default function Item({ cart, index }) {
  const dispatch = useDispatch();
  const IMAGE =
    "https://cdn.dribbble.com/users/1336327/screenshots/5905241/media/d7af04715fa7a7048bed3d2a697a9c91.gif";
  const handleRemoveCartItem = (cart) => {
    dispatch(removeLauches(cart));
  };
  const onCheckImage = (image) => {
    if (image) {
      return image;
    }
    return IMAGE;
  };
  return (
    <CartItem key={index}>
      <Image src={onCheckImage(cart.image.flickr_images[0])} />
      <Text>{cart.name}</Text>
      <Text>${cart.price}</Text>
      <Icon onClick={() => handleRemoveCartItem(cart)}>
        <AiOutlineDelete />
      </Icon>
    </CartItem>
  );
}
