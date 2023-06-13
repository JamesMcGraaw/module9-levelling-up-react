import logo from './logo.svg';
import './App.css';
import Car from "./Components/Car";
import LikeButton from "./Components/LikeButton";
import Table from "./Components/Table";

const App = () => {

  const coinToss = () => {
    return Math.random() < 0.5 ? 'heads' : 'tails'
  };

  const pics = {
    kitty: 'https://placekitten.com/200/200',
    doggy: 'https://placedog.net/200/200'
  };

  return (
    <>
      <h1>Hello!</h1>
      <img src={pics[coinToss() === 'heads' ? 'doggy' : 'kitty']}/>
      <LikeButton />
      <Table />
      <Car />
    </>
  );
}

export default App;
