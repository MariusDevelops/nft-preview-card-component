import "./dist/App.css";
import ImgEquilibrium from "./images/image-equilibrium.jpg";
import Icon1 from "./images/icon-ethereum.svg";
import Icon2 from "./images/icon-clock.svg";
import ImgAvatar from "./images/image-avatar.png";
import Icon3View from "./images/icon-view.svg";

function App() {
  return (
    <main>
    <section className="container">
      <div className="container2">
        <Card></Card>
        <CardHover />
      </div>
      <Title />
      <Text />
      <div className="twoElements">
        <EthereumIcon />
        <ClockIcon />
      </div>
      <hr />
      <Author />
    </section>
    <Footer />
    </main>
  );
}

const Card = () => (
  <img className="image" src={ImgEquilibrium} alt="card equilibrium" />
);
const CardHover = () => (
  <div className="overlay">
    <img className="overlay-icon" src={Icon3View} alt="view icon" />
  </div>
);

const Title = () => <h1>Equilibrium #3429</h1>;
const Text = () => <p>Our Equilibrium collection promotes balance and calm.</p>;
const EthereumIcon = () => {
  return (
    <p className="icon1Text">
      <img className="icon" src={Icon1} alt="equilibrium icon" />
      0.041 ETH
    </p>
  );
};
const ClockIcon = () => {
  return (
    <p className="icon2Text">
      <img className="icon" src={Icon2} alt="clock icon" />3 days left
    </p>
  );
};
const Author = () => {
  return (
    <p>
      <img className="image-avatar" src={ImgAvatar} alt="card equilibrium" />
      Creation of <span>Jules Wyvern</span>
    </p>
  );
};
const Footer = () => {
  return (
    <div className="attribution">
    <p>
    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" rel="noreferrer" target="_blank">Frontend Mentor</a>. 
    Coded by <a href="https://mariusdevelops.github.io/" rel="noreferrer" target="_blank">Marius</a>.
    </p>
  </div>
  );
};

export default App;
