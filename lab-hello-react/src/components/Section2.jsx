import Icon1 from "../images/icon1.png";
import Icon2 from "../images/icon2.png";
import Icon3 from "../images/icon3.png";
import Icon4 from "../images/icon4.png";

function Section2() {
    return (
        <div className="Section2">
        <div>
          <img src={Icon1} alt="icon1" />
          <h2>Declarative</h2>
          <p>React makes it painless to create interactive UIs.</p>
        </div>
        <div>
          <img src={Icon2} alt="icon2" />
          <h2>Components</h2>
          <p>Build encapsulated components that manage their state.</p>
        </div>
        <div>
          <img src={Icon3} alt="icon3" />
          <h2>Single-Way</h2>
          <p>A set of immutable values are passed to the component's.</p>
        </div>
        <div>
          <img src={Icon4} alt="icon4" />
          <h2>JSX</h2>
          <p>Statically-typed, designed to run on modern browsers.</p>
        </div>
      </div>
    );
  }
  
  export default Section2;