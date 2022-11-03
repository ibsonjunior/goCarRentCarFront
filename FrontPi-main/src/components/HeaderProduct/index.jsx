import { CaretLeft, MapPin } from "phosphor-react";
import '../HeaderProduct/style.css'
import { Link } from "react-router-dom";
export default function HeaderProduct() {
  return (
    <>
      <div className="product">
        <header className="product_page">
          <div className="info_car">
            <h2 className="title_category">Luxo</h2>

            <h2 className="title_car">Audi A3</h2>
          </div>
        </header>
        <Link to="/">
          <CaretLeft size={40} className="icon-previus" />
        </Link>
       
       
      </div>

      <div className="location">
        <div className="info_location">
          <MapPin size={30} />
          <h2 className="title_location">Localiza - Recife, Pernambuco</h2>
        </div>
      </div>
    </>
  );
}
