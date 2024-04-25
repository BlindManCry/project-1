import SingleStat from "../singleStat/SingleStat";
import "./summary.css";
import summary from "../../../data.json";

function Summary() {
  return (
    <div className="summary">
      <h2 className="summary-text">Summary</h2>

      <div className="summary-stats">
        {summary.map((item, index) => {
          return (
            <SingleStat
              key={index}
              item={item}
              index={index}
              txtColors={["#FF5555", "#FFB21E", "#00BB8F", "#1125D6"]}
            />
          );
        })}
      </div>

      <button className="summary-btn">Continue</button>
    </div>
  );
}

export default Summary;
