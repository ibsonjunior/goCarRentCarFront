import { CaretLeft, MapPin } from "phosphor-react";
import '../HeaderProduct/style.css'
import { Link } from "react-router-dom";
export default function HeaderProduct({products}) {
  return (
    <>
      <div className="product">
        <header className="product_page">
          <div className="info_car">
            <h2 className="title_category">{products.title}</h2>

            <h2 className="title_car">{products.title}</h2>
          </div>
        </header>
        <Link to="/">
          <CaretLeft size={40} className="icon-previus" />
        </Link>
       
       
      </div>

      <div className="location">
        <div className="info_location">
          <MapPin size={30} />
          <h2 className="title_location">{products.title}</h2>
        </div>
      </div>
    </>
  );
}
