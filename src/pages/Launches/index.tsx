import { useQuery } from "@apollo/client";
import Button from "component/Button";
import { ButtonCart } from "component/Share/ButtonShared";
import ButtonStyled from "component/Share/StyledComponent";
import { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { GET_LAUNCHES } from "../../GraphqlClient/queries";
import { addLauches } from "../../Slices/Rocket";
import { RootState } from "../../store";
import { cartType } from "../../Types";
import "./index.scss";
function Lauches() {
  const [limitState, setLimitState] = useState(10);
  const { error, loading, data, refetch } = useQuery(GET_LAUNCHES, {
    variables: {
      limit: limitState,
    },
  });
  const dispatch = useDispatch();
  const res = useSelector((state: RootState) => state.launchList.launches);

  const handleAddToCart = (launches: cartType) => {
    dispatch(addLauches(launches));
  };

  return (
    <div className="Productlist">
      <ButtonStyled
        AddToCart={handleAddToCart}
        launches={res}
        className={"cart-button"}
        // className={"cart-button-unhide"}
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
                        handleAddToCart({
                          name: mission_name,
                          image: links,
                          details: details,
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
