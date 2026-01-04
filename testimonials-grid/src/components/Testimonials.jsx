import "./Testimonials.css";
import Card from "./Card";
import { CardData } from "../util/CardData";

const Testimonials = () => {
  return (
    <section className="container">
      {CardData.map((item) => (
        <Card key={item.id} {...item} />
      ))}
    </section>
  );
};

export default Testimonials;
