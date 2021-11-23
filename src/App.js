import "./App.css";
import ImgEquilibrium from "./images/image-equilibrium.jpg";

function App() {
  return (
    <section>
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

const Title = () => <h1>Equilibrium #3429</h1>;
const Card = () => <img src={ImgEquilibrium} alt="card equilibrium" />;
const Text = () => <p>Our Equilibrium collection promotes balance and calm.</p>;
const EthereumIcon = () => {
  return <span className="icon1">0.041 ETH</span>;
};
const ClockIcon = () => {
  return <span className="icon2">3 days left</span>;
};
const Author = () => {
  return <span className="image-avatar">Creation of Jules Wyvern</span>;
};

export default App;
