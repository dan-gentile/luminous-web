import Header from "../../components/Header/Header";
import LuminousBlob from "../../images/LuminousBlob.png";
import FeaturedOne from "../../images/sumatra-page-001.jpg";
import FeaturedTwo from "../../images/sumatra-page-002.jpg";
import Lottie from "react-lottie";
import animation from "../../files/luminous.json";
import Button from "../../components/Button/Button";
import "./Home.scss";

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
        <article className="featuredCoffee">
          <h1 className="featuredHeadline">Featured Coffee</h1>
          <section>
            <img
              className="featuredPhotos"
              src={FeaturedOne}
              alt="Image of Coffee Packaging"
              height="320"
            />
            <img
              className="featuredPhotos"
              src={FeaturedTwo}
              alt="Image of Coffee Packaging"
              height="320px"
            />
          </section>
        </article>
      </main>
    </>
  );
};

export default Home;
