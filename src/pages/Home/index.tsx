import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { json } from "stream/consumers";
import { GET_LAUNCHES } from "../../GraphqlClient/queries.js";
import "./index.scss";
type productType = {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: { count: number; rate: number };
  title: string;
};
export default function Home() {
  const { data, isLoading } = useQuery("get-products", () => {
    return fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => json);
  });
  const navigate = useNavigate();
  const handleProduct = (id) => {
    navigate(`/detail/${id}`);
  };
  return (
    <div>
      {!isLoading ? (
        <div className="list">
          {data.map((item: productType) => {
            return (
              <div className="item" key={item.id}>
                <img src={item.image} alt={item.title} />
                <div className="title">{item.title}</div>
                <button onClick={() => handleProduct(item.id)}>Edit</button>
              </div>
            );
          })}
        </div>
      ) : (
        "loading"
      )}
    </div>
  );
}
