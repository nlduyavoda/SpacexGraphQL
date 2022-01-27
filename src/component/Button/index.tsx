import "./index.scss";
export default function Button({ itemId, onClick }) {
  return (
    <button onClick={onClick}>
      <img
        src="https://previews.123rf.com/images/tmricons/tmricons1707/tmricons170700289/81206333-delete-sign-icon-remove-button.jpg"
        alt=""
      />
    </button>
  );
}
