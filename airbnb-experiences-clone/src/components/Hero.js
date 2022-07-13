import "./Hero.css";
import photoGrid from "../assets/images/photo-grid.png";

const Hero = () => {
  return (
    <section className="[ hero ] [ flow ]">
      <img className="hero__image" src={photoGrid} alt="" />
      <h1 className="[ flow-exception ] [ color-neutral-800 font-size-500 weight-bold ]">Online Experiences</h1>
      <p className="width-67">
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </section>
  );
};

export default Hero;
