import "./index.scss";
import { Carts } from "../ButtonShared";
import { useEffect, useState } from "react";
export default function ButtonStyled(props: any) {
  const { Icon, ButtonCart, className, launches } = props;
  const ClassName = "shopping-carts";
  const [carts, setCarts] = useState(launches);
  useEffect(() => {
    setCarts(launches);
  }, [launches]);
  return (
    <ButtonCart className={className}>
      <Icon />
      <Carts className={ClassName}>
        <div className="title">Carts</div>
        <div className="cart-items">
          {launches.map((cart, index) => {
            return (
              <div key={index} className="cart-item">
                <div className="cart-item-img">
                  <img src={cart.image.flickr_images[0]} alt="" />
                </div>
                <div className="cart-item-infor">
                  {cart.name}
                  <div> $180</div>
                </div>
              </div>
            );
          })}
        </div>
      </Carts>
      <div className="amount">{carts.length}</div>
    </ButtonCart>
  );
}
