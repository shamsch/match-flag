import { useEffect, useState } from "react";
import "./App.css";
import Flag from "./component/Flag";

//hard coded the same dimension png of the maps
const flagsPng = [
  { src: "/img/cn.png", name: "China", matchFound: false },
  { src: "/img/dz.png", name: "Algeria", matchFound: false },
  { src: "/img/fi.png", name: "Finland", matchFound: false },
  { src: "/img/in.png", name: "India", matchFound: false },
  { src: "/img/sg.png", name: "Singapore", matchFound: false },
  { src: "/img/za.png", name: "S Africa", matchFound: false },
];

//a simple shuffle function got off from stackOverFlow
// Math.random() - 0.5 is a random number that may be positive or negative, so the sorting function reorders elements randomly.
const shuffle = (array) => array.sort(() => Math.random() - 0.5);

function App() {
  const [flags, setFlags] = useState(null);
  const [flagOne, setFlagOne] = useState(null);
  const [flagTwo, setFlagTwo] = useState(null);
  const [turn, setTurn] = useState(0)
  const [disable, setDisable] = useState(false)

  const shuffleTheFlags = () => {
    //making two of each, so as to create pair, bc well we will match pair
    let allFlagsInPair = [...flagsPng, ...flagsPng];
    shuffle(allFlagsInPair);
    //give key value in the as another object property
    allFlagsInPair = allFlagsInPair.map((ele) => ({
      ...ele,
      key: `${Math.floor(Math.random() * 100000)}`,
    }));
    setFlagOne(null)
    setFlagTwo(null)
    setFlags(allFlagsInPair);
    setTurn(0)
  };

  //handles clicking on the front cover
  const updateFlagChoice = (flag) => {
    //if flagOne is not null aka opened then then the new click is on the second flag
    flagOne ? setFlagTwo(flag) : setFlagOne(flag);
  };

  useEffect(() => {
    const compareChoices = () => {
      //disable all flags while we process match 
      setDisable(true)
      if (flagOne.name === flagTwo.name) {
        //access previous state easily with prevState and map over the array
        setFlags((prevFlags) => {
          return prevFlags.map((prevFlag) => {
            if (prevFlag.name === flagOne.name || prevFlag.name === flagTwo.name) {
              return { ...prevFlag, matchFound: true };
            } else {
              return prevFlag;
            }
          });
        });
        //console.log("Match found");
      } else {
        //console.log("Match not found");
      }
      setTimeout(function(){
        turnComplete();
      }, 215);
      
    };
    flagOne && flagTwo && compareChoices();
  }, [flagOne, flagTwo]);

  //reset upon one turn completion
  const turnComplete = () => {
    setDisable(false)
    setFlagOne(null);
    setFlagTwo(null);
    setTurn(prevTurn => prevTurn+1)
  };

  //console.log(disable);
  //console.log(flagOne, flagTwo);
  return (
    <div className="App">
      <div> 
        <h1>Click and find matching flags</h1>
        <button onClick={shuffleTheFlags}>Start new game</button>
      </div>
  
      <div className="flag-grid">
        {flags &&
          flags.map((ele) => (
            <Flag
              flagData={ele}
              key={ele.key}
              updateFlagChoice={updateFlagChoice}
              flipped={ele===flagOne || ele===flagTwo || ele.matchFound}
              disable={disable}
            >
            </Flag>
          ))}
      </div>

      <div>
        {turn? <p>Turn counter: {turn}</p> : <p>Test your memory and luck!</p>}
      </div>
    </div>
  );
}

export default App;
