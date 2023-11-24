import { Link } from "react-router-dom";

const ItemListContainer = (props) => {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="category/Lamparas">{props.itemUno}</Link>
      </li>
      <li>
        <Link to="category/Agarra Cortinas">{props.itemDos}</Link>
      </li>
      <li>
        <Link to="category/Atrapa Sueños">{props.itemTres}</Link>
      </li>
      <li>
        <Link to="category/Tapiz">{props.itemCuatro}</Link>
      </li>
    </ul>
  );
};

export default ItemListContainer;
