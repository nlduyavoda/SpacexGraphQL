import Modal from "component/Modal";
import { useState } from "react";
import { useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
type productType = {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: { count: number; rate: number };
  title: string;
};

export default function Detail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [detail, setDetail] = useState<{
    id: number;
    title: string;
    description: string;
  }>({
    id: null,
    title: "",
    description: "",
  });
  const [isOpen, setIsOpen] = useState(false);
  const { data } = useQuery<productType>("get-detail", () => {
    return fetch(`https://fakestoreapi.com/products/${slug}`)
      .then((res) => res.json())
      .then((json) => json);
  });
  return (
    <div>
      {data ? (
        <div style={{ margin: "50px" }}>
          <img
            style={{ width: "200px", height: "200px" }}
            src={data.image}
            alt=""
          />
          <h1>{data.title}</h1>
          <span>{data.description}</span>
        </div>
      ) : (
        "loading"
      )}
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        back to home
      </button>
      <button
        onClick={() => {
          setDetail({
            id: data.id,
            title: data.title,
            description: data.description,
          });
          setIsOpen(true);
        }}
      >
        Edit
      </button>
      <Modal detail={detail} isOpen={isOpen} onSetIsOpen={setIsOpen} />
    </div>
  );
}
