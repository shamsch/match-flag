import "./App.css";

//hard coded the same dimension png of the maps
const flagsPng = [
  { src: "/img/cn.png", name: "Canada" },
  { src: "/img/dz.png", name: "Algeria"},
  { src: "/img/fi.png", name: "Finland" },
  { src: "/img/in.png", name: "India" },
  { src: "/img/sg.png", name: "Singapore" },
  { src: "/img/za.png", name: "South Africa"},
];

//a simple shuffle function got off from stackOverFlow
// Math.random() - 0.5 is a random number that may be positive or negative, so the sorting function reorders elements randomly.
const shuffle = (array) => array.sort(() => Math.random() - 0.5);

function App() {
  
  const shuffleTheFlags = () => {
    let allFlagsInPair= [...flagsPng, ...flagsPng]
    shuffle(allFlagsInPair) 
    allFlagsInPair= allFlagsInPair.map((ele) => ({...ele,"key": `${Math.floor(Math.random()*100)}`}))
    console.log(allFlagsInPair)
  }
  
  shuffleTheFlags()
  return (
    <div className="App">
      <h1>Match the flags</h1>
      <button>New Game</button>
    </div>
  );
}

export default App;
