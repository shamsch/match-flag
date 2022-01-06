import "./Flag.css";

export default function Flag({ flagData, updateFlagChoice }) {
  const handleClick= () => {
      updateFlagChoice(flagData)
  }
  return (
    <div className="flag">
      <div>
        <figure>
          <img className="back" src={flagData.src} alt="flag"></img>
          <figcaption>{flagData.name}</figcaption>
        </figure>
        <img className="front" src="/img/cover.png" alt="cover" onClick={handleClick}></img>
      </div>
    </div>
  );
}
