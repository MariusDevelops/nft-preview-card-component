import "./App.css";
import ImgEquilibrium from "./images/image-equilibrium.jpg";
import Icon1 from "./images/icon-ethereum.svg";
import Icon2 from "./images/icon-clock.svg";
import ImgAvatar from "./images/image-avatar.png";

function App() {
  return (
    <section className="container">
      <Card />
      <Title />
      <Text />
      <div className="twoElements">
        <EthereumIcon />
        <ClockIcon />
      </div>
      <hr />
      <Author />
    </section>
  );
}

const Card = () => (
  <img className="image" src={ImgEquilibrium} alt="card equilibrium" />
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

export default App;
