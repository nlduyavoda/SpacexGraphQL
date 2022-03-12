import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "store";
import { CartStyled, EmptyCart, CartItemPage, ButtonRevert } from "./style.js";
import {
  CartItem,
  Image,
  Text,
  Icon,
} from "../../component/Carts/Item/style.js";
import { IMAGE } from "Share/mock.js";
import { cartType } from "Types/index.js";
import { AiOutlineDelete } from "react-icons/ai";

export default function Cart(params) {
  const res = useSelector((state: RootState) => state.launchList.launches);
  const navigate = useNavigate();
  const onCheckImage = (image) => {
    console.log(image);
    if (image) {
      return image;
    }
    return IMAGE;
  };
  if (res) {
    return (
      <CartStyled>
        <Text props="title">カートの詳細</Text>
        {res.map((item: cartType, index) => {
          return (
            <CartItem Propscolor="red" key={index}>
              <Image
                PropsSize="100px"
                src={onCheckImage(item.image.flickr_images[0])}
              />
              <Text PropsWidth="30%" FontSize="20px">
                {item.name}
              </Text>
              <Text>{item.price}</Text>
              <Icon>
                <AiOutlineDelete />
              </Icon>
            </CartItem>
          );
        })}
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
