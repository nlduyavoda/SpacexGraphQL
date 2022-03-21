import { useQuery } from "@apollo/client";
import Button from "component/Button";
import Carts from "component/Carts";
import { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { GET_LAUNCHES } from "../../GraphqlClient/queries";
import { addLauches } from "../../Slices/Rocket";
import { RootState } from "../../store";
import { cartType } from "../../Types";
import { useNavigate } from "react-router-dom";
import CartBody from "../../pages/Cart/CartBody";
import Header from "../../component/Carts/Item/Header";
import {
  Carts_Styled,
  CartsButton,
  Footer,
  LoadingImage,
  Text,
} from "../../component/Carts/style.js";
import "./index.scss";

function Lauches() {
  const [limitState, setLimitState] = useState(3);
  const { error, loading, data, refetch } = useQuery(GET_LAUNCHES, {
    variables: {
      limit: limitState,
    },
  });
  const dispatch = useDispatch();
  const res = useSelector((state: RootState) => state.launchList.launches);
  const navigate = useNavigate();
  const handleAddToCart = (launches: cartType) => {
    dispatch(addLauches(launches));
  };

  return (
    <div className="Productlist">
      {/* <Carts carts={res}></Carts> */}
      <CartsButton>
        <AiOutlineShoppingCart />
        <Carts_Styled>
          {res.length > 0 ? (
            // <>
            //   <Header title="ショッピングカート"></Header>
            //   <CartBody carts={res} />
            //   <Footer
            //     onClick={() => {
            //       navigate("./cart");
            //     }}
            //   >
            //     すべてのアイテムを見る
            //   </Footer>
            // </>
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
        </Carts_Styled>
      </CartsButton>
      {error ? (
        "Error!"
      ) : loading ? (
        "Loading..."
      ) : (
        <>
          {data.launchesPast.map(({ mission_name, details, links }, index) => (
            <div className="item" key={index}>
              <div className="item_image">
                <img
                  src={
                    links.flickr_images.length !== 0
                      ? links.flickr_images
                      : "https://cdn.dribbble.com/users/1336327/screenshots/5905241/media/d7af04715fa7a7048bed3d2a697a9c91.gif"
                  }
                  alt={mission_name}
                />
              </div>
              <div className="item_information">
                <div className="information_top">
                  <div className="product-name">
                    {mission_name}
                    センチネル-6マイケルフライリヒ
                  </div>
                </div>
                <div className="information_bottom">
                  <div className="price">$180</div>
                  <div className="pay">
                    <Button
                      styled={null}
                      item={mission_name}
                      handleOnClick={() =>
                        handleAddToCart({
                          name: mission_name,
                          image: links,
                          details: details,
                          price: 180,
                          amount: 1,
                        })
                      }
                      Icon={AiOutlineShoppingCart}
                    ></Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
}
export default Lauches;
