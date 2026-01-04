import "./Card.css";

const Card = ({ className, image, name, role, title, text }) => {
  return (
    <article className={`card ${className}`}>
      <header className="header">
        <img src={image} alt={name} />
        <div>
          <h3>{name}</h3>
          <span>{role}</span>
        </div>
      </header>
      <h4>{title}</h4>
      <p>{text}</p>
    </article>
  );
};

export default Card;
