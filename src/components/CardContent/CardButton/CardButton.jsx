import "./CardButton.css";
import iconCart from "../../../assets/images/icon-cart.svg";
const CardButton = () => {
  return (
    <button>
      <img src={iconCart} alt="icon cart" className="card__icon-cart" />
      Add to Cart
    </button>
  );
};
export default CardButton;
