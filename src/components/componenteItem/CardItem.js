import Image from "./Image";
import "../../styles/cardItem.css";
import Description from "./Description";
import ButtonAddCart from "./ButtonAddCart";
import ButtonDetalles from "./Buttondetalles";
import ImgPrueba from "../../img/prueba.jpg";

const CardItem = () => {
  return (
    <div className="cardItem">
      <Image imagen={ImgPrueba} />
      <Description />
      <div className="buttons">
        <ButtonDetalles />
        <ButtonAddCart />
      </div>
    </div>
  );
};

export default CardItem;
