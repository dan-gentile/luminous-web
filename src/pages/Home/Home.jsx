import Header from "../../components/Header/Header";
import LuminousBlob from "../../images/LuminousBlob.png";
import "./Home.scss";

import Lottie from "react-lottie";
import animation from "../../files/luminous.json";
import Button from "../../components/Button/Button";

const Home = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <>
      <main className="Home">
        <Header />
        <img className="theBlob" src={LuminousBlob} alt="Coffee Shop Scene" />

        <div className="Hello">
          <Lottie
            options={defaultOptions}
            height={100}
            width={300}
            style={{ marginBottom: "20px" }}
          />
          <Button className="lumiBtn" name="Become A LUMI" />
        </div>
      </main>
    </>
  );
};

export default Home;
