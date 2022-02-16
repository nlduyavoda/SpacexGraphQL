import { gql, useQuery } from "@apollo/client";
import Button from "component/Button";
import { AiOutlineShoppingCart } from "react-icons/ai";
import "./index.scss";
const GET_LAUNCHES = gql`
  query getLaunches($limit: Int) {
    launchesPast(limit: $limit) {
      mission_name
      details
      links {
        flickr_images
      }
    }
  }
`;
const getRandomImg = (imgs) => imgs[Math.floor(Math.random() * imgs.length)];

function Lauches() {
  const { error, loading, data } = useQuery(GET_LAUNCHES, {
    variables: {
      limit: 10,
    },
  });
  const handleOnClick = (params) => {
    console.log("clicked");
  };
  return (
    <div className="Productlist">
      {error
        ? "Error!"
        : loading
        ? "Loading..."
        : data.launchesPast.map(({ mission_name, details, links }, index) => (
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
                  <div className="product-name">{mission_name}</div>
                </div>
                <div className="information_bottom">
                  <div className="price">$180</div>
                  <div className="pay">
                    <Button
                      item={mission_name}
                      handleOnClick={handleOnClick}
                      Icon={AiOutlineShoppingCart}
                    ></Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
    </div>
  );
}
export default Lauches;
