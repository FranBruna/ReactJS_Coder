import Brand from "./Brand";
import ItemListContainer from "./ItemsListContainer";
import CartWidget from "./CartWidget";
const NavBar = () => {
  return (
    <header>
      <div className="containerBrand">
        <Brand />
      </div>

      <nav className="containerItemList">
        <ItemListContainer
          itemUno="Lamparas"
          itemDos="Canastas"
          itemTres="Almohadones"
          itemCuatro="Tapiz"
        />
      </nav>

      <div className="containerCart">
        <CartWidget />
      </div>
    </header>
  );
};

export default NavBar;
