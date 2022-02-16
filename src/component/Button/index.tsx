import "./index.scss";

export default function Button(props: any) {
  const { item, handleOnClick, Icon, Styled } = props;
  return (
    <div className="btn-" onClick={handleOnClick}>
      <Icon />
    </div>
  );
}
