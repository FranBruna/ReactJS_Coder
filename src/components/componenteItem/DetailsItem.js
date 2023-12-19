import Image from "./Image";
import Description from "./Description";
import "../../styles/detailsItem.css";
import ButtonDetalles from "./Buttondetalles";
import fetchSimultion from "../../utils/fetchSimulation";
import productos, { getProductById } from "../../utils/products";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import MoonLoader from "react-spinners/ClipLoader";

const DetailsItem = () => {
  const [datos, setDatos] = useState([]);
  const [loading, setLoading] = useState(true);
  const { idItem } = useParams();

  useEffect(() => {
    setLoading(true);
    getProductById(idItem)
      .then((prod) => setDatos(prod))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [idItem]);

  return (
    <div className="detailsItem">
      {loading ? (
        <MoonLoader color="#5b00fb" />
      ) : (
        <>
          <div className="containerLeft">
            <Image imagen={datos.imageProduct.firtsImage} />
          </div>

          <div className="containerRigth">
            <Description
              title={datos.title}
              parrafo={datos.description}
              cantidad={datos.stock}
              precio={datos.price}
            />

            <div className="buttons">
              <ButtonDetalles txt="Agregar al carrito" />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default DetailsItem;
