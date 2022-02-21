import { useQuery } from "@apollo/client";
import Button from "component/Button";
import { ButtonCart } from "component/Share/ButtonShared";
import ButtonStyled from "component/Share/StyledComponent";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { GET_LAUNCHES } from "../../GraphqlClient/queries";
import { addLauches } from "../../Slices/Rocket";
import "./index.scss";
import { RootState } from "../../store";
import { cartType } from "../../Types";
import InfiniteScroll from "react-infinite-scroll-component";
import { useState } from "react";

function Lauches() {
  const [limitState, setLimitState] = useState(10);
  const { error, loading, data, refetch } = useQuery(GET_LAUNCHES, {
    variables: {
      limit: limitState,
    },
  });
  const dispatch = useDispatch();
  const res = useSelector((state: RootState) => state.launchList.launches);

  const handleOnClick = (launches: cartType) => {
    dispatch(addLauches(launches));
  };
  const FloatingButton = styled.div`
    border: 2px solid palevioletred;
  `;
  const handleLoading = () => {
    const newLimit = limitState + 10;
    setLimitState(newLimit);
    refetch({ limit: limitState });
  };
  return (
    <div className="Productlist">
      <ButtonStyled
        launches={res}
        className={"cart-button"}
        Icon={AiOutlineShoppingCart}
        ButtonCart={ButtonCart}
      />
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
                        handleOnClick({
                          name: mission_name,
                          image: links,
                          details: details,
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
