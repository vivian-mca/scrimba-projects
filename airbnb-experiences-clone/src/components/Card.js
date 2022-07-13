import "./Card.css";
import cardImage from "../assets/images/card-katiezaferes.png";
import star from "../assets/images/icon-star.svg";

const Card = () => {
  return (
    <div className="[ card ] [ card-flow ] [ font-size-300 ]">
      <img
        className="[ card__image ] [ br-med ]"
        src={cardImage}
        alt="Katie Zaferes in athletic swimwear"
      />
      <div className="[ card__status ] [ br-small font-size-200 bg-neutral-100 ]">
        SOLD OUT
      </div>
      <div className="[ card__rating ] [ card-flow-exception ]">
        <img
          className="[ card__rating-star ] [ margin-right-100 ]"
          src={star}
          alt=""
        />
        <span className="[ card__rating-number ] [ margin-right-100 ]">
          5.0
        </span>
        <span className="[ card__rating-info ] [ color-neutral-300 ]">
          (6) ∙ USA
        </span>
      </div>
      <p className="card__title">Life lessons with Katie Zaferes</p>
      <p className="card__pricing">
        <span className="weight-bold">From $136</span> / person
      </p>
    </div>
  );
};

export default Card;
