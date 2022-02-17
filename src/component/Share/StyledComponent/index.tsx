import styled from "styled-components";
import "./index.scss";
import { Carts } from "../ButtonShared";
import { useEffect, useState } from "react";
export default function ButtonStyled(props: any) {
  const { Icon, ButtonCart, className, launches } = props;
  const ClassName = "shopping-carts";
  const [amount, setAmount] = useState(launches.launch);
  useEffect(() => {
    setAmount(launches.launch);
  }, [launches]);
  return (
    <ButtonCart className={className}>
      <Icon />
      <Carts className={ClassName}>
        <div className="cart-item">item1</div>
        <div className="cart-item">item2</div>
        <div className="cart-item">item3</div>
        <div className="cart-item">item1</div>
        <div className="cart-item">item2</div>
        <div className="cart-item">item3</div>
        <div className="cart-item">item1</div>
        <div className="cart-item">item2</div>
        <div className="cart-item">item3</div>
        <div className="cart-item">item1</div>
        <div className="cart-item">item2</div>
        <div className="cart-item">item3</div>
        <div className="cart-item">item1</div>
        <div className="cart-item">item2</div>
        <div className="cart-item">item3</div>
        <div className="cart-item">item1</div>
        <div className="cart-item">item2</div>
        <div className="cart-item">item3</div>
      </Carts>
      <div className="amount">{amount.length}</div>
    </ButtonCart>
  );
}
