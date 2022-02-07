import "./index.scss";
import { AiFillDelete } from "react-icons/ai";

export default function Button({ itemId, onClick }) {
  return (
    <div className="btn-delete" onClick={onClick}>
      <AiFillDelete />
    </div>
  );
}
