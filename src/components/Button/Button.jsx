import "./Button.scss";

const Button = (props) => {
  return <button {...props}>{props.name}</button>;
};

export default Button;
