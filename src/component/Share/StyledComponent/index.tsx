import "./index.scss";
import { Carts, CardinalNumber, LoadingImage } from "../ButtonShared";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { removeLauches } from "../../../Slices/Rocket";

export default function ButtonStyled(props: any) {
  const data = useSelector((state) => state);
  const dispatch = useDispatch();
  const { Icon, ButtonCart, className, launches } = props;
  const ClassName = "shopping-carts";

  const [carts, setCarts] = useState(launches);
  useEffect(() => {
    setCarts(launches);
  }, [launches]);
  const handlRemoveCart = (params: any) => {
    dispatch(removeLauches(params));
  };
  return (
    <ButtonCart className={className}>
      <Icon />
      <Carts className={ClassName}>
        <div className="title">カート</div>
        <div className="cart-items">
          {carts.length > 0 ? (
            <>
              {launches.map((cart, index) => {
                return (
                  <div key={index} className="cart-item">
                    <CardinalNumber> {index + 1}</CardinalNumber>
                    <div className="cart-item-img">
                      <img
                        src={
                          cart.image.flickr_images[0]
                            ? cart.image.flickr_images[0]
                            : "https://cdn.dribbble.com/users/1336327/screenshots/5905241/media/d7af04715fa7a7048bed3d2a697a9c91.gif"
                        }
                        alt=""
                      />
                    </div>
                    <div className="cart-item-infor">
                      {cart.name}
                      <div> $180</div>
                    </div>
                    <button onClick={() => handlRemoveCart(cart)}>
                      <AiOutlineDelete />
                    </button>
                  </div>
                );
              })}
            </>
          ) : (
            <div>
              <LoadingImage src="https://i.pinimg.com/originals/1c/88/83/1c8883a1768f2f77caf0371d49a68dc2.gif"></LoadingImage>
              <h2>カートは空です</h2>
            </div>
          )}
        </div>
      </Carts>
      <div className="amount">{carts.length}</div>
    </ButtonCart>
  );
}
