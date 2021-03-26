import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <h2>About Task Tracker</h2>
      <p>
        Task tracker is productivity mini application that enables you to keep
        track task that are most important to you
      </p>
      <Link to="/">Back to home page</Link>
    </div>
  );
};

export default About;
