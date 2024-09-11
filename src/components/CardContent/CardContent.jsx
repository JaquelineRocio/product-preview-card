import CardButton from "./CardButton/CardButton";
import "./CardContent.css";
import CardDescription from "./CardDescription/CardDescription";
import CardPrice from "./CardPrice/CardPrice";
const CardContent = () => {
  return (
    <div className="card__content">
      <CardDescription />
      <CardPrice />
      <CardButton />
    </div>
  );
};
export default CardContent;
