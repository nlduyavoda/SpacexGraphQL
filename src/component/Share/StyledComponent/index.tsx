import styled from "styled-components";
import "./index.scss";
import { Carts } from "../ButtonShared";
export default function ButtonStyled(props: any) {
  const { Icon, ButtonCart, className } = props;
  const ClassName = "shopping-carts";

  return (
    <ButtonCart className={className}>
      <Icon />
      <Carts className={ClassName} />
    </ButtonCart>
  );
}
