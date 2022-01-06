import { useState } from "react";
import "./App.css";
import Flag from "./component/Flag";

//hard coded the same dimension png of the maps
const flagsPng = [
  { src: "/img/cn.png", name: "China" },
  { src: "/img/dz.png", name: "Algeria" },
  { src: "/img/fi.png", name: "Finland" },
  { src: "/img/in.png", name: "India" },
  { src: "/img/sg.png", name: "Singapore" },
  { src: "/img/za.png", name: "S Africa" },
];

//a simple shuffle function got off from stackOverFlow
// Math.random() - 0.5 is a random number that may be positive or negative, so the sorting function reorders elements randomly.
const shuffle = (array) => array.sort(() => Math.random() - 0.5);

function App() {
  const [flags, setFlags] = useState(null);

  const shuffleTheFlags = () => {
    //making two of each, so as to create pair, bc well we will match pair 
    let allFlagsInPair = [...flagsPng, ...flagsPng];
    shuffle(allFlagsInPair);
    //give key value in the as another object property 
    allFlagsInPair = allFlagsInPair.map((ele) => ({
      ...ele,
      key: `${Math.floor(Math.random() * 100000)}`,
    }));
    setFlags(allFlagsInPair);
    console.log(flags);
  };

  return (
    <div className="App">
      <h1>Match the flags</h1>
      <button onClick={shuffleTheFlags}>New Game</button>

      <div className="flag-grid">
        {flags &&
          flags.map((ele) => (
            <Flag flagData={ele} key={ele.key}></Flag>
          ))}
      </div>
    </div>
  );
}

export default App;
