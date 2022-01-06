import "./Flag.css";

export default function Flag({ flagData, updateFlagChoice, flipped, disable}) {
  const handleClick = () => {
    if(!disable){
      updateFlagChoice(flagData)
    }
  };
  return (
    <div className="flag">
      <div className={flipped ? "flipped" : ""}>
        <img className="front" src={flagData.src} alt={flagData.name}></img>
        <img src="/img/cover.png" alt="cover" onClick={handleClick}></img>
      </div>
    </div>
  );
}
