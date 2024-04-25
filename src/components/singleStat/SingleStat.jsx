import "./singleStat.css";

function SingleStat({ item, txtColors, index }) {
  return (
    <div className="single-stat">
      <div className="stat-left">
        <img src={item.icon} alt="icon" />
        <span style={{ color: txtColors[index] }}>{item.category}</span>
      </div>

      <p className="stat-right">
        {item.score} <span>/ 100</span>
      </p>
    </div>
  );
}

export default SingleStat;
