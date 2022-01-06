import { useEffect, useState } from "react";
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
  const [flagOne, setFlagOne] = useState(null);
  const [flagTwo, setFlagTwo] = useState(null);

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
  };

  //handles clicking on the front cover
  const updateFlagChoice = (flag) => {
    //if flagOne is not null aka opened then then the new click is on the second flag
    flagOne ? setFlagTwo(flag.name) : setFlagOne(flag.name);
  };
  
  useEffect(()=>{
    const compareChoices = () => {
      if(flagOne===flagTwo){
        console.log("Found Match")
      }
      else{
        console.log("Match not found")
      }
      turnComplete()
    }
    flagOne && flagTwo && compareChoices()
  },[flagOne,flagTwo])

  //reset upon one turn completion 
  const turnComplete = () => {
    setFlagOne(null)
    setFlagTwo(null)
  }

  console.log(flags);
  console.log(flagOne, flagTwo);
  return (
    <div className="App">
      <h1>Match the flags</h1>
      <button onClick={shuffleTheFlags}>New Game</button>

      <div className="flag-grid">
        {flags &&
          flags.map((ele) => <Flag flagData={ele} key={ele.key} updateFlagChoice={updateFlagChoice}></Flag>)}
      </div>
    </div>
  );
}

export default App;
