import "./Card.css";
import DesktopCard from "../assets/images/image-product-desktop.jpg";
import MobileCard from "../assets/images/image-product-mobile.jpg";
import Icon from "../assets/images/icon-cart.svg";

const Card = () => {
  return (
    <section className="card-content">
      <div className="card-img child">
        <picture>
          <source srcSet={MobileCard} media="(max-width: 765px)" />
          <img src={DesktopCard} alt="product-card" />
        </picture>
      </div>
      <div className="child">
        <div className="card-text">
          <h1>PERFUME</h1>
          <h2>Gabrielle Essence Eau De Parfum</h2>
          <p>
            A floral, solar and voluptuous interpretation composed by Olivier
            Polge, Perfumer-Creator for the House of CHANEL.
          </p>
          <div className="price">
            <p>$149.99</p>
            <span>$169.99</span>
          </div>
          <div className="price-button">
            <button>
              <img src={Icon} />
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Card;
