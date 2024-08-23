import Batman from "./Batman";
import SpiderMan from "./SpiderMan";
import DefaultHero from "./DefaultHero";
import { useParams } from "react-router-dom";

const SuperHero = () => {
  const { name } = useParams();

  return (
    <>
      <p>You Selected the mighty:</p>
      {name === "batman" ? (
        <Batman />
      ) : name === "spider-man" ? (
        <SpiderMan />
      ) : (
        <DefaultHero />
      )}
    </>
  );
};

export default SuperHero;
