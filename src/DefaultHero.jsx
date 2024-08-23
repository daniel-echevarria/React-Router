import { Link } from "react-router-dom";

const DefaultHero = () => {
  return (
    <>
      <p>This is no hero it's just a ridiculous vilain!</p>
      <Link to="/">Back To Heroes!</Link>
    </>
  );
};

export default DefaultHero;
