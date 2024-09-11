import "./ProductCard.css";
import SideImage from "../SideImage/SideImage";
import CardContent from "../CardContent/CardContent";
const ProductCard = () => {
  return (
    <main className="card">
      <SideImage />
      <CardContent />
    </main>
  );
};

export default ProductCard;
