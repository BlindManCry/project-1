import "./result.css";

function Result() {
  return (
    <div className="result">
      <p className="result-header">Your Result</p>
      <div className="result-score">
        <h1>76</h1>
        <p>of 100</p>
      </div>

      <div className="result-succeed">
        <h2>Great</h2>
        <p>
          Your performance exceed 65% of the people conducting the test here!
        </p>
      </div>
    </div>
  );
}

export default Result;
