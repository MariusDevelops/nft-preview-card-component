import "./App.css";
import ImgEquilibrium from "./images/image-equilibrium.jpg";
import Icon1 from "./images/icon-ethereum.svg";
import Icon2 from "./images/icon-clock.svg";

function App() {
  return (
    <section className="container">
      <Card />
      <Title />
      <Text />
      <div>
        <EthereumIcon />
        <ClockIcon />
      </div>
      <Author />
    </section>
  );
}

const Card = () => (
  <img className="card" src={ImgEquilibrium} alt="card equilibrium" />
);
const Title = () => <h1>Equilibrium #3429</h1>;
const Text = () => <p>Our Equilibrium collection promotes balance and calm.</p>;
const EthereumIcon = () => {
  return (
    <span>
      <img className="icon1" src={Icon1} alt="equilibrium icon" />
      0.041 ETH
    </span>
  );
};
const ClockIcon = () => {
  return (
    <span>
      <img className="icon1" src={Icon2} alt="clock icon" />
      0.041 ETH
    </span>
  );
};
const Author = () => {
  return <span className="image-avatar">Creation of Jules Wyvern</span>;
};

export default App;
