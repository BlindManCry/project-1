import Result from "../result/Result";
import Summary from "../summary/Summary";
import "./card.css";

function Card() {
  return (
    <div className="card-container">
      <Result />
      <Summary />
    </div>
  );
}

export default Card;
